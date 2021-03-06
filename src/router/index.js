import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WalletSim from '../views/WalletSim.vue'
import CoinInfo from '../views/CoinInfo.vue'
import Prix from '../views/Prix.vue'
import Social from '../views/Social.vue'
import NotFound from '../views/NotFound.vue'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/walletsim',
      name: 'walletsim',
      component: WalletSim
    },
    {
      path: '/coins/:id',
      name: 'coininfo',
      component: CoinInfo,
      props: true
    },
    {
      path: '/prix',
      name: 'prix',
      component: Prix,
    },
    {
      path: '/social',
      name: 'social',
      component: Social,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFound,
    }
  ]
})

export default router
