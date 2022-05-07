console.log('obj');

/***************************************************/
// Chapitre 6 : les objets
/***************************************************/

/* Comme les arrays sont des objets, il y a une convention à respecter pour distinguer tout de suite si on veut considérernotre objet comme un Array ou non :
*/

//Pour déclarer des objets à propriétés numériques, on utilisera var/let/const monTableau = [];

//Pour déclarer des objets à propriétés nommées, on utilisera var/let/const monTableau = {};

/***************************************************/
// Notre premier objet
/***************************************************/

const monObjet1 = {
    nom: "Wayne",//Couple key:value (indice:valeur)
    prenom: "Bruce",
    pseudo: ["Batman", "Batou", "The dark knight"],
    age : 35,
    enemi: "Freeze",
    copine: "Catwoman",

    lancerBatrang: function() {//Déclaration d'une méthode
        console.log("Je vais pas rater");
    },

    repondreAFreeze: function() {
        console.log("T'es givré " + this.enemi);//Le mot clé "this" veut dire "lui-même". Il fait reférence à l'objet courant (celui dans lequel il se trouve). Pour accéder aux propriétés et aux fonctions (méthodes) de l'objet depuis l'objet lui-même, il faut utiliser le mot-clé "this".
    },

    changerCopine: function(newGirlFriend) {
        return this.copine = newGirlFriend;
    }
};

console.log(monObjet1);

//Accéder à la propriété d'un objet
console.log(monObjet1.prenom);//Bruce

//Appliquer une méthode à un objet
monObjet1.lancerBatrang();

console.log(monObjet1.copine);
monObjet1.changerCopine("Thalia Al Ghul");
console.log(monObjet1.copine);



