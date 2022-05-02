<template>
    <div class="row justify-content-center">
        <div class="col-md-10 row justify-content-between">
            <h2>{{ coin.name }} {{ coin.id }}</h2>
            <Line v-if="coin.market_data" :chart-data="chartData" class="bg-white col-md-6 rounded"> </Line>
            <simulation :coin=coin class="col-md-4"></simulation>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import 'chart.js/auto';
import { Line } from 'vue-chartjs'
import Simulation from '../components/Simulation.vue'

export default {
    name: "CoinInfo",
    components: { Line, Simulation },
    props: ['id'],
    data(){
        return{
            coin:[],
            
        }
        
    },
    computed: {
        chartData(){
            return {
                labels: [ '1 an','200 jours','60 jours','30 jours','14 jours', '7 jours', '24H'],
                datasets: [
                {
                    label: 'Prix en eur',
                    backgroundColor: '#f87979',
                    borderColor: '#3b9bf5',
                    data:  [this.coin.market_data.current_price.eur * ((100-this.coin.market_data.price_change_percentage_1y) / 100),
                            this.coin.market_data.current_price.eur * ((100-this.coin.market_data.price_change_percentage_200d) / 100),
                            this.coin.market_data.current_price.eur * ((100-this.coin.market_data.price_change_percentage_60d) / 100),
                            this.coin.market_data.current_price.eur * ((100-this.coin.market_data.price_change_percentage_30d) / 100),
                            this.coin.market_data.current_price.eur * ((100-this.coin.market_data.price_change_percentage_14d) / 100),
                            this.coin.market_data.current_price.eur * ((100-this.coin.market_data.price_change_percentage_7d) / 100),
                            this.coin.market_data.current_price.eur * ((100-this.coin.market_data.price_change_percentage_24h) / 100)]
                }
                ]
            }
        }
    },
    created(){
         this.GetInfo();
        //setInterval(this.GetInfo,10000);
    },
    methods : {
         GetInfo(){
            axios.get(`https://api.coingecko.com/api/v3/coins/${this.id}`)
            .then((response) => {this.coin = response.data} ).catch(error => console.log(error));
        }
    }
}
</script>

<style scoped>

</style>