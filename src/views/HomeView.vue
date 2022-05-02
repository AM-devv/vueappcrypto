<template>
  <div class="row justify-content-center">
    <section class="col-md-10 row justify-content-between">
      <h1 class="col-md-8">Bienvenu sur CRYPTOTHEMOON l'application web qui va vous simplifier la vie avec la cryptomonnaie</h1>
      <img class="col-md-4" src="../assets/bob.png" alt="bob">
    </section>
    <section class="col-md-10 row justify-content-between">
      <div class="card col-md-3 bg-light text-dark">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card col-md-3 bg-light text-dark">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card col-md-3 bg-light text-dark">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </section>
    <section class="col-md-10">
      <tableau-crypto :limit=10></tableau-crypto>
    </section>
    
  </div>
</template>

<script>
import TableauCrypto from "../components/TableauCrypto.vue"
export default {
  
  name: "HomeView",
  components: {
    TableauCrypto
  },
}
</script>

<style scoped>
  section{
    margin-top: 10vh;
  }
</style>