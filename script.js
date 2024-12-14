let colori = ["red","orange","yellow","green","cyan","blue"];
let codice = [Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1]
let turno = 0;
console.log(codice);

window.onload = function(){
    let tutto = document.querySelectorAll("input");
    for(let i = 0;i<tutto.length;i++){
        if(i>=5){ tutto[i].disabled = true; }
    }
}

function cambia(bot,val){
    let num = parseInt(val) % 6;
    //console.log(num);
    bot.name = num + 1;
    bot.style.backgroundColor = colori[num];
}

function prova(bot){
    let tutto = document.querySelectorAll("input")
    let tentativo = [];
    for(let i = 0; i < 4; i++){
        if(parseInt(tutto[i+5*turno].name)==0){
            alert("Inserire un tentativo completo.");
            return;
        }
        tentativo[i] = parseInt(tutto[i+5*turno].name);
    }
    bot.value = conta_giusti(codice,tentativo);
    if(bot.value == 4){
        alert("Hai indovinato il codice in " + (parseInt(turno) + 1) + " tentativi");
        for(let i = 0;i<tutto.length;i++){
            tutto[i].disabled = true;
        }
        return;
    }
    turno++;
    attiva(tutto,5*turno,5*turno+5);
    
    /*let tr_nuovo = document.createElement("tr");
    for(let i = 0;i<4; i++){
        let td = document.createElement("td")
        let inpu = document.createElement("input")
        inpu.inputMode = "button";
        inpu.name = "0";
        inpu.onclick = onclick="cambia(this,this.name)";
    }*/
}

function conta_giusti(a1,a2){
    let g = 0
    for(let i = 0; i<a1.length;i++){
        if(a1[i]==a2[i]) { g++; }
    }
    return g;
}

function attiva(ar,pos1,pos2){
    for(let i = 0;i<ar.length;i++){
        if(i>=pos1 && i<pos2){ ar[i].disabled = false; }
        else { ar[i].disabled = true; }
    }
}