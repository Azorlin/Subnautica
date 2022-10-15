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
    let MudarSP1 = document.querySelector("#p-1");
    MudarSP1.innerHTML = "Há uma gama muito diversificada de biomas, desde a fria Glacial Bay até as profundidades do Crystal Caves. Cada Bioma contém seu próprio conjunto de flora e fauna para descobrir e recursos para a colheita.";
}

function MudartextoSUB(){
    let MudarBP1 = document.querySelector("#p-1");
    MudarBP1.innerHTML = "Há uma gama muito diversificada de biomas, desde a vibrante Kelp Forest até as profundidades escaldantes dos enigmáticos Lagos de Lava. Cada Bioma contém seu próprio conjunto de flora e fauna para descobrir e recursos para a colheita.";
}

function MudarMapaBLZ(){
    let MapaSub = document.querySelector("#MapaSUB");
    MapaSub.className = "mapaNONE";
    let MapaBLZ = document.querySelector("#MapaBLZ");
    MapaBLZ.className = "mapa container";
}

function MudarMapaSUB(){
    let MapaBLZ = document.querySelector("#MapaBLZ");
    MapaBLZ.className = "mapaNONE";
    let MapaSub = document.querySelector("#MapaSUB");
    MapaSub.className = "mapa container";
}

function Bioma(lugar){
    if (BiomaClicks != 0){
        let docs = document.querySelector(".Bioma");
        docs.className = "BiomaNONE";
    }
    lugar.className = "Bioma container maisalgumacoisa";
    BiomaClicks++;
    console.log(BiomaClicks)
    console.log(lugar)
}

var BiomaClicks = 0;

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