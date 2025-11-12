<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out Now!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach
        ? this.selectedCoach.firstName + " " + this.selectedCoach.lastName
        : "";
    },
    contactLink() {
      return this.$route.path + "/contact";
    },
    areas() {
      return this.selectedCoach ? this.selectedCoach.areas : [];
    },
    rate() {
      return this.selectedCoach ? this.selectedCoach.hourlyRate : 0;
    },
    description() {
      return this.selectedCoach ? this.selectedCoach.description : "";
    },
  },
  async created() {
    // Only fetch if coaches aren't loaded or if we should update
    if (this.$store.getters["coaches/shouldUpdate"]) {
      await this.$store.dispatch("coaches/loadCoaches");
    }
    this.selectedCoach = this.$store.getters["coaches/coaches"].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>
