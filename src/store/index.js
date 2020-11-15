import { createStore } from 'vuex'

export default createStore({
  state: {
    colors: [
      {name: 'red', hex: '#e55039' },
      {name: 'blue', hex: '#4a69bd' },
      {name: 'yellow', hex: '#fbc531' },
      {name: 'green', hex: '#78e08f' },
      {name: 'black', hex: '#2f3640' },
    ],
    activeColor: '#2f3640',

    brushSizes: [
      {name: 'xSmall', size: 15 },
      {name: 'small', size: 20 },
      {name: 'medium', size: 25 },
      {name: 'large', size: 30 },
      {name: 'xLarge', size: 40 },
    ],

    activeBrushSize: 20
  },

  mutations: {
    setActiveColor(state, color) {
      state.activeColor = color
    },

    setActiveBrushSize(state, brushSize) {
      state.activeBrushSize = brushSize
    }
  },

  actions: {
    setActiveColor({commit}, color) {
      commit('setActiveColor', color)
    },

    setActiveBrushSize({commit}, brushSize) {
      commit('setActiveBrushSize', brushSize)
    },
  },

  getters: {
    activeColor(state) {
      return state.activeColor
    },

    activeBrushSize(state) {
      return state.activeBrushSize
    }
  },
})
