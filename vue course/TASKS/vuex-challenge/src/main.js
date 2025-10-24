import { createApp } from "vue";

import router from "./router";
import App from "./App.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";

const app = createApp(App);

app.component("base-badge", BaseBadge);

app.use(router);
app.mount("#app");
