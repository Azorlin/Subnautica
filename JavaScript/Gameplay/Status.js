function BelowZero() {
    SUBouBLZclose()
    let MudarBHbg = document.querySelector(".header");
    MudarBHbg.className = "header2";
    MudartextoBLZ()
    footerBLZ()
    iconBLZ()
    temp()
    window.scrollTo(0,0)
}
      
function Subnautica() {
    SUBouBLZclose()
    let MudarSHbg = document.querySelector(".header2");
    MudarSHbg.className = "header";
    MudartextoSUB()
    footerSUB()
    iconSUB()
    tempNONE()
    window.scrollTo(0,0)
}

function MudartextoBLZ(){
    let MudarBp5 = document.querySelector("#p-5");
    MudarBp5.innerHTML = "Os dois medidores são marcados a partir de 100, mas funcionam de maneira ligeiramente diferente: o medidor de Água nunca excede 100 em nenhuma circunstância, mas o medidor de Alimentos 'transborda' acima de 100 se o valor de Alimentos de um item consumido for além de 100, e ainda não está 100 ou superior. O valor máximo para Alimentos é, portanto, 184.";

    let MudarBp7 = document.querySelector("#p-7");
    MudarBp7.innerHTML = "Armazenar peixes vivos em recipientes de armazenamento os manterá vivos indefinidamente até que o jogador decida cozinhá-los. Quando o peixe estiver cozido, ele começará a apodrecer, mesmo dentro de recipientes de armazenamento. Uma outra opção é curar peixes, em vez de cozinhá-los, evitará que eles se decomponham. Isso tem o custo de diminuir o nível de hidratação do jogador ao comer peixe curado, mas isso pode ser preferível quando o jogador viaja para longe de sua base ou quando em áreas com poucos peixes locais. Há também a opção de aramezenar os akimentos em geladeiras que impedem a decomposição dele.";
}

function MudartextoSUB(){
    let MudarSp5 = document.querySelector("#p-5");
    MudarSp5.innerHTML = "Os dois medidores são marcados a partir de 100, mas funcionam de maneira ligeiramente diferente: o medidor de Água nunca excede 100 em nenhuma circunstância, mas o medidor de Alimentos 'transborda' acima de 100 se o valor de Alimentos de um item consumido for além de 100, e ainda não está 100 ou superior. O valor máximo para Alimentos é, portanto, 174.";

    let MudarSp7 = document.querySelector("#p-7");
    MudarSp7.innerHTML = "Armazenar peixes vivos em recipientes de armazenamento os manterá vivos indefinidamente até que o jogador decida cozinhá-los. Quando o peixe estiver cozido, ele começará a apodrecer, mesmo dentro de recipientes de armazenamento. Uma outra opção é curar peixes, em vez de cozinhá-los, evitará que eles se decomponham. Isso tem o custo de diminuir o nível de hidratação do jogador ao comer peixe curado, mas isso pode ser preferível quando o jogador viaja para longe de sua base ou quando em áreas com poucos peixes locais.";

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

function temp(){
    let MudarBHbg = document.querySelector("#temperatura");
    MudarBHbg.className = "container mt-5 box bg-dark p-5";
}

function tempNONE(){
    let MudarBHbg = document.querySelector("#temperatura");
    MudarBHbg.className = "none";
}