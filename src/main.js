import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Dialog from "vue-dialog-loading";
import vuetify from "./plugins/vuetify";

import CTextField from "./components/CTextField.vue";

import { longClickDirective } from "vue-long-click";

const longClickInstance = longClickDirective({ delay: 2000, interval: 0 });
Vue.directive("longclick", longClickInstance);

Vue.use(Dialog, { dialogBtnColor: "#0f0" });

Vue.config.productionTip = false;
Vue.component("CTextField", CTextField);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
