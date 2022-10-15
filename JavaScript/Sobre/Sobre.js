function BelowZero() {
    SUBouBLZclose()
    let MudarBHbg = document.querySelector(".header");
    MudarBHbg.className = "header2";
    MudartextoBLZ()
    MudarMapaBLZ()
    footerBLZ()
    iconBLZ()
    window.scrollTo(0,0)
}
      
function Subnautica() {
    SUBouBLZclose()
    let MudarSHbg = document.querySelector(".header2");
    MudarSHbg.className = "header";
    MudartextoSUB()
    MudarMapaSUB()
    footerSUB()
    iconSUB()
    window.scrollTo(0,0)
}

function MudartextoBLZ(){
    let MudarBL = document.querySelector("#lançamento");
    MudarBL.innerHTML = "2019";
    let MudarBT = document.querySelector("#tempo");
    MudarBT.innerHTML = "12 a 40 horas";
    document.querySelector("#capa").src = "../../multimidia/Tcapa2.png"
    document.querySelector("#capa").alt = "Capa Subnautica Below Zero"
}

function MudartextoSUB(){
    let MudarSL = document.querySelector("#lançamento");
    MudarSL.innerHTML = "2014";
    let MudarST = document.querySelector("#tempo");
    MudarST.innerHTML = "30 horas";
    document.querySelector("#capa").src = "../../multimidia/Tcapa1.png"
    document.querySelector("#capa").alt = "Capa Subnautica"
}

function footerBLZ(){
    document.querySelector("#Steam").href = "https://store.steampowered.com/app/848450/Subnautica_Below_Zero/";
    document.querySelector("#Wikipédia").href = "https://en.wikipedia.org/wiki/Subnautica:_Below_Zero";
    document.querySelector("#footerimg").src = "../../multimidia/footer2.png"
}

function footerSUB(){
    document.querySelector("#Steam").href = "https://store.steampowered.com/app/264710/Subnautica/";
    document.querySelector("#Wikipédia").href = "https://pt.wikipedia.org/wiki/Subnautica";
    document.querySelector("#footerimg").src = "../../multimidia/footer1.png"
}

function iconBLZ(){
    document.querySelector("#iconaba").src = "../../multimidia/icone2.png"
} 

function iconSUB(){
    document.querySelector("#iconaba").src = "../../multimidia/icone1.png"
} 