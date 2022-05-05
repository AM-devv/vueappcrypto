<template>
  <div class="row justify-content-center">
    <section class="col-md-10 row justify-content-between">
      <h1 class="col-md-8">Bienvenu sur CRYPTOTHEMOON <br> l'application web qui va <br> vous simplifier la vie <br> avec la cryptomonnaie</h1>
      
    </section>
    <section class="col-md-10">
      <cards></cards>
    </section>
    <section class="col-md-10">
      <questions></questions>
    </section>
    <section class="col-md-10">
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