import { createRouter, createWebHistory } from "vue-router";

import ShopAdmin from "./pages/ShopAdmin.vue";
import UserCart from "./pages/UserCart.vue";
import ProductsList from "./pages/ProductsList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/products" },
    { path: "/products", component: ProductsList },
    { path: "/cart", component: UserCart },
    { path: "/admin", component: ShopAdmin },
  ],
});

export default router;
