<template>
  <div>
    <header>
      <nav>
        <div id="menu">
          <div id="name">
            <h4> <router-link to="/"> Sync </router-link></h4>
          </div>
          <div id="sub-menu">
            <div v-if="auth == true">
              <div id="auth">
                <h4>
                  <router-link to="/login">Login</router-link>/ <router-link to="/sign-up"> Sign Up</router-link>
                </h4>
              </div>
            </div>
            <div v-else>
              <div id="tickets">
                <h4> <router-link to="/tickets">Tickets </router-link></h4>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: false,
    }
  }
}
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
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin: 10px 0px 13px;
}

#sub-menu {
  color: #eee;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

a {
  text-decoration: none;
  color: #eee;
}
</style>
