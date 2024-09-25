import { createRouter, createWebHistory } from 'vue-router';
import IndexView from '../views/IndexView.vue';
import LoginView from '../views/LoginView.vue';
import CadastroUserView from '../views/CadastroUserView.vue';

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
        component: LoginView,
    },
    {
        path: '/cadastro',
        name: 'create',
        component: CadastroUserView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
