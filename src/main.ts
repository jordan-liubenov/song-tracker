import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store/store"

import "./assets/main.css"

const app = createApp(App)

app.use(router)

app.provide("store", store)
app.mount("#app")
