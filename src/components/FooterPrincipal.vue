<template>
    <div class="justify-content-center bg-light row">
        <footer class=" col-md-10 text-dark row py-5">
            <ul class="text-dark nav flex-column col-md-4">
                <li class="nav-item">
                    <a class="navbar-brand" href="#">
                        <img src="../assets/logovuecrpdark.png" width="250" alt="logo">
                    </a>
                </li>
                <li class="nav-item"><router-link class="nav-link" :to="{ name: 'home' }">Acceuil</router-link></li>
                <li class="nav-item"><router-link class="nav-link" :to="{ name: 'about' }">About</router-link></li>
                <li class="nav-item"><router-link class="nav-link" :to="{ name: 'prix' }">Prix</router-link></li>
            </ul>

            <p class="col-md-4">Copyright © Tous droits réservé</p>

            <div class="col-md-4">
                <form>
                    <h5>Inscrivez-vous à notre newsletter</h5>
                    <p>Les meilleurs actu de la crypto</p>
                    <div class="d-flex w-100 gap-2">
                        <label for="newsletter1" class="visually-hidden">Email address</label>
                        <input id="newsletter1" type="text" class="form-control" placeholder="Adresse mail">
                        <button class="btn btn-primary" type="button">S'abonner</button>
                    </div>
                </form> 
            </div>
            
        </footer>
    </div>
</template>

<script>
export default {
    name:"FooterPrincipale"
}
</script>

<style scoped>
footer{
    overflow: hidden;
}
</style>