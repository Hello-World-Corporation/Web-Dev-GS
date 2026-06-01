// PERGUNTAS DO QUIZ

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

let perguntaAtual = 0;
let pontos = 0;

const pergunta = document.getElementById("question");
const respostas = document.getElementById("answer-buttons");
const botaoProximo = document.getElementById("next-btn");

mostrarPergunta();

function mostrarPergunta() {

    respostas.innerHTML = "";

    pergunta.innerHTML =
        (perguntaAtual + 1) + ". " + perguntas[perguntaAtual].pergunta;

    for(let i = 0; i < perguntas[perguntaAtual].opcoes.length; i++) {

        const botao = document.createElement("button");

        botao.innerHTML = perguntas[perguntaAtual].opcoes[i];

        botao.classList.add("btn");

        botao.onclick = function() {
            verificarResposta(i);
        };

        respostas.appendChild(botao);
    }
}

function verificarResposta(indice) {

    if(indice === perguntas[perguntaAtual].correta) {
        pontos++;
    }

    perguntaAtual++;

    if(perguntaAtual < perguntas.length) {
        mostrarPergunta();
    }
    else {
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

    respostas.innerHTML = "";

    botaoProximo.style.display = "none";
}