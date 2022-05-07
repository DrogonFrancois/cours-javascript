console.log('cours 3 js');

/***************************************************/
// CHAPITRE 3 : LES BOUCLES (STRUCTURES ITERATIVES)
/***************************************************/


//Boucle - définition :
    //Une boucle, aussi appellée structure itérative ou récursive, est un moyen de répéter du code en boucle. L'objectif est de reproduire une opération un nombre de fois défini pour ne pas avoir à réécrire le même code autant de fois que nécessaire.
    //Pour faire simple, un boucle, c'est du code qui tourne en boucle.


/* Il existe différents types de boucles */
    // la boucle while
    // la boucle do-while
    // la boucle for

    //boucles pour les objets
        //Plus tard


/***************************************************/
// 8.1 La boucle while
/***************************************************/

var i = 0;// "i" vaut pour "itérateur". Par convention, la variable est nommée ainsi mais pourrait porter n'importe quel nom. Cette vriable va servir de point de départ pour notre boucle. Elle va servir de référence pour effectuer les tours de notre boucle.

while(i < 5) //Le code dans les parenthèses définit les conditons d'entrée et de sortie de notre boucle. Traduction : "Tant que" i est inférieur à 5 ...
{ //... le code dans les accolades s'exécute.
    console.log(i); //Affiche la valeur de i
    i++; //Traduction : J'incrémente (j'augmente) la valeur de "i" de 1. Le "i++" est une contraction de "i = i + 1". "i--" fonctionnerait de la même manière en décrémentant la valeur de "i" de 1. Ici, "i" fontionne comme un "compteur" qui va informer la boucle du tour dans lequel elle se situe et si elle doit poursuivre ses tours ou s'arrêter.
}

//Créons une boucle qui affiche des chiffres de 0 à 10
var i = 0;

//Solution 1 :
// while(i <= 10) 
// {
//     console.log(i);
//     i++;
// }

//Solution 2 :
while(i < 11) 
{
    console.log(i);
    i++;
}


//Attention : Boucle infinie. Une boucle infinie, est une boucle qui n'a pas de condition de sortie. Par conséquent, elle ne s'arrête jamais.
//Le pire des scénarios
// var i = 0;

// while(i >= 0)
// {
//     console.log(i);
//     i++;
// }

//Pour sortir d'une boucle, on peut également utiliser le mot clé "break".
var z = 1;
while(z > 0) {
    console.log(z);
    z++;
    if(z == 20) {
        break; //La boucle s'arrête après avoir affiché le chiffre 19.
    }
}

/***************************************************/
// 8.2 La boucle do-while
/***************************************************/
//La boucle do-while fonctionne exactement comme la boucle while sauf que la condition est renseignée à la fin et non au début.
var i = 5;
do { //Fait ...
    console.log(i); // un console log de "i"
    i--; // Décrémentation : Diminue la valeur de "1" de 1
} while (i > 0); // Tant que "i" est supérieur à zéro. //Exéctuera 5 tours pour afficher les chiffres de 5 à 1.

var i = 0;
do { //Fait ...
    console.log(i); // un console log de "i"
    i--; // Diminue la valeur de "1" de 1
} while (i > 0); // Tant que "i" est supérieur à zéro. 
//Ici, la boucle ne fait qu'un tour car le "i" n'est pas supérieur à zéro.
//Le premier tour est permis car la conditon est placée à la fin. La condition n'est donc vérifiée qu'une fois le premier tour effectué.

/***************************************************/
// 8.3 La boucle for
/***************************************************/

//Cette boucle est de loin la plus populaire.
for(i = 0; i < 5; i++) { //Les parenthèses de la boucle for intègre 3 éléments :
    //1. l'itérateur
    //2. la condition
    //3. L'itération attendue (incrémentation, décrémentation, ...)
    console.log(i);
}
//La boucle fait 5 tours en affichant les chiffres de 0 à 4.

//Exercice :
    //Créer une variable qui stock votre mois de naissance
    //Créer une variable qui stock votre jour de naissance
    //Créer une boucle "for" qui s'ârrete lorsqu'elle atteint la valeur de la variable de votre jour de naissance et qui affiche "Vous êtes né(e) le (jour de naissance) (mois de naissance)"

    //Solution de Masoud:
    var mois = 8;
    var jour = 22;

    for(i = 0; i <= 31; i++) {
        console.log(i);
        if(i == jour) {
            console.log("Vous êtes né le " + i + '/' + mois);
            break;
        }
    }
        
/***************************************************/
// FIN DU CHAPITRE
/***************************************************/

/***************************************************/
// NEXT : LES FONCTIONS
/***************************************************/