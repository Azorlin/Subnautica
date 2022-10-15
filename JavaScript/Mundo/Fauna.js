function BelowZero() {
    SUBouBLZclose()
    let MudarBHbg = document.querySelector(".header");
    MudarBHbg.className = "header2";
    MudarTabelaBLZ()
    footerBLZ()
    iconBLZ()
    window.scrollTo(0,0)
}
      
function Subnautica() {
    SUBouBLZclose()
    let MudarSHbg = document.querySelector(".header2");
    MudarSHbg.className = "header";
    MudarTabelaSUB()
    footerSUB()
    iconSUB()
    window.scrollTo(0,0)
}

function MudartextoBLZ(){
    let MudarBTh3 = document.querySelector("#h3-1");
    MudarBTh3.innerHTML = "Subnautica: Below Zero";
    let MudarBTsh3 = document.querySelector("#subh3-1");
    MudarBTsh3.innerHTML = "O Mar Congelado do Ártico";

    let MudarBp1 = document.querySelector("#p-1");
    MudarBp1.innerHTML = "Subnautica Below Zero é um jogo de sobrevivência e aventura de mundo aberto, ambientado em um planeta alienígena coberto por água, mas dessa vez no ártico.";

    let MudarBh51 = document.querySelector("#h5-1");
    MudarBh51.innerHTML = "Retorne ao Planeta 4546B";

    let MudarBp2 = document.querySelector("#p-2");
    MudarBp2.innerHTML = "Mergulhe em uma nova expedição em temperaturas abaixo de zero em uma região ártica do Planeta 4546B. Chegando com pouco mais que sua inteligência e alguns equipamentos de sobrevivência, você parte para investigar o que aconteceu com a sua irmã...";

    let MudarBh52 = document.querySelector("#h5-2");
    MudarBh52.innerHTML = "Descubra a Verdade";

    let MudarBp3 = document.querySelector("#p-3");
    MudarBp3.innerHTML = "A Alterra partiu apressada depois de um incidente misterioso. Estações de pesquisa abandonadas estão espalhadas pela região. O que aconteceu com os cientistas que viviam e trabalhavam aqui? Registros, itens e bancos de dados espalhados pelos destroços pintam uma nova imagem do incidente. Com recursos limitados, você deve improvisar para sobreviver por conta própria.";

    let MudarBh53 = document.querySelector("#h5-3");
    MudarBh53.innerHTML = "Descubra Biomas Inexplorados";

    let MudarBp4 = document.querySelector("#p-4");
    MudarBp4.innerHTML = "Nade sob os arcos azuis das Pontes Retorcidas. Fique hipnotizado pelos reluzentes cristais gigantes das Cavernas de Cristal. Escale picos cobertos de neve e aventure-se nas cavernas congeladas da Bacia Glacial. Manobre entre respiradouros térmicos em erupção para descobrir antigos artefatos alienígenas.";

    let MudarBh54 = document.querySelector("#h5-4");
    MudarBh54.innerHTML = "Construa Habitats e Veículos";

    let MudarBp5 = document.querySelector("#p-5");
    MudarBp5.innerHTML = "Sobreviva ao clima inclemente construindo habitats extensos, procurando recursos e fabricando equipamentos. Percorra a tundra coberta de neve em uma moto flutuante Snowfox. Viaje por biomas encantadores e perigosos no seu Seatruck modular.";

    let MudarBh55 = document.querySelector("#h5-5");
    MudarBh55.innerHTML = "Pesquise Formas de Vida Alienígenas";

    let MudarBp6 = document.querySelector("#p-6");
    MudarBp6.innerHTML = "Há alguma coisa desconhecida à espreita atrás de cada pedra. Nade e atravesse o gigantesco Holefish Titã, encontre o assustador Leviatã Sombrio e visite os adoráveis Pinglins. Mas fique de olhos abertos. Nem todas as criaturas nesse mundo estranho são amigáveis.";

    let MudarBh56 = document.querySelector("#h5-6");
    MudarBh56.innerHTML = "Sobreviva às Temperaturas Congelantes";

    let MudarBp7 = document.querySelector("#p-7");
    MudarBp7.innerHTML = "Mergulhe, a água está morna. As temperaturas abaixo de zero dessa região ártica são uma nova ameaça. Novas condições climáticas cobrem os habitats terrestres. Fabrique uma roupa aquecida, beba café bem quente e se aqueça perto dos Lírios Térmicos para evitar congelar.";

    let MudarBh57 = document.querySelector("#h5-7");
    MudarBh57.innerHTML = "Um Oceano de Intrigas";

    let MudarBp8 = document.querySelector("#p-8");
    MudarBp8.innerHTML = "O que aconteceu de verdade com a sua irmã? Quem eram os alienígenas que estiveram aqui antes de você? Por que eles vieram para esse planeta? A verdade pode servir de conforto para o luto?";
}

function MudartextoSUB(){
    let MudarBTh3 = document.querySelector("#h3-1");
    MudarBTh3.innerHTML = "Subnautica";
    let MudarBTsh3 = document.querySelector("#subh3-1");
    MudarBTsh3.innerHTML = "Um Oceano de outra Galaxia";

    let MudarBp1 = document.querySelector("#p-1");
    MudarBp1.innerHTML = "Subnautica é um jogo de sobrevivência e aventura de mundo aberto, ambientado em um planeta alienígena coberto por água, um mundo enorme e aberto cheio de maravilhas e perigos espera por você!";

    let MudarBh51 = document.querySelector("#h5-1");
    MudarBh51.innerHTML = "Sozinho na Imensidão Azul";

    let MudarBp2 = document.querySelector("#p-2");
    MudarBp2.innerHTML = "Após sua nave-mãe, a Aurora, cair misteriosamente em um mundo oceânico alienígena, você tem um único caminho a seguir,  para baixo. Os oceanos de Subnautica variam de recifes de corais rasos banhados pelo sol a trincheiras traiçoeiras em águas profundas, campos de lava e rios subaquáticos bioluminescentes. Gerencie seu suprimento de oxigênio enquanto explora florestas de algas, planaltos, recifes e sistemas de cavernas sinuosas. A água está cheia de vida: parte dela é útil, boa parte é perigosa.";

    let MudarBh52 = document.querySelector("#h5-2");
    MudarBh52.innerHTML = "Explore, Crie e Sobreviva!";

    let MudarBp3 = document.querySelector("#p-3");
    MudarBp3.innerHTML = "Após o pouso forçado em seu Life Pod, o relógio está correndo para encontrar água, comida e desenvolver o equipamento que você precisa explorar. Colete recursos do oceano ao seu redor. Crie equipamentos de mergulho, luzes, módulos de habitat e submarinos. Aventure-se cada vez mais fundo para encontrar recursos mais raros, permitindo que você crie itens cada vez mais avançados.";

    let MudarBh53 = document.querySelector("#h5-3");
    MudarBh53.innerHTML = "Construa sua Base em baixo d'água";

    let MudarBp4 = document.querySelector("#p-4");
    MudarBp4.innerHTML = "Construa bases no fundo do mar. Escolha layouts e componentes e gerencie a integridade do casco à medida que a profundidade e a pressão aumentam. Use sua base para armazenar recursos, estacionar veículos e reabastecer suprimentos de oxigênio enquanto explora o vasto oceano.";

    let MudarBh54 = document.querySelector("#h5-4");
    MudarBh54.innerHTML = "Desvende os mistérios desse Mar";

    let MudarBp5 = document.querySelector("#p-5");
    MudarBp5.innerHTML = "O que aconteceu com este planeta? Os sinais são abundantes de que algo não está certo. O que te fez bater? O que está infectando a vida marinha? Quem construiu as misteriosas estruturas espalhadas pelo oceano? Você pode encontrar uma maneira de sair vivo do planeta?";

    let MudarBh55 = document.querySelector("#h5-5");
    MudarBh55.innerHTML = "Um Mundo Completamente Vivo";

    let MudarBp6 = document.querySelector("#p-6");
    MudarBp6.innerHTML = "O Mundo de Subnautica possui diversos animais e plantas que se interagem um com os outros tornando o mundo mais vivo e natural. Entre os animais podemos ter deste um pequeno e rápido peixe ate enormes criaturas desejando seu sangue, os chamados leviathans.";

    let MudarBh56 = document.querySelector("#h5-6");
    MudarBh56.innerHTML = "Mergulhe abaixo do fundo do oceano";

    let MudarBp7 = document.querySelector("#p-7");
    MudarBp7.innerHTML = "Os sistemas de cavernas serpenteiam abaixo do fundo do mar, de passagens claustrofóbicas escuras a cavernas iluminadas por vida bioluminescente e fluxos de lava ardentes. Explore o mundo abaixo do fundo do oceano, mas observe seus níveis de oxigênio e tome cuidado para evitar as ameaças à espreita na escuridão.";

    let MudarBh57 = document.querySelector("#h5-7");
    MudarBh57.innerHTML = "";

    let MudarBp8 = document.querySelector("#p-8");
    MudarBp8.innerHTML = "";
}

function MudarTabelaBLZ(){
    let MapaSub = document.querySelector("#TabelaSUB");
    MapaSub.className = "TabelaNONE";
    let MapaBLZ = document.querySelector("#TabelaBLZ");
    MapaBLZ.className = "Tabela container";
}

function MudarTabelaSUB(){
    let MapaBLZ = document.querySelector("#TabelaBLZ");
    MapaBLZ.className = "TabelaNONE";
    let MapaSub = document.querySelector("#TabelaSUB");
    MapaSub.className = "Tabela container";
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