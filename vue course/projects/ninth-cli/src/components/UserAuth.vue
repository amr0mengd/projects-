<template>
  <button @click="logIn" v-if="!isAuth">Log in</button>
  <button @click="logOut" v-else>Log out</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default{
  methods: {
    ...mapActions(['logIn', 'logOut'])
  },
  computed: {
    ...mapGetters({
      isAuth: 'userAuthenticated'
    })
  }
}
</script>