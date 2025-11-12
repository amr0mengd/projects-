import { createApp, defineAsyncComponent } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store/store.js";
// import BaseCard from "./components/ui/BaseCard.vue";
// import BaseBadge from "./components/ui/BaseBadge.vue";
// import BaseButton from "./components/ui/BaseButton.vue";
// import BaseSpinner from "./components/ui/BaseSpinner.vue";
// import BaseDialog from "./components/ui/BaseDialog.vue";

//this defineAsyncComponent defines or imports the component only when it's needed or in shorthand load the components on the browser asynchronously
const BaseCard = defineAsyncComponent(() =>
  import("./components/ui/BaseCard.vue")
);
const BaseBadge = defineAsyncComponent(() =>
  import("./components/ui/BaseBadge.vue")
);
const BaseButton = defineAsyncComponent(() =>
  import("./components/ui/BaseButton.vue")
);
const BaseSpinner = defineAsyncComponent(() =>
  import("./components/ui/BaseSpinner.vue")
);
const BaseDialog = defineAsyncComponent(() =>
  import("./components/ui/BaseDialog.vue")
);

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-card", BaseCard);
app.component("base-badge", BaseBadge);
app.component("base-button", BaseButton);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);

app.mount("#app");
