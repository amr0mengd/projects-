<template>
  <div>
    <base-container title="Vuex" v-if="isAuth">
      <the-counter></the-counter>
      <favorite-value></favorite-value>
      <button @click="addOne">Add 10</button><br />
      <change-counter></change-counter>
    </base-container>
    <base-container>
      <button @click="setAuth">toggle</button>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import FavoriteValue from "./components/FavoriteValue.vue";
export default {
  components: { BaseContainer, TheCounter, ChangeCounter, FavoriteValue },
  computed: {
    isAuth() {
      return this.$store.getters.userAuthenticated;
    },
  },
  methods: {
    addOne() {
      // this.$store.dispatch("increase", { value: 10 });
      this.$store.dispatch({
        type: "increase",
        value: 10,
      });
    },
    setAuth() {
      this.$store.commit("setAuth");
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
