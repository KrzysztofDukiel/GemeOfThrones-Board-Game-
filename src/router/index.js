import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Games from "../views/Games.vue"
import YourGames from "../views/Your-games.vue"
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/games",
    name: 'Games',
    component: Games
  }
  ,
  {
    path: "/your-games",
    name: 'Your-Games',
    component: YourGames
  }
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router