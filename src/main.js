import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index"
// import draggable from "vuedraggable"
const app = createApp(App)

app.use(router)
// app.use(draggable)
app.mount('#app')
