<template>
    <div>
        
        <div class="container" >


                <div class="card shadow text-dark my-5 col-md-12">
                    <h5 class="card-header">Envoyer votre message</h5>
                    <div class="card-body">
                        <select class="form-select mb-3" v-model="newpost.name" aria-label="Default select example">
                            <option disabled value="">Choisissez une catégorie</option>
                            <option value="Evenement">Evenement</option>
                            <option value="Alerte">Alerte</option>
                            <option value="News">News</option>
                        </select>
                        <textarea class="form-control mb-3" type="text" v-model="newpost.content" @keyup.enter="AddPost"></textarea>
                        <p class="text-danger">{{ errors }}</p>
                        <vue-recaptcha @verify="display = true" @expired="display = false" sitekey="6LcMww8gAAAAAO43c8j5uBAq43y5COT8Z6BcIH8S"></vue-recaptcha>
                        <button v-if="display" @click="AddPost" class="btn mt-3 btn-primary">Envoyer</button>
                        
                    </div>
                </div>
                <hr>

                <select class="form-select shadow w-25 border-dark" v-model="namechoice" aria-label="Default select example">
                            <option disabled value="">Choisissez une catégorie</option>
                            <option value="">Tous</option>
                            <option value="Evenement">Evenement</option>
                            <option value="Alerte">Alerte</option>
                            <option value="News">News</option>
                </select>

                <div v-for="post in Filtername" :key="post.id" class="card shadow text-dark my-5 col-md-12">
                    <h5 class="card-header d-flex justify-content-between">{{post.name}}
                        <button @click="Addlike(post)" class="btn btn-primary rounded-pill"> 
                            <strong>{{ post.likes }} 👍</strong>
                        </button> 
                    </h5>
                    
                    <div class="card-body">
                        <h5 class="card-title">{{ new Date (post.createdAt).toLocaleString('fr')}}</h5>
                        <p class="card-text">{{post.content}}</p>
                        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                    </div>
                </div>

                <div class="p-5 fs-1" v-if="Filtername.length == 0">
                    Aucuns messages dans cette catégorie
                </div>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {VueRecaptcha} from 'vue-recaptcha'

export default {
    name: "Social",
    components:{
        VueRecaptcha
    },
    data(){
        return{
            posts:[],
            newpost:{
                name:"",
                content:"",
                createdAt: "",
                likes: 0
            },
            namechoice:"",
            errors : "",
            likesme : 0,
            display : false
        }
    },

    created(){
        this.likesme = JSON.parse(localStorage.getItem('likesme'));

        this.GetPost();
        //setInterval(this.GetPost, 10000);
    },

    computed:{
        SortPosts(){
            return this.posts.sort((a,b) => {
                return new Date (b.createdAt) -  new Date(a.createdAt);
                })
        },
        Filtername(){
            return this.SortPosts.filter((post) => (post.name.includes(this.namechoice)));
        }
    },

    methods:{
        GetPost(){
            axios.get('https://627522206d3bc09e106b014f.mockapi.io/posts')
            .then((response) => {this.posts = response.data} ).catch(error => console.log(error));
        },
        AddPost(){
            if(this.newpost.content == ""){
                this.errors = "Renseigner votre message";
            }
            else if(this.newpost.name == ""){
                this.errors = "Renseigner une catégorie"
            }
            else{
                this.newpost.createdAt = new Date();
                axios.post('https://627522206d3bc09e106b014f.mockapi.io/posts', this.newpost)
                .then((response)=> {this.newpost.content = ""; this.posts.push(response.data);}).catch((error)=> console.log(error));
                localStorage.setItem("messages", JSON.stringify(this.newpost));
            }
        },
        Addlike(post){
            post.likes++;
            axios.put(`https://627522206d3bc09e106b014f.mockapi.io/posts/${post.id}`, post)
            .then((response)=> console.log(response)).catch(error => console.log(error));

            this.likesme++;
            localStorage.setItem("likesme", JSON.stringify(this.likesme));
        }
    }

}
</script>