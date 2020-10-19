import Vue from "vue";
import App from "./App.vue";

import "@/assets/less/style.less";
import animated from "animate.css";
Vue.use(animated);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
