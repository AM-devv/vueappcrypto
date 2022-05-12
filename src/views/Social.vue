<template>
    <div>
        
        <div class="container" >


                <div class="card text-dark my-5 col-md-12">
                    <h5 class="card-header">Envoyer votre message</h5>
                    <div class="card-body">
                        <select class="form-select" v-model="newpost.name" aria-label="Default select example">
                            
                            <option value="Astronaute Nasa">Astronaute Nasa</option>
                            <option value="Astronaute Europe">Astronaute Europe</option>
                            <option value="Astronaute Asie">Astronaute Asie</option>
                        </select>
                        <textarea class="form-control mb-3" type="text" v-model="newpost.content" @keyup.enter="AddPost"></textarea>
                        <a href="#" @click="AddPost" class="btn btn-primary">Envoyer</a>
                    </div>
                </div>
                <hr>
            
                <div v-for="post in SortPosts" :key="post.id" class="card text-dark my-5 col-md-12">
                    <h5 class="card-header">{{post.name}}</h5>
                    <div class="card-body">
                        <h5 class="card-title">{{ new Date (post.createdAt).toLocaleString('fr')}}</h5>
                        <p class="card-text">{{post.content}}</p>
                        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                    </div>
                </div>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Social",
    components:{

    },
    data(){
        return{
            posts:[],
            newpost:{
                name:"",
                content:"",
                createdAt: ""
            }
            
        }
    },

    created(){
        this.GetPost();
        //setInterval(this.GetPost, 10000);
    },

    computed:{
        SortPosts(){
            return this.posts.sort((a,b) => {
                return new Date (b.createdAt) -  new Date(a.createdAt);
                })
        }
    },

    methods:{
        GetPost(){
            axios.get('https://627522206d3bc09e106b014f.mockapi.io/posts')
            .then((response) => {this.posts = response.data} ).catch(error => console.log(error));
        },
        AddPost(){
            this.newpost.createdAt = new Date();
            axios.post('https://627522206d3bc09e106b014f.mockapi.io/posts', this.newpost)
            .then((response)=> {this.newpost.content = ""; this.posts.push(response.data);}).catch((error)=> console.log(error));
        }
    }

}
</script>