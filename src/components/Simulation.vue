<template>
    <div v-if="coin.market_data">
        <div class="bg-secondary">
            <label for="entry">Somme en eur</label><br>
            <input type="number" id="entry" v-model="entryvalue" placeholder="Entrer la somme">
            <br>
            <label for="output">Somme en {{ coin.name }}</label><br>
            <input type="number" id="output" v-model="outputvalue" placeholder="Resultat">
        </div>
    </div>
</template>

<script>
export default {
    name: "Simulation",
    props:['coin'],
    data(){
        return{
            entryvalue: Number,
        }
    },
    computed:{
        outputvalue:{
            get : function(){return this.entryvalue * (1/this.coin.market_data.current_price.eur)},
            set : function(newValue) {this.entryvalue = newValue / (1/this.coin.market_data.current_price.eur)}
        }
    }
}
</script>