import Vue from "vue";
import { MdIcon } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import App from "./App.vue";
import router from "./router";

Vue.use(MdIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
