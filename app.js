/**
 * app.js
 * Main Application Logic for ML Master Platform
 * Pair programming implementation for Dr. Mohammed Elmogy's ML course
 */

// Sound effects synthesizer via Web Audio API (No external sound files required)
const SoundEffects = {
  ctx: null,
  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },
  playCorrect() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, this.ctx.currentTime); // D5
      osc.frequency.setValueAtTime(880.00, this.ctx.currentTime + 0.1); // A5
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.35);
    } catch(e) {}
  },
  playWrong() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220.00, this.ctx.currentTime); // A3
      osc.frequency.setValueAtTime(164.81, this.ctx.currentTime + 0.15); // E3
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.4);
    } catch(e) {}
  }
};

// State Management
const AppState = {
  activeTab: 'overview',
  theme: localStorage.getItem('ml_platform_theme') || 'theme-dark',
  completedSections: JSON.parse(localStorage.getItem('ml_completed_sections') || '[]'),
  masteredFlashcards: JSON.parse(localStorage.getItem('ml_mastered_cards') || '[]'),
  reviewFlashcards: JSON.parse(localStorage.getItem('ml_review_cards') || '[]'),
  
  // Flashcards state
  currentCardsList: [],
  currentCardIndex: 0,
  cardFlipped: false,

  // Exam state
  examActive: false,
  examQuestions: [],
  examAnswers: {},
  examCurrentIndex: 0,
  examTimerInterval: null,
  examSecondsRemaining: 40 * 60
};

// Initialize Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderLecturesContent();
  initNavigation();
  initGlobalSearch();
  initScrollProgress();
  initFlashcards();
  initInteractiveLab();
  updateProgressUI();
});

// ==========================================
// 1. THEME SWITCHER
// ==========================================
function initTheme() {
  document.body.className = AppState.theme;
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (document.body.classList.contains('theme-dark')) {
        document.body.className = 'theme-light';
        AppState.theme = 'theme-light';
      } else {
        document.body.className = 'theme-dark';
        AppState.theme = 'theme-dark';
      }
      localStorage.setItem('ml_platform_theme', AppState.theme);
    });
  }
}

// ==========================================
// 2. NAVIGATION & TABS
// ==========================================
function initNavigation() {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      switchTab(target);
    });
  });
}

function switchTab(tabId) {
  AppState.activeTab = tabId;
  
  // Update nav buttons
  document.querySelectorAll('.nav-tab').forEach(t => {
    if (t.dataset.tab === tabId) {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });

  // Update tab panes
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.remove('active');
  });

  const activePane = document.getElementById(`tab-${tabId}`);
  if (activePane) {
    activePane.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Trigger flashcards refresh if switched to flashcards
  if (tabId === 'flashcards') {
    filterFlashcards();
  }
}

// ==========================================
// 3. RENDER LECTURES
// ==========================================
function renderLecturesContent() {
  const lecs = ['lec1', 'lec2', 'lec3', 'lec4'];
  
  lecs.forEach(lecKey => {
    const container = document.getElementById(`${lecKey}-container`);
    const data = window.LECTURES_DATA[lecKey];
    if (!container || !data) return;

    let html = '';
    data.sections.forEach((sec, idx) => {
      const isCompleted = AppState.completedSections.includes(sec.id);
      html += `
        <article class="content-block" id="block-${sec.id}">
          <header class="block-header" onclick="toggleBlockCollapse('${sec.id}')">
            <div class="block-title-group">
              <span class="block-badge">${data.code} • قسم ${idx + 1}</span>
              <div>
                <h3>${sec.titleAr}</h3>
                <small style="color:var(--text-muted); direction:ltr; display:inline-block;">${sec.titleEn} (${sec.slidesRef})</small>
              </div>
            </div>
            <div class="block-actions" onclick="event.stopPropagation()">
              <button class="btn-quiz-trigger ${isCompleted ? 'btn-success' : ''}" onclick="openSectionQuiz('${sec.id}', '${sec.titleAr}')">
                ${isCompleted ? '✅ تم اجتياز الاختبار (إعادة)' : '📝 اختبر فهمك في هذه الجزئية'}
              </button>
              <span class="collapse-icon">▲</span>
            </div>
          </header>
          <div class="block-body">
            ${sec.contentHtml}
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
              <span style="font-size:0.85rem; color:var(--text-muted);">
                هل انتهيت من استيعاب هذا القسم بالكامل؟
              </span>
              <button class="btn btn-sm btn-primary" onclick="openSectionQuiz('${sec.id}', '${sec.titleAr}')">
                🎯 التحقق من الفهم والاختبار الآن
              </button>
            </div>
          </div>
        </article>
      `;
    });

    container.innerHTML = html;
  });
}

function toggleBlockCollapse(secId) {
  const block = document.getElementById(`block-${secId}`);
  if (block) {
    block.classList.toggle('collapsed');
  }
}

// ==========================================
// 4. SECTION QUIZ MODAL LOGIC
// ==========================================
let currentModalSectionId = null;
let currentModalAnswers = {};

function openSectionQuiz(secId, title) {
  currentModalSectionId = secId;
  currentModalAnswers = {};
  
  const modal = document.getElementById('quiz-modal');
  const titleEl = document.getElementById('modal-quiz-title');
  const bodyEl = document.getElementById('modal-quiz-body');
  
  const questions = window.SECTION_QUIZZES[secId] || [];
  
  titleEl.innerText = `اختبار قياس الفهم: ${title}`;
  
  if (questions.length === 0) {
    bodyEl.innerHTML = `<p style="text-align:center; padding:30px;">لا توجد أسئلة مسجلة لهذا القسم حالياً.</p>`;
    modal.classList.remove('hidden');
    return;
  }

  let questionsHtml = '';
  questions.forEach((q, qIdx) => {
    questionsHtml += `
      <div class="modal-quiz-q-block" id="modal-q-${qIdx}">
        <div class="modal-q-title">سؤال ${qIdx + 1}: ${q.question}</div>
        <div class="modal-q-options">
          ${q.options.map((opt, optIdx) => `
            <div class="modal-opt-item" id="opt-${qIdx}-${optIdx}" onclick="selectModalOption(${qIdx}, ${optIdx}, ${q.correctIndex})">
              ${opt}
            </div>
          `).join('')}
        </div>
        <div class="modal-opt-feedback hidden" id="feedback-${qIdx}"></div>
      </div>
    `;
  });

  questionsHtml += `
    <div style="text-align: center; margin-top: 20px;">
      <button class="btn btn-primary" onclick="finalizeSectionQuiz()">💾 حفظ النتيجة وتسجيل إتمام القسم</button>
    </div>
  `;

  bodyEl.innerHTML = questionsHtml;
  modal.classList.remove('hidden');
}

function selectModalOption(qIdx, selectedIdx, correctIdx) {
  const feedbackEl = document.getElementById(`feedback-${qIdx}`);
  const questions = window.SECTION_QUIZZES[currentModalSectionId];
  const qData = questions[qIdx];

  // Store user choice
  currentModalAnswers[qIdx] = selectedIdx;

  // Visual cues
  qData.options.forEach((_, optIdx) => {
    const el = document.getElementById(`opt-${qIdx}-${optIdx}`);
    el.classList.remove('correct-ans', 'wrong-ans');
    if (optIdx === correctIdx) {
      el.classList.add('correct-ans');
    } else if (optIdx === selectedIdx) {
      el.classList.add('wrong-ans');
    }
  });

  feedbackEl.classList.remove('hidden');
  if (selectedIdx === correctIdx) {
    feedbackEl.innerHTML = `<strong>✅ إجابة ممتازة وصحيحة!</strong><br>${qData.explanation}`;
    feedbackEl.style.color = 'var(--accent-emerald)';
    SoundEffects.playCorrect();
  } else {
    feedbackEl.innerHTML = `<strong>❌ إجابة خاطئة!</strong> الإجابة الصحيحة هي: <em>"${qData.options[correctIdx]}"</em>.<br>${qData.explanation}`;
    feedbackEl.style.color = 'var(--accent-rose)';
    SoundEffects.playWrong();
  }
}

function finalizeSectionQuiz() {
  const questions = window.SECTION_QUIZZES[currentModalSectionId] || [];
  let correctCount = 0;
  
  questions.forEach((q, idx) => {
    if (currentModalAnswers[idx] === q.correctIndex) {
      correctCount++;
    }
  });

  const percentage = Math.round((correctCount / questions.length) * 100);

  if (percentage >= 70) {
    if (!AppState.completedSections.includes(currentModalSectionId)) {
      AppState.completedSections.push(currentModalSectionId);
      localStorage.setItem('ml_completed_sections', JSON.stringify(AppState.completedSections));
    }
    showToast(`🎉 أحسنت! حققت ${percentage}% وتم اعتماد هذا القسم كمكتمل.`);
  } else {
    showToast(`⚠️ حققت ${percentage}%. يرجى مراجعة الشرح والمحاولة مرة أخرى لضمان الحفظ!`);
  }

  closeQuizModal();
  renderLecturesContent();
  updateProgressUI();
}

function closeQuizModal() {
  const modal = document.getElementById('quiz-modal');
  modal.classList.add('hidden');
}

// ==========================================
// 5. FLASHCARDS SYSTEM
// ==========================================
function initFlashcards() {
  const filterSelect = document.getElementById('flashcard-lecture-filter');
  if (filterSelect) {
    filterSelect.addEventListener('change', filterFlashcards);
  }
  filterFlashcards();
}

function filterFlashcards() {
  const filter = document.getElementById('flashcard-lecture-filter').value;
  if (filter === 'all') {
    AppState.currentCardsList = [...window.FLASHCARDS_DATA];
  } else {
    AppState.currentCardsList = window.FLASHCARDS_DATA.filter(c => c.lec === filter);
  }
  
  AppState.currentCardIndex = 0;
  AppState.cardFlipped = false;
  renderCurrentFlashcard();
}

function renderCurrentFlashcard() {
  const list = AppState.currentCardsList;
  const totalEl = document.getElementById('total-cards-num');
  const currentEl = document.getElementById('current-card-num');
  const cardElem = document.getElementById('flashcard-element');
  
  const qText = document.getElementById('card-question-text');
  const aText = document.getElementById('card-answer-text');
  const tagFront = document.getElementById('card-tag-front');

  totalEl.innerText = list.length;
  currentEl.innerText = list.length > 0 ? (AppState.currentCardIndex + 1) : 0;

  // Reset flip
  cardElem.classList.remove('flipped');
  AppState.cardFlipped = false;

  if (list.length === 0) {
    qText.innerText = "لا توجد بطاقات في هذا التصنيف.";
    aText.innerText = "";
    return;
  }

  const card = list[AppState.currentCardIndex];
  tagFront.innerText = card.lecName;
  qText.innerText = card.question;
  aText.innerHTML = card.answer.replace(/\n/g, '<br>');

  // Update mastery counters
  document.getElementById('mastered-count').innerText = AppState.masteredFlashcards.length;
  document.getElementById('review-count').innerText = AppState.reviewFlashcards.length;
}

function flipFlashcard() {
  const cardElem = document.getElementById('flashcard-element');
  AppState.cardFlipped = !AppState.cardFlipped;
  cardElem.classList.toggle('flipped', AppState.cardFlipped);
}

function nextFlashcard() {
  if (AppState.currentCardIndex < AppState.currentCardsList.length - 1) {
    AppState.currentCardIndex++;
  } else {
    AppState.currentCardIndex = 0; // Loop back
  }
  renderCurrentFlashcard();
}

function prevFlashcard() {
  if (AppState.currentCardIndex > 0) {
    AppState.currentCardIndex--;
  } else {
    AppState.currentCardIndex = AppState.currentCardsList.length - 1;
  }
  renderCurrentFlashcard();
}

function markCardMastery(isMastered) {
  if (AppState.currentCardsList.length === 0) return;
  const currentCard = AppState.currentCardsList[AppState.currentCardIndex];
  
  if (isMastered) {
    if (!AppState.masteredFlashcards.includes(currentCard.id)) {
      AppState.masteredFlashcards.push(currentCard.id);
    }
    AppState.reviewFlashcards = AppState.reviewFlashcards.filter(id => id !== currentCard.id);
    SoundEffects.playCorrect();
    showToast("✅ تم حفظ البطاقة في قائمة المتقنة!");
  } else {
    if (!AppState.reviewFlashcards.includes(currentCard.id)) {
      AppState.reviewFlashcards.push(currentCard.id);
    }
    AppState.masteredFlashcards = AppState.masteredFlashcards.filter(id => id !== currentCard.id);
    SoundEffects.playWrong();
    showToast("📌 تمت إضافة البطاقة لقائمة المراجعة والتكرار.");
  }

  localStorage.setItem('ml_mastered_cards', JSON.stringify(AppState.masteredFlashcards));
  localStorage.setItem('ml_review_cards', JSON.stringify(AppState.reviewFlashcards));

  nextFlashcard();
}

function resetFlashcardsProgress() {
  if (confirm("هل ترغب في إعادة تصفير سجل حفظ البطاقات والبدء من جديد؟")) {
    AppState.masteredFlashcards = [];
    AppState.reviewFlashcards = [];
    localStorage.removeItem('ml_mastered_cards');
    localStorage.removeItem('ml_review_cards');
    renderCurrentFlashcard();
    showToast("🔄 تم تصفير سجل البطاقات.");
  }
}

// ==========================================
// 6. INTERACTIVE LAB & SIMULATORS
// ==========================================
function initInteractiveLab() {
  calculateMetrics();
  initGDSim();
  evaluateAlgorithmChoice();
}

function switchLabTab(tabKey) {
  document.querySelectorAll('.lab-nav-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.lab-content').forEach(c => c.classList.remove('active'));

  event.currentTarget.classList.add('active');
  const targetContent = document.getElementById(`lab-${tabKey}`);
  if (targetContent) {
    targetContent.classList.add('active');
  }
}

// --- Lab 1: Confusion Matrix Calculator ---
function setConfusionPreset(tp, fp, fn, tn) {
  document.getElementById('input-tp').value = tp;
  document.getElementById('input-fp').value = fp;
  document.getElementById('input-fn').value = fn;
  document.getElementById('input-tn').value = tn;
  calculateMetrics();
  showToast("تم تطبيق بيانات المثال المختار!");
}

function calculateMetrics() {
  const tp = parseFloat(document.getElementById('input-tp').value) || 0;
  const fp = parseFloat(document.getElementById('input-fp').value) || 0;
  const fn = parseFloat(document.getElementById('input-fn').value) || 0;
  const tn = parseFloat(document.getElementById('input-tn').value) || 0;

  const total = tp + fp + fn + tn;
  const posActual = tp + fn;
  const negActual = fp + tn;
  const posPred = tp + fp;
  const negPred = fn + tn;

  document.getElementById('val-total-m').innerText = total.toLocaleString();
  document.getElementById('val-pos-actual').innerText = posActual.toLocaleString();
  document.getElementById('val-neg-actual').innerText = negActual.toLocaleString();

  // Metrics Formulas
  const acc = total > 0 ? (tp + tn) / total : 0;
  const err = total > 0 ? (fp + fn) / total : 0;
  const recall = posActual > 0 ? tp / posActual : 0;
  const specificity = negActual > 0 ? tn / negActual : 0;
  const precision = posPred > 0 ? tp / posPred : 0;
  const npv = negPred > 0 ? tn / negPred : 0;
  const youden = (recall + specificity) - 1;
  
  // MCC
  const mccDenominator = Math.sqrt((tp + fp) * (tp + fn) * (tn + fp) * (tn + fn));
  const mcc = mccDenominator > 0 ? ((tp * tn) - (fp * fn)) / mccDenominator : 0;
  
  // F1
  const f1 = (precision + recall) > 0 ? 2 * (precision * recall) / (precision + recall) : 0;

  // Jaccard
  const jaccardDenom = tp + fp + fn;
  const jaccard = jaccardDenom > 0 ? tp / jaccardDenom : 0;

  const metricsData = [
    {
      en: "Accuracy (ACC)",
      ar: "الدقة الكلية",
      val: (acc * 100).toFixed(2) + "%",
      formula: `(TP + TN) / Total = (${tp} + ${tn}) / ${total}`,
      note: "نسبة التصنيف الصحيح الإجمالي"
    },
    {
      en: "Error Rate (ERR)",
      ar: "معدل الخطأ",
      val: (err * 100).toFixed(2) + "%",
      formula: `1 - ACC = (${fp} + ${fn}) / ${total}`,
      note: "نسبة العينات الخاطئة من الفئتين"
    },
    {
      en: "Sensitivity / Recall / TPR",
      ar: "الاستدعاء / الحساسية",
      val: (recall * 100).toFixed(2) + "%",
      formula: `TP / (TP + FN) = ${tp} / ${posActual}`,
      note: "نسبة الموجب الحقيقي المكتشف"
    },
    {
      en: "Specificity / TNR",
      ar: "النوعية",
      val: (specificity * 100).toFixed(2) + "%",
      formula: `TN / (FP + TN) = ${tn} / ${negActual}`,
      note: "نسبة السالب الحقيقي المصنف سالباً"
    },
    {
      en: "Precision / PPV",
      ar: "الدقة التنبؤية",
      val: (precision * 100).toFixed(2) + "%",
      formula: `TP / (FP + TP) = ${tp} / ${posPred}`,
      note: "دقة التنبؤات الإيجابية"
    },
    {
      en: "Negative Predictive (NPV)",
      ar: "القيمة التنبؤية السلبية",
      val: (npv * 100).toFixed(2) + "%",
      formula: `TN / (FN + TN) = ${tn} / ${negPred}`,
      note: "معكوس الدقة للسلبيات"
    },
    {
      en: "F1 Score / F-measure",
      ar: "مقياس إف 1 (المتوسط التوافقي)",
      val: f1.toFixed(4),
      formula: `2 × (P × R) / (P + R) = ${f1.toFixed(4)}`,
      note: "Harmonic Mean للدقة والاستدعاء"
    },
    {
      en: "Youden's Index (YI)",
      ar: "مؤشر يودن للتمييز",
      val: youden.toFixed(4),
      formula: `TPR + TNR - 1 = ${recall.toFixed(3)} + ${specificity.toFixed(3)} - 1`,
      note: "يقيم القوة التمييزية للاختبار"
    },
    {
      en: "Matthews Corr (MCC)",
      ar: "معامل ارتباط ماثيوز",
      val: mcc.toFixed(4),
      formula: `(TP×TN - FP×FN) / √(Denom)`,
      note: "مقياس متوازن للبيانات غير المتوازنة"
    },
    {
      en: "Jaccard Index",
      ar: "مؤشر جاكارد",
      val: jaccard.toFixed(4),
      formula: `TP / (TP + FP + FN) = ${tp} / ${jaccardDenom}`,
      note: "حساس لتغير توزيع البيانات"
    }
  ];

  const container = document.getElementById('metrics-results-container');
  container.innerHTML = metricsData.map(m => `
    <div class="metric-stat-card">
      <div class="metric-name-en">${m.en}</div>
      <div class="metric-name-ar">${m.ar}</div>
      <div class="metric-val-big">${m.val}</div>
      <div class="metric-formula-sub">${m.formula}</div>
      <div style="font-size:0.75rem; color:var(--text-dim); margin-top:4px;">${m.note}</div>
    </div>
  `).join('');
}

// --- Lab 2: Gradient Descent Visualizer ---
let gdSimAnimationId = null;
let gdPoints = [];
let gdTheta = -2.8;

function initGDSim() {
  updateGDSim();
}

function setGDSimLR(val) {
  document.getElementById('gd-lr-slider').value = val;
  updateGDSim();
}

function updateGDSim() {
  const lr = parseFloat(document.getElementById('gd-lr-slider').value);
  document.getElementById('lr-val-display').innerText = lr.toFixed(2);
  
  const statusEl = document.getElementById('gd-status-text');
  if (lr < 0.05) {
    statusEl.innerHTML = `<span style="color:var(--accent-amber);">⚠️ معدل التعلم صغير جداً (Too Small):</span> سيتطلب مئات التكرارات للوصول للقاع وسيستغرق وقتاً طويلاً.`;
  } else if (lr > 0.85) {
    statusEl.innerHTML = `<span style="color:var(--accent-rose);">🚨 معدل التعلم مفرط الكبر (Too Large):</span> سيقفز النموذج عبر الوادي ويتذبذب بارتفاع ويفشل في إيجاد الحل (Diverges)!`;
  } else {
    statusEl.innerHTML = `<span style="color:var(--accent-emerald);">✨ معدل التعلم متوازن ومثالي (Optimal):</span> ينحدر النموذج بسلاسة وكفاءة نحو النقطة الصغرى العامة.`;
  }

  drawGDSimCanvas();
}

function drawGDSimCanvas() {
  const svg = document.getElementById('gd-canvas');
  if (!svg) return;

  // Coordinate mapper: math (-3 to 3, cost 0 to 9) to SVG (width 600, height 350)
  const mapX = (x) => 300 + (x * 85);
  const mapY = (cost) => 310 - (cost * 30);

  // Generate smooth convex parabola path: J(theta) = theta^2
  let curveD = `M ${mapX(-3)} ${mapY(9)}`;
  for (let x = -3; x <= 3; x += 0.1) {
    curveD += ` L ${mapX(x)} ${mapY(x * x)}`;
  }

  let pointsSvg = '';
  if (gdPoints.length > 0) {
    let pathD = `M ${mapX(gdPoints[0].x)} ${mapY(gdPoints[0].y)}`;
    for (let i = 1; i < gdPoints.length; i++) {
      pathD += ` L ${mapX(gdPoints[i].x)} ${mapY(gdPoints[i].y)}`;
    }
    pointsSvg += `<path d="${pathD}" fill="none" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="4,4" />`;

    gdPoints.forEach((p, idx) => {
      pointsSvg += `
        <circle cx="${mapX(p.x)}" cy="${mapY(p.y)}" r="${idx === gdPoints.length - 1 ? 6 : 4}" fill="#f43f5e" />
      `;
    });
  }

  svg.innerHTML = `
    <!-- Axes -->
    <line x1="40" y1="310" x2="560" y2="310" stroke="#334155" stroke-width="2" />
    <line x1="300" y1="30" x2="300" y2="320" stroke="#334155" stroke-width="1.5" stroke-dasharray="2,2" />
    <text x="565" y="315" fill="#94a3b8" font-size="12">θ (Parameters)</text>
    <text x="250" y="30" fill="#94a3b8" font-size="12">Cost J(θ)</text>

    <!-- Global Minimum Marker -->
    <circle cx="${mapX(0)}" cy="${mapY(0)}" r="7" fill="#10b981" />
    <text x="${mapX(0) - 35}" y="${mapY(0) + 24}" fill="#10b981" font-size="11" font-weight="bold">القاع (Minimum)</text>

    <!-- Parabola Curve -->
    <path d="${curveD}" fill="none" stroke="#3b82f6" stroke-width="3" />

    <!-- Trajectory Points -->
    ${pointsSvg}
  `;
}

function runGDSimAnimation() {
  resetGDSim();
  const lr = parseFloat(document.getElementById('gd-lr-slider').value);
  const type = document.getElementById('gd-type-select').value;
  
  let currentX = -2.8;
  gdPoints = [{ x: currentX, y: currentX * currentX }];
  
  let step = 0;
  const maxSteps = 25;

  if (gdSimAnimationId) clearInterval(gdSimAnimationId);

  gdSimAnimationId = setInterval(() => {
    step++;
    // Gradient of x^2 is 2x
    let grad = 2 * currentX;

    // Introduce stochastic noise if SGD or Mini-batch
    if (type === 'sgd') {
      const noise = (Math.random() - 0.5) * 1.6;
      grad += noise;
    } else if (type === 'minibatch') {
      const noise = (Math.random() - 0.5) * 0.6;
      grad += noise;
    }

    currentX = currentX - (lr * grad);
    
    // Bounds check
    if (currentX > 3.2) currentX = 3.2;
    if (currentX < -3.2) currentX = -3.2;

    gdPoints.push({ x: currentX, y: currentX * currentX });
    drawGDSimCanvas();

    if (step >= maxSteps || Math.abs(grad) < 0.05) {
      clearInterval(gdSimAnimationId);
      SoundEffects.playCorrect();
    }
  }, 120);
}

function resetGDSim() {
  if (gdSimAnimationId) clearInterval(gdSimAnimationId);
  gdPoints = [];
  drawGDSimCanvas();
}

// --- Lab 3: Algorithm Decision Matrix ---
function evaluateAlgorithmChoice() {
  const m = document.getElementById('sel-m').value;
  const n = document.getElementById('sel-n').value;
  const scaling = document.getElementById('sel-scaling').value;

  const box = document.getElementById('algo-recommendation-box');
  
  let title = "";
  let algo = "";
  let sklearn = "";
  let reason = "";

  if (m === 'huge') {
    title = "بيانات عملاقة تتطلب Out-of-core learning";
    algo = "Stochastic Gradient Descent (SGD) أو Mini-batch GD";
    sklearn = "SGDRegressor";
    reason = "المعادلة الطبيعية و SVD تفشلان لأنهما غير قادرتين على التعلم خارج الذاكرة (No Out-of-core support). في حين أن SGD يعالج عينة واحدة في كل مرة وتدعم Mini-batch مجموعات صغيرة تتسع بسهولة في الذاكرة.";
  } else if (n === 'huge') {
    title = "عدد خصائص هائل (مئات الآلاف) وبيانات معتدلة";
    algo = "Gradient Descent (Batch أو Mini-batch)";
    sklearn = "SGDRegressor";
    reason = "المعادلة الطبيعية و SVD تصبحان شديدتي البطء لأن تعقيدهما الحسابي يتراوح بين O(n^2) إلى O(n^3)، بينما خوارزميات التدرج التنازلي سريعة جداً عند زيادة عدد الخصائص.";
  } else {
    title = "بيانات وخصائص معتدلة تتسع في الذاكرة";
    algo = "Singular Value Decomposition (SVD)";
    sklearn = "LinearRegression";
    reason = "تفكيك SVD هو الخيار القياسي لـ LinearRegression في سكايليرن؛ فهو سريع O(n^2)، ولا يتطلب تحديد معدل تعلم أو ضبط معاملات فائقة، ويتعامل ببراعة مع الحالات الحافة والمصفوفات غير القابلة للعكس.";
  }

  let warning = "";
  if (scaling === 'no' && algo.includes('Gradient')) {
    warning = `<div class="memo-alert" style="margin-top:14px; background:rgba(244,63,94,0.1); border-color:var(--accent-rose);">
      <strong>⚠️ تحذير حاسم:</strong> لقد اخترت خوارزمية تدرج تنازلي ولكن الخصائص غير محجمة! هذا سيؤدي لوعاء ممدود (Elongated bowl) وتذبذب شديد في المسار. <strong>يجب تطبيق StandardScaler أولاً!</strong>
    </div>`;
  }

  box.innerHTML = `
    <span class="block-badge">التوصية الذكية</span>
    <h3 style="margin: 8px 0; font-size:1.3rem;">${title}</h3>
    <div style="font-size:1.15rem; color:var(--primary); font-weight:800; margin-bottom:6px;">الخوارزمية الأنسب: ${algo}</div>
    <div style="font-size:0.9rem; color:var(--text-muted); margin-bottom:12px;">الصنف في Scikit-Learn: <code>${sklearn}</code></div>
    <p style="font-size:0.92rem; line-height:1.7;">${reason}</p>
    ${warning}
  `;
}

// ==========================================
// 7. COMPREHENSIVE EXAM SIMULATOR
// ==========================================
function startComprehensiveExam() {
  AppState.examActive = true;
  AppState.examQuestions = shuffleArray([...window.COMPREHENSIVE_EXAM_QUESTIONS]).slice(0, 25);
  AppState.examAnswers = {};
  AppState.examCurrentIndex = 0;
  AppState.examSecondsRemaining = 40 * 60; // 40 minutes

  document.getElementById('exam-intro-screen').classList.add('hidden');
  document.getElementById('exam-result-screen').classList.add('hidden');
  document.getElementById('exam-live-screen').classList.remove('hidden');

  renderExamBullets();
  renderActiveExamQuestion();
  startExamTimer();
}

function startExamTimer() {
  if (AppState.examTimerInterval) clearInterval(AppState.examTimerInterval);
  
  const timerDisplay = document.getElementById('exam-timer-display');
  AppState.examTimerInterval = setInterval(() => {
    AppState.examSecondsRemaining--;
    
    const minutes = Math.floor(AppState.examSecondsRemaining / 60);
    const seconds = AppState.examSecondsRemaining % 60;
    timerDisplay.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (AppState.examSecondsRemaining <= 0) {
      clearInterval(AppState.examTimerInterval);
      alert("انتهى وقت الامتحان! سيتم تسليم إجاباتك الآن.");
      finishExam();
    }
  }, 1000);
}

function renderExamBullets() {
  const container = document.getElementById('exam-bullets-container');
  container.innerHTML = AppState.examQuestions.map((_, idx) => `
    <button class="exam-bullet-btn ${idx === AppState.examCurrentIndex ? 'active' : ''} ${AppState.examAnswers[idx] !== undefined ? 'answered' : ''}" id="bullet-${idx}" onclick="jumpToExamQuestion(${idx})">
      ${idx + 1}
    </button>
  `).join('');
}

function renderActiveExamQuestion() {
  const q = AppState.examQuestions[AppState.examCurrentIndex];
  const card = document.getElementById('exam-active-question-card');
  const qNum = AppState.examCurrentIndex + 1;

  document.getElementById('exam-q-current').innerText = qNum;
  document.getElementById('exam-q-total').innerText = AppState.examQuestions.length;

  const currentSelection = AppState.examAnswers[AppState.examCurrentIndex];

  card.innerHTML = `
    <div class="q-lecture-tag">سؤال من: المحاضرة ${q.lectureRef}</div>
    <div class="q-title">${qNum}. ${q.question}</div>
    <div class="q-options-list">
      ${q.options.map((opt, optIdx) => `
        <div class="q-option-item ${currentSelection === optIdx ? 'selected' : ''}" onclick="selectExamAnswer(${optIdx})">
          <div class="q-option-bullet">${String.fromCharCode(65 + optIdx)}</div>
          <div>${opt}</div>
        </div>
      `).join('')}
    </div>
  `;

  // Update navigation buttons
  document.getElementById('exam-prev-btn').disabled = AppState.examCurrentIndex === 0;
  const nextBtn = document.getElementById('exam-next-btn');
  if (AppState.examCurrentIndex === AppState.examQuestions.length - 1) {
    nextBtn.innerText = "إنهاء الامتحان وتسليمه 🏁";
    nextBtn.onclick = confirmEndExam;
  } else {
    nextBtn.innerText = "السؤال التالي ⬅️";
    nextBtn.onclick = () => navExamQuestion(1);
  }

  renderExamBullets();
}

function selectExamAnswer(optIdx) {
  AppState.examAnswers[AppState.examCurrentIndex] = optIdx;
  renderActiveExamQuestion();
}

function navExamQuestion(delta) {
  const newIndex = AppState.examCurrentIndex + delta;
  if (newIndex >= 0 && newIndex < AppState.examQuestions.length) {
    AppState.examCurrentIndex = newIndex;
    renderActiveExamQuestion();
  }
}

function jumpToExamQuestion(idx) {
  AppState.examCurrentIndex = idx;
  renderActiveExamQuestion();
}

function confirmEndExam() {
  const answeredCount = Object.keys(AppState.examAnswers).length;
  const totalCount = AppState.examQuestions.length;
  
  if (answeredCount < totalCount) {
    if (!confirm(`لقد أجبت عن ${answeredCount} من أصل ${totalCount} سؤال. هل ترغب بالفعل في تسليم الامتحان الآن؟`)) {
      return;
    }
  } else {
    if (!confirm("هل أنت متأكد من تسليم الإجابات وعرض النتيجة والشهادة؟")) {
      return;
    }
  }

  finishExam();
}

function finishExam() {
  clearInterval(AppState.examTimerInterval);
  AppState.examActive = false;

  let correctScore = 0;
  const questions = AppState.examQuestions;
  
  questions.forEach((q, idx) => {
    if (AppState.examAnswers[idx] === q.correctIndex) {
      correctScore++;
    }
  });

  const percent = Math.round((correctScore / questions.length) * 100);
  const isPassed = percent >= 75;

  document.getElementById('exam-live-screen').classList.add('hidden');
  const resultScreen = document.getElementById('exam-result-screen');
  resultScreen.classList.remove('hidden');

  let certHtml = '';
  if (isPassed) {
    const today = new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });
    certHtml = `
      <div class="certificate-container" id="printable-certificate">
        <div class="cert-header">شهادة إتقان أكاديمية</div>
        <div class="cert-sub">كلية الحاسبات والمعلومات - قسم تكنولوجيا المعلومات - جامعة المنصورة</div>
        <p class="cert-body">تشهد منصة دراسة تعلم الآلة بأن الطالب / المبرمج المتميز قد اجتاز بنجاح:</p>
        <div class="cert-name">امتحان مقرر تعلم الآلة والتعرف على الأنماط (L01 - L04)</div>
        <p class="cert-body">
          بدرجة تفوق بلغت: <strong>${percent}% (${correctScore} من ${questions.length})</strong><br>
          مما يؤكد استيعابه العميق لخوارزميات وتطبيقات وقوانين المنهج.
        </p>
        <div class="cert-footer">
          <span>التاريخ: ${today}</span>
          <span>المشرف الأكاديمي: أ.د. محمد الموجي</span>
        </div>
      </div>
      <button class="btn btn-outline" style="margin-bottom: 24px;" onclick="window.print()">🖨️ طباعة الشهادة أو حفظها كـ PDF</button>
    `;
  }

  resultScreen.innerHTML = `
    <div class="exam-result-card">
      <div class="result-score-circle" style="border-color:${isPassed ? 'var(--accent-emerald)' : 'var(--accent-rose)'}">
        <div class="result-score-val" style="color:${isPassed ? 'var(--accent-emerald)' : 'var(--accent-rose)'}">${percent}%</div>
        <div class="result-score-lbl">${correctScore} من ${questions.length}</div>
      </div>

      <h2>${isPassed ? '🎉 ألف مبروك! لقد اجتزت الامتحان بجدارة' : '⚠️ نتيجة الامتحان: تحتاج لمزيد من المراجعة'}</h2>
      <p style="color:var(--text-muted); max-width:600px; margin: 10px auto 24px;">
        ${isPassed ? 'لقد أظهرت إتقاناً ممتازاً لمفاهيم وقوانين المحاضرات الأربع. يمكنك طباعة شهادتك بالأسفل ومراجعة الأسئلة.' : 'درجة النجاح هي 75%. راجع البطاقات والشروحات ثم أعد المحاولة، فالتكرار هو أساس الحفظ والإتقان!'}
      </p>

      ${certHtml}

      <div style="margin: 28px 0; display:flex; justify-content:center; gap:16px;">
        <button class="btn btn-primary" onclick="startComprehensiveExam()">🔄 إعادة الامتحان بنماذج جديدة</button>
        <button class="btn btn-outline" onclick="switchTab('overview')">العودة للرئيسية</button>
      </div>

      <div style="text-align:right; margin-top:36px;">
        <h3 style="margin-bottom:16px; border-bottom:1px solid var(--border-color); padding-bottom:8px;">مراجعة تفصيلية لكافة أسئلة الامتحان:</h3>
        <div class="exam-review-list">
          ${questions.map((q, idx) => {
            const userAns = AppState.examAnswers[idx];
            const isCorrect = userAns === q.correctIndex;
            return `
              <div style="background:var(--bg-secondary); border:1px solid ${isCorrect ? 'var(--accent-emerald)' : 'var(--accent-rose)'}; border-radius:var(--radius-md); padding:18px; margin-bottom:14px;">
                <div style="font-weight:700; margin-bottom:8px;">سؤال ${idx + 1}: ${q.question}</div>
                <div style="font-size:0.88rem; color:${isCorrect ? 'var(--accent-emerald)' : 'var(--accent-rose)'}; font-weight:700;">
                  إجابتك: ${userAns !== undefined ? q.options[userAns] : 'لم تجب'} ${isCorrect ? '✅' : '❌'}
                </div>
                ${!isCorrect ? `<div style="font-size:0.88rem; color:var(--text-main); margin-top:4px;">الإجابة الصحيحة: <strong>${q.options[q.correctIndex]}</strong></div>` : ''}
                <div style="font-size:0.82rem; color:var(--text-muted); margin-top:6px; border-top:1px dashed var(--border-color); padding-top:6px;">
                  💡 <strong>التوضيح:</strong> ${q.explanation}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

// ==========================================
// 8. GLOBAL SEARCH
// ==========================================
function initGlobalSearch() {
  const searchInput = document.getElementById('global-search');
  const clearBtn = document.getElementById('clear-search');
  const dropdown = document.getElementById('search-results-dropdown');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (query.length > 0) {
      clearBtn.classList.remove('hidden');
      performSearch(query);
    } else {
      clearBtn.classList.add('hidden');
      dropdown.classList.add('hidden');
    }
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.classList.add('hidden');
    dropdown.classList.add('hidden');
    searchInput.focus();
  });

  // Close search dropdown on click outside
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.add('hidden');
    }
  });
}

function performSearch(query) {
  const dropdown = document.getElementById('search-results-dropdown');
  let results = [];

  // Search through lectures
  Object.keys(window.LECTURES_DATA).forEach(lecKey => {
    const lec = window.LECTURES_DATA[lecKey];
    lec.sections.forEach(sec => {
      const matchInTitle = sec.titleAr.toLowerCase().includes(query) || sec.titleEn.toLowerCase().includes(query);
      const matchInContent = sec.contentHtml.toLowerCase().includes(query);
      if (matchInTitle || matchInContent) {
        results.push({
          lecKey,
          secId: sec.id,
          title: `${lec.code}: ${sec.titleAr}`,
          snippet: sec.summary
        });
      }
    });
  });

  if (results.length === 0) {
    dropdown.innerHTML = `<div style="padding:14px; text-align:center; font-size:0.85rem; color:var(--text-muted);">لا توجد نتائج مطابقة لبحثك.</div>`;
    dropdown.classList.remove('hidden');
    return;
  }

  dropdown.innerHTML = results.slice(0, 6).map(r => `
    <div class="search-result-item" onclick="jumpToSearchResult('${r.lecKey}', '${r.secId}')">
      <div class="search-result-title">${r.title}</div>
      <div class="search-result-snippet">${r.snippet}</div>
    </div>
  `).join('');

  dropdown.classList.remove('hidden');
}

function jumpToSearchResult(lecKey, secId) {
  document.getElementById('search-results-dropdown').classList.add('hidden');
  switchTab(lecKey);
  setTimeout(() => {
    const block = document.getElementById(`block-${secId}`);
    if (block) {
      block.scrollIntoView({ behavior: 'smooth', block: 'start' });
      block.style.boxShadow = '0 0 0 3px var(--primary)';
      setTimeout(() => { block.style.boxShadow = ''; }, 2000);
    }
  }, 350);
}

// ==========================================
// 9. PROGRESS & TOAST HELPERS
// ==========================================
function updateProgressUI() {
  const totalSections = 19; // 5 + 5 + 5 + 4
  const completedCount = AppState.completedSections.length;
  const progressPercent = Math.min(100, Math.round((completedCount / totalSections) * 100));

  const fillEl = document.getElementById('global-progress-fill');
  const textEl = document.getElementById('global-progress-text');
  if (fillEl && textEl) {
    fillEl.style.width = `${progressPercent}%`;
    textEl.innerText = `${progressPercent}%`;
  }

  // Update lecture specific badges
  ['lec1', 'lec2', 'lec3', 'lec4'].forEach(lKey => {
    const badge = document.getElementById(`badge-${lKey}`);
    const secList = window.LECTURES_DATA[lKey].sections.map(s => s.id);
    const doneInLec = secList.filter(id => AppState.completedSections.includes(id)).length;
    const lecPercent = Math.round((doneInLec / secList.length) * 100);
    if (badge) {
      badge.innerText = `${lecPercent}%`;
      if (lecPercent === 100) badge.style.background = 'var(--accent-emerald)';
    }
  });
}

function initScrollProgress() {
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const bar = document.getElementById('scroll-progress-bar');
    if (bar) bar.style.width = `${scrolled}%`;
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.innerText = message;
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3200);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
