import {createWebHistory, createRouter} from "vue-router";
// App Pages
import Home from '../Pages/Home.vue'
import Destination from '../Pages/Destination.vue'
import Crew from '../Pages/Crew.vue'
import Technologies from '../Pages/Technologies.vue'


export const routes = [
    { path: '/space-travel', component: Home },
    { path: '/space-travel/destination', component: Destination },
    { path: '/space-travel/crew', component: Crew },
    { path: '/space-travel/technologies', component: Technologies },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
