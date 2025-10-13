import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./components/nav/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/teams" },
    //alias works like redirect but it doesn't change the URL
    { path: "/teams", component: TeamsList /*alias: '/'*/ },
    { path: "/users", component: UsersList },
    //you must declare props to be true to be able to use the dynamic path (param) as a prop
    { path: "/teams/:teamId", component: TeamMembers, props: true },
    // this path formula can be used to catch all the not found paths and then loads the error component
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
});
const app = createApp(App);

app.use(router);
app.mount("#app");
