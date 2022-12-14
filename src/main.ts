import { createApp } from "vue";
import App from "./App.vue";
import { Vue3Mq } from "vue3-mq";

import "./assets/main.css";

const app = createApp(App);

// Plugin to get device 
app.use(Vue3Mq, {
  preset: "devices",
});

app.mount("#app");
