<template>
  <div class="row justify-content-center">
    <section class="col-10 row justify-content-between">
      <div class="col-6">
        <h1 class="pb-5">Bienvenu sur CRYPTOTHEMOON <br> l'application web qui va <br> vous simplifier la vie <br> avec la cryptomonnaie</h1>
        <router-link class="btn btn-primary" :to="{ name: 'dashboard' }">Aller vers mon dashboard →</router-link>
      </div>
      
      <div class="col-6"><img class="img-fluid" src="../assets/rocket.png" alt="lunebitcoin"></div>
      
    </section>
    <section class="col-10">
      <cards></cards>
    </section>
    <section class="col-10">
      <questions></questions>
    </section>
    <section class="col-10">
      <tableau-crypto :limit=10></tableau-crypto>
    </section>
    
  </div>
</template>

<script>
import TableauCrypto from "../components/TableauCrypto.vue"
import Cards from "../components/Cards.vue"
import Questions from "../components/Questions.vue"
export default {
  
  name: "HomeView",
  components: {
    TableauCrypto, Cards, Questions
  },
}
</script>

<style scoped>
  section{
    margin-top: 10vh;
  }
</style>