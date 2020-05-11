import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes.js";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faOm, faPaperPlane, faUsers} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'

Vue.use(VueRouter);

library.add(faBars, faOm, faPaperPlane, faUsers);
dom.watch()

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
