<template>
  <div>
    <the-header title="RememberMe"></the-header>
    <TheResources/>
  </div>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheResources from "./components/learning-resources/TheResources.vue";

export default {
  components: { TheHeader, TheResources },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");
* {
  box-sizing: border-box;
}
html {
  font-family: "Roboto", sans-serif;
}
body {
  margin: 0;
}
</style>
