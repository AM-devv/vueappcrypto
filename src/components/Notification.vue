<template>
    <div>
        <div v-for="crypto in Filter" :key="crypto.id" class="bg-light col-10 col-md-4 d-md-block noti shadow p-3 rounded end-0 bottom-0 position-fixed m-4">
                <div class="d-flex justify-content-end">
                    <a @click="cryptos = []" class="me-2 my-auto" href="#">Fermer tout</a>
                    <span role="button" @click="crypto.price_change_percentage_24h_in_currency = 0">╳</span>
                </div>
                
                <h4>Notification</h4>
            <p>{{ crypto.name }} a <strong class="text-success">augmenté de {{ crypto.price_change_percentage_24h_in_currency.toFixed(3) }}%</strong> sur les dernieres 24h</p>
        </div>

        <div v-for="crypto in Filter2" :key="crypto.id" class="bg-light col-10 col-md-4 d-md-block noti shadow p-3 rounded end-0 bottom-0 position-fixed m-4">
                <div class="d-flex justify-content-end">
                    <a @click="cryptos = []" class="me-2 my-auto" href="#">Fermer tout</a>
                    <span role="button" @click="crypto.price_change_percentage_24h_in_currency = 0">╳</span>
                </div>
                
                <h4>Notification</h4>
            <p>{{ crypto.name }} a <strong class="text-danger">diminué de {{ crypto.price_change_percentage_24h_in_currency.toFixed(3) }}%</strong> sur les dernieres 24h</p>
        </div>

    </div>
</template>

<script>

import axios from 'axios'
export default {
    name:"Notification",
    data(){
        return{
            cryptos : [],
            limitnotification : 10
        }
    },
    computed : {
        Filter(){
            return this.cryptos.filter((cryp) => (cryp.price_change_percentage_24h_in_currency > this.limitnotification));
        },
        Filter2(){
            return this.cryptos.filter((cryp) => (cryp.price_change_percentage_24h_in_currency < -(this.limitnotification)));
        }
    },
     created() {
        this.GetCoins();
        this.limitnotification = JSON.parse(localStorage.getItem('limitnotification'));
        if(this.limitnotification == null){
            this.limitnotification = 10
        }
        //setInterval(this.GetCoins, 10000);
        
    },
    methods: {
        GetCoins(){
            axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d')
            .then((response) => {this.cryptos = response.data} ).catch(error => console.log(error));
        }
    }
}
</script>

<style scoped>
.noti{
    z-index: 3000;
}
</style>