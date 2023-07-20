//DOM
const form = document.querySelector(".form");

//Fonction vérification envoie formulaire s'il n'est pas vide ou s'il n'a pas d'erreur
function gestionChampsForm() {

    const email = document.getElementById('email').value;
    const formError = document.querySelector("#formError");
    const formConfirm = document.querySelector('.formConfirm');

    //Afficher les messages d'erreur sous les champs
    prenomControl();
    nomControl();
    birthdateControl();
    quantityControl();
    locationControl();
    validateEmail();
    conditionControl();


    if (prenomControl() == false || nomControl() == false || email == false || birthdateControl() == false || quantityControl() == false ||
        locationControl == false || conditionControl == false) {

        formError.textContent = "Veuillez remplir tout les champs du formulaire";
        formError.style.color = 'red';
        formError.style.fontSize = '15px';
        return false
    } else {
        console.log("formulaire true");
        formError.textContent = "";
        formConfirm.style.display = "flex";
        form.style.display = "none";

        return true;
    }

};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    gestionChampsForm()

});
