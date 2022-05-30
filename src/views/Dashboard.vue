<template>
    <div class="container mt-5">
    
            <h2 class="fs-1">Tableau de bord</h2>
            <span class="ms-1">Vous retrouverez ici vos informations ...</span>
        
        <div class="row mt-5">
            <section class="col-lg-12 mb-3 col-12">
                <div class="bg-light shadow text-dark p-3 rounded">
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
                </div>
            </section>
            <section class="col-lg-6 mb-3 col-12">
                <div class="bg-light shadow mb-3 p-3 text-dark rounded justify-content-center">
                    <div class="row">
                        <h3 v-if="favorites != null">Cryptos favorites {{ favorites.length }} <button @click="RemoveAll" class="btn btn-danger">Tout supprimer</button></h3>
                    <h4 v-if="favorites == 0 || favorites == null">Aucun favoris</h4>
                    <div v-for="favorite in favorites" :key="favorite.id" class="card border-0 shadow bg-white text-dark my-3 mx-1 col-10 col-md-4 col-lg-3">
                        <h5 class="p-2">{{favorite.name}}</h5>
                        <div class="card-body">
                            <router-link class="btn btn-primary btn-sm" :to="{ name: 'coininfo', params: {id: favorite.id} }">Plus d'infos</router-link>
                            <hr>
                            <button class="btn btn-danger btn-sm" @click="Removefav(favorite)">Supprimer</button>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="bg-light shadow rounded text-dark p-3">
                    <h3>Toutes les cryptos</h3>
                    <slider></slider>
                </div>
            </section>

            <section class="col-lg-6 mb-3 col-12">
                <trending class="mb-3"></trending>

                <likes class="mb-3"></likes>

                <lastposts></lastposts>
            </section>
        </div>
        
            
        
        
    </div>
</template>

<script>
import Trending from "../components/Trending.vue"
import Slider from "../components/Slider.vue"
import Likes from "../components/Likes.vue"
import Lastposts from "../components/Lastposts.vue"

export default {
    name:"Dashboard",
    components: {
        Trending,Slider,Likes,Lastposts
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
        },

        RemoveAll(){
            this.favorites = [];
            localStorage.setItem("favorites", JSON.stringify(this.favorites));
        }
    }
}
</script>

