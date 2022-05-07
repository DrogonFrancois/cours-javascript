console.log('cours 2');

/******************************************/
// CHAPITRE 2 : OPERATEURS ET CONDITIONS
/******************************************/

/******************************************/
// 6. Opérateurs arithmétiques
/******************************************/

/* addition */
console.log(7+3);

/* soustraction */
console.log(7-3);

/* multiplication */
console.log(7*3);

/* division */
console.log(21/3);

/* modulo (remainder) */
console.log(23%3);//Affiche 2. L'oprateur "modulo" (aussi appelé remainder), renvoi le reste d'un entier d'une division d'un premier par le second. Ici 3x7 = 21. 23-21=2. L'opération renvoie 2.

/* opérations raccourcies */
var a = 5;
var b = 3;
var c = a + b;
console.log(c);//Affiche 8

c+= 2;// Revient à écrire "c = c+2"
//console.log(c);

c-= 4;
console.log(c);

c*= 2;
console.log(c);


/******************************************/
// 7. Autres opérareurs
/******************************************/

/******************************************/
// 7.1 Opérateurs logiques et de comparaison
/******************************************/

/* Opérateurs logiques */
/*
    && : et (and)
    || : ou (or)
    !  : n'est pas (not)
*/

/* Opérateurs de comparaison */
/*
    == : comparaison de valeur
    === : comparaison de valeur ET de type
    != : différence en valeur (inégalité)
    !== : différence en valeur et en type (inégalité stricte)
    > : supérieur à ...
    < : inférieur à ...
    >= : supérieur ou égal à
    <= : inférieur ou égal à
*/

//Ces opérateurs sont notamment utilisés dans le cadre de conditions.

/******************************************/
// 7.2 Conditions
/******************************************/

/******************************************/
// 7.2.1 Condition if/else
/******************************************/

if(5 > 2) { //Si (if) 5 est supérieur (>) à 2, le code entre les accolades s'exécute.
    console.log("5 est bien supérieur à 2"); //Affiche le texte
} else { //Autrement (else), c'est le code de cette accolade qui s'exécute.
    console.log("La condition n'est pas respectée.");
}

//NB : Dans une condition if/else, la partie (else) n'est pas obligatoire. En l'absence d'une else, il ne se passe rien si la condition n'est pas remplie.

var a = 10;
var b = 5;
var c = 2;

if(a > b)
{
    console.log("A est supéreur à B");
}
else
{
    console.log("non, c'est B qui est supérieur à A");
}

//Une condition renvoie un booléen (true or false)

/* L'opérateur logique && */
if(a > b && c > b) {
    console.log("10 est supérieur à 5, et 2 est supérieur à 5");
} else {
    console.log("Au moins une des conditions n'est pas respectée.")
}

/* L'opérateur logique || (or) */
var a = 10;
var b = 5;
var c = 2;

if(a == 10 || b > a) {
    console.log("Au moins l'une des conditions est vraie.");
} else {
    console.log("Aucune des conditions n'est remplie");
}


/******************************************/
// 7.2.2. Assignation par défaut
/******************************************/

//Exercice :
    //Créer une condition qui permettrait d'afficher "Bienvenue Jean" si le prénom de Jean existe ou "Bienvenue étranger" si celui-ci n'existe pas.
    //Solution :
    var prenom = "Jean";
    
    if(prenom =="Jean") {
        console.log(`Bienvenue ${prenom}`);
    } else {
        console.log("Bienvenue étranger");
    }

    //Solution 2 :
        var username;
        // var username = null;
        var username = "Juan";
        var defaultName;

        if(username) {
            defaultName = username;
           console.log("Bienvenue " + defaultName); 
        } else {
            defaultName = "étranger";
            console.log("Bienvenue " + defaultName);
        }


/******************************************/
// 7.2.3 Condition if / else if / else
/******************************************/

var number = 10;//Je déclare une variable "number" et je lui affecte la valeur 10.

if(number === 8)// Si number est égal et du même type que 8...
{
    console.log("1 - number est égal à 8");//Je log cette information
}
else if(number != 10)//Sinon, si number est différent de 10 en valeur...
{
    console.log("2 - number est différent de 10");//...Je log cette information
}
else //Sinon, si aucune des conditions précédentes n'est remplie...
{
    console.log("3 - Aucune des conditions n'est remplie");//...Je log cette information
}

//Exercice : 
    //Créer une variable "couleur" avec la valeur "bleu"
    //Créer une conditon if/else (et non pas else / if) vérifiant si :
        //couleur est égale à bleu
        //couleur est égale à orange
        //couleur est égale à rose
    //Solution :
    var couleur = 'bleu';

    //Première condition à vérifier
    if(couleur == 'bleu') {
        console.log('La couleur est bleue'); //Ce log est exécuté
    } 

    //Deuxième condition à vérifier
    if(couleur == 'orange') {
        console.log('La couleur est orange');
    }

    //Troisième condition à vérifier
    if(couleur == 'rose') {
        console.log('La couleur est rose');
    }
    else 
    {
        console.log('La couleur est inconnue');//Ce log est également exécuté
    }

//Exercice : Reproduire la condition précédente avec un elsif.
    //Créer une variable "couleur" avec la valeur "bleu"
    //Créer une condition else / if vérifiant si :
        //couleur est égale à bleu
        //couleur est égale à orange
        //couleur est égale à rose
        var couleur = 'rose';

        if(couleur == 'bleu') {
            console.log('La couleur est bleue');
        }
        else if(couleur == 'orange') 
        {
            console.log('La couleur est orange');
        }
        else if(couleur == 'rose') 
        {
            console.log('La couleur est rose');
        } else 
        {
            console.log('La couleur est inconnue');
        }



/* différence entre if/else et else if */
//D'un côté, nous avons plusieurs "IF" et un "IF / ELSE" (condition if/else), qui représentent une suite de conditions isolées. L'interpréteur lit donc chaque condition de façon distincte et une réponse est renvoyée à chzque exécution.
//Dans le cas du IF/ELSEIF/ELSE, les différentes conditons à tester sont liées, dans le sens où le code s'arrête à la première condition vérifiée et ne va pas plus loin. Il n'est donc pas possible d'avoir plusieurs retours.

//Il est possible d'ajouter autant de else if que l'on souhaite. Toutefois, pour tester un nombre important de cas, cette syntawe n'est pas idéale. La condition switch est plus adaptée.


/******************************************/
// 7.2.4 Condition - switch
/******************************************/

var monPays = "Italie";
//Inscrire la variable à tester dans les parenthèses du Swith.
switch(monPays)
{
    case 'Italie': //Si monPays contient la valeur 'Italie' ...
        console.log('vous êtes italien!');// J'affiche 'vous êtes italien!'
        console.log('vous faîtes de bonnes pizza!');// J'affiche 'vous faîtes de bonnes pizza!'
    break; //Ce break est essentiel, autrement, même si le cas est vérifié, le switch continue de s'exécuter.
    case 'Espagne':
        console.log('vous êtes espagnol!');
    break;
    case 'Tunisie':
        console.log('vous êtes tunisien!');
    break;
    case 'Belgique':
        console.log('vous êtes belge!');
    break;
    case 'Suisse':
        console.log('vous êtes neutre!');
    break;
    default: //Equivalent du "else"
        console.log('I don\'t know your country');
}

/******************************************/
// FIN DU CHAPITRE
/******************************************/


/******************************************/
// NEXT : LES BOUCLES (STRUCTURES ITERATIVES)
/******************************************/