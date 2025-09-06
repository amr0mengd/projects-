<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">
      {{ isVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="isVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "email"],
  props:{
    name: {
      type: String,
      required: true, 
    },
    phoneNumber:{
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
      isVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style></style>
