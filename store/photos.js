import axios from '~/plugins/axios'
// import axios from 'axios'
// require('dotenv').config()

export const state = () => ({
  photos: [],
})

export const getters = {
  listAlmbums(state) {
    return state.photos
  },
}

export const mutations = {
  setPhotos(state, photos) {
    state.photos = photos
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const { data } = await axios.get('photos')
    commit('setPhotos', data)
  },
  async fetchIkk({ commit }) {
    const res = await axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/' + 'photos',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Content-Type': 'application/json',
      },
    })
    commit('setPhotos', res.data)
  },
}
