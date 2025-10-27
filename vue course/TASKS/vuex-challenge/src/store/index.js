import { createStore } from "vuex";
import cartModule from "./modules/cartModule";
import productsModule from "./modules/productsModule";

const store = createStore({
  modules: {
    cart: cartModule,
    products: productsModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    login(context) {
      console.log(context);
      context.commit("setAuth", { isAuth: true });
    },
    logout(context) {
      context.commit("setAuth", { isAuth: false });
    },
  },
  getters: {
    userAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
