export function render(){
    console.log("rendering");
    loadHtml();
}

const chars = {
    1: { name: 'Goku', gender: 'Male', race: 'Saiyan', affiliation: 'Z Fighter', ki: '60,000,000', maxKi: '90,000,000,000,000,000,000,000,000', image: 'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044374/hlpy6q013uw3itl5jzic.webp' },
    2: { name: 'Vegeta', gender: 'Male', race: 'Saiyan', affiliation: 'Z Fighter', ki: '54,000,000', maxKi: '19,840,000,000,000,000,000,000,000', image: 'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044422/i9hpfjplth6gjudvhsx3.webp' },
    3: { name: 'Piccolo', gender: 'Male', race: 'Namekian', affiliation: 'Z Fighter', ki: '2,000,000', maxKi: '500,000,000', image: 'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044481/u9fhpc9smihu2kud3cuc.webp' },
    4: { name: 'Bulma', gender: 'Female', race: 'Human', affiliation: 'Z Fighter', ki: '0', maxKi: '0', image: 'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044496/bifhe9qarbrgvm0tsiru.webp' },
    5: { name: 'Freezer', gender: 'Male', race: 'Frieza Race', affiliation: 'Army of Frieza', ki: '530,000', maxKi: '52,710,000,000,000,000,000,000,000', image: 'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044513/ux3n5u0tjdvysjao4w8s.webp' },
    6: { name: 'Zarbon', gender: 'Male', race: 'Frieza Race', affiliation: 'Army of Frieza', ki: '20,000', maxKi: '30,000', image: 'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044531/jcdgte2shoaj2jh0ruob.webp' },
    7: { name: 'Dodoria', gender: 'Male', race: 'Frieza Race', affiliation: 'Army of Frieza', ki: '18,000', maxKi: '20,000', image: 'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044548/m2mixyphepp8qwcigb3g.webp' },
    8: { name: 'Ginyu', gender: 'Male', race: 'Frieza Race', affiliation: 'Army of Frieza', ki: '9,000', maxKi: '25,000', image: 'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699129673/dxsl3rjhrfmajo2gealz.webp' },
    9: { name: 'Cell', gender: 'Male', race: 'Android', affiliation: 'Freelancer', ki: '250,000,000', maxKi: '5,000,000,000', image: 'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044573/mz09ghskyzf0skprredi.webp' },
    10: { name: 'Gohan', gender: 'Male', race: 'Saiyan', affiliation: 'Z Fighter', ki: '45,000,000', maxKi: '40,000,000,000,000,000,000,000,000', image: 'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044627/kigekwjt2m8nwopgvabv.webp' },
};

const randomKey = Object.keys(chars)[Math.floor(Math.random() * Object.keys(chars).length)];
const answer = chars[randomKey];

let rawInput;
let input;
let ki;
const guessed = [];

function loadHtml(){
    console.log("Executing...")

    $("#mainBody").empty();

    $("#mainBody").append(`  <div id="myAmazingPage">
    <style>
    body {
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0;
        background-image: url("../client/assets/background.webp");
        background-size: cover;
    }
    .button-74 {
        margin-top:10px
        padding: 5px 10px;
        font-size: 15px;
    }
    #inputName {
        margin:20px;
    }

    </style>
  
    <body>
      <div id="content">
        <form id="warrior-form">
          <p id="warrior-input" for="warrior-choice">Choose a Hero</p>
          <input id="inputName" list="warriors-list" name="warrior-choice" />
          <button id="test" class="button-74" type="button">Submit</button>
          <datalist id="warriors-list">
            <option value="Goku"></option>
            <option value="Vegeta"></option>
            <option value="Piccolo"></option>
            <option value="Bulma"></option>
            <option value="Freezer"></option>
            <option value="Zarbon"></option>
            <option value="Dodoria"></option>
            <option value="Ginyu"></option>
            <option value="Cell"></option>
            <option value="Gohan"></option>
          </datalist>
          <br>
        </form>
        <button id="reset" class="button-74" type="button">Reset</button> 
  
        <div class="boxes-container" id="row1"></div>
        <div class="boxes-container" id="row2"></div>
  
  
        <div id="indicators" class="container text-center">
          <div class="row align-items-center">
            <div id="correct" class="col">
              <strong>Correct = Green</strong>
            </div>
            <div id="incorrect" class="col">
              <strong>Incorrect = Red</strong>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer">
        
      </footer>

     <footer class="footer">
          <video class="footer_video" muted="" loop="" autoplay
          src="//cdn.shopify.com/s/files/1/0526/6905/5172/t/5/assets/footer.mp4?v=29581141968431347981633714450"
          type="video/mp4">
      </video>
        
    </footer>

  </div>
      </div>`);

      $("#test").on("click", function(){
        myFunction();
      })     
       $("#reset").on("click", function(){
        resetThisShit();
      })
}

console.log(`Answer: ${answer.name}`);

function myFunction() {
    submitForm();

    console.log(`Submit: ${rawInput}`);

    verifyInput();
    endGame();
    ki = findKi();
    charRow();

    console.log(`Input: ${input.name}`);

    resetForm();
    input = undefined;
}

const table = document.getElementById('tbody');

function submitForm() {
    rawInput = document.getElementById('inputName').value;
}

function resetForm() {
    document.getElementById('warrior-form').reset();
}

function verifyInput() {
    for (const key in chars) {
        if (rawInput.toLowerCase() === chars[key].name.toLowerCase()) {
            if (alreadyGuessed()) {
                resetForm();
                return;
            }
            input = chars[key];
            guessed.push(input.name.toLowerCase());
        }
    }
}


function charRow() {
    // Create a new row for the boxes
    const newRow = document.createElement('div');
    newRow.className = 'boxes-row';
    
    // Create and append image box
    const imageBox = document.createElement('div');
    imageBox.id = 'image';
    imageBox.className = 'box';
    imageBox.innerHTML = `<img src="${input.image}" alt="${input.name}" width="50">`;
    newRow.appendChild(imageBox);

    // Verify and append content to other boxes
    newRow.appendChild(verify('gender', 'gendername'));
    newRow.appendChild(verify('race', 'racename'));
    newRow.appendChild(verify('affiliation', 'affname'));

    // Create and append Ki box
    const kiBox = document.createElement('div');
    kiBox.id = 'ki';
    kiBox.className = 'box';
    kiBox.textContent = `KI Power: ${ki}`;
    newRow.appendChild(kiBox);

    // Append the new row to the appropriate boxes container
    const boxesContainer = document.querySelector('#row1');
    boxesContainer.appendChild(newRow);

    // Check if the second row exists; if not, create it
    if (!document.querySelector('#row2')) {
        const secondRow = document.createElement('div');
        secondRow.className = 'boxes-row'; // Change this to 'boxes-row' if needed
        secondRow.id = 'row2';
        document.body.appendChild(secondRow);
    }

    
document.querySelector('#row1').style.display = 'flex';
document.querySelector('#row1').style.flexDirection = 'column';
document.querySelector('#row1').style.width = '100%';
document.querySelector('#row1').style.alignItems = 'center';


document.querySelector('#row2').style.display = 'flex';
document.querySelector('#row2').style.flexDirection = 'column';
document.querySelector('#row2').style.width = '100%';
document.querySelector('#row2').style.alignItems = 'center';
}

function verify(property, id) {
    const content = document.createElement('h2');
    content.id = id;
    content.textContent = input[property];

    content.style.backgroundColor = input[property] === answer[property] ? 'green' : 'red';
    content.style.margin = '5px'; // Adjust as needed
    content.style.width = '100px';
    content.style.height = '100px';
    content.style.textAlign = 'center';
    content.style.fontSize='20px';
    content.style.border = '5px solid black';
    content.style.display = 'flex';
    content.style.alignItems = 'center';
    content.style.justifyContent = 'center';


    return content;
}


function alreadyGuessed() {
    return guessed.includes(rawInput.toLowerCase());
}


function findKi() {
    if (answer.maxKi !== input.maxKi) {
        if (answer.maxKi > input.maxKi) {
            return 'This character has less KI';
        }
        if (answer.maxKi < input.maxKi) {
            return 'This character has more KI';
        }
    }
    return 'You have the same KI';
}

function endGame() {
    if (input.name === answer.name) {
        vanishForm();
    }
}

function vanishForm() {
    const formElements = document.querySelectorAll('#warrior-form');

    for (let i = 0; i < formElements.length; i++) {
        formElements[i].style.display = 'none';
    }
}

function resetThisShit(){
//goes back to index.html base
location.reload();
}