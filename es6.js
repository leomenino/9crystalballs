const chars = {
    1: { name: 'Goku', gender: 'Male', race: 'Saiyan', affiliation: 'Z Fighter', ki: '60,000,000', maxKi: '90,000,000,000,000,000,000,000,000', image: 'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044374/hlpy6q013uw3itl5jzic.webp' },
    2: { name: 'Vegeta', gender: 'Male', race: 'Saiyan', affiliation: 'Z Fighter', ki: '54,000,000', maxKi: '19,840,000,000,000,000,000,000,000', image: 'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044422/i9hpfjplth6gjudvhsx3.webp' },
    3: { name: 'Piccolo', gender: 'Male', race: 'Namekian', affiliation: 'Z Fighter', ki: '2,000,000', maxKi: '500,000,000', image: 'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044481/u9fhpc9smihu2kud3cuc.webp' },
    4: { name: 'Bulma', gender: 'Female', race: 'Human', affiliation: 'Z Fighter', ki: '0', maxKi: '0', image: 'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044496/bifhe9qarbrgvm0tsiru.webp' },
    5: { name: 'Freezer', gender: 'Male', race: 'Frieza Race', affiliation: 'Army of Frieza', ki: '530,000', maxKi: '52,710,000,000,000,000,000,000,000', image: 'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044513/ux3n5u0tjdvysjao4w8s.webp' },
    6: { name: 'Zarbon', gender: 'Male', race: 'Frieza Race', affiliation: 'Army of Frieza', ki: '20,000', maxKi: '30,000', image: 'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044531/jcdgte2shoaj2jh0ruob.webp' },
    7: { name: 'Dodoria', gender: 'Male', race: 'Frieza Race', affiliation: 'Army of Frieza', ki: '18,000', maxKi: '20,000', image: 'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044548/m2mixyphepp8qwcigb3g.webp' },
    8: { name: 'Ginyu', gender: 'Male', race: 'Frieza Race', affiliation: 'Army of Frieza', ki: '9,000', maxKi: '25,000', image: 'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699129673/dxsl3rjhrfmajo2gealz.webp' },
    9: { name: 'Cel', gender: 'Male', race: 'Android', affiliation: 'Freelancer', ki: '250,000,000', maxKi: '5,000,000,000', image: 'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044573/mz09ghskyzf0skprredi.webp' },
    10: { name: 'Gohan', gender: 'Male', race: 'Saiyan', affiliation: 'Z Fighter', ki: '45,000,000', maxKi: '40,000,000,000,000,000,000,000,000', image: 'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044627/kigekwjt2m8nwopgvabv.webp' },
};

const randomKey = Object.keys(chars)[Math.floor(Math.random() * Object.keys(chars).length)];
const answer = chars[randomKey];

let rawInput;
let input;
let ki;
const guessed = [];

document.getElementById('test').addEventListener('click', myFunction);

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
    document.getElementById('myForm').reset();
}


function charRow() {
    const row = document.createElement('tr');

    // Create and append image cell
    const imgCell = document.createElement('td');
    imgCell.innerHTML = `<img src="${input.image}" alt="${input.name}" width="50">`;
    row.appendChild(imgCell);

    // Verify and append cells for other properties
    row.appendChild(verify('name'));
    row.appendChild(verify('gender'));
    row.appendChild(verify('race'));
    row.appendChild(verify('affiliation'));

    // Append Ki cell
    const kiCell = document.createElement('td');
    kiCell.textContent = ki;
    row.appendChild(kiCell);

    // Append the row to the table
    table.appendChild(row);
}

function verify(property) {
    const cell = document.createElement('td');
    cell.textContent = input[property];

    cell.style.backgroundColor = input[property] === answer[property] ? 'green' : 'red';

    return cell;
}

function alreadyGuessed() {
    return guessed.includes(rawInput.toLowerCase());
}

/*

function charRow() {
    table.innerHTML += `<tr>
<td><img src="${input.image}" alt="${input.name}" width="50"></td>
            verify('name')
            verify('gender')
            <td>${verify('race')}</td>
            <td>${verify('affiliation')}</td>
            <td>${ki}</td>
        </tr>`;
}



//WIP

function verify(stuff){

    //will try to make this work for everyone
    let test = document.getElementById(stuff); 

    console.log("Th type shit: " + test);


    console.log("input: " +input[stuff]+ "   answer: " + stuff);


    if(input[stuff] === answer[stuff]){ //not sure if this works 
    console.log("i was right on: " + stuff);

        //test.style.backgroundColor = "green";

        return '<td style="backgroundColor=red"> ${input[stuff]} </td>';

        //find a way to change that divs bg to green
    }
    //find a way to change that divs bg to red
    console.log("i was wrong on: " + stuff);
        //test.style.backgroundColor = "red";

        return '<td style="backgroundColor=red"> ${input[stuff]} </td>';
}


//END OF WIP

*/

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

function findKi() {
    if (answer.maxKi !== input.maxKi) {
        if (answer.maxKi > input.maxKi) {
            return 'Hes stronger';
        }
        if (answer.maxKi < input.maxKi) {
            return 'Youre stronger';
        }
    }
    return 'You are the same';
}

function endGame() {
    if (input.name === answer.name) {
        vanishForm();
    }
}

function vanishForm() {
    const formElements = document.querySelectorAll('#myForm label, #myForm input, #myForm button');

    for (let i = 0; i < formElements.length; i++) {
        formElements[i].style.display = 'none';
    }
}