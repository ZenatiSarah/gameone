// DOM
let prenom = document.getElementById("first");
let nom = document.getElementById('last');
let email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
let baliseConditions = document.getElementById("checkbox1");

function prenomControl() {


    let firstNameError = document.querySelector("#firstNameError");

    if (prenom.value === "" || prenom.value.length < 2) {
        firstNameError.textContent = "Veuillez rentrer deux caractères minimum";
        firstNameError.style.color = 'red';
        firstNameError.style.fontSize = '15px';
        return false;

    } else if (prenom.value.length >= 2) {
        firstNameError.textContent = ""
        return true;
    }
}

prenom.addEventListener('input', () => {
    prenomControl();

});

function nomControl() {


    let lastNameError = document.querySelector("#lastNameError");

    if (nom.value === "" || nom.value.length < 2) {
        lastNameError.textContent = "Veuillez rentrer deux caractères minimum";
        lastNameError.style.color = 'red';
        lastNameError.style.fontSize = '15px';
        return false;
    } else if (nom.value.length >= 2) {
        lastNameError.textContent = ""
        return true;
    }
}
nom.addEventListener('input', () => {
    nomControl();
});

function validateEmail() {

    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const emailValue = email.value;
    let emailError = document.getElementById('emailError');

    if (regex.test(emailValue)) {
        emailError.textContent = "";
        return true;
    } else {
        emailError.textContent = "Veuillez rentrer une email valide";
        emailError.style.color = "red";
        emailError.style.fontSize = "15px"
        return false;
    }
}

email.addEventListener('change', () => {
    validateEmail();
});

function birthdateControl() {


    let birthdateError = document.querySelector("#birthdateError");

    if (birthdate.value == "") {
        birthdateError.textContent = "Veuillez remplir le champs ";
        birthdateError.style.color = 'red';
        birthdateError.style.fontSize = '15px';
        return false;
    } else {
        birthdateError.textContent = "";
        return true;
    }
}

birthdate.addEventListener('change', () => {
    birthdateControl();
});

function quantityControl() {


    let quantityError = document.querySelector("#quantityError");

    if (quantity.value == null || quantity.value < 1) {
        quantityError.textContent = "Indiquez le nombre de tournois ";
        quantityError.style.color = 'red';
        quantityError.style.fontSize = '15px';
        return false;
    } else {
        quantityError.textContent = "";
        return true;
    }
}

quantity.addEventListener('input', () => {
    quantityControl();
});

function locationControl() {
    let locationError = document.querySelector("#locationError");
    let baliseLocation = document.querySelectorAll('input[name="location"]');

    let location = "";

    for (let i = 0; i < baliseLocation.length; i++) {
        if (baliseLocation[i].checked) {
            location = baliseLocation[i].value
            break
        }
    }

    if (location == "") {
        locationError.textContent = "Veuillez choisir une ville ";
        locationError.style.color = 'red';
        locationError.style.fontSize = '15px';
        return false;
    } else {
        locationError.textContent = "";
        return true;
    }
}

function conditionControl() {

    let conditionError = document.querySelector("#conditionError");
    let conditions = baliseConditions.checked

    if (conditions == true) {
        conditionError.textContent = ""
        return true;
    } else {
        conditionError.textContent = "Veuillez acceptez les termes et conditions.";
        conditionError.style.color = 'red';
        conditionError.style.fontSize = '15px';
        return false;
    }
}

baliseConditions.addEventListener('input', () => {
    conditionControl();
});