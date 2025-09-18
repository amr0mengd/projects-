<template>
  <section>
    <teleport to="body">
      <TheHeader />
      <!-- <the-header></the-header> -->
    </teleport>

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

    <!-- used scoped slots to pass a slot with it's own data(props) which are values in the custom object (slotProps) -->
    <course-goals #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps["another-prop"] }}</p>
    </course-goals>
  </section>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";

export default {
  components: {
    // 'the-header': TheHeader
    // TheHeader: TheHeader
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
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
  background-color: #cccccca8;
  margin: 0;
}
</style>
