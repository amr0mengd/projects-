<template>
  <div>
    <base-dialog
      v-if="inputIsInvalid"
      title="Invalid Input"
      @close="confirmError"
    >
      <template #default>
        <p>Unfortunately, at least one input value is invalid.</p>
        <p>
          Please check all inputs and make sure you enter at least a few
          characters into each input field.
        </p>
      </template>
      <template #actions>
        <base-button @click="confirmError">Okay</base-button>
      </template>
    </base-dialog>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          ref="descriptionInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="linkInput" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </div>
</template>

<script>
import BaseDialog from "../UI/BaseDialog.vue";
export default {
  components: { BaseDialog },
  data() {
    return { inputIsInvalid: false };
  },
  inject: ["addResource"],
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descriptionInput.value;
      const enteredLink = this.$refs.linkInput.value;
      if (
        enteredTitle.trim() === "" ||
        enteredDescription.trim() === "" ||
        enteredLink.trim() === ""
      ) {
        this.inputIsInvalid = true;
        // return breaks the function remember that
        return;
      }
      this.addResource(enteredTitle, enteredDescription, enteredLink);
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style scoped>
form {
  width: 60rem;
  margin: auto;
}
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem auto;
}
</style>
