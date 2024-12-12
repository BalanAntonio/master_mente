let colori = ["red","orange","yellow","green","cyan","blue"];
let codice = [Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1]
console.log(codice);

function cambia(bot,val){
    let num = parseInt(val) % 6;
    console.log(num);
    bot.name = num + 1;
    bot.style.backgroundColor = colori[num];
}

function prova(){
    let tutto = document.querySelectorAll("input")
}