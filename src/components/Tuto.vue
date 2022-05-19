<template>
    <div class="text-dark">
        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalToggleLabel">Bienvenu !</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Bienvenu dans le tutoriel vous pouvez le quitter à tout moment en cliquant sur la croix où à l'exterieur de la fenetre.
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Suivant</button>
                </div>
                </div>
            </div>
            </div>
            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalToggleLabel2">Voir l'état du marché</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Pour voir toutes les cryptomonnaies ainsi que leurs informations rendez-vous dans l'onglet "Prix actuel"
                    <img src="../assets/tutoprix.png" class="img-fluid rounded mt-3" alt="tutoprix">
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal">Suivant</button>
                </div>
                </div>
            </div>
            </div>

            <div class="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalToggleLabel3">Ajouter en favoris</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Pour ajouter en favoris les cryptomonnaies qui vous interesse le plus cliquez sur le coeur
                    <img src="../assets/tutofav.png" class="img-fluid rounded mt-3" alt="tutofav">
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" data-bs-target="#exampleModalToggle5" data-bs-toggle="modal">Suivant</button>
                </div>
                </div>
            </div>
            </div>

            <div class="modal fade" id="exampleModalToggle5" aria-hidden="true" aria-labelledby="exampleModalToggleLabel5" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalToggleLabel5">Tableau de bord</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Pour retrouver vos favoris et vos anciens messages rendez-vous dans le "Dashboard" ce sera votre tableau de bord
                    <img src="../assets/tutodashboard.png" class="img-fluid rounded mt-3" alt="tutodashboard">
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" data-bs-target="#exampleModalToggle6" data-bs-toggle="modal">Suivant</button>
                </div>
                </div>
            </div>
            </div>

            <div class="modal fade" id="exampleModalToggle6" aria-hidden="true" aria-labelledby="exampleModalToggleLabel6" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalToggleLabel6">Envie de parler ?</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Si vous souhaiter faire part d'un message ou d'un evenement sur la crypto rendez-vous dans l'onglet "Social"
                    <img src="../assets/tutosocial.png" class="img-fluid rounded mt-3" alt="tutosocial">
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" data-bs-target="#exampleModalToggle6" data-bs-toggle="modal">Fini !</button>
                </div>
                </div>
            </div>
            </div>
            <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Tutoriel</a>
    </div>
</template>

<script>
export default {
    name:"Tuto",
}
</script>

