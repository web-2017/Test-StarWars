import { baseUrl } from "../api"
export default {
  state: {
    ships: [],
    errors: [],
  },
  getters: {
    getShips: (state) => state.ships,
    getErrors: (state) => state.errors,
  },
  mutations: {
    SET_RESPONSE(state, payload) {
      state.ships = payload
    },
    SET_ERRORS(state, payload) {
      state.errors = payload
    },
  },
  actions: {
    async fetchResponse({ commit }, url = "") {
      try {
        const response = await fetch(`${baseUrl}${url}`)
        const result = await response.json()
        console.log("Store", result)
        commit("SET_RESPONSE", await result)
      } catch (error) {
        commit("SET_ERRORS", await error)
      }
    },
    async fetchResponseSwitchPage({ commit }, url) {
      try {
        const response = await fetch(`${url}`)
        const result = await response.json()
        console.log("Store fetchResponseSwitchPage", result)
        commit("SET_RESPONSE", await result)
      } catch (error) {
        commit("SET_ERRORS", await error)
      }
    },
  },
}
