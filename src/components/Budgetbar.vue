<template>
    <div>
        <div class="bg-light shadow rounded text-dark p-3">
            <h3>Représentation investissements</h3>
            <h5>Sur {{ sum }} voici vos investissements</h5>
            <div class="w-100 d-flex">
                <div class="text-center p-1 investcolor" :style="{backgroundColor: '#'+(Math.random()*0xFFFFFF<<0).toString(16), width:((item.invest/sum)*100)+ '%'}" v-for="item in boiteinvest" :key="item.id">
                   <img :src="item.image" alt="cryptologo">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Budgetbar",
    data() {
        return{
            wallet: 0,
            boiteinvest : [],
            sum : 0
        }
        
    },
    created(){
        this.wallet = JSON.parse(localStorage.getItem("wallet"));
        this.boiteinvest = JSON.parse(localStorage.getItem("boiteinvest"));
        this.boiteinvest.forEach(element => {
            this.sum += element.invest;
        });
    }
}
</script>

<style scoped>

.investcolor{
    transition: all .2s ease-in-out;
}

.investcolor:hover{
    scale: 1.5;
}

.investcolor:first-child{
    border-radius: 5px 0px 0px 5px;
}

.investcolor:last-child{
    border-radius: 0px 5px 5px 0px;
}
</style>