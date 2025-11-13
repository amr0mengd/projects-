<template>
  <div>
    <h2>My Course Goal</h2>
    <!-- Task 1: Output your main course goal with help of the composition API -->
    <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
    <h3 v-if="showStatus">{{ goal }}</h3>
    <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
    <button @click="toggle">Toggle Goal</button>
    <!-- Task 3: Manage data in three ways -->
    <!-- => Separate refs -->
    <!-- => Ref Object -->
    <!-- => Reactive Object -->
    <!-- Task 4: Also solve the assignment with the Options API -->
  </div>
</template>

<script>
// import { ref } from "vue";
// import { reactive } from "vue";

export default {
  data() {
    return {
      goal: "Learn How To use Vue Perfectly",
      showStatus: false,
    };
  },
  methods: {
    toggle() {
      this.showStatus = !this.showStatus;
    },
  },
  // setup() {
  //   // const goal = ref("Learn How To use Vue perfectly");
  //   // let showStatus = ref(true);
  //   //function toggle(){showStatus.value = !showStatus.value}

  //   // const goal = ref({
  //   //   goal: "Learn How to use Vue Perfectly",
  //   //   showStatus: false,
  //   // });
  //   // function toggle() {
  //   //   goal.value.showStatus = !goal.value.showStatus;
  //   // }

  //   // const goal = reactive({
  //   //   goal: "Learn How To use Vue Perfectly",
  //   //   showStatus: false,
  //   // });
  //   // function toggle() {
  //   //   goal.showStatus = !goal.showStatus;
  //   // }

  //   return {
  //     courseGoal: goal,
  //     toggle: toggle,
  //   };
  // },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
