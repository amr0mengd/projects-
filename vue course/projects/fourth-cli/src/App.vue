<template>
  <div>
    <the-header></the-header>
    <button @click="selectedComponent('active-goals')">Active Goals</button>
    <button @click="selectedComponent('manage-goals')">Manage Goals</button>
    <keep-alive>
      <component :is="selectedComponents"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: { TheHeader, ActiveGoals, ManageGoals },
  data() {
    return {
      selectedComponents: "active-goals",
    };
  },
  methods: {
    selectedComponent(cmp) {
      this.selectedComponents = cmp;
    },
  },
};
</script>
