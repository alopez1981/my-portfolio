import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Importamos el router
import "./assets/main.css"; // Importamos TailwindCSS

createApp(App).use(router).mount("#app");
