// Metasense Metabolic Type Quiz
// Each answer maps to: A = Adrenal, T = Thyroid, G = Gonadal, P = Pituitary

const questions = [
  {
    question: "Where does your body tend to store fat first?",
    options: [
      { text: "Midsection and belly area", type: "A" },
      { text: "Upper body, arms, and back", type: "T" },
      { text: "Hips, thighs, and lower body", type: "G" },
      { text: "Evenly distributed all over", type: "P" }
    ]
  },
  {
    question: "What foods do you crave most?",
    options: [
      { text: "Salty and fatty foods (chips, fries, cheese)", type: "A" },
      { text: "Starches and sweets (bread, pasta, candy)", type: "T" },
      { text: "Rich and spicy foods (creamy sauces, hot wings)", type: "G" },
      { text: "Dairy and creamy foods (ice cream, yogurt, milk)", type: "P" }
    ]
  },
  {
    question: "How would you describe your energy throughout the day?",
    options: [
      { text: "Wired in the morning, crash in the afternoon", type: "A" },
      { text: "Peaks and valleys — energy comes in waves", type: "T" },
      { text: "Steady during the day, sluggish at night", type: "G" },
      { text: "Generally low and even, slow to get going", type: "P" }
    ]
  },
  {
    question: "How does stress affect your body?",
    options: [
      { text: "I gain belly weight and feel wired but tired", type: "A" },
      { text: "My weight fluctuates and I feel anxious", type: "T" },
      { text: "I get emotional and retain water in my lower body", type: "G" },
      { text: "I feel mentally foggy and want to sleep more", type: "P" }
    ]
  },
  {
    question: "What best describes your body shape?",
    options: [
      { text: "Broad shoulders, weight concentrated around the middle", type: "A" },
      { text: "Long limbed, weight fluctuates easily", type: "T" },
      { text: "Curvy, heavier in the hips and thighs", type: "G" },
      { text: "Soft and rounded overall, no dominant area", type: "P" }
    ]
  },
  {
    question: "How do you handle sleep?",
    options: [
      { text: "Hard to fall asleep, mind races at night", type: "A" },
      { text: "Inconsistent — some nights great, others terrible", type: "T" },
      { text: "I sleep well but wake up stiff or sore", type: "G" },
      { text: "I could sleep all day and still feel tired", type: "P" }
    ]
  },
  {
    question: "When you skip meals, what happens?",
    options: [
      { text: "I get irritable, shaky, and can't focus", type: "A" },
      { text: "My energy drops fast and I feel lightheaded", type: "T" },
      { text: "I'm okay for a while but then overeat later", type: "G" },
      { text: "I barely notice — I can go a long time without eating", type: "P" }
    ]
  },
  {
    question: "What type of exercise feels best for your body?",
    options: [
      { text: "Moderate strength training with lots of recovery", type: "A" },
      { text: "High-intensity intervals and fast-paced circuits", type: "T" },
      { text: "Heavy lower-body resistance training", type: "G" },
      { text: "Short, intense full-body sessions", type: "P" }
    ]
  },
  {
    question: "What is your biggest fitness frustration?",
    options: [
      { text: "I train hard but can't lose my belly fat", type: "A" },
      { text: "My weight constantly yo-yos no matter what I do", type: "T" },
      { text: "My lower body won't lean out even with diet changes", type: "G" },
      { text: "I gain weight easily all over and progress is slow", type: "P" }
    ]
  },
  {
    question: "Which describes your personality best?",
    options: [
      { text: "Driven achiever — always on, high-performer", type: "A" },
      { text: "Creative and energetic — lots of ideas, sometimes scattered", type: "T" },
      { text: "Warm and social — people-oriented, emotionally aware", type: "G" },
      { text: "Calm and nurturing — patient, supportive, steady", type: "P" }
    ]
  }
];

const results = {
  A: {
    letter: "A",
    name: "Adrenal",
    nickname: "The High-Stress Achiever",
    description: "Your dominant gland is the Adrenal. You're a high-performer with a stress-driven metabolism. Your body produces excess cortisol which causes fat storage around your midsection. The key to your transformation is calming your system — not pushing harder.",
    nutrition: [
      "High protein at every meal",
      "Moderate healthy fats",
      "Limit sodium and processed foods",
      "Avoid stimulants (excess caffeine)",
      "Focus on calming foods that reduce cortisol"
    ],
    training: [
      "Low-to-moderate intensity strength training",
      "Avoid excessive HIIT (raises cortisol)",
      "Prioritize recovery and rest days",
      "Steady-state cardio over intervals",
      "Recovery is your secret weapon"
    ],
    avoid: "Brutal HIIT sessions and overtraining — they spike cortisol and make you store MORE belly fat.",
    focus: "Stress management, quality sleep, and moderate training with high recovery."
  },
  T: {
    letter: "T",
    name: "Thyroid",
    nickname: "The Energy Metabolism Type",
    description: "Your dominant gland is the Thyroid. Your metabolism swings between sluggish and energetic, causing weight fluctuations and energy crashes. The key to your transformation is revving your metabolism consistently with the right fuel and movement patterns.",
    nutrition: [
      "Balanced macros at every meal",
      "Limit refined carbs and sugar",
      "Iodine-rich foods to support thyroid",
      "Consistent meal timing (don't skip)",
      "Anti-inflammatory foods to support function"
    ],
    training: [
      "HIIT and full-body circuits",
      "Frequent movement throughout the day",
      "Rev the metabolism with varied intensity",
      "Mix strength and cardio sessions",
      "Stay active outside the gym too"
    ],
    avoid: "Long slow cardio that doesn't challenge your metabolism — it stalls your system further.",
    focus: "Metabolic variety, consistent meal timing, and frequent movement to keep your engine running."
  },
  G: {
    letter: "G",
    name: "Gonadal",
    nickname: "The Hormone-Sensitive Type",
    description: "Your dominant gland is the Gonadal. Your hormones drive fat storage in your hips, thighs, and lower body. You're sensitive to hormonal cycles and respond incredibly well to resistance training. The key is balancing your hormones through targeted nutrition and training.",
    nutrition: [
      "Lower fat intake overall",
      "Moderate complex carbohydrates",
      "Cruciferous veggies to balance estrogen",
      "Lean proteins at every meal",
      "Support hormonal balance through whole foods"
    ],
    training: [
      "Lower-body focused strength training",
      "Resistance training balances hormones naturally",
      "Add cardio intervals for fat burning",
      "Progressive overload on compound lifts",
      "Consistent schedule aligned to energy cycles"
    ],
    avoid: "Only doing upper body or avoiding legs — your lower body NEEDS resistance training to rebalance hormones.",
    focus: "Heavy lower-body training, estrogen-balancing foods, and consistent progressive overload."
  },
  P: {
    letter: "P",
    name: "Pituitary",
    nickname: "The Nurturer Type",
    description: "Your dominant gland is the Pituitary. You store fat evenly all over and are highly responsive to stress, sleep, and growth hormone levels. Your metabolism is slower but steady. The key is short intense training sessions that stimulate growth hormone production.",
    nutrition: [
      "Limit dairy products",
      "Higher vegetables and lean protein",
      "Support growth hormone through nutrition",
      "Prioritize quality sleep nutrition",
      "Smaller, more frequent meals"
    ],
    training: [
      "Full-body compound lifts",
      "Sprint intervals for GH stimulation",
      "Short, intense sessions (45 min max)",
      "Stimulate growth hormone production",
      "Prioritize sleep for recovery"
    ],
    avoid: "Long, low-intensity sessions and dairy-heavy diets — they work against your pituitary function.",
    focus: "Short intense workouts, growth hormone optimization through sleep, and cutting back on dairy."
  }
};

// State
let currentQuestion = 0;
let scores = { A: 0, T: 0, G: 0, P: 0 };

// Elements
const introSection = document.getElementById('quiz-intro');
const quizSection = document.getElementById('quiz-section');
const resultsSection = document.getElementById('quiz-results');
const quizCard = document.getElementById('quizCard');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const startBtn = document.getElementById('startQuiz');
const resultCard = document.getElementById('resultCard');

// Start quiz
startBtn.addEventListener('click', () => {
  introSection.style.display = 'none';
  quizSection.style.display = 'flex';
  renderQuestion();
});

function renderQuestion() {
  const q = questions[currentQuestion];
  const letters = ['A', 'B', 'C', 'D'];

  // Shuffle options for variety
  const shuffled = [...q.options].sort(() => Math.random() - 0.5);

  quizCard.innerHTML = `
    <h2 class="quiz-question">${q.question}</h2>
    <div class="quiz-options">
      ${shuffled.map((opt, i) => `
        <button class="quiz-option" data-type="${opt.type}">
          <span class="option-letter">${letters[i]}</span>
          <span>${opt.text}</span>
        </button>
      `).join('')}
    </div>
  `;

  // Update progress
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  progressFill.style.width = progress + '%';
  progressText.textContent = `${currentQuestion + 1} / ${questions.length}`;

  // Attach click handlers
  quizCard.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => selectAnswer(btn));
  });

  // Fade in
  quizCard.style.opacity = '0';
  quizCard.style.transform = 'translateY(20px)';
  requestAnimationFrame(() => {
    quizCard.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    quizCard.style.opacity = '1';
    quizCard.style.transform = 'translateY(0)';
  });
}

function selectAnswer(btn) {
  // Visual feedback
  quizCard.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');

  // Score
  const type = btn.dataset.type;
  scores[type]++;

  // Next question after short delay
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      renderQuestion();
    } else {
      showResults();
    }
  }, 400);
}

function showResults() {
  quizSection.style.display = 'none';
  resultsSection.style.display = 'flex';

  // Find dominant type
  const dominant = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const result = results[dominant];
  const percentage = Math.round((scores[dominant] / questions.length) * 100);

  resultCard.innerHTML = `
    <span class="label">Your Result</span>
    <div class="result-type-badge">${result.letter}</div>
    <div class="result-nickname">${result.nickname}</div>
    <h1 class="result-title">YOU ARE <span class="gold">${result.name.toUpperCase()}</span> DOMINANT</h1>
    <p class="result-description">${result.description}</p>

    <div class="result-details">
      <div class="result-detail-card">
        <h4>Eat For Your Type</h4>
        <ul>
          ${result.nutrition.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
      <div class="result-detail-card">
        <h4>Train For Your Type</h4>
        <ul>
          ${result.training.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
      <div class="result-detail-card">
        <h4>What To Avoid</h4>
        <ul><li>${result.avoid}</li></ul>
      </div>
      <div class="result-detail-card">
        <h4>Your Focus</h4>
        <ul><li>${result.focus}</li></ul>
      </div>
    </div>

    <div class="result-cta">
      <a href="https://prophysiquefit.samcart.com/products/metasense-lifetime-nutrition" target="_blank" rel="noopener" class="btn btn-primary btn-lg">Get Your Full Plan &mdash; $10</a>
      <a href="/" class="btn btn-outline btn-lg">Back to Home</a>
    </div>

    <p class="result-share">Want the complete Metasense program with personalized coaching? Connect with Carlos.</p>
  `;

  // Fade in
  resultCard.style.opacity = '0';
  resultCard.style.transform = 'translateY(30px)';
  requestAnimationFrame(() => {
    resultCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    resultCard.style.opacity = '1';
    resultCard.style.transform = 'translateY(0)';
  });

  window.scrollTo({ top: 0 });
}
