import { createStore } from 'vuex'
import { CommanderDefinitions } from '../configuration/CommanderDefinitions'
import { OrderDefinitons } from '../configuration/OrderDefinitions'
import { UnitDefinitions } from '../configuration/UnitDefinitions'

 const store = createStore({
    state () {
      return {
       house: "Choose house",
       units: UnitDefinitions,
       orders: OrderDefinitons,
       allComanders: CommanderDefinitions,
       comanders: [],
        uni: [],
       
      }
    },
    mutations: {
      chooseHouse(state, payload) {
    
        state.house = payload
        state.comanders = []
        state.uni = []
      
        for(let com of state.allComanders) {
          
          if(com.houseName == payload) {
            state.comanders.push(com)
          }
        }
        for(let unit of state.units) {
          if(unit.houseName == payload) {

            state.uni.push(unit)
          }
        }
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
      
    },
    actions: {
      updateHouse({ commit }, house) {
        commit('setHouse', house); 
      }
    }
  })
  export default store