import { createRouter, createWebHistory } from 'vue-router';
import IndexView from '../views/IndexView.vue';
import LoginVue from '../views/LoginVue.vue';

const routes = [
    {
        path: '/',
        redirect: '/index',
    },
    {
        path: '/index',
        name: 'index',
        component: IndexView,
    },
    {
        path: '/login',
        name: 'login',
        component: LoginVue,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
