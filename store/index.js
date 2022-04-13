import axios from '~/plugins/axios'
// import axios from 'axios'
// require('dotenv').config()

export const state = () => ({
  posts: [],
  photos: [],
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
  setPhotos(state, pict) {
    state.photos = pict
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const { data } = await axios.get('photos')
    commit('setPosts', data)
    const { datax } = await axios.get('todos')
    commit('setPhotos', datax)
  },
  // async fetchIkk({ commit }) {
  //   const res = await axios({
  //     method: 'get',
  //     url: 'https://jsonplaceholder.typicode.com/' + 'photos',
  //     headers: {
  //       Accept: 'application/json, text/plain, */*',
  //       'Accept-Language': 'en-US,en;q=0.9',
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //   commit('setPhotos', res.data)
  // },
}
