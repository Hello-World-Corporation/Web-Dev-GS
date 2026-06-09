// Perguntas do Quiz
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo) {
    document.body.className = temaSalvo;
}

const perguntas = [
    {
        pergunta: "Qual é o principal objetivo do SpaceFarm?",
        opcoes: [
            "Vender equipamentos agrícolas",
            "Monitorar lavouras com satélites e sensores",
            "Substituir tratores",
            "Monitorar cidades"
        ],
        correta: 1
    },

    {
        pergunta: "O que os sensores IoT monitoram?",
        opcoes: [
            "Umidade e temperatura",
            "Velocidade da internet",
            "Trânsito",
            "Preço dos produtos"
        ],
        correta: 0
    },

    {
        pergunta: "O que significa IoT?",
        opcoes: [
            "Internet das Coisas",
            "Internet de Satélites",
            "Sistema Operacional",
            "Banco de Dados"
        ],
        correta: 0
    },

    {
        pergunta: "Quais satélites inspiram o projeto?",
        opcoes: [
            "Starlink",
            "CubeSats",
            "GPS",
            "Telecom"
        ],
        correta: 1
    },

    {
        pergunta: "Qual instituição brasileira fornece dados espaciais?",
        opcoes: [
            "NASA",
            "ESA",
            "INPE",
            "Google"
        ],
        correta: 2
    },

    {
        pergunta: "O NDVI é usado para analisar:",
        opcoes: [
            "Vegetação",
            "Internet",
            "Temperatura do celular",
            "Velocidade do vento"
        ],
        correta: 0
    },

    {
        pergunta: "Qual benefício o SpaceFarm oferece?",
        opcoes: [
            "Maior desperdício",
            "Menor produtividade",
            "Tomada de decisão mais rápida",
            "Mais gastos"
        ],
        correta: 2
    },

    {
        pergunta: "O SpaceFarm ajuda a reduzir:",
        opcoes: [
            "A produção agrícola",
            "As perdas na lavoura",
            "O número de sensores",
            "A área cultivada"
        ],
        correta: 1
    },

    {
        pergunta: "Os alertas são enviados para:",
        opcoes: [
            "Aplicativo e sistema web",
            "Somente rádio",
            "Jornais",
            "TV aberta"
        ],
        correta: 0
    },

    {
        pergunta: "O projeto está relacionado à:",
        opcoes: [
            "Agricultura inteligente",
            "Jogos eletrônicos",
            "Redes sociais",
            "Streaming"
        ],
        correta: 0
    }
];

let numeroPergunta = 0;
let pontos = 0;

const pergunta = document.getElementById("question");
const respostas = document.getElementById("answer-buttons");
const contador = document.getElementById("contador");  

const opcao0 = document.getElementById("opcao0");
const opcao1 = document.getElementById("opcao1");
const opcao2 = document.getElementById("opcao2");
const opcao3 = document.getElementById("opcao3");

function mostrarPergunta() {

    const opcao0 = document.getElementById("opcao0");
    const opcao1 = document.getElementById("opcao1");
    const opcao2 = document.getElementById("opcao2");
    const opcao3 = document.getElementById("opcao3");


    contador.innerHTML =
        "Pergunta " +
        (numeroPergunta + 1) +
        " de " +
        perguntas.length;

    pergunta.innerHTML =
        perguntas[numeroPergunta].pergunta;

    opcao0.innerHTML =
        perguntas[numeroPergunta].opcoes[0];

    opcao1.innerHTML =
        perguntas[numeroPergunta].opcoes[1];

    opcao2.innerHTML =
        perguntas[numeroPergunta].opcoes[2];

    opcao3.innerHTML =
        perguntas[numeroPergunta].opcoes[3];
}

function responder(opcaoEscolhida) {

    if (opcaoEscolhida === perguntas[numeroPergunta].correta) {
        pontos++;
    }

    numeroPergunta++;

    if (numeroPergunta < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {

    pergunta.innerHTML =
        "Você acertou " +
        pontos +
        " de " +
        perguntas.length +
        " perguntas!";

    respostas.innerHTML =
        "<button class='btn' onclick='reiniciarQuiz()'>Reiniciar Quiz</button>";
}

function reiniciarQuiz() {

    numeroPergunta = 0;
    pontos = 0;

    respostas.innerHTML = 
    `
    <button class="btn" id="opcao0" onclick="responder(0)"></button>

    <button class="btn" id="opcao1" onclick="responder(1)"></button>

    <button class="btn" id="opcao2" onclick="responder(2)"></button>

    <button class="btn" id="opcao3" onclick="responder(3)"></button>
    `;


    mostrarPergunta();

}

mostrarPergunta();