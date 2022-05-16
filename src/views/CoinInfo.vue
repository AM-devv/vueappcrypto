<template>
    <div class="row justify-content-center" v-if="coin.market_data">
        <div class="col-10 mt-5 row justify-content-between">
            <div class="col-md-9">
                <h2>{{ coin.name }}</h2>
                <h3>{{ coin.market_data.current_price.usd }} $</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, a officia quaerat commodi dignissimos optio, laboriosam, provident amet quia ducimus autem. Cum eaque eum exercitationem, hic nesciunt iste excepturi eligendi.</p>
            </div>
            <div class="col-md-3 mb-5">
                <img :src="coin.image.large" alt="">
            </div>
            <Line :chart-data="chartData" class="bg-light col-md-6 rounded mb-5"> </Line>
            
            <div class="col-md-4">
                <simulation :coin=coin></simulation>
                <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between" v-for="ticker in coin.tickers.slice(0, 5)" :key="ticker.id">
                    {{ ticker.base }} vers {{ ticker.target}}
                    <p>{{ ticker.converted_last.usd }} $</p>
                    <p>{{ ticker.market.name }}</p>
                </li>
            </ul>
            </div>

            <Pie :chart-data="Piedata" class="col-md-4"> </Pie>

            
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import 'chart.js/auto';
import { Line } from 'vue-chartjs'
import { Pie } from 'vue-chartjs'
import Simulation from '../components/Simulation.vue'

export default {
    name: "CoinInfo",
    components: { Line, Pie, Simulation },
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
                    label: 'Prix en dollar',
                    backgroundColor: '#F66B0E',
                    borderColor: '#205375',
                    data:  [this.coin.market_data.current_price.usd * ((100-this.coin.market_data.price_change_percentage_1y) / 100),
                            this.coin.market_data.current_price.usd * ((100-this.coin.market_data.price_change_percentage_200d) / 100),
                            this.coin.market_data.current_price.usd * ((100-this.coin.market_data.price_change_percentage_60d) / 100),
                            this.coin.market_data.current_price.usd * ((100-this.coin.market_data.price_change_percentage_30d) / 100),
                            this.coin.market_data.current_price.usd * ((100-this.coin.market_data.price_change_percentage_14d) / 100),
                            this.coin.market_data.current_price.usd * ((100-this.coin.market_data.price_change_percentage_7d) / 100),
                            this.coin.market_data.current_price.usd * ((100-this.coin.market_data.price_change_percentage_24h) / 100)]
                }
                ]
            }
        },

        Piedata(){
            return {
                labels: ['Plus haut prix 24h', 'Plus bas prix 24h', 'Prix maintenant'],
                datasets: [
                    {
                        backgroundColor: ['#FDCA40', '#F79824', '#EE4266'],
                        data: [this.coin.market_data.high_24h.usd, this.coin.market_data.low_24h.usd, this.coin.market_data.current_price.usd],
                        hoverOffset: 40,
                        color: '#FDCA40'
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
            .then((response) => {this.coin = response.data; console.log(response.data)} ).catch(error => console.log(error));
        }
    }
}
</script>

<style scoped>

</style>