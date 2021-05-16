import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'



import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { routes } from './routes'
import store from './store'


Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')