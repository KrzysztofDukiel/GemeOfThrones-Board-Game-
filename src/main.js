import { computed, createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index"
import { createStore } from 'vuex'
import { CommanderDefinitions } from './configuration/CommanderDefinitions'
import { OrderDefinitons } from './configuration/OrderDefinitions'
import { UnitDefinitions } from './configuration/UnitDefinitions'


const store = createStore({
    state () {
      return {
       house: "",
       units: UnitDefinitions.value,
       orders: OrderDefinitons.value,
       commanders: [],
      allComanders: CommanderDefinitions.value,

       
      }
    },
    mutations: {
      chooseHouse(houseName) {
        
        this.house = houseName
      },
      addUnit(unitInfo) {
        this.unit.push(unitInfo)
      },
      addOrder(orderInfo) {
        this.orders.push(orderInfo)
      },
      commandersStatus(commanderName) {
        this.commanders.array.forEach(element => {
          if(element.commander == commanderName) return element.used = true
        });
      }
    },
    getters: {
      changeGenerals(state) {
        this.commanders = []
        for(let com in this.allComanders) {
          if(this.allComanders[com].houseName == state.house) {
            this.commanders.push(this.allComanders[com])
          }
        }
        
      }
    }
  })
const app = createApp(App)
app.use(store)
app.use(router)

app.mount('#app')
