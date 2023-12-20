$(document).ready(() => {
    console.log("Here");
    
    buttonHandler();
});

function buttonHandler(){
    $('#guessWarriorBtn').on('click', () => startGuessWarrior());
}

function startGuessWarrior(){
    resetMainList();
    
}

function resetMainList(){
    console.log("reseting main list");
    console.log($('#mainBody').html());
    $('#mainBody').html("<p>fds</p>");
    console.log($('#mainBody'));
}