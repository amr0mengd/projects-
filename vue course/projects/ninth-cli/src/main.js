import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false,
    };
  },
  mutations: {
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
    increment(state) {
      state.counter = state.counter + 2;
    },
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    increment(context) {
      setTimeout(() => context.commit("increment"), 1000);
    },
    increase(context, payload) {
      console.log(context);
      context.commit("increase", payload);
    },
    logIn(context) {
      context.commit("setAuth", { isAuth: true });
    },
    logOut(context) {
      context.commit("setAuth", { isAuth: false });
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      } else if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
    userAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

const app = createApp(App);

app.use(store);
app.mount("#app");
