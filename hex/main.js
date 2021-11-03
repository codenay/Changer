//variables

const hexNumbers = [0,1,2,3,4,5,6,7,8,9, 'A','B','C','D','E','F']
const button = document.querySelector('#changeBtn');
const hex = document.querySelector("#hex");
const background = document.querySelector('#background')

// even listeners

button.addEventListener('click', changeBg);

//functions

function changeBg(){
   let hexColor = "#";

   for(let i = 0; i<6; i++){
       hexColor += hexNumbers[getRandom()]
   }
   console.log(hexNumbers[getRandom()])
   background.style.backgroundColor = hexColor
   hex.textContent = hexColor;
}

function getRandom(){
    return Math.floor(Math.random() * hexNumbers.length)
}