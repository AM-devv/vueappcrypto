<template>
    <div>
        <div id="carouselExampleControls" class="carousel text-dark p-5 rounded slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div v-for="cryp in cryps" :key="cryp.id" :class="cryp.id == 'bitcoin' ? 'active'  : '' " class="carousel-item text-center">
                <img :src="cryp.image" width="250" height="250" alt="...">
                <p class="fs-1">
                    <strong>{{ cryp.current_price.toLocaleString() }} $</strong>
                </p>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="text-dark" aria-hidden="true">◀︎</span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="text-dark" aria-hidden="true">▶︎</span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Slider",

    data(){
        return{
            cryps:[]
        }
    },

    created(){
        this.GetCoins();
        setInterval(this.GetCoins, 10000);
    },

    methods:{
        GetCoins(){
            axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d')
            .then((response) => {this.cryps = response.data} ).catch(error => console.log(error));
        }
    }
}
</script>