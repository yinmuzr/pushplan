import Vue from "vue";
import App from "./App.vue";
import router from "./routers/router";
import store from "./store";
import "babel-polyfill";
import promise from "es6-promise";
import VueJsonp from "vue-jsonp";
promise.polyfill();
Vue.config.debug = true;
import {
  Row,
  Col,
  Icon,
  Collapse,
  CollapseItem,
  PullRefresh,
  Cell,
  CellGroup,
  Toast,
  List
} from "vant";

Vue.config.productionTip = false;
Vue.use(VueJsonp);

Vue.use(Row)
  .use(Col)
  .use(Icon)
  .use(Collapse)
  .use(CollapseItem)
  .use(PullRefresh)
  .use(Cell)
  .use(CellGroup)
  .use(Toast)
  .use(List);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
