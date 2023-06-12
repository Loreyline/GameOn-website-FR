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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//fermeture modal



//validation formulaire

//récupération des données du formulaire
let validation = document.getElementById('envoi');
let prenom = document.getElementById('first');
let erreurPrenom = document.getElementById('erreurPrenom');
let prenomValid = /^[a-zA-ZéèêîïÉÈÊôÔùçàÎÏÀ][a-zéèêîïùçêôà]+(-'\s[a-zA-ZéèîïÉÈÊôÔùçàÎÏÀ][a-zéèôêîïùçà]+)?/;
let nom = document.getElementById('last');
let erreurNom = document.getElementById('erreurNom');
let nomValid = /^[a-zA-ZéèêîïÉÈÊôÔùçàÎÏÀ][a-zéèêîïùçêôà]+(-'\s[a-zA-ZéèîïÉÈÊôÔùçàÎÏÀ][a-zéèôêîïùçà]+)?/;
let email = document.getElementById('email');
let erreurMail = document.getElementById('erreurMail');
let emailValid = /^[a-zA-ZéèêîïÉÈÊôÔùçàÎÏÀ0-9][a-zéèêîïùçêôà0-9]+(-'\s[a-zA-ZéèîïÉÈÊôÔùçàÎÏÀ0-9][a-zéèôêîïùçà0-9]+)?+[@]+[a-z0-9]+[.]+[a-z0-9][a-z0-9][a-z0-9]+([a-z0-9])?/;
let birthdate = document.getElementById('birthdate');
let erreurBirthdate = document.getElementById('erreurBirthdate');
let birthdateValid = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/;
let quantity = document.getElementById('quantity');//nombre de tournois précédents
let erreurQuantity = document.getElementById('erreurQuantity');
let quantityValid = /^[0-9]+([0-9]+)?/;
let location = document.getElementsByName('location');//endroi ou veux participer le candidat
let erreurLocation = document.getElementById('erreurLocation');
let checkbox1 = document.getElementById('checkbox1');//validation des CGU
let erreurConditions = document.getElementById('erreurConditions');

validation.addEventListener("click", valider);

//fonction validation données formilaire
function valider(event) {

  //validation prénom
  if (prenom.validity.valueMissing) {
    event.preventDefault();
    erreurPrenom.textContent = " Merci de renseigner votre prénom";
  } else if (prenomValid.test(prenom.value) == false) {
    event.preventDefault();
    erreurPrenom.textContent = " Format du prénom non valide";
  };

  //validation nom
  if (nom.validity.valueMissing) {
    event.preventDefault();
    erreurNom.textContent = " Merci de renseigner votre nom";
  } else if (nomValid.test(nom.value) == false) {
    event.preventDefault();
    erreurPrenom.textContent = " Format du nom non valide";
  };

  //validation email
  if (email.validity.valueMissing) {
    event.preventDefault();
    erreurMail.textContent = " Merci de renseigner votre mail";
  } else if (emailValid.test(email.value) == false) {
    event.preventDefault();
    erreurPrenom.textContent = " Format de l'email non valide";
  };

  //validation date de naissance
  if (birthdate.validity.valueMissing) {
    event.preventDefault();
    erreurBirthdate.textContent = " Merci de renseigner votre date de naissance";
  } else if (birthdateValid.test(birthdate.value) == false) {
    event.preventDefault();
    erreurPrenom.textContent = " jjmmaaaa";
  };

  //validation nombre de tournois passés
  if (quantity.validity.valueMissing) {
    event.preventDefault();
    erreurQuantity.textContent = " Merci de renseigner le nombre de tournois auquels vous avez participé dans le passé";
  } else if (quantityValid.test(quantity.value) == false) {
    event.preventDefault();
    erreurPrenom.textContent = "Merci de renseigner un nombre";
  };

  //validation de la localisation du tournoi
  if (location.validity.valueMissing) {
    event.preventDefault();
    erreurLocation.textContent = " Merci de cocher le lieu où vous souhaitez participer";
  };

  //validation CGU
  if (checkbox1.validity.valueMissing) {
    event.preventDefault();
    erreurConditions.textContent = " Merci de valider les conditions générales d'utilisation";
  };
}
