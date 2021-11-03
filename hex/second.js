const button = document.querySelector('#changeBtn');
const hex = document.querySelector("#hex");
const background = document.querySelector('#background')

// even listeners

button.addEventListener('click', changeBg);

//functions

function changeBg(){
   background.style.backgroundColor = `rgb(${getRandom()},${getRandom()},${getRandom()})`
    hex.textContent = `rgb(${getRandom()},${getRandom()},${getRandom()})`
}

function getRandom(){
   return Math.floor(Math.random() * 255)
}