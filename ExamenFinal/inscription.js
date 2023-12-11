function Verif() {

//Récuperation des variables
let nom = document.getElementsByName("Nom")[0].value;
let prenom = document.getElementsByName("Prenom")[0].value;
let birthday = document.getElementsByName("Naissance")[0].value;
let mail = document.getElementsByName("Mail")[0].value;
let site = document.getElementsByName("Site")[0].value;
let code = document.getElementsByName("Password")[0].value;
let genre = document.querySelector('input[name="Genre"]:checked');
let pays = document.querySelector('select[name="Pays"]').value;
let formations = document.querySelector('input[name="formations"]:checked');
let image = document.getElementsByName("image")[0].file[0];
let description = document.getElementsByName("description").value[0].value;

//Vérifier si tous à été remplis
if (nom === "" || prenom === "" || birthday === "" || mail === "" || site === "" || code === "" || genre === null || pays === "" || formations === null || image === "" || description === "") {
    alert("Tous les champs doivent être remplis!");
    return false;
 }

 //Vérifier si le mot de passe à exactement 8 caractères
 if (mdp.length !== 8) {
    alert("Le mot de passe doit avoir exactement 8 caractères!");
    return false;
 }

  // Vérifier si un genre a été choisi
  if (genre === null) {
    alert("Vous devez choisir un genre!");
    return false;
 }

 // Vérifier si un pays a été choisi
 if (pays === "") {
    alert("Vous devez choisir un pays!");
    return false;
 }

// Vérifier si au moins 1 formation est choisi
if (formations.length === 0) {
    alert("Vous devez choisir au moins 1 formation!");
    return false;
 }

 // Vérifier si une image est sélectionnée
 if (!image) {
    alert("Vous devez sélectionner une image!");
    return false;
 }

 //Vérifier si l'image n'est pas trop lourde 
 let sizeLimit = 10240; // Équivalent a 10Ko
 if(image.size > sizeLimit) {
    alert("la taille de l'image doit être inférieur à 10Ko!");
    return false;
 }

 //Vérifie si le fichier image est .png
let accepttedExtension = ".png";
if(!image.name.endsWith(accepttedExtension)) {
    alert("L'image doit être un format .png!");
    return false;
}

 //Si tous est respectée, renvoie true
 alert("Compte créé avec succès!");
 return true;
}

//Met la bordure du TextArea en vert s'il perd le focus
document.getElementsByName("description").addEventListener("focusout", function() {
    this.style.borderColor = "green";
});