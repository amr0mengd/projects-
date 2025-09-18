<template>
  <!-- this component uses scoped slots to pass data as props from this to the Markup in the parent App -->
  <!-- so basically it's passing data for itself to be used as a component in the App with it's own self data -->
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" another-prop=""></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Finish the course", "Learn Vue"],
    };
  },
};
</script>
