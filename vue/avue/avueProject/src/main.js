// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import Avue from '@smallwei/avue';
import 'element-ui/lib/theme-chalk/index.css';
import '@smallwei/avue/lib/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(Avue);


// Vue.use(window.AVUE,{
//   size:'',
//   menuType:'',
//   qiniu:{},
//   ali:{},
//   theme:'',//dark黑色主题
//   canvas:{
// 	text: 'avuejs.com',
// 	fontFamily: 'microsoft yahei',
// 	color: "#999",
// 	fontSize: 16,
// 	opacity: 100,
// 	bottom: 10,
// 	right: 10,
// 	ratio: 1
//   }
// })



// Vue.use(Avue, { locale:'en' })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
