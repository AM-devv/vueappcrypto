<template>
    <div>
        <div class="row pb-1">
            <div class="  col-md-3">
                <input type="search" class="form-control shadow" placeholder="Recherche" v-model="searchvalue">
            </div>
            
            <span class="btn shadow btn-danger col-md-1" @click="Sortcap">Reset</span>  
        </div>
       
        <table class="table shadow table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th role="button" :class="ordername!= null ? 'text-warning'  : '' " @click="SortName">NOM <span v-if="ordername ==true">↑</span> <span v-else-if="ordername == false">↓</span></th>
                    <th></th>
                    <th></th>
                    <th role="button" :class="orderprice!= null ? 'text-warning'  : '' " @click="SortPrice">PRIX <span v-if="orderprice ==true">↑</span> <span v-else-if="orderprice == false">↓</span></th>
                    <th>Changement de prix sur 1H</th>
                    <th>Changement de prix sur 24H</th>
                    <th>Changement de prix sur 1 semaine</th>
                    <!-- <th class="text-center">LOGO</th> -->
                </tr>
                
            </thead>
            <tbody>
                <tr class="align-middle" v-for="cryp in SearchCryps.slice(0,limit)" :key="cryp.id">
                    <td><img :src="cryp.image" :alt="cryp.name" width="20" height="20"> {{ cryp.name }}</td>
                    <td>
                        <strong role="button" class="text-danger" @click="Removefav(cryp)" v-if="favorites.some(fav => fav.name === cryp.name)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill big" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                        </strong>
                        <strong role="button" v-else @click="Addfav(cryp)" class="text-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart big" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                        </strong>
                    </td>
                    <td><router-link class="btn btn-primary btn-sm" :to="{ name: 'coininfo', params: {id: cryp.id} }">Plus d'info</router-link> </td>
                    <td>{{ cryp.current_price }} $</td>
                    <td :class="cryp.price_change_percentage_1h_in_currency > 0 ? 'text-success'  : 'text-danger' ">{{ cryp.price_change_percentage_1h_in_currency.toFixed(3) }} %</td>
                    <td :class="cryp.price_change_percentage_24h > 0 ? 'text-success'  : 'text-danger' ">{{ cryp.price_change_percentage_24h.toFixed(3) }} %</td>
                    <td :class="cryp.price_change_percentage_7d_in_currency > 0 ? 'text-success'  : 'text-danger' ">{{ cryp.price_change_percentage_7d_in_currency.toFixed(3) }} %</td>
                    <!-- <td class="text-center"></td> -->
                </tr>
                <tr v-if="SearchCryps.length == 0">
                    Aucun résultat
                </tr>
            </tbody>
            
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "TableauCrypto",
    props:['limit'],
    data(){
        return{
            cryps : [],
            searchvalue : "",
            orderprice:null,
            ordername:null,

            favorites: JSON.parse(localStorage.getItem('favorites')) || []
        };
    },
    created() {
        this.GetCoins();
        //setInterval(this.GetCoins, 10000);
        
    },
    computed : {
        SearchCryps(){
            return this.cryps.filter((cryp) => (cryp.id.includes(this.searchvalue.toLowerCase())));
        }
    },
    methods: {
        GetCoins(){
            axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d')
            .then((response) => {this.cryps = response.data} ).catch(error => console.log(error));
        },
        SortPrice(){
            if(this.orderprice==null){
                this.orderprice=true
            }
            else{
                this.orderprice=!this.orderprice
            }
            if(this.orderprice==true){
                this.cryps.sort((a,b) => {
                return a.current_price - b.current_price;
                })
            }
            else if(this.orderprice==false){
                this.cryps.sort((a,b) => {
                return b.current_price - a.current_price;
                })
            }
            this.ordername = null;
            
        },
        SortName(){
            if(this.ordername==null){
                this.ordername=true
            }
            else{
                this.ordername=!this.ordername
            }
            if(this.ordername==true){
                this.cryps.sort((a,b) => {
                return a.name.localeCompare(b.name);
                })
            }
            else if(this.ordername==false){
                this.cryps.sort((a,b) => {
                return b.name.localeCompare(a.name);
                })
            }
            this.orderprice=null;
        },
        Sortcap(){
            this.cryps.sort((a,b)=>{
                return a.market_cap_rank - b.market_cap_rank;
            })
            this.orderprice=null;
            this.ordername=null;
            this.searchvalue="";
        },
        Addfav(cryp){
            this.favorites.push(cryp);
            localStorage.setItem("favorites", JSON.stringify(this.favorites));
        },
        Removefav(cryp){
            this.favorites = this.favorites.filter(fav => fav.name !== cryp.name);
            localStorage.setItem("favorites", JSON.stringify(this.favorites));
        }
    }
}
</script>

<style scoped>
    th:nth-child(-n+4):hover{
        text-decoration: underline;
        text-decoration-thickness: 0.20rem;
        text-underline-offset: 0.5rem;
    }
    .big:hover{
        transform: scale(1.5);
        
    }
    .big{
        transition: transform .2s;
    }
</style>