import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Auth/Login.vue';
import Register from '../components/Auth/Register.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/', redirect: '/login' }, // Redirect to login by default
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
