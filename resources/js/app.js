
require('./bootstrap');

window.Vue = require('vue').default;

// Reload
window.Reload = new Vue();

// Import Vue Router
import VueRouter from "vue-router";
Vue.use(VueRouter);

// AUTHENTICATE USER CLASS IMPORT AREA
import User from './helpers/User';
window.User = User

// Import Routes
import {routes} from './routes/routes';


const router = new VueRouter({
    routes,
    mode: 'history'
});

const app = new Vue({
    el: '#app',
    router
});
