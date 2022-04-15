// import axios from '~/plugins/axios'
// import axios from 'axios'
// require('dotenv').config()

export const state = () => ({
  todos: [],
})

export const getters = {
  listTodos(state) {
    return state.todos
  },
  // listTodos: (state) => state.todos,
}

export const mutations = {
  setTodos(state, todo) {
    state.todos = todo
  },
}

export const actions = {
  // async fetchTodo({ commit }) {
  //   const res = await axios({
  //     method: 'get',
  //     url: 'https://jsonplaceholder.typicode.com/' + 'todos',
  //     headers: {
  //       Accept: 'application/json, text/plain, */*',
  //       'Accept-Language': 'en-US,en;q=0.9',
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //   commit('setTodos', res.data)
  //   console.log('INI TODOS ' + res.data)
  // },
}
