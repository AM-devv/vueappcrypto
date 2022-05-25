<template>
  <div class=" space text-light h-100">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="./assets/logovuecrp.png" width="250" alt="logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'home' }">Accueil</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'about' }">A propos</router-link>
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
            
          </ul>
          <tuto></tuto>
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

background-color: #000612;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230d0139'/%3E%3Cstop offset='1' stop-color='%230d0139' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23011236'/%3E%3Cstop offset='1' stop-color='%23011236' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2316035c'/%3E%3Cstop offset='1' stop-color='%2316035c' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23000612'/%3E%3Cstop offset='1' stop-color='%23000612' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2346055E'/%3E%3Cstop offset='1' stop-color='%2346055E' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23021E5A'/%3E%3Cstop offset='1' stop-color='%23021E5A' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
}
</style>
