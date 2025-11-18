import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    reset(state) {
      state.counter = 0;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
    reset(context) {
      context.commit("reset");
    },
  },
  getters: {
    counter(state) {
      return state.counter;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
