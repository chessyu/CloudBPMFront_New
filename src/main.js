import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import ViewUI from 'view-design';
import Echart from 'echarts';
import FormSubunit from '@/types/components/configTemplate/form'


import 'element-ui/lib/theme-chalk/index.css';
import 'view-design/dist/styles/iview.css';
import './assets/css/index.less'

Vue.use(ViewUI);
Vue.use(ElementUI);
Vue.use(FormSubunit)

Vue.config.productionTip = false
Vue.prototype.$echarts = Echart;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
