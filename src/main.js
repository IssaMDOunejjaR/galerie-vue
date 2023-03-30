import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./style.css";

import BreedCard from "./components/BreedCard.vue";

Vue.config.productionTip = false;

Vue.component("breed-card", BreedCard);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
