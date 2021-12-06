import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Redirector from './pages/Redirector.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/:notFound(.*)', component: Redirector },
  ]
});

export default router;