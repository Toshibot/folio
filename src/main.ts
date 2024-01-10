import { createTransformContext } from "@vue/compiler-core";
import { createApp } from "vue";
import { createStore } from "vuex";
import  axios  from "axios";
import App from "./Folio.vue";

import "./assets/main.css";
import "./assets/scss/global.scss";

const app = createApp(App);
app.mount("#app");


