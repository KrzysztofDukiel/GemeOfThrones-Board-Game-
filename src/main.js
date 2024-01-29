import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index"
import { createStore } from 'vuex'

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
