import axios from '~/plugins/axios'
// import axios from 'axios'
// require('dotenv').config()

export const state = () => ({
  posts: [],
  // photos: [],
})

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  },
  // setPhotos(state, photos) {
  //   state.photos = photos
  // },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const { data } = await axios.get('posts')
    commit('setPosts', data)
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
