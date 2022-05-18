<template>
    <div id="test" class="justify-content-center bg-light row">
        <footer class=" col-md-10 text-dark row py-5 align-items-center">
            <ul class="text-dark nav flex-column col-md-4">
                <li class="nav-item">
                    <a class="navbar-brand" href="#">
                        <img src="../assets/logovuecrpdark.png" width="250" alt="logo">
                    </a>
                </li>
                <li class="nav-item"><router-link class="nav-link" :to="{ name: 'home' }">Acceuil</router-link></li>
                <li class="nav-item"><router-link class="nav-link" :to="{ name: 'about' }">A propos</router-link></li>
                <li class="nav-item"><router-link class="nav-link" :to="{ name: 'prix' }">Prix</router-link></li>
                <li class="nav-item"><router-link class="nav-link" :to="{ name: 'social' }">Social</router-link></li>
                <li class="nav-item"><router-link class="nav-link" :to="{ name: 'dashboard' }">Dashboard</router-link></li>
            </ul>

            <p class="col-md-4">Copyright © Tous droits réservé</p>

            <div class="col-md-4">
                <form>
                    <h5>Inscrivez-vous à notre newsletter</h5>
                    <p>Les meilleurs actu de la crypto</p>
                    <div class="d-flex w-100 gap-2">
                        <label for="newsletter1" class="visually-hidden">Email address</label>
                        <input id="newsletter1" type="email" v-model="emailobj.email" class="form-control" placeholder="Adresse mail">
                        <button class="btn btn-primary" @click="Sendemail" type="button">S'abonner</button>
                    </div>
                    <p class="text-danger">{{ errors }}</p>
                </form> 
            </div>
            
        </footer>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name:"FooterPrincipale",

    data(){
        return{
            emailobj: {
                email : ""
            },
            errors: ""
        }
    },

    methods:{
        Resetcontent(){
            this.errors = "";
        },
        Sendemail(){
            if(this.emailobj.email == ""){
                this.errors = "Renseigner votre email";
            }
            else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.emailobj.email)){
                this.errors = "Renseigner un email valide";
            }
            else{
                axios.post('https://627522206d3bc09e106b014f.mockapi.io/emails', this.emailobj)
            .then((response)=> {this.emailobj.email = ""; this.errors = "Email envoyé"}).catch((error)=> console.log(error));
            }
            
            setTimeout(this.Resetcontent, 5000);
        }
    }
}
</script>

<style scoped>
footer{
    overflow: hidden;
}

#test{
    height: 60vh;
}
</style>