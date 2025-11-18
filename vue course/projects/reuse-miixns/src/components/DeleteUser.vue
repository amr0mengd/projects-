<template>
  <user-alert v-if="alertIsVisible" @close="hideAlert" title="Delete a User?"
    ><p>Do You Want to continue with deleting a user?</p></user-alert
  >
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from "./UserAlert.vue";
import alerting from "../mixins/alert";

export default {
  components: { UserAlert },
  mixins: [alerting],
};
</script>
