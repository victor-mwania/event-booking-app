<template>
  <div class="container ">
    <div id="events" v-for="event in events" :key="event.id">
      <div id="event">
        <span id="name">
          <h4 style="color: rgb(143, 63, 209);">{{ event.title }}</h4>
        </span>
        <span id="decription">
          <p>
            <span style="color: rgb(143, 63, 209); font-weight: bold;">Description:</span> {{ event.description }} </p>
        </span>
        <span id="location">
          <p>
            <span style="color: rgb(143, 63, 209); font-weight: bold;">Location:</span> {{ event.location }}</p>
        </span>
        <span id="date">
          <p>
            <span style="color: rgb(143, 63, 209);  font-weight: bold;">Date:</span> {{ event.date }}<span
              style="color: rgb(143, 63, 209);  font-weight: bold;">  Time</span> {{ event.time }}</p>
        </span>
        <hr>
        <div id="rsvp">
          <div id="price">
            <p>Price:<span style="color: rgb(143, 63, 209);"> {{ event.price }}</span></p>
          </div>
          <div id="submit"><button>Book Now</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      events: [
        {
          id: 2,
          title: 'Event Title',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae alias minima animi? Doloreconsequuntur incidunt voluptatem eveniet temporibus ullam, minus repellendus, possimus rerum earum animi exvoluptates corrupti voluptatum ut?',
          location: 'Nairobi',
          date: '12-121-232',
          time: '12:00',
          price: 'Free'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}

#events {
  margin-top: 20px;
}

hr {
  border: 1px solid rgb(143, 63, 209);
}

#event {
  border: 2px solid rgb(143, 63, 209);
  border-radius: 20px;
}

#name h4 {
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

#decription p,
#location p,
#date p {
  font-family:"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  padding: 0px 20px 0px 20px;
}

#rsvp {
  display: grid;
  grid-template-columns: 50% 50%;
}

#rsvp #price {
  text-align: center;
}

button {
  background-color: rgb(143, 63, 209);
  border-radius: 50px;
  border-width: 0;
  box-shadow: rgba(0, 12, 32, .04) 0 0 1px 0, rgba(10, 31, 68, .1) 0 3px 4px 0;
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
