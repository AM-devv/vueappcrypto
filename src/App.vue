<template>
  <div class=" space text-dark h-100">
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="./assets/logovuecrpdark.png" width="250" alt="logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'home' }">Accueil</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'walletsim' }">WalletSim</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'prix' }">Prix actuel</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'social' }">Social</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'dashboard' }">Dashboard</router-link>
            </li>
            <tuto></tuto>
          </ul>
          
          <router-link class="nav-link" :to="{ name: 'walletsim' }">
            <div class="fs-5" v-if="wallet">
              {{ wallet.toLocaleString('fr') }} <strong class="moons">☾</strong> 
            </div>
            <div class="fs-5" v-else>
              0 <strong class="moons">☾</strong>
            </div>
          </router-link>
          
        </div>
      </div>
    </nav>
    
    <router-view></router-view>
    <footer-principal></footer-principal>
  </div>
</template>

<script>
import FooterPrincipal from "./components/FooterPrincipal.vue";
import Tuto from "./components/Tuto.vue";

export default {
  components: {
    FooterPrincipal, Tuto
  },

  data(){
    return{
      timecounter: 0,
      wallet : 0
    }
  },

  created(){
    this.timecounter = JSON.parse(localStorage.getItem('timer'));
    setInterval(this.timecounteraction,1000);
    this.wallet = JSON.parse(localStorage.getItem('wallet'));
    setInterval(this.walletupdate,1000);
  },

  methods:{
    timecounteraction(){
      this.timecounter++
      localStorage.setItem("timer", JSON.stringify(this.timecounter));
    },
    walletupdate(){
      this.wallet = JSON.parse(localStorage.getItem('wallet'));
    }
  }
}
</script>

<style scoped>
.space{
/* background-color: #0E6DF5;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2000' height='2000' viewBox='0 0 20 20'%3E%3Cg %3E%3Cpolygon fill='%231D1D1D' points='20 10 10 0 0 0 20 20'/%3E%3Cpolygon fill='%231D1D1D' points='0 10 0 20 10 20'/%3E%3C/g%3E%3C/svg%3E"); */

/* background-color: #000000;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23140227'/%3E%3Cstop offset='1' stop-color='%23140227' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23004586'/%3E%3Cstop offset='1' stop-color='%23004586' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230306aa'/%3E%3Cstop offset='1' stop-color='%230306aa' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23000000'/%3E%3Cstop offset='1' stop-color='%23000000' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2327034D'/%3E%3Cstop offset='1' stop-color='%2327034D' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230C8AFF'/%3E%3Cstop offset='1' stop-color='%230C8AFF' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover; */

/* background-color: #000612;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230d0139'/%3E%3Cstop offset='1' stop-color='%230d0139' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23011236'/%3E%3Cstop offset='1' stop-color='%23011236' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2316035c'/%3E%3Cstop offset='1' stop-color='%2316035c' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23000612'/%3E%3Cstop offset='1' stop-color='%23000612' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2346055E'/%3E%3Cstop offset='1' stop-color='%2346055E' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23021E5A'/%3E%3Cstop offset='1' stop-color='%23021E5A' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover; */

background-color: #FFE5E4;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fff2f2'/%3E%3Cstop offset='1' stop-color='%23fff2f2' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23c972ff'/%3E%3Cstop offset='1' stop-color='%23c972ff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2380e5ff'/%3E%3Cstop offset='1' stop-color='%2380e5ff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FFE5E4'/%3E%3Cstop offset='1' stop-color='%23FFE5E4' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FFFFFF'/%3E%3Cstop offset='1' stop-color='%23FFFFFF' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230CF'/%3E%3Cstop offset='1' stop-color='%230CF' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
}

.moons{
  color: blueviolet;
}
</style>
