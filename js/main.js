import * as guessWarrior from "./guessWarrior.js";
import * as guessBlur from "./guessBlur.js";
import * as guessDescription from "./guessDescription.js"

let chars = fetch("assets/chars.json")
.then(response => response.json())
.then(data => {
  chars = data;
})
.catch(error => console.error('Error fetching JSON:', error));


$(document).ready(() => {

    console.log("Here");
    
    guessWarriorButtonHandler();
    guessBlurButtonHandler();
    guessDescriptionButtonHandler();
});
function guessWarriorButtonHandler(){
    $('#guessWarriorBtn').on('click', () => startGuessWarrior());
}

function guessBlurButtonHandler(){
    $('#guessBlurBtn').on('click', () => startGuessBlur());
}

function guessDescriptionButtonHandler(){
    $('#guessDescriptionBtn').on('click', () => startGuessDescription());
}

function startGuessWarrior(){
    resetMainList();
    guessWarrior.render();
}

function startGuessBlur(){
    resetMainList();
    guessBlur.render();
}

function startGuessDescription(){
    resetMainList();
    guessDescription.setChars(chars);
    guessDescription.render();
}

function resetMainList(){
    $('#mainBody').html("");
}

function fetchFromFile(fileName){
 

    fs.readFile(fileName, 'utf-8', function (err, data) {
    if (err)
        console.log(err.message);

    return JSON.parse(data);
});
}