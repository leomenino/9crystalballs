
/*$(document).ready(function(){
    /*var form = document.getElementById('myForm');
    var input = document.getElementById('name');
    input.addEventListener('keypress', function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        imgBlur();
      }
    });
    document.getElementById("blurImage").style.filter = 'blur(60px)';
    document.getElementById("icon1").style.filter = 'opacity(0%)';
    document.getElementById("icon2").style.filter = 'opacity(0%)';
    document.getElementById("icon3").style.filter = 'opacity(0%)';
    document.getElementById("icon4").style.filter = 'opacity(0%)';
    document.getElementById("icon5").style.filter = 'opacity(0%)';
    document.getElementById("icon6").style.filter = 'opacity(0%)';
    console.log('test');
    blurChars = {
        1: {name: "goku" , blurry: "cropped/croppedGoku.png", icon: "icons/goku.png"},
        2: {name: "vegeta" , blurry: "cropped/croppedVegeta.png", icon: "icons/vegeta.png"},
        3: {name: "piccolo" , blurry: "cropped/croppedPiccolo.png", icon: "icons/piccolo.png"},
        4: {name: "bulma" , blurry: "cropped/croppedBulma.png", icon: "icons/bulma.png"},
        5: {name: "freeza" , blurry: "cropped/croppedFreeza.png", icon: "icons/freeza.png"},
        6: {name: "zarbon" , blurry: "cropped/croppedZargon.png", icon: "icons/zarbon.png"},
        7: {name: "dodoria" , blurry: "cropped/croppedDodoria.png", icon: "icons/dodoria.png"},
        8: {name: "ginyu" , blurry: "cropped/croppedGinyu.png", icon: "icons/ginyu.png"},
        9: {name: "cell" , blurry: "cropped/croppedCell.png", icon: "icons/cell.png"},
        10: {name: "gohan" , blurry: "cropped/croppedGohan.png", icon: "icons/gohan.png"},
    }
    randomKey = Object.keys(blurChars)[Math.floor(Math.random() * Object.keys(blurChars).length)]; 

    

    render(); 
})*/


let counter = 1;
const guessed = [];
let rawInput;
let randomKey;
let blurChars;
var input = "";
let img;
blurChars = {
    1: {name: "goku" , blurry: "assets/cropped/croppedGoku.png", icon: "assets/icons/goku.png"},
    2: {name: "vegeta" , blurry: "assets/cropped/croppedVegeta.png", icon: "assets/icons/vegeta.png"},
    3: {name: "piccolo" , blurry: "assets/cropped/croppedPiccolo.png", icon: "assets/icons/piccolo.png"},
    4: {name: "bulma" , blurry: "assets/cropped/croppedBulma.png", icon: "assets/icons/bulma.png"},
    5: {name: "freeza" , blurry: "assets/cropped/croppedFreeza.png", icon: "assets/icons/freeza.png"},
    6: {name: "zarbon" , blurry: "assets/cropped/croppedZargon.png", icon: "assets/icons/zarbon.png"},
    7: {name: "dodoria" , blurry: "assets/cropped/croppedDodoria.png", icon: "assets/icons/dodoria.png"},
    8: {name: "ginyu" , blurry: "assets/cropped/croppedGinyu.png", icon: "assets/icons/ginyu.png"},
    9: {name: "cell" , blurry: "assets/cropped/croppedCell.png", icon: "assets/icons/cell.png"},
    10: {name: "gohan" , blurry: "assets/cropped/croppedGohan.png", icon: "assets/icons/gohan.png"},
}
randomKey = Object.keys(blurChars)[Math.floor(Math.random() * Object.keys(blurChars).length)];





function game(){
    submitForm();

    verifyInput();

}

function verifyInput() {
    for (const key in blurChars) {
        if (rawInput.toLowerCase() === blurChars[key].name.toLowerCase()) {
            if (alreadyGuessed()) {
                resetForm();
                return;
            }
            input = blurChars[key];
            if(input === blurChars[randomKey]){
                document.getElementById("blurImage").style.filter = 'blur(0px)';
                winningMessage();
                vanishForm();
                return;
            }
            if(counter == 6){
                document.getElementById("blurImage").style.filter = 'blur(0px)';
                losingMessage();
                vanishForm();
            }
            guessed.push(input.name.toLowerCase());
            document.getElementById('icon' + counter).setAttribute('src', input.icon);
            imgBlur();
            resetForm();
        }
    }
    resetForm();
}

function submitForm() {
    rawInput = document.getElementById('name').value;
}

function alreadyGuessed() {
    return guessed.includes(rawInput.toLowerCase());
}

function vanishForm() {
    const formElements = document.getElementById('myForm');
    formElements.setAttribute('visibility', 'none');
}

function winningMessage(){
    var mes = document.getElementById('message');
    mes.setAttribute('src', 'assets/bgrounds/winMessage.png' );
    mes.setAttribute('class', 'animMessage')
    console.log(document.getElementById('failed'));
    document.getElementById('failed').style.filter = 'opacity(0%)';
    document.getElementById('name').style.filter = 'opacity(0%)';
}

function losingMessage(){
    document.getElementById('message').setAttribute('src', 'bgrounds/loseMessage.png');
}

function imgBlur(){

    img = document.getElementById("blurImage");
    iconReveal();
    switch(counter){
        case 1:
            img.style.filter = 'blur(54px)';
            counter++;
            break;
        case 2:
            img.style.filter = 'blur(42px)';
            counter++;
            break;
        case 3:
            img.style.filler = 'blur(36px)';
            counter++;
            break;
        case 4:
            img.style.filter = 'blur(24px)';
            counter++;
            break;
        case 5:
            img.style.filter = 'blur(10px)';
            counter++;
            break;
        case 6:
            img.style.filter = 'blur(0px)';
            counter++;
            break;
    }

}

function iconReveal(){
    var icon = document.getElementById("icon" + counter );
    icon.style.filter = 'opacity(100%)';
}

function resetForm() {
    document.getElementById('myForm').reset();
}

export function render(){
    var form = "";

    var main;
    $("#mainBody").empty();
    $("#mainBody").append(`<style>body {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        background-image: url("../client/assets/background.webp");
        background-size: cover;
    }</style>`)
    $("#mainBody").append('<div class=‘container-fluid icon-container’ id=‘content’>')
    $("#mainBody").append( " <div><center><img id='blurImage' width='800px' src=''/></center></div><br> ");
    $("#mainBody").append( " <center><form id='myForm' class='form'><center><img id='message' src='assets/bgrounds/mystery2.png' width='750' margin='0px'></center><label for='name'></label><input type='text' id='name' name='name' required></form></center> ");
    $("#mainBody").append(`<div class='row' id='failed'>
          <div class='col-2 border border-2 border-dark'>
            <center><img src='' alt='Icon 1' class='img-fluid icon' id='icon1'></center>
          </div>
          <div class='col-2 border border-2 border-dark'>
            <center><img src='' alt='Icon 2' class='img-fluid icon' id='icon2'></center>
          </div>
          <div class='col-2 border border-2 border-dark'>
            <center><img src='' alt='Icon 3' class='img-fluid icon' id='icon3'></center>
          </div>
          <div class='col-2 border border-4 border-dark'>
            <center><img src='' alt='Icon 4' class='img-fluid icon' id='icon4'></center>
          </div>
          <div class='col-2 border border-4 border-dark'>
            <center><img src='' alt='Icon 5' class='img-fluid icon' id='icon5'></center>
          </div>
          <div class='col-2 border border-4 border-dark'>
            <center><img src='' alt='Icon 6' class='img-fluid icon' id='icon6'></center>
          </div>
        </div></div>` );
    $("#mainBody").append('<button id="reset" type="button">Reset</button>');
    $("#reset").on("click", function(){
        resetThisShit();
      })
    form = document.getElementById('myForm');
    input = document.getElementById('name');
    input.addEventListener('keypress', function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        game();
      }
    });
    document.getElementById("blurImage").style.filter = 'blur(40px)';
    document.getElementById("icon1").style.filter = 'opacity(0%)';
    document.getElementById("icon2").style.filter = 'opacity(0%)';
    document.getElementById("icon3").style.filter = 'opacity(0%)';
    document.getElementById("icon4").style.filter = 'opacity(0%)';
    document.getElementById("icon5").style.filter = 'opacity(0%)';
    document.getElementById("icon6").style.filter = 'opacity(0%)';
    document.getElementById("blurImage").setAttribute('src', blurChars[randomKey].blurry);
    console.log($("#body"));
    $("#Body").style.backgroundImage = 'url("assets/bgrounds/namek.jpeg")';
}


function resetThisShit(){
    location.reload();
    }
