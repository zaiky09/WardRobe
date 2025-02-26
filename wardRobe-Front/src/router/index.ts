import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Wardrobe from '../views/WardRobe.vue';
import Login from '../components/Auth/Login.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/wardrobe', component: Wardrobe },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
