<template>
  <div>
    <h3>{{ finalCounter }}</h3>
    <p>We do more...</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('numbers',['finalCounter'])
  },
};
</script>
