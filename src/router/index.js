import {createWebHistory, createRouter} from "vue-router";
import Main from "@/views/Main.vue";
import Contacts from "@/views/Contacts.vue";

const routes = [
    {
        path: "/",
        name: "Main",
        component: Main,
        meta: {layout: "public"}
    },
    {
        path: "/contacts",
        name: "Contacts",
        component: Contacts,
        meta: {layout: "public"}
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;