<template>
    <div>
        <div class="bg-light shadow rounded text-dark p-3">
            <h3>Temps passé sur l'application</h3>
            <div class="text-center p-5">
                <div v-if="timecounter == 0" class="spinner-border" role="status"></div>
                <h4 v-else class="timestyle">{{ h }}:{{ m }}:{{ s }} ⏱</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Timecounter",

    data(){
        return{
            timecounter : 0,
            h:0,
            m:0,
            s:0,
        }
    },

    created(){
        this.Gettime();
        setInterval(this.Gettime,1000);
    },
    methods:{
        Gettime(){
            this.timecounter = JSON.parse(localStorage.getItem('timer'));

            this.h = Math.floor(this.timecounter/ 3600).toString().padStart(2,'0');
            this.m = Math.floor(this.timecounter % 3600 / 60).toString().padStart(2,'0');
            this.s = Math.floor(this.timecounter % 60).toString().padStart(2,'0');

        }
    }
}
</script>

<style scoped>
.timestyle{
    font-size: 4em;
}
</style>
