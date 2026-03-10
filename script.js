const questions = [

  { level: 1, question: "Qual é a principal função do sistema respiratório no corpo humano?", options: ["Produzir energia para os músculos", "Realizar a respiração e a troca de gases com o ambiente", "Controlar os batimentos cardíacos", "Produzir células do sangue"], correct: "Realizar a respiração e a troca de gases com o ambiente" },

  { level: 1, question: "Durante a respiração, qual troca de gases acontece no corpo?", options: ["O corpo recebe gás carbônico e elimina oxigênio", "O corpo recebe oxigênio e elimina gás carbônico", "O corpo recebe hidrogênio e elimina oxigênio", "O corpo recebe nitrogênio e elimina gás carbônico"], correct: "O corpo recebe oxigênio e elimina gás carbônico" },

  { level: 1, question: "Qual das opções representa uma função do sistema respiratório?", options: ["Produzir glóbulos vermelhos", "Filtrar o ar que entra no corpo", "Controlar o sistema nervoso", "Produzir hormônios"], correct: "Filtrar o ar que entra no corpo" },

  { level: 1, question: "Além da respiração, qual atividade também é possível graças ao sistema respiratório?", options: ["Produção da voz", "Digestão dos alimentos", "Circulação do sangue", "Produção de ossos"], correct: "Produção da voz" },

  { level: 1, question: "Qual função do sistema respiratório está ligada diretamente aos sentidos?", options: ["Visão", "Audição", "Olfato", "Paladar"], correct: "Olfato" },


  { level: 2, question: "Qual órgão prepara o ar antes que ele entre no corpo, filtrando, aquecendo e umidificando?", options: ["Pulmões", "Nariz", "Laringe", "Brônquios"], correct: "Nariz" },

  { level: 2, question: "Qual estrutura funciona como um canal que leva o ar do nariz até a laringe?", options: ["Brônquios", "Pulmões", "Faringe", "Traqueia"], correct: "Faringe" },

  { level: 2, question: "Qual órgão permite a passagem do ar e também é responsável pela produção da voz?", options: ["Nariz", "Traqueia", "Laringe", "Pulmões"], correct: "Laringe" },

  { level: 2, question: "Qual estrutura conduz o ar da laringe até os brônquios?", options: ["Faringe", "Traqueia", "Pulmões", "Nariz"], correct: "Traqueia" },

  { level: 2, question: "Qual é a função dos brônquios no sistema respiratório?", options: ["Filtrar o ar", "Produzir a voz", "Levar o ar até os pulmões", "Produzir oxigênio"], correct: "Levar o ar até os pulmões" },


  { level: 3, question: "Em qual órgão ocorre a troca de gases essencial para a vida?", options: ["Nariz", "Pulmões", "Faringe", "Laringe"], correct: "Pulmões" },

  { level: 3, question: "Durante a troca de gases nos pulmões, o que acontece com o oxigênio?", options: ["Ele passa para o sangue", "Ele é eliminado do corpo", "Ele vira gás carbônico", "Ele permanece nos pulmões"], correct: "Ele passa para o sangue" },

  { level: 3, question: "Durante a troca gasosa, o gás carbônico presente no sangue:", options: ["Permanece no sangue", "Passa para os alvéolos e depois é eliminado", "Se transforma em oxigênio", "Vai para o nariz diretamente"], correct: "Passa para os alvéolos e depois é eliminado" },

  { level: 3, question: "Como se chama o processo em que o ar sai dos pulmões?", options: ["Inspiração", "Circulação", "Expiração", "Ventilação"], correct: "Expiração" },

  { level: 3, question: "A troca gasosa ocorre em pequenas estruturas presentes nos pulmões chamadas:", options: ["Brônquios", "Alvéolos", "Faringe", "Laringe"], correct: "Alvéolos" },


  { level: 4, question: "Qual doença respiratória é causada por uma infecção viral e provoca febre e tosse?", options: ["Pneumonia", "Bronquite", "Gripe", "Asma"], correct: "Gripe" },

  { level: 4, question: "Qual doença é caracterizada pela inflamação das vias respiratórias, dificultando a respiração?", options: ["Asma", "Tuberculose", "Pneumonia", "Gripe"], correct: "Asma" },

  { level: 4, question: "A inflamação dos brônquios que pode causar tosse e catarro é chamada de:", options: ["Asma", "Bronquite", "Pneumonia", "Gripe"], correct: "Bronquite" },

  { level: 4, question: "Qual doença é uma infecção nos pulmões que dificulta a troca de gases?", options: ["Bronquite", "Asma", "Pneumonia", "Gripe"], correct: "Pneumonia" },

  { level: 4, question: "Qual doença infecciosa afeta principalmente os pulmões?", options: ["Gripe", "Asma", "Tuberculose", "Bronquite"], correct: "Tuberculose" },


  { level: 5, question: "Quantas vezes um adulto respira em média por minuto?", options: ["5 a 10", "12 a 20", "25 a 30", "35 a 40"], correct: "12 a 20" },

  { level: 5, question: "Aproximadamente quantas vezes uma pessoa pode respirar em um dia?", options: ["5 mil", "10 mil", "20 mil", "50 mil"], correct: "20 mil" },

  { level: 5, question: "Sobre o tamanho dos pulmões, qual afirmação está correta?", options: ["Os dois têm exatamente o mesmo tamanho", "O pulmão esquerdo é maior", "O pulmão direito é um pouco maior que o esquerdo", "O pulmão esquerdo é o único que funciona"], correct: "O pulmão direito é um pouco maior que o esquerdo" },

  { level: 5, question: "Qual hábito ajuda a manter o sistema respiratório saudável?", options: ["Evitar ambientes ventilados", "Evitar fumar e ficar perto de fumaça", "Beber pouca água", "Dormir pouco"], correct: "Evitar fumar e ficar perto de fumaça" },

  { level: 5, question: "Qual atitude ajuda a prevenir doenças respiratórias?", options: ["Evitar beber água", "Manter boa higiene e lavar as mãos", "Respirar apenas pela boca", "Dormir menos horas"], correct: "Manter boa higiene e lavar as mãos" }

];

let level = 1;
let correctCount = 0;
let answeredCount = 0;
let availableQuestions = [];
let currentQuestion;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const levelEl = document.getElementById("level");
const xpEl = document.getElementById("xp");
const progressEl = document.getElementById("progress");
const startBtn = document.getElementById("startBtn");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startLevel() {
  correctCount = 0;
  answeredCount = 0;
  availableQuestions = questions.filter(q => q.level === level);
  shuffle(availableQuestions);
  updateHUD();
  nextQuestion();
}

function nextQuestion() {

  answersEl.innerHTML = "";

  if (answeredCount === 5) {
    endLevel();
    return;
  }

  if (availableQuestions.length === 0) {
    endLevel();
    return;
  }

  currentQuestion = availableQuestions.pop();

  questionEl.textContent = currentQuestion.question;
  questionEl.classList.remove("main-message");

  const shuffledOptions = [...currentQuestion.options];
  shuffle(shuffledOptions);

  shuffledOptions.forEach(option => {

    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("answer-btn");

    button.addEventListener("click", () => checkAnswer(option, button));

    answersEl.appendChild(button);

  });
}

function checkAnswer(selected, button) {

  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach(btn => btn.disabled = true);

  answeredCount++;

  if (selected === currentQuestion.correct) {
    button.classList.add("correct");
    correctCount++;
  } else {
    button.classList.add("wrong");
  }

  updateHUD();

  setTimeout(() => {
    nextQuestion();
  }, 800);

}

function endLevel() {

  if (correctCount === 5) {

    if (level === 5) {

      questionEl.innerHTML = "🏆 PARABÉNS! Você zerou o RespiraLab!";
      questionEl.classList.add("main-message");

      answersEl.innerHTML = "";

      startBtn.style.display = "block";
      startBtn.textContent = "Jogar Novamente";

      level = 1;

      startBtn.onclick = () => {
        startBtn.style.display = "none";
        startLevel();
      };

      return;

    }

    level++;

    questionEl.innerHTML = "🎉 Nível concluído! Prepare-se para o próximo!";
    questionEl.classList.add("main-message");

    answersEl.innerHTML = "";

    startBtn.style.display = "block";
    startBtn.textContent = "Ir para o próximo nível";

    startBtn.onclick = () => {
      startBtn.style.display = "none";
      startLevel();
    };

  } else {

    questionEl.innerHTML = "❌ <span style='color:#ff4d6d;'>Você não acertou as 5 questões.</span><br>⚡ Tente novamente e domine esse nível!";

    questionEl.classList.add("main-message");

    answersEl.innerHTML = "";

    startBtn.style.display = "block";
    startBtn.textContent = "Repetir nível";

    startBtn.onclick = () => {
      startBtn.style.display = "none";
      startLevel();
    };

  }

}

function updateHUD() {

  levelEl.textContent = level;
  xpEl.textContent = correctCount;
  progressEl.style.width = (answeredCount * 20) + "%";

}

startBtn.onclick = () => {

  startBtn.style.display = "none";
  level = 1;
  startLevel();

};