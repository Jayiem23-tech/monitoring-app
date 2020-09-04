import Vue from 'vue'
import VueRouter from 'vue-router' 
import App from './App.vue' 
import ImportForm from './Forms/ImportExcel';
import Monitoring from './Forms/Monitoring';
import Notification from './Forms/Notification';



Vue.use(VueRouter);
Vue.config.productionTip = false 
 
const router = new VueRouter({
  mode:'history',
  routes:[ 
    {path:'/',component:Monitoring}, 
    {path:'/Notification',component:Notification}, 
    {path:'/import',component:ImportForm}
  ]
}) 

new Vue({ 
  router,
  render: h => h(App),
}).$mount('#app')
