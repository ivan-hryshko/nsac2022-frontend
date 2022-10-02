import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    helloState: 'hello',
    fullDatas: [],
    chosenData: [],
    chosenImage: '',
    targetRef: {},
    resultPhoto: {},
  },

  mutations: {
    saveFullData(state, payload) {
      state.fullDatas = payload
    },
    setChosenData(state, payload) {
      state.chosenData = payload
    },
    setChosenImage(state, payload) {
      state.chosenImage = payload
    },
    setTargetElement(state, payload) {
      state.targetRef = payload
      console.log('save photo');
    },
    setResultPhoto(state, payload) {
      console.log('payload :>> ', payload);
      state.resultPhoto = payload
      console.log('save photo');
    },
  },

  getters: {
    getChosenImage(state) {
      return state.chosenImage
    },
    getChosenData(state) {
      return state.chosenData
    },
    getTargetElement(state) {
      return state.targetRef
    },
    getResultPhoto(state) {
      return state.resultPhoto
    },

  }
})