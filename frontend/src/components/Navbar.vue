<template>
  <div>
    <header>
      <nav>
        <div id="menu">
          <div id="name">
            <h4>
              <router-link to="/">Sync</router-link>
            </h4>
          </div>
          <div id="sub-menu">
            <div v-if="user.username == null">
              <div id="auth">
                <h4>
                  <router-link to="/login">Login</router-link>|
                  <router-link to="/sign-up">Sign Up</router-link>
                </h4>
              </div>
            </div>
            <div v-if="user.username" id="user">
              <div id="tickets">
                <h4>
                  <router-link to="/tickets">Bookings</router-link>
                </h4>
              </div>
              <div id="create">
                <h4>
                  <router-link to="create-events">Create</router-link>
                </h4>
              </div>
              <div id="logout">
                <h4 @click="logOut">Logout</h4>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(["user"])
  },
  created(){
    this.getUser()
  },
  methods: {
    ...mapActions(["getUser"]),
    logOut(){
      localStorage.clear("jwt")
      localStorage.clear("user")
      this.getUser()
    }
  }
};
</script>

<style scoped>
nav {
  background: rgb(143, 63, 209);
}

#menu {
  display: grid;
  grid-template-columns: 80% 20%;
}

#name {
  margin-left: 40px;
}
#name h4 {
  font-size: 25px;
  color: #eee;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  margin: 10px 0px 13px;
}

#sub-menu {
  color: #eee;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
#user {
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  grid-column-gap: 10px;
}

a {
  text-decoration: none;
  color: #eee;
}
</style>
