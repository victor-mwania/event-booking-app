import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const api = 'https://syncapi.herokuapp.com/sync/'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      token: localStorage.jwt,
      userId: localStorage.user,
      username: null,
      myEvents: []
    },
  },
  getters: {
    user : state => state.user,
    get_events: state => state.user.myEvents
  },
  mutations: {
    user_login: (state, user) => {
      localStorage.setItem('user', user.id);
      localStorage.setItem('jwt', user.token);
      state.user.username = user.userName
    },
    user_set: (state, user) => {
      localStorage.setItem('user', user._id);
      localStorage.setItem('jwt', user.token);
      state.user.username = user.userName
    },
    user_signup: (user) => {
      localStorage.setItem('user', user._id)
    },
    my_events: (state, user) => {
      state.user.myEvents =  user
    }
  },
  actions: {
    // get all eventa on the homepage
    async getEvents({
      commit
    }) {
      const response = await axios.get('dd')
      commit('Events', response.date)
    },
    //login user 
    async login({
      commit
    }, user) {
      const response = await axios.post(api +'user/login', user);
      commit('user_login', response.data)
    },
    //sign uo user
    async signup({
      commit
    }, user) {
      const response = await axios.post(api +'user/signup', user);
      console.log(response.data)
      commit('user_signup', response.data)
    },
    async getUser({ commit}) {
      const response = await axios.get(api + 'user/' + localStorage.user)
      commit('user_set', response.data)
    },
    //get individual events 
    async myEvents({
      commit
    }) {
      const response = await axios.get(api + "myEvents/"+ localStorage.getItem("user"))
      commit('my_events', response.data)
    }
  }
})