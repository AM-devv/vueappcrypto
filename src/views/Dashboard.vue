<template>
    <div class="container mt-5">
    
            <h2>Votre tableau de bord</h2>
            <h3>Vous retrouverez ici vos informations ...</h3>
        
        <div class="row">
            <section class="row col-lg-12 col-12">
                <h3>Votre dernier message</h3>
                <div v-if="messages != null" class="card shadow text-dark">
                    <div class="card-header">
                        {{messages.name}}
                    </div>
                    <div class="card-body">
                        <p class="card-text">{{messages.content}}</p>
                    </div>
                </div>
                <h4 v-if="messages == null">Aucun message</h4>
            </section>
            <section class="col-lg-6 col-12">
            <h3 v-if="favorites != null">Cryptos favorites {{ favorites.length }}</h3>
            <h4 v-if="favorites == 0 || favorites == null">Aucun favoris</h4>
            <div class="bg-light rounded row justify-content-center">
                <div v-for="favorite in favorites" :key="favorite.id" class="card shadow bg-dark text-light my-3 mx-1 col-10 col-md-4 col-lg-3">
                    <h5 class="card-header">{{favorite.name}}</h5>
                    <div class="card-body">
                        <router-link class="btn btn-primary btn-sm" :to="{ name: 'coininfo', params: {id: favorite.id} }">Plus d'infos</router-link>
                        <hr>
                        <button class="btn btn-danger btn-sm" @click="Removefav(favorite)">Supprimer</button>
                    </div>
                </div>
            </div>
        </section>
        <section class="col-lg-6 col-12">
            <h3>Top 7 tendances</h3>
            <trending></trending>
            
        </section>

        <section>
            <h3>Toutes les cryptos</h3>
            <slider></slider>
        </section>
        </div>
        
            
        
        
    </div>
</template>

<script>
import Trending from "../components/Trending.vue"
import Slider from "../components/Slider.vue"

export default {
    name:"Dashboard",
    components: {
        Trending,Slider
    },
    data(){
        return{
            favorites:[],
            
            messages:[]
        }
    },
    created(){
        this.favorites = JSON.parse(localStorage.getItem('favorites'));
        this.messages = JSON.parse(localStorage.getItem('messages'));

        

            
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