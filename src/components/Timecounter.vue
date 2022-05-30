<template>
    <div>
        <div class="bg-light shadow rounded text-dark p-3">
            <h3>Temps passé sur l'application</h3>
            <div class="text-center p-5">
                <div v-if="timecounter == 0" class="spinner-border" role="status"></div>
                <h4 v-else class="timestyle">{{ new Date(timecounter*1000).toLocaleString('fr',{ timeZone: 'UTC' }).substr(13) }} ⏱</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Timecounter",

    data(){
        return{
            timecounter : 0
        }
    },

    created(){
        setInterval(this.Gettime,1000);
    },
    methods:{
        Gettime(){
            this.timecounter = JSON.parse(localStorage.getItem('timer'));
        }
    }
}
</script>

<style scoped>
.timestyle{
    font-size: 4em;
}
</style>
