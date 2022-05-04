<template>
    <div class="row justify-content-center">
        
        <section class="col-md-10">
            <h1 class="pb-5">Voici les 100 cryptomonnaies les plus importantes du marché actuel</h1>
            <tableau-crypto></tableau-crypto>  
        </section>
        
    </div>
</template>

<script>

import TableauCrypto from "../components/TableauCrypto.vue"

export default {
    name:"Prix",
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