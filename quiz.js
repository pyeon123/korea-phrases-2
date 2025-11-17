const quizzes = [
  /* (전체 문구 배열 그대로) */
  {answer:"Hello (polite)", korean:"안녕하세요", roman:"an nyeong ha se yo", image:"", explanation:"The standard, polite way to greet someone. Literally means 'Are you at peace?'"},
  {answer:"Thank you (formal)", korean:"감사합니다", roman:"gam sa ham ni da", image:"", explanation:"The formal and most common way to say 'Thank you.'"},
  {answer:"Yes / I see.", korean:"네", roman:"ne", explanation:"A common, polite way to say 'Yes' or to acknowledge what someone said."},
  {answer:"No (polite)", korean:"아니요", roman:"a ni yo", explanation:"The polite way to say 'No.'"},
  {answer:"Sorry (formal)", korean:"죄송합니다", roman:"joe song ham ni da", explanation:"The polite/formal way to apologize for a mistake or inconvenience."},
  {answer:"Excuse me (to interrupt)", korean:"실례합니다", roman:"sil lye ham ni da", explanation:"Use this to interrupt, pass through, or get someone's attention."},
  {answer:"How much is this?", korean:"이거 얼마예요?", roman:"i geo eol ma ye yo", explanation:"A simple question used to ask the price of an item."},
  {answer:"Please help me.", korean:"도와 주세요", roman:"do wa ju se yo", explanation:"Used when asking for assistance."},
  {answer:"I'm okay / It's alright.", korean:"괜찮아요", roman:"gwaen chan a yo", explanation:"Used to say 'It's fine,' 'I'm okay,' or 'No, thank you.'"},
  {answer:"Pleased to meet you.", korean:"만나서 반갑습니다", roman:"man na seo ban gap seum ni da", explanation:"A standard, polite phrase used when meeting someone for the first time."},
  {answer:"Yes, please give me.", korean:"네, 주세요", roman:"ne, ju se yo", explanation:"Used to politely accept an offer or request an item."},
  {answer:"No, I'm okay.", korean:"아니요, 괜찮아요", roman:"a ni yo, gwaen chan a yo", explanation:"Used to politely decline an offer."},
  {answer:"Where is it?", korean:"어디예요?", roman:"eo di ye yo", explanation:"Used to ask the location of something or someone."},
  {answer:"Where is the restroom?", korean:"화장실이 어디예요?", roman:"hwa jang sil i eo di ye yo", explanation:"The standard, polite way to ask for the location of the bathroom."},
  {answer:"I am a student.", korean:"저는 학생입니다", roman:"jeo neun hak saeng ip ni da", explanation:"A formal way to state your occupation as a student."},
  {answer:"I will eat well.", korean:"잘 먹겠습니다", roman:"jal meok get seum ni da", explanation:"Said before starting a meal, often to the person who prepared it."},
  {answer:"I ate well.", korean:"잘 먹었습니다", roman:"jal meok eot seum ni da", explanation:"Said after finishing a meal, expressing gratitude."},
  {answer:"Just a moment.", korean:"잠시만요", roman:"jam si man yo", explanation:"Used to politely ask someone to wait briefly."},
  {answer:"Please say that again.", korean:"다시 말씀해 주세요", roman:"da si mal sseum hae ju se yo", explanation:"A polite way to ask for repetition."},
  {answer:"Goodbye (to person staying)", korean:"안녕히 계세요", roman:"an nyeong hi gye se yo", explanation:"Used by the person leaving to the person staying."},
  {answer:"What is your name?", korean:"이름이 뭐예요?", roman:"i reum i mwo ye yo", explanation:"A common, polite way to ask for someone's name."},
  {answer:"I can't speak Korean.", korean:"한국어를 못 해요", roman:"han gu geo reul mot hae yo", explanation:"Used to indicate that you cannot speak Korean."},
  {answer:"Can you speak English?", korean:"영어 할 수 있어요?", roman:"yeong eo hal su it seo yo", explanation:"Used to ask if someone speaks English."},
  {answer:"I understand.", korean:"이해했어요", roman:"i hae haet seo yo", explanation:"Used to confirm understanding."},
  {answer:"I don't understand.", korean:"이해 못 했어요", roman:"i hae mot haet seo yo", explanation:"Used to say you did not understand."},
  {answer:"I like it / Good.", korean:"좋아요", roman:"jo a yo", explanation:"Used to express approval."},
  {answer:"I don't like it.", korean:"싫어요", roman:"silh eo yo", explanation:"Used to express dislike."},
  {answer:"What time is it now?", korean:"지금 몇 시예요?", roman:"ji geum myeot si ye yo", explanation:"Used to ask current time."},
  {answer:"Please give me the menu.", korean:"메뉴 주세요", roman:"me nyu ju se yo", explanation:"Used in a restaurant to request the menu."},
  {answer:"Please give me one of this.", korean:"이거 하나 주세요", roman:"i geo ha na ju se yo", explanation:"Used to order one specific item."},
  {answer:"Please give me the check.", korean:"계산해 주세요", roman:"gye san hae ju se yo", explanation:"Used to ask for the bill."},
  {answer:"How do I get to [place]?", korean:"[장소]에 어떻게 가요?", roman:"[jang so] e eo tteoh ge ga yo", explanation:"Asking for directions."},
  {answer:"Please speak slowly.", korean:"천천히 말해 주세요", roman:"cheon cheon hi mal hae ju se yo", explanation:"Used to ask someone to slow down."},
  {answer:"Please say it one more time.", korean:"다시 한번 말해 주세요", roman:"da si han beon mal hae ju se yo", explanation:"Repeat request."},
  {answer:"Congratulations!", korean:"축하합니다!", roman:"chuk ha ham ni da", explanation:"Formal congratulations."},
  {answer:"I'm hungry.", korean:"배고파요", roman:"bae go pa yo", explanation:"Expressing hunger."},
  {answer:"I'm thirsty.", korean:"목 말라요", roman:"mok mal la yo", explanation:"Expressing thirst."},
  {answer:"I'm tired.", korean:"피곤해요", roman:"pi gon hae yo", explanation:"Expressing tiredness."},
  {answer:"I miss you.", korean:"보고 싶어요", roman:"bo go sip peo yo", explanation:"Expressing missing someone."},
  {answer:"It's fun/interesting.", korean:"재미있어요", roman:"jae mi it seo yo", explanation:"Expressing fun."},
  {answer:"It's delicious.", korean:"맛있어요", roman:"mat it seo yo", explanation:"Expressing taste."},
  {answer:"Be careful.", korean:"조심하세요", roman:"jo sim ha se yo", explanation:"Warning phrase."},
  {answer:"See you next time.", korean:"다음에 만나요", roman:"da eum e man na yo", explanation:"Common farewell."},
  {answer:"Sleep well. / Good night.", korean:"잘 자요", roman:"jal ja yo", explanation:"Informal goodnight."},
  {answer:"What are you doing today?", korean:"오늘은 뭐 해요?", roman:"o neul eun mwo hae yo", explanation:"Asking daily plan."}
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledQuizzes = shuffle([...quizzes]);
let currentQuiz = 0;

function loadQuiz() {
  const quiz = shuffledQuizzes[currentQuiz];
  const questionEl = document.getElementById("quiz-word");
  const imgEl = document.getElementById("quiz-img");
  const optionsEl = document.getElementById("options");
  const resultEl = document.getElementById("result");
  const nextBtn = document.getElementById("nextBtn");
  const promptEl = document.getElementById("prompt");

  promptEl.innerText = "Translate this phrase into Korean";
  questionEl.innerText = quiz.answer;

  imgEl.style.display = "none";

  optionsEl.innerHTML = "";
  resultEl.innerHTML = "";
  nextBtn.style.display = "none";
  const otherOptions = shuffle(quizzes.filter(q => q.answer !== quiz.answer)).slice(0,2);
  const optionSet = shuffle([quiz, ...otherOptions]);
  optionSet.forEach(opt => {
    const row = document.createElement("div");
    row.className = "option-row";

    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.innerText = `${opt.korean} (${opt.roman})`;
    btn.onclick = () => checkAnswer(opt.answer, opt.korean, opt.roman, opt.explanation);

    const sb = document.createElement("button");
    sb.className = "sound-btn";
    sb.innerText = "🔊";
    sb.onclick = () => playSound(opt.korean);

    row.appendChild(btn);
    row.appendChild(sb);
    optionsEl.appendChild(row);
  });
}

function checkAnswer(selected, korean, roman, explanation) {
  const quiz = shuffledQuizzes[currentQuiz];
  const resultEl = document.getElementById("result");

  if (selected === quiz.answer) {
    resultEl.style.color = "green";
    let resultText = `✅ Correct! ${korean} (${roman})`;

    if (explanation) {
      resultText += `<span class="explanation">${explanation}</span>`;
    }

    resultEl.innerHTML = resultText;
    document.getElementById("nextBtn").style.display = "block";
  } else {
    resultEl.style.color = "red";
    resultEl.innerText = "❌ Wrong! Try again.";
  }
}

function nextQuiz() {
  currentQuiz++;
  if (currentQuiz >= shuffledQuizzes.length) {
    document.getElementById("quiz-word").innerText = "🎉 You completed all questions!";
    document.getElementById("quiz-img").style.display = "none";
    document.getElementById("options").innerHTML = "";
    document.getElementById("result").innerText = "";
    document.getElementById("nextBtn").style.display = "none";
    return;
  }
  loadQuiz();
}

function playSound(text) {
  if (!("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ko-KR";
  utterance.rate = 0.8;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

// 페이지 로드 시 퀴즈 시작
loadQuiz();