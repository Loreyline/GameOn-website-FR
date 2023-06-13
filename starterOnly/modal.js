function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".btnClose");
const modalSucces = document.querySelector(".validation");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//fermeture modal
modalClose.addEventListener("click", close);

function close() {
  modalbg.style.display = "none";
}


//validation formulaire

//récupération des données du formulaire
let validation = document.getElementById('envoi');
let prenom = document.getElementById('first');
let erreurPrenom = document.getElementById('erreurPrenom');
let prenomValid = /^[a-zA-ZéèêîïÉÈÊôÔùçàÎÏÀ][A-Za-zéèêîïùçêôà]+(-'\s[a-zA-ZéèîïÉÈÊôÔùçàÎÏÀ][A-Za-zéèôêîïùçà]+)?/;
let nom = document.getElementById('last');
let erreurNom = document.getElementById('erreurNom');
let nomValid = /^[a-zA-ZéèêîïÉÈÊôÔùçàÎÏÀ][A-Za-zéèêîïùçêôà]+(-'\s[a-zA-ZéèîïÉÈÊôÔùçàÎÏÀ][A-Za-zéèôêîïùçà]+)?/;
let email = document.getElementById('email');
let erreurMail = document.getElementById('erreurMail');
let emailValid = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
let birthdate = document.getElementById('birthdate');
let erreurBirthdate = document.getElementById('erreurBirthdate');
let birthdateValid = /^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/;
let quantity = document.getElementById('quantity');//nombre de tournois précédents
let erreurQuantity = document.getElementById('erreurQuantity');
let quantityValid = /^[0-9]+([0-9]+)?/;
let lieu = document.querySelectorAll("[name='location']");//endroit ou veux participer le candidat
let erreurLocation = document.getElementById('erreurLocation');
let checkbox1 = document.getElementById('checkbox1');//validation des CGU
let erreurConditions = document.getElementById('erreurConditions');

validation.addEventListener("click", valider);

//fonction validation données formilaire
function valider(event) {

  //validation prénom
  if (prenom.value === "") {
    event.preventDefault();
    erreurPrenom.textContent = "Merci de renseigner votre prénom";
  } else if (prenomValid.test(prenom.value) == false) {
    event.preventDefault();
    erreurPrenom.textContent = " Format du prénom non valide";
  };

  //validation nom
  if (nom.value === "") {
    event.preventDefault();
    erreurNom.textContent = " Merci de renseigner votre nom";
  } else if (nomValid.test(nom.value) == false) {
    event.preventDefault();
    erreurNom.textContent = " Format du nom non valide";
  };

  //validation email
  if (email.value === "") {
    event.preventDefault();
    erreurMail.textContent = " Merci de renseigner votre mail";
  } else if (emailValid.test(email.value) == false) {
    event.preventDefault();
    erreurMail.textContent = " Format de l'email non valide";
  };

  //validation date de naissance
  if (birthdate.value === "") {
    event.preventDefault();
    erreurBirthdate.textContent = " Merci de renseigner votre date de naissance";
  } else if (birthdateValid.test(birthdate.value) == false) {
    event.preventDefault();
    erreurBirthdate.textContent = " jjmmaaaa";
  };

  //validation nombre de tournois passés
  if (quantity.value === "") {
    event.preventDefault();
    erreurQuantity.textContent = " Merci de renseigner le nombre de tournois auquels vous avez participé dans le passé";
  } else if (quantityValid.test(quantity.value) == false) {
    event.preventDefault();
    erreurQuantity.textContent = "Merci de renseigner un nombre";
  };

  //validation de la localisation du tournoi
  let lieuChecked = false;
  for (let i = 0; i < lieu.length; i++) {
    if (lieu[i].checked) {
      lieuChecked = true;
      break;
    }
  };

  if (!lieuChecked) {
    event.preventDefault();
    erreurLocation.textContent = "Merci de choisir un lieu pour votre inscription au tournois"
  };

  //validation CGU
  if (!checkbox1.checked) {
    event.preventDefault();
    erreurConditions.textContent = " Merci de valider les conditions générales d'utilisation";
  };

  //ouverture de la modal succes

  modalSucces.style.display = "block";

} 
