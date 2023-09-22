"use strict"; //signifie on va travailler avec java strict pour avoir aucune erreur

/**           CONDITION
 * declarer trois variable a=4,b=4,c=3
 * 
 * a sera l expression de reference 
 * si a est egal a b alor faire un console log('egal à b')
 * 
 * si a est egal a c alors faire un console log('egal à b')
 * 
 * par defaut il y a un console log("egal a rien")
 */





let a = 4;   //variable a déclarer avec la valeur 4
let b = 4;   //variable b déclarer avec la valeur 4
let c = 3;   //variable c déclarer avec la valeur 3

switch(a){          //utilisation du switch pour test la variable a
    case b:         //test si la variable b égal a
        console.log("égal à b");   //si b égal a on affiche le message avec console.log
        break;   //pour arreter le test de case b
    case c:         //test si la variable c égal a
        console.log("égal à c"); 
        break;
    default:   //la réponse par défaut si aucun des tests au dessus est juste
        console.log("égal à rien");
}