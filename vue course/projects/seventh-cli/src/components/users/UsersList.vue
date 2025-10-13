<template>
  <!-- this button to show programmatic navigation -->
  <button @click="confirmPage">Confirm</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from "./UserItem.vue";
export default {
  components: { UserItem },
  inject: ["users"],
  methods: {
    confirmPage() {
      //do something
      this.$router.push("/teams");
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
