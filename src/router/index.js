import { createRouter, createWebHistory } from 'vue-router';

// Importa le tue pagine (componenti)
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';

// Definisci le rotte
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
];

// Crea il router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;