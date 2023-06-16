import "./assets/main.css";
import "./styles.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import Products from "./components/Products.vue";
import Cart from "./components/Cart.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Products },
        { path: "/cart", component: Cart },
    ],
});
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
