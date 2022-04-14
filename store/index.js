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
  listTodos(state) {
    return state.todos
  },
}
export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  },
  setPhotos(state, pict) {
    state.photos = pict
  },
  setTodos(state, todo) {
    state.todos = todo
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
  async fetchTodo({ commit }) {
    const res = await axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/' + 'todos',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Content-Type': 'application/json',
      },
    })
    commit('setTodos', res.data)
    console.log('INI TODOS ' + res.data)
  },
}
