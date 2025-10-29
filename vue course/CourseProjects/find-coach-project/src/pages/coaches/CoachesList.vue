<template>
  <div>
    <section>FILTER</section>
    <section>
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/register">Register as Coach</router-link>
      </div>
      <ul v-for="coach in coaches" :key="coach.id">
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    coaches() {
      return this.$store.getters["coaches/coaches"];
    },
  },
};
</script>
