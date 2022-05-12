<template>
  <div class=" space text-light h-100">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-light">
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
background-color: #0E6DF5;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2000' height='2000' viewBox='0 0 20 20'%3E%3Cg %3E%3Cpolygon fill='%231D1D1D' points='20 10 10 0 0 0 20 20'/%3E%3Cpolygon fill='%231D1D1D' points='0 10 0 20 10 20'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
