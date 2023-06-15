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
const modalSucces = document.querySelector(".succes");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//fermeture des modales 
modalClose.addEventListener("click", close);

function close() {
  modalbg.style.display = "none";
  modalSucces.style.display = "none";
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
let quantityValid = /^[0-9]+([0-9])?/;
let lieu = document.querySelectorAll("[name='location']");//endroit ou veux participer le candidat
let erreurLocation = document.getElementById('erreurLocation');
let checkbox1 = document.getElementById('checkbox1');//validation des CGU
let erreurConditions = document.getElementById('erreurConditions');
let valid = true;//vérification de la validité du formulaire

validation.addEventListener("click", valider);

//fonction validation données formilaire
function valider(event) {
  event.preventDefault();

  //validation prénom
  if (prenom.value === "") {
    erreurPrenom.textContent = "Merci de renseigner votre prénom";
    valid = false;
  } else if (prenomValid.test(prenom.value) == false) {
    erreurPrenom.textContent = "Format du prénom non valide";
    valid = false;
  } else {
    erreurPrenom.textContent = "";
  }

  //validation nom
  if (nom.value === "") {
    erreurNom.textContent = "Merci de renseigner votre nom";
    valid = false;
  } else if (nomValid.test(nom.value) == false) {
    erreurNom.textContent = "Format du nom non valide";
    valid = false;
  } else {
    erreurNom.textContent = "";
  }

  //validation email
  if (email.value === "") {
    erreurMail.textContent = "Merci de renseigner votre mail";
    valid = false;
  } else if (emailValid.test(email.value) == false) {
    erreurMail.textContent = "Format de l'email non valide";
    valid = false;
  } else {
    erreurMail.textContent = "";
  }

  //validation date de naissance
  if (birthdate.value === "") {
    erreurBirthdate.textContent = "Merci de renseigner votre date de naissance";
    valid = false;
  } else if (birthdateValid.test(birthdate.value) == false) {
    erreurBirthdate.textContent = "jj/mm/aaaa";
    valid = false;
  } else {
    erreurBirthdate.textContent = "";
  }

  //validation nombre de tournois passés
  if (quantity.value === "") {
    erreurQuantity.textContent = "Merci de renseigner le nombre de tournois auquels vous avez participé dans le passé";
    valid = false;
  } else if (quantityValid.test(quantity.value) == false) {
    erreurQuantity.textContent = "Merci de renseigner un nombre valide entre 0 et 99";
    valid = false;
  } else {
    erreurQuantity.textContent = "";
  }

  //validation de la localisation du tournoi
  let lieuChecked = false;
  for (let i = 0; i < lieu.length; i++) {
    if (lieu[i].checked) {
      lieuChecked = true;
      break;
    }
  }

  if (!lieuChecked) {
    erreurLocation.textContent = "Merci de choisir un lieu pour votre inscription au tournois";
    valid = false;
  } else {
    erreurLocation.textContent = "";
  }

  //validation CGU
  if (!checkbox1.checked) {
    erreurConditions.textContent = "Merci de valider les conditions générales d'utilisation";
    valid = false;
  } else {
    erreurConditions.textContent = "";
  }

  //ouverture de la modal succes
  if (valid === true) {
    modalSucces.style.display = "block";
  }
}

//utilisation du bouton fermer pour fermer la modal succes

const succesClose = document.querySelector(".succes-close");

succesClose.addEventListener("click", closeSucces);

function closeSucces() {
  modalSucces.style.display = "none";
}

