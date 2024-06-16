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
       housePowerTokens: 0,
       attackerCard: "",
       defenderCard: "",
       attacerStrength: 0,
       defenderStrength: 0
        
      }
    },
    mutations: {
      chooseHouse(state, payload: string): void {
        
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
      addUnit(state, units):void {
        state.houseUnits.push( units)
      },
      addOrder(state, order):void {
        state.houseOrders.push( order)
      },
      commandersStatus(state, payload): void {
        state.houseCommanders.array.forEach(element => {
          if(element.commander == payload) return element.used = true
        });
      },
      incrementPowerTokens(state):void {
        state.housePowerTokens++
        for(let housePT of state.powerTokens) {
          if(housePT.houseName == state.house) {
            housePT.numberOfPowerTokens = state.housePowerTokens

          }
        }
      },
      decrementPowerTokens(state):void {
        state.housePowerTokens--
        for(let housePT of state.powerTokens) {
          if(housePT.houseName == state.house) {
            housePT.numberOfPowerTokens = state.housePowerTokens
           
          }
        }
      },
      ordersBoxPosition(state, postion):void {
        state.ordersBox = postion
        
      }

    },
    getters: {
      
    },
    actions: {
      updateHouse({ commit }, house):void{
        commit('setHouse', house); 
      }
    }
  })
  export default store