import axios from '~/plugins/axios'
// import axios from 'axios'
// require('dotenv').config()

export const state = () => ({
  posts: [],
  photos: [],
  // todos: [],
})

export const getters = {
  listAlbums(state) {
    return state.posts
  },
}
export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const { data } = await axios.get('photos')
    commit('setPosts', data)
    // const { datax } = await axios.get('todos')
    // commit('setTodos', datax)
    // console.log('INI DATAX ' + data)
  },
}
