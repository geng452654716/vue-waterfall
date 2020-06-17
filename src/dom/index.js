import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import Details from './Details.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    }
  ]
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
