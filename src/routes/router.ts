import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import HomeView from "@/HomeView.vue";

const routes = [
    {
        path:'/', component: HomeView
    }
];

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
});