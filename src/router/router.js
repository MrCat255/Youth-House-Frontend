import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// import store from "@/store";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// router.beforeEach((to, from, next) => {
//     if (!store.state.authorized && (to.path.includes("profile") || to.path.includes("continue-reading"))) {
//         next({ name: 'home' });
//     }
//     else {
//         next();
//     }
// })

export default router
