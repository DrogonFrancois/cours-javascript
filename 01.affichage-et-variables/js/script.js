/**************************************/
/**JavaScript Cours
/**************************************/

/**************************************/
/** CHAPITRE 1 : AFFICHAGE ET VARIABLES
/**************************************/

/**************************************/
// 1. Commenter un fichier js
/**************************************/

//Commentaire su une seule ligne
/* Commenter sur ...
... plusieurs lignes */

/**************************************/
// 2. Affichage
/**************************************/


/**************************************/
// 2.1 Boite de dialogue
/**************************************/

/* Afficher une alerte */
//alert('Bonjour');//Affiche une boite de dialogue avec le message 'Bonjour'. Cliquer sur le bouton 'ok' la fait disparâitre, mais chaque rafraîchissement de la page, la boite réapparaît.

/* Afficher une question */
//confirm("J'espère que tu vas bien");//Le "confirm" affiche 2 options. "ok" ou "annuler". Cette fonction attend donc une réponse. 

/* Afficher une question ouverte */
//prompt("Comment t'appelle-tu ?"); //"Prompt" affiche la question posée entre les parenthèses et un champ pour pouvoir y répondre.


/**************************************/
// 2. La console
/**************************************/

//La console est un outils de débogage intégré au navigateur Internet. Il est accessible depuis l'inspecteur en cliquant sur l'onglet "console".

/* Afficher dans la console */
console.log('Je suis là'); //Affiche le texte dans la console.
//NB : Afficher un log dans la console est la première étape à faire quand on travaille sur un fichier Js. Son bon fonctionnement confirme que la liaison entre le html et le js est établie.

/**************************************/
// 3. Les variables
/**************************************/

//Une variable est un conteneur qui permet de stocker des données.
//Elle peut être imaginée comme une boîte qui contient de la data.

//Une variable possède différentes caracteristiques :
    // Elle est précédée d'une instruction (mots clés : var, let, const), qui permet de la déclarer
    //Elle a un nom
    //Elle peut stocker différents types de données
    //Elle se termine par ";"

//Déclarer une variable
var maVariable;

//Affecter une valeur à une variable
maVariable = 'Je suis un texte dans une variable.'; //Le "=" est appelé "opérateur d'affectation".
console.log(maVariable);

//Déclarer une variable et lui affecter une valeur
var maVariable = 'Je suis un texte dans une variable';
console.log(maVariable);

var maVariableVar = "Je suis une variable déclarée avec var";
const maVariableConst = "Je suis une variable déclarée avec const";
let maVariableLet = "Je suis une variable déclarée avec let";
console.log(maVariableVar);
console.log(maVariableConst);
console.log(maVariableLet);


//Le mot clé utilisé lors de la déclaration d'une variable va jouer un rôle sur ses fonctionnalités mais nous reviendrons sur ce point plus tard.
//Pour le moment, nous utiliserons le mot clé "var".

/* Règles d'écriture */
    //Une variable doit commencer par une lettre ou une underscore "_".
    //Une variable peut contenir ds lettres, des chiffres et des underscores mais pas de caractères spéciaux.
    /* Une variable ne doit pas :
        - commencer par un chiffre
        - contenir des caractères spéciaux
        - contenir des espaces */
    //Le nom d'une variable est sensible à la casse, ce qui signifie que les lettres majuscules ne sont pas égales à leur équivalent en minuscule, et vice versa.*/


/**************************************/
// 4. Les types de données
/**************************************/

/* identifier le type d'une variable */
var monType = "Quel est mon type";
console.log(typeof monType);//Affiche "string"

/* Le type "string" */
//Une variable de type "string" va stocker une chaîne de caractères (du texte) comprise entre des guillements simples '' ou doubles " ".

var string = 'Je suis une variable de type string';//Guillemets simples
console.log(string);
var string2 = "Je suis une variable de type string";//Guillemets doubles
console.log(string2);

//Les guillemets déilimittent le début et la fin de la chaîne de caractères. Or, avec des gullemets simples (single quotes), il n'est pas possible d'écrire des apostrophes. Pour résoudre les problèmes, il existe la solution de l'échappement.

/* Echapper un guillement (ou apostrophe) */
var string3 = 'J\'hésite entre les guillemets simples ou doubles';
console.log(string3);


var string4 = "J'hésite entre les guillemets simples ou doubles";//Avec les gullemets doubles (double quotes), pas besoin d'échapper.
console.log(string4);

/* Le type number */

var number = 5; //Nombre entier de type number
console.log(typeof number);//Affiche "number"

var number2 = "5";
console.log(typeof number2);//Affiche string
var number3 = 5.2;//Nombre décimal de type number
console.log(typeof number3);//Affiche number

/* Le type "Booléen (boolean)" */
//Le type booléen n'accepte et ne renvoir que 2 valeurs "true" (vrai) et "false" (faux). 
var vrai = true; // type booléen
console.log(typeof vrai); //Affiche "boolean"
var faux = false;

/* Le type "null" */
// Le type "null" symbolise l'absence de valeur.
var aucuneValeur = null;
console.log(typeof aucuneValeur); //Affiche "object". Js considère une variable sans valeur comme une objet.

/* Le type "undefined" */
// Le type "undefined" est automatiquement assigné à une variable dont la valeur n'est pas définie.
var nonDefini;
console.log(nonDefini);


/* Le type "array" */
//Le type "array" correspond à un tableau qui peut stocker différents types de données. Le contenu du tableau est compris entre des crochets et chaque valeur est séparée par une virgule.

var array0 = [];
console.log(array0);

var array = ["valeur1", 2, 2.5, true, null, undefined];
console.log(array); //Affiche les données du tableau et un chiffre attribué à chacune de ses valeurs.

/***********************************************************/
// 5. Concaténation, littéraux de gabarit et interpolation
/***********************************************************/

/***************************/
// 5.1 Concaténation
/***************************/

//L'opérateur "+" permet d'attacher plusieurs chaînes
var garcon = 'Jean';
var fille = 'Marie';

console.log('bonjour ' + garcon);//Affiche "bonjour Jean"

//Exercice : Tenter d'afficher "bonjour Jean et Marie"
console.log('Bonjour ' + garcon + ' et ' + fille); //Lors de la concaténation de texte, il faut bien penser à ajouter les espaces quand c'est nécessaire.

var phrase = garcon + ' aime ';//Valeur : Jean aime
console.log(phrase); //Affiche Jean aime
var qui = fille;//Valeur : Marie
phrase += qui; //Revient à dire "phrase = phrase + qui". Contient "Jean aime Marie". L'Opération "+=" permet d'ajouter une valeur à une variable qui en dejà une sans l'écraser. On appelle ça une affectation/concaténation.
console.log(phrase); //Affiche : Jean aime Marie

/*****************************************************/
// 5.2 Littéraux de gabartits (template literals) et interpolation
/*****************************************************/

//Si une chaîne comprend plusieurs expressions (ex: variables) à concaténer, la syntaxe peut devenir assez compliquée.
//Exemple :
    var mot1 = 'Je';
        mot2 = 'suis';
        mot3 = 'à'
        mot4 = 'bout'; //Il est possible de déclarer plusieurs variables à la suite avec un seul mot-clé.

    console.log(mot1 + ' ' + mot2 + ' ' + mot3 + ' ' + mot4);//Affiche "Je suis à bout"

    //Les littéraux de gabarit permettent de faciliter la rédaction de la syntaxe grâce à des fonctionnalités d'interpolation.

    //Interpolation
    console.log(`${mot1} ${mot2} ${mot3} ${mot4}`);//Affiche "Je suis à bout". Les backticks (accent graves) : alt gr + touche 7 + touche espace
    //Les backticks marquent le début et la fin du gabarit; ${} = gabarit ; ${} = espace réservé.

    console.log(`${mot1} ${mot2} vraiment ${mot3} ${mot4}`);
        
/*****************************************************/
// FIN DU CHAPITRE
/*****************************************************/

/*****************************************************/
// NEXT : OPERATEURS ET CONDITIONS
/*****************************************************/
