<template>
    <div class="container mt-5">
    
            <h2 class="fs-1">Tableau de bord</h2>
            <span class="ms-1">Vous retrouverez ici vos informations ...</span>
        
        <div class="row mt-5">

            <section class="col-lg-6 mb-3 col-12">
                <div class="bg-light shadow text-dark p-3 mb-3 rounded">
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
                <div class="bg-light shadow mb-3 p-3 text-dark rounded justify-content-center">
                    
                        <h3 v-if="favorites != null">Cryptos favorites {{ favorites.length }} <button @click="RemoveAll" class="btn btn-danger">Tout supprimer</button></h3>
                    <div class="row">
                    <h4 v-if="favorites == 0 || favorites == null">Aucun favoris</h4>
                    <div v-for="favorite in favorites" :key="favorite.id" class="col-10 col-lg-5 bg-light p-3 rounded shadow m-3">
                        <h4>{{favorite.name}}</h4>
                        <div class="card-body">
                            <router-link class="btn btn-primary btn-sm" :to="{ name: 'coininfo', params: {id: favorite.id} }">Plus d'infos</router-link>
                            <hr>
                            <button class="btn btn-danger btn-sm" @click="Removefav(favorite)">Supprimer</button>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="bg-light mb-3 shadow rounded text-dark p-3">
                    <h3>Toutes les cryptos</h3>
                    <slider></slider>
                </div>

                <div class="bg-light shadow rounded text-dark p-3">
                    <h3>WalletSim</h3>
                    <router-link class="btn btn-primary" :to="{ name: 'walletsim' }">Voir les investissements</router-link>
                    <div class="row">
                        <div v-for="invest in investissements" class="col-10 col-lg-5 bg-light p-3 rounded shadow m-3" :key="invest.id">
                            <h4 class=" upper mb-3">{{ invest.id }} <img :src="invest.image" alt="logo"></h4>
                            <h5>{{ invest.nbr.toFixed(3) }}</h5>
                            <router-link class="btn btn-sm btn-primary" :to="{ name: 'coininfo', params: {id: invest.id} }">Plus d'infos</router-link>
                        </div>
                    </div>
                </div>
            </section>

            <section class="col-lg-6 mb-3 col-12">
                <timecounter class="mb-3"></timecounter>

                <trending class="mb-3"></trending>

                <likes class="mb-3"></likes>

                <lastposts></lastposts>
            </section>
        </div>
        
            
        <Transition>
            <div v-if="visible" class="bg-danger text-center w-50 mx-auto my-4 align-middle fixed-top rounded p-3">
                <p class="fs-5 mb-0 text-light">Favori supprimé</p>
            </div>
        </Transition>
        
    </div>
</template>

<script>
import Trending from "../components/Trending.vue"
import Slider from "../components/Slider.vue"
import Likes from "../components/Likes.vue"
import Lastposts from "../components/Lastposts.vue"
import Timecounter from "../components/Timecounter.vue"

export default {
    name:"Dashboard",
    components: {
        Trending,Slider,Likes,Lastposts,Timecounter
    },
    data(){
        return{
            favorites:[],
            
            messages:[],

            investissements:[],

            visible: false
        }
    },
    created(){
        this.favorites = JSON.parse(localStorage.getItem('favorites'));
        this.messages = JSON.parse(localStorage.getItem('messages')); 
        this.investissements = JSON.parse(localStorage.getItem('boiteinvest'));

    },
    methods:{
        Removefav(favorite){
            this.favorites = this.favorites.filter(fav => fav.name !== favorite.name);
            localStorage.setItem("favorites", JSON.stringify(this.favorites));

            this.visible = true;
            setTimeout(this.Resetcontent, 3000);
        },

        RemoveAll(){
            this.favorites = [];
            localStorage.setItem("favorites", JSON.stringify(this.favorites));
        },
        Resetcontent(){
            this.visible = false
        }
    }
}
</script>

<style scoped>
.upper::first-letter{
    text-transform: uppercase;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>