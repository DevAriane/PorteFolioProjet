import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import HomeView from "@/HomeView.vue";
import Index from "@/presentation/view/contact/index.vue";

const routes = [
    {
        path:'/', component: HomeView
    },
    {
        path:'/contact/index', component:Index
    }
];

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
});