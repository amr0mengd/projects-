<template>
  <li>
    <!-- <h2>{{ name }} {{ Favorite === "1" ? "(FAVORITE)" : "" }}</h2> -->
    <!-- <h2>{{ name }} {{ Favorite ? "(FAVORITE)" : "" }}</h2> -->
    <h2>{{ name }} {{ isFavorite ? "(FAVORITE)" : "" }}</h2>

    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ isVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="isVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ email }}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["id", "name", "phoneNumber", "email"],
  props: {
    // name: String
    // or:
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function(value){
      //   return value === '1' || value === '0'
      // },
    },
  },
  // emits: {
  //   'toggle-favorite': id => id
  //   "toggle-favorite": function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   },
  // },
  emits: ["toggle-favorite"],
  data() {
    return {
      // friend: {
      //   id: "manuel",
      //   name: "Manuel Lorenz",
      //   phone: "0123 45678 90",
      //   email: "manuel@localhost.com",
      // },
      // Favorite: this.isFavorite,
      isVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.isVisible = !this.isVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
  // toggleFavorite() {
  //   if (this.Favorite === "1") {
  //     this.Favorite = "0";
  //   } else {
  //     this.Favorite = "1";
  //   }
  // },
  // },
};
</script>

<style></style>
