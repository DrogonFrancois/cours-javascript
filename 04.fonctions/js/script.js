console.log('chap 4 js fonctions');
/***************************************************/
// CHAIPTRE 4 : LES FONCTIONS
/***************************************************/

/***************************************************/
// 9. Fonctions
/***************************************************/

//Fonction - définition :
//Une fonction est morceau de code isolé à laquelle on fait appel pour automatiser une action.

/***************************************************/
// 9.1 Fonctions prédéfinies
/***************************************************/


//Fonction prédéfinie - définition :
//Une fonction prédéfinie est une fonction déjà existante dans le langage. Elle peut être utilisée en faisant appel à elle dans notre code en la nommant.

/* Voici quelques fonctions utiles pour les variables de type string. */

//NB : Une variable de type string, est en réalité un objet string qui possède des propriétés et des méthodes (fonctions appliquées à un objet). Pour y accéder, les syntaxes sont les suivantes :
    //variable.propriete;
    //variable.methode();
//Pour utiliser une fonction, la syntaxe est la suivante :
    //fonction();

/* .length */
// La propriété length représente la longueur d'une chaine de caractères.
var mot ="chocolat";
console.log(mot.length);//Affiche 8

/* .toUpperCase() */
//La méthode .toUpperCase passe tous les caractères d'une chaine en majuscule.
mot = mot.toUpperCase();
console.log(mot);//Affiche "CHOCOLAT"

/* .toLowerCase() */
// La méthodes .toLowerCase passe tous les caractères d'une chaine en minuscule.
mot = mot.toLowerCase();
console.log(mot);//Affiche "chocolat"

/* .indexOf() */
//La méthode indexOf() renvoie l'indice (index) de la première occurence de la valeur recherchée au sein d'une chaine courante (à parir de indexDébut).
//syntaxe :
    //str.indexOf(valeur recherchée)
    //str.indexOf(valeurRecherchée, indexDébut)
var phrase = "Je mange du chocolat";
console.log(phrase.indexOf("mange"));//Affiche 3 car le mot "mange" commence au 3e caractère de la phrase (en comptant à partir de 0).

var phrase2 = "Je mange et remange du chocolat";
console.log(phrase2.indexOf("mange", 4));//Affiche 14, l'emplacement de la 2e occurence du mot "mange" (remange).

/* substring */
//La méthode substring() retourne une sous-chaine courante, entre un indice de début et un indice de fin.
var mot = "choux-fleur";
console.log(mot.substring(6));//Affiche "fleur". 6 indique le point de départ
console.log(mot.substring(0,5));//Affiche "choux". 0 indique le début, et 5 la longueur de la chaine souhaitée.

/* split() */
//La méthode split() divise uen chaine de caractères en une liste ordonnée de sous-chaines, place ces sous-chaines dans un tableau et retourne ce tableau. La division est effectuée en recherchant un motif; où le motif est fourni comme premier paramètre dans l'appel de la méthode.
var maPhrase = "Je marche seul et je ne me retourne pas";
console.log(maPhrase.split(' '));//Affiche chaque bout de texte séparé par un espace dans une ligne du tableau

var maPhrase2 = "Je-marche-seul-et-je-ne-me-retourne-pas";
console.log(maPhrase2.split('-'));//Affiche chaque bout de texte séparé par un tiret dans une ligne du tableau

/* replace */ 
//La méthode "replace" remplace une chaine ou une partie de chaine par une autre chaine.
console.log(maPhrase.replace("seul", "accompagné"));

/* les fonctions "parseInt" et "parseFloat" */
var chiffre = '5.4';
console.log(parseInt(chiffre));//transforme une chaine en nombre entier (ne conserve pas les décimales)
console.log(typeof chiffre);
console.log(typeof parseInt(chiffre));
console.log(parseFloat(chiffre));//transforme une chaine en nombre flottant (conserve les décimales)

/* La fonction isNaN */
//isNan peut être traduit pas "ceci n'est pas un chiffre". Si la valeur évaluée n'est pas un chiffre, isNaN renvoie true. Autrement, il renvoie false.
    var val1 = "bouteille";
        val2 = '7';
        val3 = '7sept';
        val4 = 7;

    console.log(isNaN(val1));//Affiche true
    console.log(isNaN(val2));//Affiche false. Un string comprenant un nombre est considéré comme un nombre
    console.log(isNaN(val3));//Affiche true. Un string comprenant un nombre et des lettres n'est pas considéré comme un nombre.
    console.log(isNaN(val4));//affiche false


/***************************************************/
// 9.2 Fonctions utilisateur
/***************************************************/

/***************************************************/
// 9.2.1 Première fonction
/***************************************************/

// 1. Création de la fonction
function salutation() {
    //Le mot-clé "function" permet de déclarer une fonction.
    // Ensuite, on nomme la fonction (nom au choix). Par convention, on utilise le camelcase.
    //Les parenthèses définissent les paramètres de la fonctions s'il y en a. Autrement, elles peuvent rester vides.
    //Les accolades définissent le périmètre de la fonction et la zone qui va contenir notre code à exécuter.
    console.log("Bonjour !");//Quand la fontion s'exécutera, elle affichera "Bonjour !" dans la console.
}

// 2. Appel de la fonction
salutation();//Après avoir créé ma fonction, je l'appelle pour qu'elle s'exécute. //Affiche "Bonjour !"

/***************************************************/
// 9.2.2 Paramètres et arguments
/***************************************************/

//Une fonction peut reçevoir des informations en entrée (via ses paramètres) et peut retourner quelque chose. Ces paramètres sont des espaces de nom qui sont inscrits dans les parenthèses de la fonction lors de sa création. Lors de l'exécution, la fonction attends des "arguement" à l'emplacement de ces paramètres.

function direBonjour(aQui) {//On crée une fonction "direBonjour", avec un paramètre que l'on a appelé "aQui". Une fonction peut acceuillir plusieurs paramètres en les séparant par une virgule.
    console.log("Bonjour " + aQui);//La fonction effectue une console.log de "Bonjour " et de l'argument qui sera placé en argument lors de l'appel de la fonction.
}

direBonjour("Khalfi");//J'appelle ma fonction "direBonjour", et je place mon argument "Khalfi". Affiche "Bonjour Khalfi".
direBonjour("Emric");
direBonjour("Facundo");
direBonjour("Romain");

//NB : L'arguement peut être une valeur ou une variable contenant une valeur.

var prenom = "Leslie";

direBonjour(prenom);//Affiche "Bonjour Leslie".

//Autre exemple
function calculTva(taux, prixHt) {//La fonction calculTva intègre 2 paramètres le taux de TVA à appliquer et le prixHt sur lequel la TVA doit être appliquée.
    return prixHt * (1 + taux);//Retourne le calcul
    // console.log(prixHt * (1 + taux));
}

//1 paramètre attend 1 argument

var prixTtc = calculTva(0.2, 10);
console.log(prixTtc);//Affiche 12

//console.log(calculTva(0.2, 10));//Affiche 12.

//Valeur par défaut

//Attention, quand un nom a été défini à une fonction, il ne doit plus être réutilisé pour une autre fonction. Il faut créer un nouveau nom ou modifier la fonction d'origine.
function calculTva2(prixHt,taux = 1.2) {
    return (prixHt * taux) + "€ TTC";
}

//Chaussure à 50€ HT
console.log(calculTva2(50));//Affiche 60€ TTC avec un taux de 1.2 (20%) par défaut
console.log(calculTva2(50, 1.055));//Affiche 52.75 € TTC. Ici, la valeur par défaut du taux est écrasée par la valeur placée en argument (1.055).

//test

function checkDieselCar(voiture) {
    if(voiture == "diesel") {
        console.log("Je l'achète");
    } else if(voiture == "essence") {
        console.log("Je ne l'achète pas mais je continue à chercher");
    } else {
        console.log("Je ne connais pas l'énergie de cette voiture");
    }
}

var tesla = "electric";
var twingo = "essence";
var rs3 = "diesel";

checkDieselCar(twingo);
checkDieselCar(tesla);
checkDieselCar(rs3);


/************************************************************/
// 9.2.3 Espace global vs espace local var, let et const
/************************************************************/

/* AVANT ES6 */
//Toutes les variables étaient déclarées avec "var"

// exemple :
    var var1 = "variable 1";//Déclaration et affectation
    console.log(var1);
    var1 = "variable1 redéfinie";//Variable redéfinie. Réaffectation.
    console.log(var1);
    var var1 = "redéclaration de variable 1";//Redéclaration
    console.log(var1);

/* APRES ES6 */
//Les variables peuvent être déclarée avec 3 mots clés :
    //var crée une variable qui peut être redéfinie et redéclarée.
    //let crée une variable qui peut être redéfinie mais pas redéclarée.
    //const crée une variable qui ne peut ni être redéfinie, ni être redéclarée.

/* La portée des variables */   
    //Chacun des ces mots-clés (var, let , const) crée une variable qu iaura une portée différente selon les cas.

/* La portée - définition */
    //La portée d'une variable est l'espace dans lequel elle est accessible.
    //Il existe 2 niveaux de portée :
        // La portée locale
        // la portée globale.

/* Espace local - définition : */
    //Un espace local est le code déclaré à l'intrieur d'un fonction. Ainsi, une variable déclarée dans un espace local est une variable locale. On dit qu'elle a une portée locale. La variable locale ,'est accessible que dans cet espace.

    //Exemple :
        function maVille() {
            let ville = "Paris";//Ville est une variable locale car elle est décarée à l'intérieur de la fonction (dans un espace local)
            return ville;
        }
        console.log(maVille());//Affiche "Paris"
        //console.log(ville);//Affiche "ville is not defined". ville n'existe pas dans l'espace global.

    //exo : 
    var chaine = "Je suis une phrase";

    function resize(texte) {
        let resizedText = texte.substring(0,8);
        return resizedText;
    }

    var maChaineRaccourcie = resize(chaine);
    console.log(maChaineRaccourcie);

    console.log(resize(chaine));

    /* Espace global - définition : */
        //Un espace global est le code déclaré à l'extérieur d'une fonction. ainsi, tout ce qui est déclaré dans le document, ailleurs que dans une fonction, à une portée globale.
        //En JavaScript, une variable déclarée dans un espace global est accessible depuis tout le script (même à l'intérieur des blocks {}, et tout changement impacte les 2 espaces.).


        var monPays = "France";

        function quelPays() {
            monPays = "Australie";//Redéfinition de la variable monPays issue de mon espace globale
            return monPays;
        }

        console.log(quelPays()); //Affiche "Australie"
        console.log(monPays);//Affiche "Australie"
    
    /* Suggestion : quand utiliser var, let et const */
        //var : à éviter (variable fourre-tout)
        //let : à utiliser en local (dans les blocks de type fonction, condition...) ou quand on souhaite changer la valeur d'une variable.
        //const : à utiliser quand on veut définir des constantes, une valeur qui ne doit pas changer.

/***************************************************/
// FIN DU CHAPITRE
/***************************************************/

/***************************************************/
// NEXT : LES TABLEAUX ARRAYS
/***************************************************/