<template>
    <div v-if="coin.market_data">
        <div class="card text-dark bg-light mb-3">
            <div class="card-header">Simulateur</div>
            <div class="card-body text-center">
                <label for="entry" class="card-title">Somme en dollar</label><br>
                <input class="form-control" type="number" id="entry" v-model="entryvalue" placeholder="Entrer la somme">
                <br>
                <label for="output">Somme en {{ coin.name }}</label><br>
                <input class="form-control" type="number" id="output" v-model="outputvalue" placeholder="Entrer la somme">  
            </div>
            
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
            get : function(){return this.entryvalue * (1/this.coin.market_data.current_price.usd)},
            set : function(newValue) {this.entryvalue = newValue / (1/this.coin.market_data.current_price.usd)}
        }
    }
}
</script>