import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import InspectorTask from "@/views/inspection-task/Inspection";

Vue.use(Router);

const inspectionRoute = [
  {
    path: "/inspector",
    name: "inspection-task",
    component: InspectorTask
  }
];
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/inspector"
    },
    {
      path: "/",
      name: "home",
      component: Home,
      children: inspectionRoute
    }
  ]
});
