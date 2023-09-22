import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomeContent.vue';
import AboutUs from './components/AboutUs.vue';
import ContactUs from './components/ContactUs.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutUs },
  { path: '/contact', component: ContactUs },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;