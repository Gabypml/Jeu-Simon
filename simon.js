//inclusion 

/*
chaque tour séquence aléatoire -> clignoter les images 
*/


//faire une fonction clignoter 
//une fonction random (sur 4 éléments rouge, jaune, vert, bleu)
//si on a réussi -> augmnter la séquence de 

const getRandomIntInclusive = (max) =>{
    const min = 0; 
    return Math.floor(Math.random() * (max - min)) + min;
}

const blink = (buttonElement)=>{
    buttonElement.style.opacity = 1; 
    let blinkId = (setTimeout(function(){ 
        buttonElement.style.opacity = 0.5; 
    }, 1000));
};


const sequenceExecution = () => {
    opacityDown(); 
    for(const buttonElement of sequence){
       blink(buttonElement);
    }
};


const opacityDown = () => {

    for(const buttonElement of buttons){
        buttonElement.style.opacity = 0.5; 
    }
};

function buttonParcour(counter){
    if(counter < sequence.length){
      setTimeout(function(){
        counter++;
        console.log(counter);
        buttonParcour(counter);
      }, 1000);
    }
}

const buttons = document.getElementsByClassName('button'); 
const sequence = []; 
//sequence.push(buttons[0]); 
sequence.push(buttons[getRandomIntInclusive(buttons.length)]); 
sequence.push(buttons[getRandomIntInclusive(buttons.length)]); 
sequence.push(buttons[getRandomIntInclusive(buttons.length)]); 
sequence.push(buttons[getRandomIntInclusive(buttons.length)]); 

buttonParcour(0);


sequenceExecution();

//sequence.push(getRandomIntInclusive(buttons[buttons.length])); //on ajoute la première séquence
//sequenceExecution();