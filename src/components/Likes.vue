<template>
    <div>
        <div class="bg-light shadow rounded text-dark p-3">
            <h3>Nombre de likes donnés</h3>
            <div class="text-center p-5">
                <h4 class="likesstyle" v-if="likes == null">0 👍</h4>
                <h4 class="likesstyle" v-else>{{ likes }} 👍</h4>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:"Likes",
    data(){
        return{
            likes : 0
        }
    },
    created(){
        this.likes = JSON.parse(localStorage.getItem('likesme'));
    }
}
</script>

<style scoped>
.likesstyle{
    font-size: 4em;
}
</style>