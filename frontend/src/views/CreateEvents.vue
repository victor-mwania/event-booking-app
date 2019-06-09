<template>
  <div class="container">
    <div id="create">
      <h2>
        Create an event in
        <span style="color: rgb(143, 63, 209);">Sync</span>
      </h2>
      <form @submit.prevent="submit">
        <div id="event-name">
          <label for="event-name">
            name: </label>
          <input type="text" name="event-name" v-model="event.name">
        </div>
        <div id="description">
          <label for="description">
            description: </label>
          <input name="description" placeholder="Enter description of event"
            v-model="event.description">
        </div>
        <div id="location">
          <label for="location">
            location: </label>
          <input type="text" name="location" v-model="event.location">
        </div>
        <div id="date">
          <label for="date">
            location: </label>
          <input type="date" name="date" v-model="event.date">
        </div>
        <div id="creator">
          <label for="creator">
            creator: </label>
          <input type="text" name="creator" required v-model="event.creator">
        </div>
        <div id="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const api = 'https://syncapi.herokuapp.com/sync/'
export default {
  data() {
    return {
      event: {
        name: null,
        description: null,
        location: null,
        date: null,
        pice: null,
        creator: null
      }
    };
  },
  methods: {
    submit() {
      axios
        .post(api + "addEvents", this.event)
        .then(response => console.log(response))
        this.$router.push('/')
    }
  }
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}

#create {
  padding: 5px;
}
input,
textarea {
  padding: 15px;
  border: 1px solid rgb(143, 63, 209);
  border-radius: 5px;
  margin-bottom: 10px;
  outline: none;
  font-size: 20px;
}
label {
  font-size: 20px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
    padding: 4px;
    margin-right: 30px;
}
button {
  background-color: rgb(143, 63, 209);
  border-radius: 50px;
  border-width: 0;
  box-shadow: rgba(0, 12, 32, 0.04) 0 0 1px 0, rgba(10, 31, 68, 0.1) 0 3px 4px 0;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: inline-block;
  font-size: 1em;
  height: 50px;
  line-height: 50px;
  padding: 0 25px;
  outline: none;
  margin-bottom: 4px;
}
</style>
