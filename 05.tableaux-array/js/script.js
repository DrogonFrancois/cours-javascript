console.log('chap tableaux arrays');


/***************************************************/
// CHAPITRE 5 : LES TABLEAUX ARRAYS
/***************************************************/

/********************************/
// 10. Tableaux (Arrays)
/********************************/

/* Array - définition */
//Un array est un tableau qui permet de conserver plusieurs valeurs de différents types. Le contenu du tableau est compris entre des crochets et chaque valeur est séparée par une virgule.

/* déclaration et affectation */

//Version la plus conventionnelle : déclaration + affectation 
    let mobilier = ['chaise', 'fauteuil', 'canapé', 'armoire', 'commode'];
    console.log(mobilier); //Affiche (5) ['chaise', 'fauteuil', 'canapé', 'armoire', 'commode']. Chaque valeur du tableau dispose d'un indice. On parlera alors de couple indice:valeur (ou index:value). Dans un tableau, le décompte des indices commence à zéro.

//Autres façons de déclarer un tableau
    let newTab = Array('monopoly', 'cluedo', 'times up');
    console.log(newTab);

    let otherTab = new Array('fourmi', 'calamar', 'crevette');
    console.log(otherTab);

/* Aficher un élément (une ligne) précis du tableau */
console.log(mobilier[0]);//Affiche 'chaise'/ Pour cibler une ligne précise du tableau, il faut indiquer son index (indice) entre crochets précédé du nom du tableau.

console.log(mobilier[2]);//Affiche canapé

//Exercice :
    //Afficher dans la console la phrase suivante sans écrire manuellement les mots présents dans le tableau "mobilier" :
    //Pour mon nouvel appartement, j'ai besoin d'un (fauteuil), de 4 (chaises), d'une (armoire) pour ranger mes affaires et d'une (commode) pour tout le reste.
    //Solution :
    console.log(`Pour mon nouvel appartement, j'ai besoin d'un ${mobilier[1]}, de 4 ${mobilier[0]}s, d'une ${mobilier[3]} pour ranger mes affaires et d'une ${mobilier[4]} pour tout le reste.`);

/* La longueur d'un tableau */
console.log(mobilier.length);//Affiche 5

/* Afficher le dernier élément de mon tableau */
// console.log(mobilier.length);// 5
// console.log(mobilier.length-1);//4 (5-1)
console.log(mobilier[mobilier.length-1]);// 5 - 1 = 4
// console.log(mobilier[4]);

/* Le type */
console.log(typeof mobilier);//En js, array est un objet. Object et array sont très similaires.

/* ajouter un élélent dans un tableau */
mobilier[5] = 'table'; //Ajout table dans le tableau mobilier
console.log(mobilier[mobilier.length-1]);//table
console.log(mobilier[5]);//table

let animaux = []; //Déclaration d'un nouveau tableau
console.log(animaux);
animaux[0] = 'chat';//affectation avec l'indice
console.log(animaux);

animaux[1] = 'chien';
animaux[2] = 'fennec';
animaux[3] = 'moustique';
animaux[4] = 'hippopotame';
animaux[5] = 'elephant';
console.log(animaux);


/*************************/
/* Parcourir un tableau */
/*************************/

//Exercice :
    //Parcourir le tableau 'animaux" à l'aide d'une boucle for et afficher son contenu ligne par ligne dans la console.
    //Solution de Doony :
    let arrayLength = animaux.length;
    console.log(arrayLength);

    console.log(arrayLength);
    for (let i = 0 ; i < arrayLength; i++) {
    
        console.log(animaux[i]);
    }

//Autres moyens de parcourir un tableau
/* la boucle forEach */

animaux.forEach(function(ligne) //Pour chaque ligne de mon tableau animaux...
{
    console.log(ligne);//Affiche moi le contenu de la ligne.
});

/* La boucle for in */
let semaine = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];

for(let index in semaine) {//Pour chaque indice (index) de mon tableau "semaine" ...
    console.log(semaine[index]);//...affiche moi sa valeur
}

for(let index in semaine) {
    console.log(index); //Affiche les indices du tableau un a 1
}

/* la boucle for of */
const repas = ['petit déjeuner', 'déjeûner', 'diner'];
console.log(repas);

for(let value of repas)
{
    console.log(value);
}

//Rappel :
//Une constante ne peut pas être réassignée
const test = "coucou";
//test = "bye bye";//Affiche une erreur


/*************************/
/* Manipuler un tableau */
/*************************/

const fleurs = [];
console.log(fleurs);

/* ajouter ou supprimer */
fleurs.push('rose');//Ajoute 'rose' dans le tableau 'fleurs'
console.log(fleurs);

fleurs.push('lilas');//Ajouter 'lilas' apès 'rose'. 'push' ajoute des éléments à la fin du tableau.
console.log(fleurs);

fleurs.unshift('magnolia');//Ajoute "magnolia" au début du tableau
console.log(fleurs); 

/* supprimer le premier élément du taleau */
fleurs.shift();
console.log(fleurs);

/* supprimer le dernier éément d'un tableau */
fleurs.pop();
console.log(fleurs);

/**********************************/
/* Tableaux multidimensionnels */
/**********************************/

//Les tableaux multidimensionnels sont des tableaux à plusieurs niveaux. Ce sont des tableaux dans des tableaux.

const multi = [//1er niveau de tableau
    ['jean', '35 ans','postier'],//2e niveau de tableau
    ['julie', '23 ans', 'avocate'],
    ['Khafi', '29 ans', 'Développeur web'],
    ['Henrique', '23 ans', 'Développeur web']
];
console.log(multi);

//Comment aficher l'âge de Julie ?
    console.log(multi[1][1]);//Dans le tableau multi, j'accède à la 2e ligne puis j'accède au 2e élément de cette ligne.

//Exercice : 
    //Faire une boucle for in pour afficher une phrase du type "(prénom) a (xx) ans et est (profession)." pour chaque ligne du tableau multi.
    for(let element in multi) {//Ici, "let" et "in" sont des mots-clés qui ne peuvent pas être remplacés. Il sont essentiels au fonctionnement de la boucle.
    //En revanche, "multi" est une référence au tableau à parcourir. Element correspond à chaque élément distinct de mon tableau.
        console.log(multi[element][0] + " a " + multi[element][1] + " et est " + multi[element][2] + ".");
    }
    //Dans une boucle for in (et également dans une boucle forEach), il n'y a pas besoin d'itérateur. La boucle sais déjà combien d'itération elle doit faire pour parcourir intégralement le tableau.

/**********************************/
/* Tableaux associatifs */
/**********************************/

//Par défaut, lors de la création d'un tableau, les valeurs se voient attribuer automatiquement un indice sous forme de chiffre.
//Avec un tableau associatif, il est possible de déterminer soi-même la clé (l'indice), en la remplaçant par du texte.

//exemple :
    const materiel = {
        "informatique" : "ordinateur",
        "bureautique" : "bloc-notes",
        "connectique" : "cable rj45",
        "trombones" : 5,
    };

    console.log(materiel);

/* Afficher un élément d'un tableau associatif */
    console.log(materiel["informatique"]);//Affiche "ordinateur"
    console.log(materiel.informatique);//Affiche également "ordinateur"


/***************************************************/
// FIN DU CHAPITRE
/***************************************************/

/***************************************************/
// NEXT : APERCU DES OBJET
/***************************************************/

    




