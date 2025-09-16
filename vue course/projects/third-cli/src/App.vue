<template>
  <section>
    <TheHeader />
    <!-- <the-header></the-header> -->

    <BadgeList />
    <!-- <badge-list></badge-list> -->

    <UserInfo
      :full-name="activeUser.name"
      :role="activeUser.role"
      :info-text="activeUser.description"
    />
    <!-- <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info> -->
  </section>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";

export default {
  components: {
    // 'the-header': TheHeader
    // TheHeader: TheHeader
    TheHeader,
    BadgeList,
    UserInfo,
  },
  data() {
    return {
      activeUser: {
        name: "Amr Monged",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
