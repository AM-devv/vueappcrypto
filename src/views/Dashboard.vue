<template>
    <div class="container">
        <h2>Votre tableau de bord</h2>
        <div class="row">
            <h3>cryptos favorites</h3>
            <h4 v-if="favorites == 0 || favorites == null">Aucun favoris</h4>
            <div v-for="favorite in favorites" :key="favorite.id" class="card text-dark my-5 col-12 col-md-3">
                    <h5 class="card-header">{{favorite.name}} <p @click="Removefav(favorite)" >🗑</p> </h5>
                    <div class="card-body">
                        <h5 class="card-title">{{favorite.current_price}}</h5>
                        <p class="card-text">{{favorite.price_change_percentage_1h_in_currency}}</p>
                        <router-link class="btn btn-primary btn-sm" :to="{ name: 'coininfo', params: {id: favorite.id} }">Plus d'info</router-link>
                    </div>
            </div>
        </div>
            
        
        
    </div>
</template>

<script>
export default {
    name:"Dashboard",
    data(){
        return{
            favorites:[]
        }
    },
    created(){
        this.favorites = JSON.parse(localStorage.getItem('favorites'));
    },
    methods:{
        Removefav(favorite){
            this.favorites = this.favorites.filter(fav => fav.name !== favorite.name);
            localStorage.setItem("favorites", JSON.stringify(this.favorites));
        }
    }
}
</script>