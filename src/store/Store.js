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
       orders: OrderDefinitons,
       allComanders: CommanderDefinitions,
       commanders: [],
       tracks: [],
       powerTokens: PowerTokensDefinitions,
       housePowerTokens: 0

      }
    },
    mutations: {
      chooseHouse(state, payload) {
        
        if(state.house !== payload) {
          state.house = payload
          state.commanders = []
          for(let com of state.allComanders) {
            if(com.houseName == payload) {
              state.commanders.push(com)
            }
          }
          for(let power of state.powerTokens) {
            if(power.houseName === payload) {
              state.housePowerTokens = power.numberOfPowerTokens
            }
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