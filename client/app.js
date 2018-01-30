import Vue      from "vue";
import Axios    from "axios";

import App      from "./components/app";
import router   from "./services/router";

Vue.config.productionTip = true

// This is just a pre-caution since default $http is being depreciated. 
// It may prove more preferable to use Axios directly, rather than obfuscate it.
Vue.prototype.$http = Axios;

new Vue({
  el: "#app",
  router,
  render: h => h(App)
})