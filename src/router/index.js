import {createRouter, createWebHistory} from "vue-router";
import TrafficLights from "../views/TrafficLights";


const routes = [
    {
        path: '/yellow',
        name: "Yellow",
        component: TrafficLights,
    },
    {
        path: '/red',
        name: "Red",
        component: TrafficLights
    },
    {
        path: "/green",
        name: "Green",
        component: TrafficLights,
    },
    {
        path: "/",
        redirect: {name: 'Red', query: {timer:10}}
    },
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
);

export default router;
