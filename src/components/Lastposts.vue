<template>
    <div>
        <div class="bg-light shadow rounded text-dark p-3">
            <h3>Tous les posts likés</h3>
            <div v-for="post in postsliked" :key="post.id" class="card my-3 shadow text-dark">
                <div class="card-header">
                    {{post.name}}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{ new Date (post.createdAt).toLocaleString('fr')}}</h5>
                    <p class="card-text">{{post.content}}</p>
                </div>
            </div>
            <p v-if="postsliked.length == 0">Aucuns messages likés</p>
        </div>
    </div>
</template>


<script>
export default {
    name: "Lastposts",
    data(){
        return{
            postsliked : JSON.parse(localStorage.getItem('postsliked')) || []
        }
    }
}
</script>