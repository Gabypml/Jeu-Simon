//inclusion 

/*
chaque tour séquence aléatoire -> clignoter les images 
*/


//faire une fonction clignoter 
//une fonction random (sur 4 éléments rouge, jaune, vert, bleu)
//si on a réussi -> augmnter la séquence de 

const getRandomIntInclusive = (max) =>{
    //getRandomColor
    const min = 0; 
    return Math.floor(Math.random() * (max - min)) + min;
}

const blink = (buttonElement)=>{
    //blink ... 
    buttonElement.style.opacity = 1; 
    let blinkId = (setTimeout(function(){ 
        buttonElement.style.opacity = 0.5; 
    }, 1000));
};


const sequenceExecution = () => {
    opacityDown(); 
    buttonParcour(0);
};

const opacityDown = () => {
    //reset opacity 
    for(const buttonElement of buttons){
        buttonElement.style.opacity = 0.5; 
    }
};

function buttonParcour(counter){
    //fonction asynchrone pour parcourir la liste parcours 
    if(counter < sequence.length){
      setTimeout(function(){
        blink(sequence[counter]);
        counter++;
        console.log(counter);
        buttonParcour(counter);
      }, 1000);
    }
}

//Initialisation
const buttons = document.getElementsByClassName('button'); 
const sequence = [], sequenceColor = [];
let random = getRandomIntInclusive(buttons.length);
sequence.push(buttons[getRandomIntInclusive(buttons.length)]); 
sequenceExecution();
console.log(sequence);

/*
    on doit cliquer sur les éléments qui ont clignoté dans l'ordre
        si on ne réussit pas -> fin du jeu 
        si on réussit -> 
            on ajoute un élément à la séquence, 
            on recommence la boucle 
*/
//faire une boucle pour ajouter un event sur tous les boutons 
for(const buttonElement of buttons){
    buttonElement.addEventListener('click', (e)=>{
        console.log(e.target.id);
    })
}


