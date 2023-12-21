import * as guessWarrior from "./guessWarrior.js"
import * as guessBlur from "./guessBlur.js"
import * as guessDescription from "./guessDescription.js"

/*let chars = fetch("http://192.168.10.201:5050/api/chars/")
.then(response => response.json())
.then(data => {
    console.log(data);
  chars = data[0];
})
.catch(error => console.error('Error fetching JSON:', error));*/


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

function startGuessBlur(){
    resetMainList();
    console.log('test');
    guessBlur.render();
}

function startGuessDescription(){

    resetMainList();
    guessDescription.render();
}

function resetMainList(){
    $('#content').html("");
}

function startGuessWarrior(){
    resetMainList();
    guessWarrior.render();
}