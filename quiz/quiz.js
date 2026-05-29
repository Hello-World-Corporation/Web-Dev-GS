// Array de questões e respostas para o quiz

const questions = [
    {
        question: "Qual é o principal objetivo da plataforma SpaceFarm?",
        answers: [
            {id: 1, text: "Vender equipamentos agrícolas via e-commerce", correct: false},
            {id: 2, text: "Conectar dados de satélites com sensores IoT para agricultura de precisão em áreas remotas", correct: true},
            {id: 3, text: "Criar um sistema de irrigação automática sem uso de dados externos", correct: false},
            {id: 4, text: "Monitorar o clima urbano para grandes cidades brasileiras", correct: false},
            {id: 5, text: "Substituir tratores por drones autônomos nas lavouras", correct: false}
        ]
    },
    {
        question: "Quais são os principais Objetivos de Desenvolvimento Sustentável (ODS) abordados pelo SpaceFarm?",
        answers: [
            {id: 1, text: "ODS 1 (Erradicação da Pobreza), ODS 4 (Educação) e ODS 7 (Energia Limpa)", correct: false},
            {id: 2, text: "ODS 2 (Agricultura Sustentável), ODS 9 (Inovação e Infraestrutura) e ODS 13 (Ação Climática)", correct: true},
            {id: 3, text: "ODS 6 (Água Potável), ODS 11 (Cidades Sustentáveis) e ODS 15 (Vida Terrestre)", correct: false},
            {id: 4, text: "ODS 3 (Saúde), ODS 8 (Trabalho Decente) e ODS 10 (Redução das Desigualdades)", correct: false},
            {id: 5, text: "ODS 5 (Igualdade de Gênero), ODS 12 (Consumo Responsável) e ODS 16 (Paz e Justiça)", correct: false}
        ]
    },
    {
        question: "Qual tipo de satélite inspirou o conceito de edge computing embarcado utilizado no SpaceFarm?",
        answers: [
            {id: 1, text: "Satélites geoestacionários de telecomunicações", correct: false},
            {id: 2, text: "Satélites CubeSat", correct: true},
            {id: 3, text: "Satélites meteorológicos de grande porte", correct: false},
            {id: 4, text: "Satélites de navegação GPS", correct: false},
            {id: 5, text: "Satélites de comunicação militar", correct: false}
        ]
    },
    {
        question: "Quais fontes de dados orbitais o SpaceFarm utiliza para monitoramento agrícola?",
        answers: [
            {id: 1, text: "Google Maps e Microsoft Azure Satellite", correct: false},
            {id: 2, text: "Dados do INPE e satélites da NASA/ESA combinados com sensores locais em Arduino", correct: true},
            {id: 3, text: "Apenas sensores IoT instalados em campo, sem dados de satélite", correct: false},
            {id: 4, text: "Imagens de drones e câmeras de segurança rurais", correct: false},
            {id: 5, text: "Satélites comerciais privados da SpaceX Starlink", correct: false}
        ]
    }
];

// Pegando os elementos do DOM para manipulação do quiz
const questionElement = document.getElementById("question");    
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Colocando variáveis para controle do estado do quiz
let currentQuestionIndex = 0;
let score = 0;

// Criando uma função para iniciar o quiz, resetando as variáveis e mostrando a primeira questão
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima Pergunta";
    showQuestion();
}

// Resetando o estado para a próxima questão, limpando as respostas anteriores e escondendo o botão de próxima pergunta
function resetState() {
    nextButton.style.display = "none";
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Numerando as perguntas e mostrando as opções de resposta dinamicamente, criando botões para cada resposta e adicionando um evento de clique para selecionar a resposta
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

// Verficiando se a resposta selecionada é correta, adicionando uma classe de estilo para indicar se a resposta está correta ou incorreta, desabilitando os botões de resposta após a seleção e mostrando o botão de próxima pergunta
function selectAnswer(e) {
    answers = questions[currentQuestionIndex].answers
    const correctAnswer = answers.filter(answer => answer.correct == true)[0];

    const selectedBtn = e.target;
    const selectedAnswerId = selectedBtn.dataset.id == correctAnswer.id;
    if(selectedAnswerId) {
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
// Mostrando a pontuação final do quiz, resetando o estado para mostrar a pontuação e mudando o texto do botão de próxima pergunta para reiniciar o quiz, adicionando um evento de clique para reiniciar o quiz ao clicar no botão de reiniciar quiz
function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Reiniciar Quiz";
    nextButton.style.display = "block";

    nextButton.addEventListener("click", () => { 
        startQuiz();
    });
}


// Colocando a funcionalidade de pular para a próxima pergunta resposta, incrementando o índice da questão atual e verificando se ainda há questões restantes para mostrar a próxima questão ou mostrar a pontuação final do quiz
function handledNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Aqui adicionamos um evento de clique para o botão de próxima pergunta, verificando se ainda há questões restantes para mostrar a próxima questão ou mostrar a pontuação final do quiz
nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length - 1) {
        handledNextButton();
    } else {
        showScore();
    }
});

startQuiz();