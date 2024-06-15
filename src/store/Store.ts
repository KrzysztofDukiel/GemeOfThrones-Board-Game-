import { createStore } from 'vuex'
import { CommanderDefinitions } from '../configuration/CommanderDefinitions'
import { OrderDefinitons } from '../configuration/OrderDefinitions'
import { UnitDefinitions } from '../configuration/UnitDefinitions'
import { PowerTokensDefinitions } from '../configuration/PowerTokensDefinitions'

 const store = createStore({
    state () {
      return {
       house: "Choose house",
       units: UnitDefinitions,
       houseUnits: [],
       orders: OrderDefinitons,
       ordersBox: [],
       houseOrders: [],
       allComanders: CommanderDefinitions,
       houseCommanders: [],
       tracks: [],
       powerTokens: PowerTokensDefinitions,
       housePowerTokens: 0

      }
    },
    mutations: {
      chooseHouse(state, payload) {
        
        if(state.house !== payload) {
          state.house = payload
          state.houseCommanders = []
          for(let com of state.allComanders) {
            if(com.houseName == payload) {
              state.houseCommanders.push(com)
            }
          }
          for(let power of state.powerTokens) {
            if(power.houseName === payload) {
              state.housePowerTokens = power.numberOfPowerTokens
            }
          }
          for(let order of state.orders) {
            if(order.houseName == payload) {
              state.houseOrders.push(order)
            }
          }
          
        }
      },
      addUnit(state, payload) {
        state.houseUnits.push( payload)
      },
      addOrder(state, payload) {
        state.houseOrders.push( payload)
      },
      commandersStatus(state, payload) {
        state.houseCommanders.array.forEach(element => {
          if(element.commander == payload) return element.used = true
        });
      },
      incrementPowerTokens(state) {
        state.housePowerTokens++
        for(let housePT of state.powerTokens) {
          if(housePT.houseName == state.house) {
            housePT.numberOfPowerTokens = state.housePowerTokens

          }
        }
      },
      decrementPowerTokens(state) {
        state.housePowerTokens--
        for(let housePT of state.powerTokens) {
          if(housePT.houseName == state.house) {
            housePT.numberOfPowerTokens = state.housePowerTokens
           
          }
        }
      },
      ordersBoxPosition(state, postion) {
        state.ordersBox = postion
        
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