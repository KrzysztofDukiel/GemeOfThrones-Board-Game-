import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index"
import { createStore } from 'vuex'
import { io } from "socket.io-client";

const socket = io("https://localhost:3000", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});
const store = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })
const app = createApp(App)
app.use(store)
app.use(router)

app.mount('#app')
