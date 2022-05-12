<template>
    <div class="container">
        <section>
            <h2>Votre tableau de bord</h2>
            <h3>Vous retrouverez ici vos favoris ...</h3>
        </section>
        
        <section class="row">
            <h3>Cryptos favorites {{ favorites.length }}</h3>
            <h4 v-if="favorites == 0 || favorites == null">Aucun favoris</h4>
            <div v-for="favorite in favorites" :key="favorite.id" class="card text-dark my-5 mx-1 col-12 col-md-3">
                    <h5 class="card-header">{{favorite.name}} <p @click="Removefav(favorite)" class="text-danger" >Supprimer</p> </h5>
                    <div class="card-body">
                        <router-link class="btn btn-primary btn-sm" :to="{ name: 'coininfo', params: {id: favorite.id} }">Plus d'info</router-link>
                    </div>
            </div>
        </section>
        <section class="row">
            <h3>TOP 7 tendances</h3>
            <ul class="list-group col-md-4 col-12">
               <li class="list-group-item d-flex justify-content-between" v-for="trend in trending" :key="trend.item.id">
                {{trend.item.name}}
                <img :src="trend.item.small" alt="logo" width="25" height="25">
                </li> 
               
            </ul>
            
        </section>
            
        
        
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:"Dashboard",
    data(){
        return{
            favorites:[],
            trending:[]
        }
    },
    created(){
        this.favorites = JSON.parse(localStorage.getItem('favorites'));

        axios.get('https://api.coingecko.com/api/v3/search/trending')
            .then((response) => {this.trending = response.data.coins;} ).catch(error => console.log(error));

            
    },
    methods:{
        Removefav(favorite){
            this.favorites = this.favorites.filter(fav => fav.name !== favorite.name);
            localStorage.setItem("favorites", JSON.stringify(this.favorites));
        }
    }
}
</script>

<style scoped>
section{
    margin-top: 10vh;
}
</style>