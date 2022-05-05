<template>
    <div>
        <ul v-for="post in posts" :key="post.id">
            <li>
                {{ post.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Social",
    components:{

    },
    data(){
        return{
            posts:[
                {
                    id:1,
                    name:"post 1"
                },
                {
                    id: 2,
                    name:"post 2"
                }
            ]
        }
    },

    created(){
        //this.GetPost();
        //setInterval(this.GetPost, 10000);
    },

    computed:{

    },

    methods:{
        // GetPost(){
        //     axios.get('')
        //     .then((response) => {this.posts = response.data} ).catch(error => console.log(error));
        // }
    }

}
</script>