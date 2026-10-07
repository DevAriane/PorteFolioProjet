import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import HomeView from "@/HomeView.vue";
import Index from "@/presentation/view/contact/index.vue";
import BlogSection from "@/presentation/view/bloc/BlogSection.vue";

const routes = [
    {
        path:'/', component: HomeView
    },
    {
        path:'/contact/index', component:Index
    },
        {
        path:'/blog/section', component:BlogSection
    }
];

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
});