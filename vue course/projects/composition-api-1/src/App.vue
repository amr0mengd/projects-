<template>
  <div class="container">
    <user-data
      :first-name="firstName"
      :last-name="lastName"
    ></user-data>
    <button @click="setNewAge">Set New Age</button><br /><br />
    <input type="text" placeholder="firstName" v-model="firstName" />
    <input type="text" placeholder="lastName" ref="lastNameInput" />
    <button @click="setLastName">Set Name</button>
  </div>
</template>

<script>
import { computed, provide, ref, watch } from "vue";
import UserData from "./components/UserData.vue";
export default {
  components: { UserData },
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const lastNameInput = ref(null);
    const uAge = ref(20);
    // const user = reactive({
    //   name: 'Maximilian',
    //   age: 31,
    // });

    const uName = computed(function () {
      return firstName.value + " " + lastName.value;
    });

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }
    function setNewAge() {
      uAge.value = 21;
    }

    watch([uAge, uName], function (newValues, oldValues) {
      console.log("Old age: " + oldValues[0]);
      console.log("New age: " + newValues[0]);
      console.log("Old name: " + oldValues[1]);
      console.log("New name: " + newValues[1]);
    });

    provide("uAge", uAge);

    return {
      userName: uName,
      age: uAge,
      setLastName,
      setNewAge,
      lastNameInput,
      firstName,
      lastName,
    };
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
