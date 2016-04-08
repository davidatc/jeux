$(document).ready(function(){
$(".commencer").click(function(){

     $("img").removeClass("cache").addClass("visible");

     $("img").click(function () {

         $("img").hide();
         $(this).show();
         $(".ordi img").hide();

         $("#"+choixOrdi).show();



 });

});


});
var figure =["ciseaux","pierre","feuille"];
var choixOrdi = aleatoire();

function aleatoire(){

    carteAleatoire = figure[Math.floor(Math.random()*figure.length)];
    return carteAleatoire;
}




 var  pierre= pierre.png
 var feuille = feuille.png
 var ciseaux =ciseaux.png

function compareplz( vous,ordi) {
if ((vous=pierre) && (ordi==pierre)) {
document.alert("Vous avez tous les deux choisis Pierre, Egalité !");
}
if ((vous==feuille) && (ordi==feuille)) {
document.alert("Vous avez tous les deux choisis Feuille, Egalité !");
}
if ((vous==ciseaux) && (ordi==ciseaux)) {
document.alert ("Vous avez tous les deux choisis Ciseau, Egalité !");
}
if ((vous==pierre) && (ordi==feuille)) {
document.alert("La feuille bat la pierre, vous avez perdu.");
}
if ((vous==feuille) && (ordi==ciseaux)) {
document.alert("Le ciseau bat la feuille, vous avez perdu.");
}
if ((vous==ciseaux) && (ordi==pierre)) {
document.alert("La pierre bat le ciseau, vous avez perdu.");
}
if ((vous==pierre) && (ordi==ciseaux)) {
document.alert("La pierre bat le ciseau, vous avez gagné.");
}
if ((vous==feuille) && (ordi==Pierre)) {
document.alert("La feuille bat la pierre, vous avez gagné.");
}
if ((vous==ciseaux) && (ordi==feuille)) {
document.alert("Le ciseau bat la feuille, vous avez gagné.");
}
}
