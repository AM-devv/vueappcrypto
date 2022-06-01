<template>
    <div class="row justify-content-center" v-if="coin.market_data">
        <div class="col-10 mt-5 row justify-content-between">
            <div class="col-md-9 fs-4">
                <h2 class="fs-1">{{ coin.name }}</h2>
                <h3 class="fs-2">{{ coin.market_data.current_price.usd.toLocaleString() }} $</h3>
                <p>Retrouvez ici toutes les informations de la cryptomonnaie : {{ coin.name }} avec ses graphiques,chiffres son simulateur, etc.</p>
                <p class="text-decoration-underline" v-if="coin.market_data.price_change_percentage_24h > 0">{{ coin.name }} est en hausse de <strong class="text-success">{{coin.market_data.price_change_percentage_24h}} %</strong> depuis ces dernieres 24h</p>
                <p class="text-decoration-underline" v-else>{{ coin.name }} est en baisse de <strong class="text-danger">{{coin.market_data.price_change_percentage_24h}} %</strong> depuis ces dernieres 24h</p>
                <a class="btn btn-primary" :href="coin.links.homepage[0]" target="_blank">Site officiel</a>
            </div>
            <div class="col-md-3 mb-5">
                <img :src="coin.image.large" alt="">
            </div>

            <hr>
                <div class="mb-5" v-if="investissementobj == null">
                    <h3 class="mb-3">Investissez</h3>
                    <input class="form-control mb-3" v-model="investissement" type="number" placeholder="Montant que vous voulez investir">
                    <p class="text-danger">{{ error }}</p>
                    <button class="btn btn-primary" @click="Transaction">Inverstir</button>
                </div>
                <div v-else class="investissement p-3 mb-5 shadow rounded">
                    <h3>Votre investissement</h3>
                    <div class="row text-center p-3">
                        <h4 class="col-md-6">Prix au moment de l'investissement : <br> {{ investissementobj.price }} ☾</h4>
                        <h4 class="col-md-6">Somme investie : <br> {{ investissementobj.invest }} ☾</h4>

                        <h4 class="col-md-6">Prix maintenant : <br> {{ coin.market_data.current_price.usd }} ☾</h4>
                        <h4 class="col-md-6">Ce que vous pouvez retirer : <br> {{ (investissementobj.invest * coin.market_data.current_price.usd / investissementobj.price).toLocaleString() }} ☾</h4>
                    </div>
                    <button class="btn btn-success" @click="Retirer">Retirer</button>
                </div>

            <div class="col-md-8">
                <Line :chart-data="chartData" class="bg-light shadow rounded mb-3"> </Line>
                <div class="bg-light shadow text-dark mb-3  p-3 rounded">
                    <h3>Social</h3>
                    <div class="row">
                        <div class="col-6 text-center p-3 border-end border-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                            </svg><br>
                            {{ coin.community_data.twitter_followers.toLocaleString() }} followers
                        </div>
                        <div class="col-6 text-center p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-reddit" viewBox="0 0 16 16">
                                <path d="M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z"/>
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z"/>
                            </svg><br>
                            {{ coin.community_data.reddit_subscribers.toLocaleString() }} abonnements
                        </div>
                        <div class="col-6 text-center border-end border-primary p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-reddit" viewBox="0 0 16 16">
                                <path d="M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z"/>
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z"/>
                            </svg><br>
                            {{ coin.community_data.reddit_average_posts_48h.toLocaleString() }} publications en 48h
                        </div>
                        <div class="col-6 text-center p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-reddit" viewBox="0 0 16 16">
                                <path d="M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z"/>
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z"/>
                            </svg><br>
                            {{ coin.community_data.reddit_average_comments_48h.toLocaleString() }} commentaires en 48h
                        </div>
                    </div>
                    
                </div>
            </div>
            
            
            <div class="col-md-4">
                <simulation class="shadow" :coin=coin></simulation>
                <ul class="list-group shadow mb-3">
                    <li class="list-group-item d-flex">
                        <h3>Tickers</h3>
                    </li>
                    <li class="list-group-item d-flex justify-content-between" v-for="ticker in coin.tickers.slice(0, 5)" :key="ticker.id">
                        {{ ticker.base }} vers {{ ticker.target}}
                        <p>{{ ticker.converted_last.usd }} $</p>
                        <p>{{ ticker.market.name }}</p>
                    </li>
                </ul>
                <Pie :chart-data="Piedata" class="bg-light shadow mb-3 rounded"> </Pie>

               
            </div>

     

                   
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import 'chart.js/auto';
import { Line } from 'vue-chartjs'
import { Pie } from 'vue-chartjs'
import Simulation from '../components/Simulation.vue'

export default {
    name: "CoinInfo",
    components: { Line, Pie, Simulation },
    props: ['id'],
    data(){
        return{
            coin:[],

            wallet:0,
            investissement:"",
            investissementobj:[],

            boiteinvest:[],
            error : ""
            
        }
        
    },
    computed: {
        chartData(){
            return {
                labels: [ '1 an','200 jours','60 jours','30 jours','14 jours', '7 jours', '24H'],
                datasets: [
                {
                    label: 'Prix en dollar',
                    backgroundColor: '#F66B0E',
                    borderColor: '#205375',
                    data:  [this.coin.market_data.current_price.usd * ((100-this.coin.market_data.price_change_percentage_1y) / 100),
                            this.coin.market_data.current_price.usd * ((100-this.coin.market_data.price_change_percentage_200d) / 100),
                            this.coin.market_data.current_price.usd * ((100-this.coin.market_data.price_change_percentage_60d) / 100),
                            this.coin.market_data.current_price.usd * ((100-this.coin.market_data.price_change_percentage_30d) / 100),
                            this.coin.market_data.current_price.usd * ((100-this.coin.market_data.price_change_percentage_14d) / 100),
                            this.coin.market_data.current_price.usd * ((100-this.coin.market_data.price_change_percentage_7d) / 100),
                            this.coin.market_data.current_price.usd * ((100-this.coin.market_data.price_change_percentage_24h) / 100)]
                }
                ]
            }
        },

        Piedata(){
            return {
                labels: ['Plus haut prix 24h', 'Plus bas prix 24h', 'Prix maintenant'],
                datasets: [
                    {
                        backgroundColor: ['#FDCA40', '#F79824', '#EE4266'],
                        data: [this.coin.market_data.high_24h.usd, this.coin.market_data.low_24h.usd, this.coin.market_data.current_price.usd],
                        hoverOffset: 20,
                        color: '#FDCA40'
                    }
                ]
            }

        },
    },
    created(){
         this.GetInfo();
        //setInterval(this.GetInfo,10000);

        this.wallet = JSON.parse(localStorage.getItem('wallet'));
        this.investissementobj = JSON.parse(localStorage.getItem(`${this.id}info`));
    },
    methods : {
         GetInfo(){
            axios.get(`https://api.coingecko.com/api/v3/coins/${this.id}`)
            .then((response) => {this.coin = response.data;} ).catch(error => console.log(error));
        },

        Transaction(){

            if(this.wallet > this.investissement){
                this.wallet =  this.wallet - this.investissement;
                localStorage.setItem("wallet", JSON.stringify(this.wallet));
                localStorage.setItem(`${this.coin.id}info`,JSON.stringify({
                    price: this.coin.market_data.current_price.usd,
                    invest: this.investissement,
                    id: this.id,
                    image: this.coin.image.thumb
                }));
                this.investissementobj = JSON.parse(localStorage.getItem(`${this.coin.id}info`))

                if(JSON.parse(localStorage.getItem("boiteinvest")) == null){
                    this.boiteinvest.push(this.investissementobj);
                    localStorage.setItem("boiteinvest", JSON.stringify(this.boiteinvest));
                }
                else{
                    this.boiteinvest = JSON.parse(localStorage.getItem("boiteinvest"));
                    this.boiteinvest.push(this.investissementobj);
                    localStorage.setItem("boiteinvest", JSON.stringify(this.boiteinvest));
                }
            }
            else{
                this.error = "Pas assez de Moons !";
                setTimeout(this.Resetcontent, 3000);
            }

        },
        Resetcontent(){
            this.error = "";
        },
        Retirer(){
            let multiple = this.coin.market_data.current_price.usd / this.investissementobj.price;
            let gains = this.investissementobj.invest * multiple;
            this.wallet = this.wallet + gains;
            localStorage.setItem("wallet", JSON.stringify(this.wallet));
            this.investissementobj = null;
            localStorage.removeItem(`${this.coin.id}info`);

            this.boiteinvest = JSON.parse(localStorage.getItem("boiteinvest"));
            this.boiteinvest = this.boiteinvest.filter(el => el.id !== this.id);
            localStorage.setItem("boiteinvest", JSON.stringify(this.boiteinvest));

        }
    }
}
</script>

<style scoped>
.investissement{
    background: rgb(180, 86, 149);
    background: linear-gradient(90deg, rgba(237, 178, 231, 0.481) 0%, rgba(255,255,255,0.8) 100%);
}
</style>