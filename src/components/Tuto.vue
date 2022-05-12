<template>
    <div class="text-dark">
        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
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
                    <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Pour voir toutes les cryptomonnaies ainsi que leurs informations
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal">Suivant</button>
                </div>
                </div>
            </div>
            </div>

            <div class="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 3</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Pour ajouter en favoris
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
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

