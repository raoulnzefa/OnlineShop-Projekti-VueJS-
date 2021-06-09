import Home from '@/components/Home.vue';
import Header from '@/components/Header.vue';
import About from '@/components/About.vue';
import Footer from '@/components/Footer.vue';
import AddUser from '@/components/users/AddUser.vue'
import UsersList from '@/components/users/UsersList.vue'
import ShowUsers from '@/components/users/ShowUsers.vue'
import EditUser from '@/components/users/EditUser.vue'
import Login from '@/components/auth/Login.vue'
import Register from '@/components/auth/Register.vue'
// import AddProducts from '@/components/AddProducts.vue';
import Contact from '@/components/Contact.vue';
import Products from '@/components/Products.vue'
import AllProducts from '@/components/AllProducts.vue'


import VueRouter from 'vue-router';
import firebase from '@/Firebase.js';
import router from './index';



export default new VueRouter({
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/header', name: 'Header', component: Header },
        { path: '/about', name: 'About', component: About },
        { path: '/footer', name: 'Footer', component: Footer },
        {
            path: '/users-list',
            name: 'UsersList',
            component: UsersList,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/show-user/:id',
            name: 'ShowUsers',
            component: ShowUsers,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/edit-user/:id',
            name: 'EditUser',
            component: EditUser,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/add-user',
            name: 'AddUser',
            component: AddUser,
            meta: {
                requiresAuth: true
            }
        },
        { path: '/login', name: 'Login', component: Login },
        { path: '/register', name: 'Register', component: Register },
        // { path: '/add-products', name: 'Products', component: AddProducts },
        { path: '/contact', name: 'contact', component: Contact },
        {
            path: '/products',
            name: 'Products',
            component: Products,
            meta: {
                requiresAuth: true

            }
        },
        { path: '/AllProducts', name: 'AllProducts', component: AllProducts },
    ]
});

router.beforeEach(async(to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !await firebase.getCurrentUser()) {
        next('Login');
    } else {
        next();
    }
});