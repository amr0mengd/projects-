<template>
  <h2>Add New Friend</h2>
  <form @submit.prevent="addContact">
    <div>
      <label>Name: </label>
      <input v-model="enteredName" type="text" />
    </div>
    <div>
      <label>Phone: </label>
      <input v-model="enteredPhone" type="tel" />
    </div>
    <div>
      <label>E-mail: </label>
      <input v-model="enteredEmail" type="email" />
    </div>
    <button>Add Contact</button>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    addContact() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
</script>
