<template>
    <div>
        <ul class="list-group">
               <li class="list-group-item d-flex justify-content-between" v-for="trend in trending" :key="trend.item.id">
                
                <div>{{trend.item.name}}
                    <router-link class="btn btn-primary btn-sm" :to="{ name: 'coininfo', params: {id: trend.item.id} }">Plus d'infos</router-link>
                </div>
                
                <img :src="trend.item.small" alt="logo" width="25" height="25">
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