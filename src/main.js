import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import './styles/index.scss' // global css

Vue.config.productionTip = false
Vue.use(iView);

var vm= new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
