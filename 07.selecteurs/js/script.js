console.log("selecteurs");

/***************************************************/
// Chapitre 7 : Les sélecteurs
/***************************************************/

/* DOM - définition */
//DOM = Document Object Model
//Le DOM est une interface (que l'on retrouve dans les navigateurs) qui présente une arboresence du document (ici le document HTML) et définit la façon dont la structure peut être manipulée. Dans le DOM, toutes les balises HTML seront considérées comme des objets que l'on peut manipuler à l'aide de notre code JavaScript. Chaque objet possède des propriétés et des méthodes qui peuvent être utilisées afin d'obtenir le résultat attendu.

/***************************************************/
// LES SELECTEURS
/***************************************************/


//En JS, une élément du DOM peut être sélectionné de différentes façons :
    // le nom de sa balise
    // le nom de sa classe
    // le nom de son ID
    // un chemin (ex: div > p)
    //Son attribut
    // ...

/* Les sélecteurs spécifiques */
    //Ce sont des sélecteurs qui ne ciblent que par un seul point d'accès :
    //1. balise (tag) : getElementsByTagName()
    //2. class : getElementsByClassName()
    //3. id : GetElementById()


// Sélection de tous les éléments grâce à leur nom de balise
const balise = document.getElementsByTagName('p'); //Je sélectionne dans mon document toutes les balises 'p'.
console.log(balise);
console.log(typeof balise);

//Sélection d'un élément en particulier
const premierP = document.getElementsByTagName('p')[0];//Je sélectionne mon premier paragraphe en précisant sa place dans la liste.
console.log(premierP);

//NB :
//Avec le sélecteur getElementsByTagName, toutes les balises du même nom sont sélectionnées sans distinction.
//En affichant la sélection dans la console, celle-ci renvoie un HTMLCollection qui présente sous la forme d'une sorte de "tableau", la liste des éléments correspondants à la sélection.
//Les éléments sont listés dans l'odre d'apparation dans le document.
//Pour chaque élément, un ensemble d'informations le concernant est affiché.
//Pour sélectionner un élément en particulier au sein d'un ensemble, il faut préciser son indice dans le HTMLCollection à la manière d'un tableau.


/* Sélectionner un élément grâce à sa classe */
const maClasse = document.getElementsByClassName('paragraphe');//Je sélectionne tous les éléments portant la classe "paragraphe"
console.log(maClasse);

//NB :
//Tout comme le sélecteur par le nom de la balise, le sélecteur par la classe sélectionne tous les éléments ayant la même classe sans distinction.

/* Sélectionner un élément grâce à son id */
const monId = document.getElementById('para');
console.log(monId);

// NB : Etant donné qu'un id doit être unique, le sélecteur par l'id ne cible qu'un seul élément.


// Le querySelector
    //Le querySelector sélectionne le premier élément du document qui correspond au sélecteur mis dans les parenthèses.
    //Il peut sélectionner un élément par n'importe quel sélecteur css, notamment le nom de la balise, de la class, l'id, un chemin, un attribut ...

    /* Sélection par le nom de la balise */
    const bal = document.querySelector('div');
    console.log(bal);

    /* Sélection par le nom de la classe */
    const div = document.querySelector('.ma-div');//Attention : il faut nécessairement utiliser le même sélecteur qu'en css. Ici, pour sélectionner via la classe, il ne faut pas oublier le ".".
    console.log(div);

    /* Sélection par l'id */
    const theDiv = document.querySelector('#idDiv');//Je sélectionne la div avec l'id "idDiv".
    console.log(theDiv);

// Le querySelectorAll 
    //Le querySelectorAll fonctionne comme le querySelector mais sélectionne tous les éléments ciblés par le sélecteur renseigné dans les parenthèses.

    /* Sélection par le nom de la balise */
    const allTags = document.querySelectorAll('div');
    console.log(allTags);

    /* Sélection par le nom de la class */
    const allTagWithClass = document.querySelectorAll('.ma-div');
    console.log(allTagWithClass);



//Spécificités
    // Le head et le body peuvent être ciblés directement sans avoir à les sélectionner avec un sélecteur js.
    console.log(document.head);
    console.log(document.body);
    // Les éléments disponsant d'un ID n'ont pas besoin d'être ciblés par un sélecteur js.


/* Pour résumer :
- par sa balise : document.getElementsByTagName()
- par sa classe : document.getElementsByClassName()
- par son id : document.getElementById()
- par son selecteur css : document.querySelector() ou document.querySelectorAll()
- Sélection naturelle : id / document.body / document.head

*/


    
/***************************************************/
// Changer le style d'un élement via le JS
/***************************************************/
//Pour atteindre le style d'un élément, il faut accéder à sa propriété "style".

const mesTextes = document.querySelectorAll('.le-style p');
console.log(mesTextes);

mesTextes[0].style.color = "green";
mesTextes[1].style.color = "blue";
mesTextes[1].style.fontSize = "10px";
mesTextes[2].style.backgroundColor = "pink";
mesTextes[2].style.padding = "30px";

/***************************************************/
// FIN DU CHAPITRE
/***************************************************/

/***************************************************/
// NEXT : LES EVENEMENTS
/***************************************************/


