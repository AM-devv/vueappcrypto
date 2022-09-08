<template>
  <div class="row justify-content-center">
    <section class="col-10 row justify-content-between">
      <!-- <div class="col-12 col-md-6">
        <h1 class="pb-5">Bienvenu sur CRYPTOTHEMOON <br> l'application web qui va <br> vous simplifier la vie <br> avec la cryptomonnaie</h1>
        <router-link class="btn btn-primary btn-lg" :to="{ name: 'dashboard' }">Aller vers mon dashboard →</router-link>
      </div>
      
      <div class="col-6 d-none d-md-block"><img class="img-fluid" src="../assets/rocket.png" alt="lunebitcoin"></div> -->
      
    <div>
      <h1 class="globalh1" >Bienvenu sur <strong class="gradienth1"> CRYPTOTHEMOON </strong>
        l'application web qui va
vous simplifier la vie
avec la cryptomonnaie
      </h1>
      <div class="text-center mt-4">
        <router-link class="btn btn-primary btn-lg" :to="{ name: 'dashboard' }">Aller vers mon dashboard →</router-link>
      </div>
      
    </div>

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

  .globalh1{
    font-weight: 900;
    /* font-family: 'Noto Sans', sans-serif; */
    text-align: center;
    font-size: 2rem;
  }
  @media screen and (min-width: 900px) {
    .globalh1{
      font-size: 4rem;
    }
  }
  .gradienth1{
    font-weight: 900;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: linear-gradient(45deg, #0d6efd, violet);
    color: transparent;
    font-family: 'Noto Sans', sans-serif;
    text-align: center;
    filter: drop-shadow(3px 3px 5px black);
  }
</style>