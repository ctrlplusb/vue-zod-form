import "@picocss/pico/css/pico.css";

import { createApp } from "vue";

import Root from "./root.vue";
import { router } from "./router";

createApp(Root).use(router).mount("#app");
