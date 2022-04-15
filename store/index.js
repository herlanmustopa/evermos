import axios from '~/plugins/axios'
// import axios from 'axios'
// require('dotenv').config()

export const state = () => ({
  posts: [],
  // photos: [],
  // todos: [],
})

export const getters = {
  listAlbums(state) {
    return state.posts
  },
}
export const mutations = {
  setPosts(state, post) {
    state.posts = post
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const { data } = await axios.get('users')
    commit('setPosts', data)
  },
  // async getProfile({ commit }) {
  //   const profile = await this.$axios.$get(
  //     'https://jsonplaceholder.typicode.com/photos'
  //   )
  //   commit('setPosts', profile)
  //   // console.log('INI POSY ' + JSON.stringify(profile))
  //   // Also app context is available using `this.app`
  // },
}
