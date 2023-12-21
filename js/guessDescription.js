let characters;
let char;

export function render(){
    char = characters[(Math.random()*(Object.keys(characters).length)).toFixed()];
    $('#descriptionGame').html(`
        <h2>Wich warrior has this description?</h2>
        <p>` + char.tip + `</p>
        <div class="input-group mb-3">
            <input id="warriorInput" type="text" class="form-control" placeholder="Warrior's name" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <button id="warriorInputBtn" class="btn btn-outline-secondary" type="button">Button</button>
        </div>
    `);
    addWarriorInputBtnHandler();
}

export function setChars(chars){
    characters = chars;
}

function addWarriorInputBtnHandler(){
    $('#warriorInputBtn').on('click', () => checkIfWin());
}

function checkIfWin(){
    console.log($('#warriorInput').val());
    if($('#warriorInput').val() === char.name){
        $('#descriptionGame').html(`
            <h2>Wich warrior has this description?</h2>
            <p>You Win!</p>
        `);
        return;
    }
    $('#descriptionGame').html(`
            <h2>Wich warrior has this description?</h2>
            <p>You Lose!</p>
    `);
}
