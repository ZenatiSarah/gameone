function gestionChampsForm() {

    const first = document.getElementById('first').value;
    const last = document.getElementById('last').value;
    const email = document.getElementById('email').value;
    const birthdate = document.getElementById('birthdate').value;
    const quantity = document.getElementById('quantity').value;
    let formError = document.querySelector("#formError");


    conditionControl();
    prenomControl();
    nomControl();
    birthdateControl();
    quantityControl();
    locationControl();

    if (first == false || last == false || email == false || birthdate == false || quantity == false || location == false || conditions == false) {
        formError.textContent = "Veuillez remplir tout les champs du formulaire";
        formError.style.color = 'red';
        formError.style.fontSize = '15px';
        return false
    } else {
        formError.textContent = "";
        return true;
    }


};

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
        locationError.textContent = "Veuillez coacher ";
        locationError.style.color = 'red';
        locationError.style.fontSize = '15px';
        return false;
    } else {
        locationError.textContent = " ";
        return true;
    }
}

// Champs prenom
let prenom = document.getElementById("first");
let firstNameError = document.querySelector("#firstNameError");

function prenomControl() {
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

//Champs Nom
let nom = document.getElementById('last');
let lastNameError = document.querySelector("#lastNameError");

function nomControl() {
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

// Champs email
let email = document.getElementById('email');
const regexEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");

email.addEventListener('input', () => {
    if (regexEmail.test(email)) {
        console.log("email true")
        return true;
    } else {
        console.log("email false")
        return false;
    }

});

//Champs Birthdate
const birthdate = document.getElementById('birthdate');
let birthdateError = document.querySelector("#birthdateError");

function birthdateControl() {
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

//Champs Quantity
const quantity = document.getElementById('quantity');
let quantityError = document.querySelector("#quantityError");
function quantityControl() {
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


//Champs Conditions
let baliseConditions = document.getElementById("checkbox1");
let conditionError = document.querySelector("#conditionError");

function conditionControl() {
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




const form = document.querySelector("form");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    gestionChampsForm()

});
