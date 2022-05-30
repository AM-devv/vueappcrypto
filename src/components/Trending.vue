<template>
    <div>
        <ul class="list-group shadow">
            <li class="list-group-item list-group-item-light">
                <h3>Top 7 tendances</h3>
            </li>
               <li class="list-group-item list-group-item-light d-flex justify-content-between" v-for="trend in trending" :key="trend.item.id">
                
                <div>
                    <img :src="trend.item.small" alt="logo" width="25" height="25">
                    {{trend.item.name}}
                </div>
                <router-link class="btn btn-primary btn-sm" :to="{ name: 'coininfo', params: {id: trend.item.id} }">Plus d'infos</router-link>
                
                </li> 
               
            </ul>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: "Trending",
    data(){
        return{
            trending:[],
        }
    },
    created(){
        axios.get('https://api.coingecko.com/api/v3/search/trending')
            .then((response) => {this.trending = response.data.coins;} ).catch(error => console.log(error));
    }
}
</script>