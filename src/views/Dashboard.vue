<template>
    <div class="vh-100">
        <h2>Votre tableau de bord</h2>
        <h3>cryptos favorites</h3>
        <div>
            <ul>
                <li v-for="favorite in favorites" :key="favorite.id">
                    {{ favorite.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"Dashboard",
    data(){
        return{
            favorites:[]
        }
    },
    created(){
        this.favorites = JSON.parse(localStorage.getItem('favorites'));
    }
}
</script>