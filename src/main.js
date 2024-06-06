import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index"
import { createStore } from 'vuex'
import { io } from "socket.io-client";
import { CommanderDefinitions } from './configuration/CommanderDefinitions'


const store = createStore({
    state () {
      return {
       house: "",
       units: [],
       orders: [],
       commanders: [],

       
      }
    },
    mutations: {
      chooseHouse(house) {
        this.commanders = []
        this.house = house
        for(let com in CommanderDefinitions) {
          if(CommanderDefinitions[com].houseName == house) {
            this.commanders.push(CommanderDefinitions.value[com])
          }
        }
      },
      addUnit(unitInfo) {
        this.unit.push(unitInfo)
      },
      addOrder(orderInfo) {
        this.orders.push(orderInfo)
      },
      commandersInfo() {
        
      }
    }
  })
const app = createApp(App)
app.use(store)
app.use(router)

app.mount('#app')
