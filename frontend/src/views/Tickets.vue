<template>
    <div class="container">
        <div id="events" v-for="booking in get_events" :key="booking._id" >
        <div id="event">
            <div id="header">
                <p> <span class="fontStyle">Name: </span> {{ booking.name }}</p>
                <p><span class="fontStyle">Location:</span> {{ booking.location }}</p>
                <p><span  class="fontStyle">On</span> {{ booking.date }}</p>
            </div>
            <div>
                <button @click="delEvent(booking._id)">Cancel
                </button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'

const api = 'https://syncapi.herokuapp.com/sync/'

export default {
    data() {
        return {
            bookings: []
        }
    },
    computed: {
        ...mapGetters(['get_events'])
    },
    created() {
        this.myEvents()
    },
    methods: {
        ...mapActions(['myEvents']),
        delEvent(event) {
            axios.post(api + "delEvent", {event: event, user: localStorage.getItem('user')}).then(this.myEvents())
        },
    }
}
</script>

<style scoped>
.container {
    width: 80%;
    margin: 0 auto;

}
.fontStyle {
    color: rgb(143, 63, 209);
}
#event {
  border: 2px solid rgb(143, 63, 209);
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px;
}
#header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
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
  height: 30px;
  line-height: 20px;
  padding: 0 15px;
  outline: none;
  margin-bottom: 4px;
}
@media only screen and (min-width: 700px) {
    #event {
        margin-left: 20%;
        margin-right:  20%;
    }
}
</style>

