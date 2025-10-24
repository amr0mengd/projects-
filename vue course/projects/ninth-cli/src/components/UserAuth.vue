<template>
  <button @click="logIn" v-if="!isAuth">Log in</button>
  <button @click="logOut" v-if="isAuth">Log out</button>
  <p>{{ isTestAuth  }}</p>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default{
  methods: {
    ...mapActions(['logIn', 'logOut'])
  },
  computed: {
    ...mapGetters({
      isAuth: 'userAuthenticated',
      isTestAuth: 'testAuth'
    })
  }
}
</script>