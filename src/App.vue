<template>
  <div class="bg-dark text-white">
    <h1>Crypto app</h1>
    <ul class="nav">
      <li class="nav-item"><router-link class="nav-link" :to="{ name: 'home' }"> Home</router-link></li>
      <li class="nav-item"><router-link class="nav-link" :to="{ name: 'about' }">About</router-link></li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  
}
</script>
