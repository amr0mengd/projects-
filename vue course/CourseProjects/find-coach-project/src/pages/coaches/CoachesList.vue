<template>
  <div>
    <section>FILTER</section>
    <section>
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/register">Register as Coach</router-link>
      </div>
      <ul v-if="hasCoaches">
        <li v-for="coach in coaches" :key="coach.id">
          {{ coach.firstName }}
        </li>
      </ul>
      <h3 v-else>No Coaches Found Yet.</h3>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    coaches() {
      return this.$store.getters["coaches/coaches"];
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
};
</script>
