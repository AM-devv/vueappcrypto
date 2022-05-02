<template>
    <div>
        <input type="search" class="form-control w-25" placeholder="Recherche" v-model="searchvalue">
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th role="button" :class="ordername!= null ? 'text-warning'  : '' " @click="SortName">NOM <span v-if="ordername ==true">↑</span> <span v-else-if="ordername == false">↓</span></th>
                    <th></th>
                    <th role="button" :class="orderprice!= null ? 'text-warning'  : '' " @click="SortPrice">PRIX <span v-if="orderprice ==true">↑</span> <span v-else-if="orderprice == false">↓</span></th>
                    <th>Changement de prix sur 1H</th>
                    <th>Changement de prix sur 24H</th>
                    <th>Changement de prix sur 1 semaine</th>
                    <th class="text-center">LOGO</th>
                </tr>
                
            </thead>
            <tbody>
                <tr class="align-middle" v-for="cryp in SearchCryps.slice(0,limit)" :key="cryp.id">
                    <td>{{ cryp.name }}</td>
                    <td><router-link class="btn btn-primary btn-sm" :to="{ name: 'coininfo', params: {id: cryp.id} }">Plus d'info</router-link> </td>
                    <td>{{ cryp.current_price }} $</td>
                    <td :class="cryp.price_change_percentage_1h_in_currency > 0 ? 'text-success'  : 'text-danger' ">{{ cryp.price_change_percentage_1h_in_currency.toFixed(3) }} %</td>
                    <td :class="cryp.price_change_percentage_24h > 0 ? 'text-success'  : 'text-danger' ">{{ cryp.price_change_percentage_24h.toFixed(3) }} %</td>
                    <td :class="cryp.price_change_percentage_7d_in_currency > 0 ? 'text-success'  : 'text-danger' ">{{ cryp.price_change_percentage_7d_in_currency.toFixed(3) }} %</td>
                    <td class="text-center"><img :src="cryp.image" :alt="cryp.name" width="20" height="20"></td>
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
            ordername:null
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
            console.log("coucou")
        }
    }
}
</script>

<style scoped>

</style>