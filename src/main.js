import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router";
import drag from "./common/drag"

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
