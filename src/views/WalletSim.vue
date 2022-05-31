<template>
  <div class="container mt-5">
            <h2 class="fs-1">WalletSim</h2>
            <p class="ms-1">Vous pourrez ici simuler un wallet pour investir sur les cryptos de votre choix afin de vous entrainer avant de mettre la main au portefeuille</p>

            <div class="bg-light shadow text-dark p-3 my-5 rounded">
              <h3 class="mb-3">Indiquez la somme que vous voulez dans votre portefeuille</h3>
              <p>⚠️ Si vous possédez deja des Moons ( <strong class="moons">☾</strong> ) ceux-ci seront écrasés !</p>
              <input class="form-control mb-3" v-model="wallet" type="number">
              <button class="btn btn-primary" @click="Fillwallet">Valider</button>
            </div>

            <div class="row">
              <div class="col-md-2 bg-light p-3 rounded shadow m-3" v-for="invest in boiteinvest" :key="invest.id">
                <h4 class="mb-3">{{ invest.id }}</h4>
                <router-link class="btn btn-primary" :to="{ name: 'coininfo', params: {id: invest.id} }">Voir investissement</router-link>
              </div>
            </div>
   
  </div>
</template>

<script>
export default {
  name:"WalletSim",

  data(){
    return{
      wallet : 0,
      boiteinvest :[]
    }
  },
  created(){
    this.boiteinvest = JSON.parse(localStorage.getItem("boiteinvest"));
  },
  methods:{
    Fillwallet(){
      localStorage.setItem("wallet", JSON.stringify(this.wallet));
    }
  }
}
</script>

<style scoped>
.moons{
  color: blueviolet;
}
</style>