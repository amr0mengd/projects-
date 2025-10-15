import { createRouter, createWebHistory } from "vue-router";

import TeamsList from "./pages/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./pages/NotFound.vue";
import TeamsFooter from "./pages/TeamsFooter.vue";
import UsersFooter from "./pages/UsersFooter.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/teams" },
    //alias works like redirect but it doesn't change the URL
    {
      name: "teams",
      path: "/teams",
      components: { default: TeamsList, footer: TeamsFooter } /*alias: '/'*/,
      children: [
        {
          name: "team-members",
          path: ":teamId",
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      name: "users",
      path: "/users",
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log("users beforeEnter");
        console.log(to, from);
        next();
      },
    },
    //you must declare props to be true to be able to use the dynamic path (param) as a prop
    // { path: "/teams/:teamId", component: TeamMembers, props: true },
    // this path formula can be used to catch all the not found paths and then loads the error component
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  console.log(to, from);
  //this will always run t2 if the selected route isn't a team-members
  // if (to.name === "team-members") {
  //   next();
  // } else {
  //   next({ name: "team-members", params: { teamId: "t2" } });
  // }

  next();
});

//leave Guard
router.afterEach(function (to, from) {
  // sending analytics data
  console.log("Global afterEach");
  console.log(to, from);
});

export default router;
