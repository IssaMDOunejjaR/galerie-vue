import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import ListBreeds from "../views/ListBreeds.vue";
import BreedDetails from "../views/BreedDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/breeds",
    name: "list-breeds",
    component: ListBreeds,
  },
  {
    path: "/breeds/:id",
    name: "breed-details",
    component: BreedDetails,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
