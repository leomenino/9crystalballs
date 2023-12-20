$(document).ready(() => {

let chars = {
    1:{name:'Goku',gender:'Male',race:'Saiyan',affiliation:'Z Fighter',ki:'60,000,000',maxKi:'90,000,000,000,000,000,000,000,000',image:'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044374/hlpy6q013uw3itl5jzic.webp'},
    2:{name:'Vegeta',gender:'Male',race:'Saiyan',affiliation:'Z Fighter',ki:'54,000,000',maxKi:'19,840,000,000,000,000,000,000,000',image:'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044422/i9hpfjplth6gjudvhsx3.webp'},
    3:{name:'Piccolo',gender:'Male',race:'Namekian',affiliation:'Z Fighter',ki:'2,000,000',maxKi:'500,000,000',image:'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044481/u9fhpc9smihu2kud3cuc.webp'},
    4:{name:'Bulma',gender:'Female',race:'Human',affiliation:'Z Fighter',ki:'0',maxKi:'0',image:'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044496/bifhe9qarbrgvm0tsiru.webp'},
    5:{name:'Freezer',gender:'Male',race:'Frieza Race',affiliation:'Army of Frieza',ki:'530,000',maxKi:'52,710,000,000,000,000,000,000,000',image:'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044513/ux3n5u0tjdvysjao4w8s.webp'},
    6:{name:'Zarbon',gender:'Male',race:'Frieza Race',affiliation:'Army of Frieza',ki:'20,000',maxKi:'30,000',image:'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044531/jcdgte2shoaj2jh0ruob.webp'},
    7:{name:'Dodoria',gender:'Male',race:'Frieza Race',affiliation:'Army of Frieza',ki:'18,000',maxKi:'20,000',image:'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044548/m2mixyphepp8qwcigb3g.webp'},
    8:{name:'Ginyu',gender:'Male',race:'Frieza Race',affiliation:'Army of Frieza',ki:'9,000',maxKi:'25,000',image:'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699129673/dxsl3rjhrfmajo2gealz.webp'},
    9:{name:'Celula',gender:'Male',race:'Android',affiliation:'Freelancer',ki:'250,000,000',maxKi:'5,000,000,000',image:'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044573/mz09ghskyzf0skprredi.webp'},
    10:{name:'Gohan',gender:'Male',race:'Saiyan',affiliation:'Z Fighter',ki:'45,000,000',maxKi:'40,000,000,000,000,000,000,000,000',image:'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044627/kigekwjt2m8nwopgvabv.webp'},
}


    console.log("Here");
    
    buttonHandler();
});

function buttonHandler(){
    $('#guessWarriorBtn').on('click', () => startGuessWarrior());
}

function startGuessWarrior(){
    resetMainList();
var table = document.getElementById('tbody');

for (var key in chars) {
    if (chars.hasOwnProperty(key)) {
        table.innerHTML += '<tr>' +
            '<td><img src="' + chars[key].image + '" alt="' + chars[key].name + '" width="50"></td>' +
            '<td>' + chars[key].name + '</td>' +
            '<td>' + chars[key].gender + '</td>' +
            '<td>' + chars[key].race + '</td>' +
            '<td>' + chars[key].affiliation + '</td>' +
            '<td>' + chars[key].ki + '</td>' +
            '<td>' + chars[key].maxKi + '</td>' +
            '</tr>';
    }
}
    
}

function resetMainList(){
    $('#mainBody').html("");
}