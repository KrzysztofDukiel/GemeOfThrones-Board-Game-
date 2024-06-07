import { createStore } from 'vuex'
import { CommanderDefinitions } from '../configuration/CommanderDefinitions'
import { OrderDefinitons } from '../configuration/OrderDefinitions'
import { UnitDefinitions } from '../configuration/UnitDefinitions'

 const store = createStore({
    state () {
      return {
       house: "Choose house",
       units: UnitDefinitions.value,
       orders: OrderDefinitons.value,
       commanders: [],
       allComanders: CommanderDefinitions.value,

       
      }
    },
    mutations: {
      chooseHouse(state, payload) {
        console.log(payload, state)
        state.house = payload
      },
      addUnit(state, payload) {
        state.unit.push( payload)
      },
      addOrder(state, payload) {
        state.orders.push( payload)
      },
      commandersStatus(state, payload) {
        state.commanders.array.forEach(element => {
          if(element.commander == payload) return element.used = true
        });
      }
    },
    getters: {
      changeGenerals(state, payload) {
        state.commanders = []
        for(let com in state.allComanders) {
          if(state.allComanders[com].houseName == state.house) {
            state.commanders.push(state.allComanders[com])
          }
        }
        
      }
    }
  })
  export default store