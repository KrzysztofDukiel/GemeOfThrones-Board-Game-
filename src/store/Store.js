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

       
      }
    },
    mutations: {
      chooseHouse(state, payload) {
    
        state.house = payload
        state.comanders = []
      
        for(let com in state.allComanders) {
          
          if(state.allComanders[com].houseName == payload) {
            state.comanders.push(state.allComanders[com])
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