console.log('events');

/*********************************/
//CHAPITRE 8 : LES EVENEMENTS
/*********************************/

/******************************************/
//CHAPITRE 8.1 : les différents procédés
/******************************************/

/* 3 façons de mettre en place un évènement js */

//Anciènement :
/* 1. par un attribut html d'un évènement exemple : onclick=""
<div onlick="alert('Hello')">Cliquez sur cette div pour voir une alerte</div>

2. Par l'évènement directement en js
document.getElementById('unId').onclick = function() {
    //Code ...
}

//Pratiques actuelles :

3. - bonne pratique : on rajoute un écouteur d'évènement
document.getElementById('unId').addEventListener('click', function);

ou

4. - bonne pratique : on rajoute un écouteur d'évènement
document.getElementById('unId').addEventListener('click', function() {
    // code ..
});

*/

/******************************************/
//CHAPITRE 8.2 : les types d'évènements
/******************************************/

/*
EVENEMENT LOAD
EVENEMENT AU CLICK
EVENEMENT AU DOUBLE CLICK
EVENEMENT MOUSE OVER
EVENEMENT MOUSE LEAVE
EVENEMENT MOUSE UP
EVENEMENT MOUSE ENTER
EVENEMENT MOUSE OUT
EVENEMENT KEYDOWN
EVENEMENT KEYUP
EVENEMENT SCROLL
EVENEMENT INPUT
EVENEMENT SUBMIT
*/


//Pour interagir avec le DOM, on peut procéder en 3 étapes.

//1. Sélection
//2. Evènement
//3. Action

/* Evènement de chargement */ 

//Pour agir sur le DOM lors d'intéractions avec l'utilisateurs, il faut utiliser un écouteur d'évènement (adEventListener) sur l'objet à manipuler.

//"window" représente une fenêtre contenant un document DOM.
window.addEventListener('load', sayGreetings());//Je place un écouteur d'évènement sur l'objet "window". Cet écouteur possède 2 paramètres ("la nature de l'évènement", "la fonction à exécuter")
//A ce stade, la page affiche un message d'erreur "sayGreetings is not defined". C'est tout à fait normal. La fonction n'a pas encore été créée.

function sayGreetings() {//A chaque fois que la page est chargée ...
    //alert('bonjour');// ...une alerte apparaît
}


/******************************************/
//CHAPITRE 8.2.1 : Evènements de click
/******************************************/

/* Evènement au click */ 

    //1.Sélection
    const div1 = document.querySelector('.click-event');
    console.log(div1);

    //2.evènement
    div1.addEventListener('click', iClick);

    //3.Action
    function iClick() {
        console.log('je clique');
    }

    div1.addEventListener('click', changeBgc);

    function changeBgc() {
        console.log('Je change de background');
        if(div1.style.backgroundColor == "") {
            div1.style.backgroundColor ="cyan";
        } else {
            div1.style.backgroundColor = "";
        }
    }

/* Evènement au double click */ 

    //1.Sélection
    const div2 = document.getElementsByClassName("double-click-event")[0];
    console.log(div2);

    //2.evènement
    div2.addEventListener('dblclick', iDoubleClick);

    //3.Action

    function iDoubleClick() {
        console.log("Je double click");
        if(div2.style.backgroundColor == "") {
            div2.style.backgroundColor ="pink";
        } else {
            div2.style.backgroundColor ="";
        }
    }

    //Exercice : Sur la div ayant la classe "double-click-event", faire en sorte qu'au click (simple), la couleur de font soit réinitialisée.

    //Solution d'Emric
    div2.addEventListener('click', resetBgcColor);
    
    function resetBgcColor()
    {
        if(div2.style.backgroundColor != "") {
            div2.style.backgroundColor ="";
        }
    }


/**********************************************/
//CHAPITRE 8.2.2 : Evènements liés à la souris
/**********************************************/
/* Evènement mouseenter (entrée de la souris dans le champ d'un élément) */ 

const div3 = document.getElementById('mouseEnterEvent');
console.log(div3);

div3.addEventListener('mouseenter', iAmIn);//L'évènement se déclenche quand la souris entre dans l'élément.

function iAmIn() {
    console.log('Je rentre dans l\'élément');
    div3.style.backgroundColor = "red";
    div3.style.color = "white";
}

/* Evènement mouseout (sortie de la souris du champ d'un élément) */ 
const div4 = document.querySelector('#mouseOutEvent');
console.log(div4);

div4.addEventListener('mouseout', iAmOut);//L'évènement se déclenche dès que la souris sors de l'élément.

function iAmOut() {
    console.log("Je sors de l'élément");
    div4.style.backgroundColor = "blue";
    div4.style.color = "white";
}

/* Evènement mouse hover (survol de la souris dans le champ de l'élément) */

const div5 = document.querySelector('#mouseHoverEvent');

div5.addEventListener('mouseover', iAmHover);//L'évènement se délanche dès qu'un mouvement est détecté dans le champ de l'élément

function iAmHover() {
    console.log("Je bouge à l'intérieur");
    div5.style.backgroundColor = "orange";
}

/* Evènement mousedown et mouse up (maintient et relachement du click de la souris) */

//Rappel : En JS, une élément disposant d'un id est déjà identifiable comme un objet du DOM que l'on peut manipuler.
//Ainsi, il n'est pas nécessaire de créer une variable pour stocker cet objet (qui fait référence l'élément html).
mouseDownAndUpEvent.addEventListener('mousedown', iPressMouse);//L'évènement se déclenche quand le maintient du click de la souris s'effectue.

function iPressMouse() {
    console.log("J'appuie sur ma souris");
    mouseDownAndUpEvent.style.fontSize = "30px";
}

mouseDownAndUpEvent.addEventListener('mouseup', iReleaseMouse);//L'évènement se déclenche lorsque le bouton de la souris est relaché.

function iReleaseMouse() {
    console.log("Je relâche ma souris");
    mouseDownAndUpEvent.style.fontSize = "";
}


/**********************************************/
//CHAPITRE 8.2.3 : Evènements liés au clavier
/**********************************************/

/* Evènement keydown (lorsqu'une touche du clavier est appuyée) */
upAndDown.addEventListener('keydown', iPress);

function iPress() {
    console.log("J'appuie sur une touche");
    upAndDown.style.backgroundColor = "green";
    upAndDown.style.color = "white";
}

/* Evènement keyup (lorsqu'une touche du clavier est relâchée) */
upAndDown.addEventListener('keyup', iReleaseKey);

function iReleaseKey() {
    console.log("Je relâche une touche");
    upAndDown.style.backgroundColor = "red";
    upAndDown.style.color = "white";
}

/****************************************************/
//CHAPITRE 8.2.4 : Evènements liés aux formulaires
/****************************************************/

/* Evènement input (lorsque la valeur d'un élément est modifié) */
inputEvent.addEventListener('input', iGotValue);

function iGotValue() {
    console.log("J'ai une valeur");
    if(inputEvent.value != "") {
        inputEvent.style.backgroundColor = "green";
        inputEvent.style.color = "white";
    } 
    else {
        inputEvent.style.backgroundColor = "white";
    }
}

/* Evènement change (Changement de valeur dans les élémebts input, select et textarea) */

changeEvent.addEventListener('change',iSelect);

function iSelect() {
    if(changeEvent.value != "") {
        console.log("J'ai sélectionné une option");
    } 
    else {
        console.log("Je n'ai pas choisi d'option");
    }
}

/* Evènement submit (lors de la soumission d'un formulaire) */
//NB : L'évènement submit n'est exécutable que dans un élément form. Par ailleurs, l'objet sur lequel appliquer l'évènement, doit être le formulaire.


submitEvent.addEventListener('submit', iSend);

function iSend(e) {
    e.preventDefault();
    console.log("J'envoie");
    //alert("Bien envoyé");
    submitButton.textContent = "Message envoyé";
}


/* evènement de scroll */
window.addEventListener('scroll', sendAlert);

function sendAlert() {
    if(window.scrollY > 600 && window.scrollY < 700 ) {
        //alert("Ton scroll est entre 600px et 700px");
    }
}


/*********************************/
//FIN DU CHAPITRE
/*********************************/

/*********************************/
//NEXT : TP
/*********************************/





