<template>
    <div>
        <input type="search" class="form-control w-25" placeholder="Recherche" v-model="searchvalue">
        <p v-if="SearchCryps.length == 0">Résultat vide</p>
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th>NOM</th>
                    <th>PRIX</th>
                    <th>24H</th>
                    <th>LOGO</th>
                </tr>
                
            </thead>
            <tbody>
                <tr class="align-middle" v-for="cryp in SearchCryps" :key="cryp.id">
                    <td>{{ cryp.name }} <router-link :to="{ name: 'coininfo', params: {id: cryp.id} }">Plus d'info</router-link> </td>
                    <td>{{ cryp.current_price }}</td>
                    <td v-if="cryp.price_change_24h > 0" class="text-success">{{ cryp.price_change_24h }}</td>
                    <td v-else class="text-danger">{{ cryp.price_change_24h }}</td>
                    <td><img :src="cryp.image" :alt="cryp.name"></td>
                </tr>
            </tbody>
            
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "TableauCrypto",
    data(){
        return{
            cryps : [],
            searchvalue : "" 
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
            axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d')
            .then((response) => {this.cryps = response.data} ).catch(error => console.log(error));
        }
    }
}
</script>