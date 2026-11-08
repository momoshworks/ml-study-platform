/**
 * lectures-data.js
 * Comprehensive Course Content for:
 * Machine Learning & Pattern Recognition - Prof. Dr. Mohammed Elmogy
 * Faculty of Computers & Information - Mansoura University
 */

window.LECTURES_DATA = {
  // ==========================================
  // LECTURE 1: The Machine Learning Landscape
  // ==========================================
  lec1: {
    id: "lec1",
    code: "L01",
    titleEn: "The Machine Learning Landscape",
    titleAr: "مشهد وتصنيف خوارزميات تعلم الآلة",
    slideCount: 52,
    date: "04. October 2025",
    sections: [
      {
        id: "l1_s1",
        titleAr: "1. ما هو تعلم الآلة؟ (Definitions & Spam Filter)",
        titleEn: "What Is Machine Learning?",
        slidesRef: "Slides 1-7",
        summary: "التعريفات الثلاثة الأكاديمية الشهيرة لتعلم الآلة، وأول تطبيق عملي انتشر عالمياً (فلتر البريد المزعج).",
        contentHtml: `
          <p class="explanation-lead">
            تعلم الآلة (<strong>Machine Learning</strong>) هو أحد أهم فروع الذكاء الاصطناعي، وله <strong>ثلاثة تعريفات أساسية</strong> يجب حفظها بدقة للامتحان:
          </p>

          <div class="cards-subgrid">
            <div class="subcard">
              <h4>🎯 التعريف الأول (العام):</h4>
              <p><em>"It is the <strong>science and art</strong> of programming computers so they can <strong>learn from data</strong>."</em></p>
              <p>هو علم وفن برمجة الحواسيب لكي تصبح قادرة على <strong>التعلم من البيانات</strong>.</p>
            </div>

            <div class="subcard">
              <h4>🎯 التعريف الثاني (آرثر صامويل Arthur Samuel - 1959):</h4>
              <p><em>"It is the field of study that gives computers the ability to learn <strong>without being explicitly programmed</strong>."</em></p>
              <p>مجال الدراسة الذي يمنح الحواسيب القدرة على التعلم <strong>دون أن تتم برمجتها بشكل صريح ومباشر</strong> لكل حالة.</p>
            </div>

            <div class="subcard">
              <h4>🎯 التعريف الثالث الهندسي (توم ميتشل Tom Mitchell - 1997):</h4>
              <p><em>"A computer program is said to learn from <strong>experience E</strong> with respect to some <strong>task T</strong> and some <strong>performance measure P</strong>, if its performance on T, as measured by P, <strong>improves with experience E</strong>."</em></p>
              <div class="memo-alert" style="margin-top:10px;">
                <h5>💡 ثلاثية ميتشل الذهبية للحفظ (E, T, P):</h5>
                <ul>
                  <li><strong>E (Experience):</strong> الخبرة (وهي البيانات السابقة التي يتدرب عليها البرنامج).</li>
                  <li><strong>T (Task):</strong> المهمة المطلوب إنجازها (مثل تصنيف الإيميل: مزعج أم لا).</li>
                  <li><strong>P (Performance measure):</strong> مقياس الأداء (مثل نسبة الدقة Accuracy).</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="subcard" style="margin-top: 18px;">
            <h4>📧 مثال عملي وتاريخي: مرشح البريد المزعج (Spam Filter)</h4>
            <ul>
              <li><strong>التاريخ والأهمية:</strong> أول تطبيق حقيقي لتعلم الآلة دخل الاستخدام الواسع في <strong>التسعينات (1990s)</strong> وحسن حياة مئات الملايين من البشر.</li>
              <li><strong>طريقة عمله:</strong> يُعطى البرنامج أمثلة لرسائل بريد مزعجة (Spam) وضع عليها المستخدم علامة، وأمثلة لرسائل عادية (Ham)، فيتعلم تلقائياً اكتشاف وحجب الرسائل المزعجة.</li>
              <li><strong>مجموعة التدريب (Training set):</strong> هي كل الأمثلة التي يستخدمها النظام ليتعلم منها.</li>
              <li><strong>عينة التدريب (Training instance / sample):</strong> كل مثال فردي داخل مجموعة التدريب.</li>
              <li><strong>مقياس الأداء (Performance measure):</strong> يُسمى <strong>Accuracy (الدقة)</strong>، ويُستخدم عادة في مهام التصنيف (Classification).</li>
            </ul>
          </div>
        `
      },
      {
        id: "l1_s2",
        titleAr: "2. لماذا نستخدم تعلم الآلة؟ (Traditional vs ML & Data Mining)",
        titleEn: "Why Use Machine Learning?",
        slidesRef: "Slides 8-13",
        summary: "المقارنة بين الحل البرمجي التقليدي وحل تعلم الآلة، مفهوم تنقيب البيانات (Data Mining)، والحالات الأربع التي يبدع فيها الـ ML.",
        contentHtml: `
          <div class="cards-subgrid">
            <div class="subcard">
              <h4>⚙️ المنهج التقليدي (The Traditional Approach):</h4>
              <p>1. دراسة المشكلة (Study the problem).</p>
              <p>2. كتابة القواعد يدوياً بأكواد صلبة (Write rules: If/Else).</p>
              <p>3. تقييم النظام (Evaluate).</p>
              <p>4. إذا حدثت أخطاء، يتم تحليلها وإعادة كتابة القواعد يدوياً.</p>
              <div class="memo-alert" style="margin-top:8px;">
                <strong>⚠️ العيب القاتل:</strong> إذا غيّر مروجو البريد المزعج أساليبهم، فستضطر لكتابة قواعد جديدة للأبد <em>(Keep writing new rules forever)</em> مما يجعل الكود ضخماً وصعب الصيانة.
              </div>
            </div>

            <div class="subcard">
              <h4>🤖 منهج تعلم الآلة (The Machine Learning Approach):</h4>
              <p>1. دراسة المشكلة وتغذية الخوارزمية بالبيانات.</p>
              <p>2. تدريب الخوارزمية (Train ML algorithm) لتكتشف بنفسها الكلمات والأنماط كثيرة التكرار في الرسائل المزعجة.</p>
              <p>3. تقييم الحل وتحديث النموذج آلياً.</p>
              <div class="memo-alert" style="margin-top:8px;">
                <strong>✨ المزايا الثلاث الحاسمة:</strong>
                <br>• كود أقصر بكثير (Much shorter).
                <br>• أسهل في الصيانة (Easier to maintain).
                <br>• أعلى دقة (More accurate).
              </div>
            </div>
          </div>

          <div class="subcard">
            <h4>🔄 التكيف التلقائي مع التغير (Automatically Adapting to Change):</h4>
            <p>يتميز نظام تعلم الآلة بقدرته على أتمتة حلقة التحديث: عند وصول بيانات جديدة متغيرة (Update data)، يعيد النموذج تدريب نفسه تلقائياً دون تدخل بشري لإعادة كتابة القواعد.</p>
          </div>

          <div class="subcard" style="margin-top: 14px;">
            <h4>⛏️ تنقيب البيانات ومساعدة البشر على التعلم (Data Mining):</h4>
            <p>تطبيق تقنيات تعلم الآلة للغوص في كميات هائلة من البيانات يساعد البشر على <strong>اكتشاف أنماط خفية لم تكن ظاهرة للعيان</strong> (Discover patterns not immediately apparent). وهذا ما يُسمى <strong>Data Mining</strong>.</p>
          </div>

          <div class="subcard" style="margin-top: 14px; border-right: 4px solid var(--primary);">
            <h4>🏆 الحالات الأربع التي يكون فيها تعلم الآلة رائعاً (ML is Great for):</h4>
            <ol style="padding-right: 20px;">
              <li><strong>المشاكل ذات القواعد الطويلة:</strong> المشاكل التي تتطلب حلولها الحالية الكثير من الضبط الدقيق أو قوائم قواعد طويلة جداً (Long lists of rules).</li>
              <li><strong>المشاكل المعقدة:</strong> المشاكل التي لا يوجد لها أي حل جيد باستخدام الطرق التقليدية (مثل التعرف على الصوت أو تمييز الوجوه).</li>
              <li><strong>البيئات المتغيرة (Fluctuating environments):</strong> قدرة نظام تعلم الآلة على التكيف السريع مع البيانات الجديدة المتغيرة.</li>
              <li><strong>الحصول على رؤى عميقة (Getting insights):</strong> فهم واستكشاف المشاكل المعقدة والكميات الضخمة من البيانات.</li>
            </ol>
          </div>
        `
      },
      {
        id: "l1_s3",
        titleAr: "3. أمثلة التطبيقات الـ 13 والخوارزميات المناسبة (Applications & Models)",
        titleEn: "Examples of Applications",
        slidesRef: "Slides 14-18",
        summary: "جدول الربط بين كل مسألة واقعية والنموذج المعماري المحدد لها في سلايدات الدكتور الموجي.",
        contentHtml: `
          <p class="explanation-lead">
            في السلايدات من 14 إلى 18، ركز الدكتور محمد الموجي على ربط كل تطبيق عملي بالخوارزمية أو البنية العصبية المناسبة له. هذا الجدول من أكثر الأسئلة وروداً في الامتحانات:
          </p>

          <div class="styled-table-wrapper">
            <table class="styled-table">
              <thead>
                <tr>
                  <th>التطبيق العملي (Application)</th>
                  <th>نوع المهمة (Task Type)</th>
                  <th>النماذج والخوارزميات المقررة (Models)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>تحليل صور المنتجات على خط الإنتاج لتصنيفها آلياً</td>
                  <td>Image Classification</td>
                  <td><strong>CNNs</strong> (Convolutional Neural Networks)</td>
                </tr>
                <tr>
                  <td>اكتشاف الأورام في صور أشعة المخ</td>
                  <td>Semantic Segmentation</td>
                  <td><strong>CNNs</strong></td>
                </tr>
                <tr>
                  <td>تصنيف المقالات الإخبارية آلياً</td>
                  <td>NLP (Natural Language Processing)</td>
                  <td><strong>RNNs, CNNs, or Transformers</strong></td>
                </tr>
                <tr>
                  <td>حظر التعليقات المسيئة في المنتديات تلقائياً</td>
                  <td>Text Classification</td>
                  <td><strong>RNNs, CNNs, or Transformers</strong></td>
                </tr>
                <tr>
                  <td>تلخيص المستندات والوثائق الطويلة تلقائياً</td>
                  <td>Text Summarization</td>
                  <td><strong>RNNs, CNNs, or Transformers</strong></td>
                </tr>
                <tr>
                  <td>إنشاء شات بوت أو مساعد شخصي ذكي</td>
                  <td>NLU & Question-Answering</td>
                  <td><strong>RNNs, CNNs, or Transformers</strong></td>
                </tr>
                <tr>
                  <td>التنبؤ بإيرادات الشركة في العام القادم</td>
                  <td>Regression Task</td>
                  <td><strong>Linear/Polynomial Regression, Regression SVM, Regression Random Forest, ANN, RNNs, CNNs, or Transformers</strong></td>
                </tr>
                <tr>
                  <td>جعل التطبيق يستجيب للأوامر الصوتية</td>
                  <td>Speech Recognition</td>
                  <td><strong>RNNs, CNNs, or Transformers</strong></td>
                </tr>
                <tr>
                  <td>اكتشاف الاحتيال في البطاقات الائتمانية</td>
                  <td>Anomaly Detection</td>
                  <td><strong>Anomaly Detection Algorithms</strong></td>
                </tr>
                <tr>
                  <td>تجزئة العملاء حسب مشترياتهم لتصميم حملات تسويقية</td>
                  <td>Clustering</td>
                  <td><strong>Clustering Algorithms</strong> (غير خاضع للإشراف)</td>
                </tr>
                <tr>
                  <td>تمثيل البيانات المعقدة متعددة الأبعاد في رسم بياني واضح</td>
                  <td>Data Visualization</td>
                  <td><strong>Dimensionality Reduction Techniques</strong></td>
                </tr>
                <tr>
                  <td>اقتراح منتجات للعميل بناءً على مشترياته السابقة</td>
                  <td>Recommender System</td>
                  <td><strong>ANN</strong> (Artificial Neural Network)</td>
                </tr>
                <tr>
                  <td>بناء روبوت ذكي يلعب ألعاب الفيديو (مثل الشطرنج أو جو)</td>
                  <td>Policy Learning</td>
                  <td><strong>Reinforcement Learning (RL)</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "l1_s4",
        titleAr: "4. تصنيف أنظمة تعلم الآلة (Types of ML Systems)",
        titleEn: "Types of Machine Learning Systems",
        slidesRef: "Slides 19-42",
        summary: "التصنيف حسب الإشراف البشري، حسب التعلم الفوري/الدفعي، وحسب التعميم المبني على الأمثلة مقابل النماذج.",
        contentHtml: `
          <p class="explanation-lead">
            تُصنف أنظمة تعلم الآلة وفق <strong>ثلاثة معايير رئيسية</strong>:
          </p>

          <div class="cards-subgrid">
            <div class="subcard">
              <h4>1️⃣ المعيار الأول: درجة الإشراف البشري (Supervision)</h4>
              <ul>
                <li><strong>Supervised Learning (التعلم الخاضع للإشراف):</strong> بيانات التدريب تحتوي على الحلول المرغوبة المسماة <strong>Labels (التسميات)</strong>.
                  <br>• المهام: <em>Classification</em> (تصنيف) أو <em>Regression</em> (انحدار/تنبؤ بقيمة رقمية).
                  <br>• الخوارزميات: <strong>k-NN, Linear Regression, Logistic Regression, SVMs, Decision Trees & Random Forests, Neural Networks</strong>.
                </li>
                <li><strong>Unsupervised Learning (غير الخاضع للإشراف):</strong> البيانات غير معنونة (Unlabeled). يتعلم النظام بدون معلم.
                  <br>• <em>Clustering:</em> K-Means, DBSCAN, HCA.
                  <br>• <em>Anomaly/Novelty Detection:</em> One-class SVM, Isolation Forest.
                  <br>• <em>Visualization & Dim Reduction:</em> PCA, Kernel PCA, LLE, t-SNE.
                  <br>• <em>Association Rule Learning:</em> Apriori, Eclat.
                </li>
                <li><strong>Semi-supervised Learning (شبه الخاضع للإشراف):</strong> كمية ضخمة من البيانات غير المعنونة مع قليل جداً من البيانات المعنونة. (مثال: <strong>Google Photos</strong> الذي يتعرف على الأشخاص بمجرد تسمية شخص واحد).</li>
                <li><strong>Reinforcement Learning (التعلم المعزز):</strong> يتعلم فيه <strong>الوكيل (Agent)</strong> عبر مراقبة البيئة واختيار الأفعال، وتلقي مكافآت (Rewards) أو عقوبات (Penalties)، ليتعلم أفضل استراتيجية تسمى <strong>السياسة (Policy)</strong>. (أمثلة: روبوتات المشي، و <strong>AlphaGo</strong>).</li>
              </ul>
            </div>

            <div class="subcard">
              <h4>2️⃣ المعيار الثاني: طريقة التعلم (Batch vs. Online Learning)</h4>
              <ul>
                <li><strong>Batch Learning (التعلم بالدفعات / Offline):</strong>
                  <br>• النظام <em>غير قادر</em> على التعلم التراكمي.
                  <br>• يتطلب تدريبه على <strong>كل البيانات المتاحة دفعة واحدة</strong>.
                  <br>• يستهلك وقتاً وموارد ضخمة، لذا يتم دون اتصال بالشبكة (Offline).
                  <br>• لمعرفة بيانات جديدة، يجب إعادة تدريب نسخة جديدة من الصفر على كامل البيانات!
                </li>
                <li><strong>Online Learning (التعلم الفوري / التراكمي):</strong>
                  <br>• تدريب النظام تراكمياً بتغذيته بعينات البيانات بشكل متسلسل فردياً أو بمجموعات صغيرة <strong>Mini-batches</strong>.
                  <br>• كل خطوة تدريب سريعة ورخيصة التكلفة حسابياً (Fast & Cheap).
                  <br>• يتعلم البيانات الجديدة على الهواء مباشرة (On the fly) مثل بيانات <strong>أسعار الأسهم (Stock prices)</strong>.
                  <br>• <strong>Out-of-core learning:</strong> تمكين تدريب نماذج على بيانات عملاقة تتجاوز سعة الذاكرة الرئيسية (RAM) عن طريق تحميل جزء وتدريبه ثم تكرار ذلك.
                </li>
              </ul>
              <div class="memo-alert" style="margin-top:8px;">
                <strong>⚠️ ملاحظات هامة على Online Learning:</strong>
                <br>• <strong>Learning Rate (معدل التعلم):</strong> يحدد سرعة تكيف النظام مع التغير. إذا كان مرتفعاً سيتكيف بسرعة فائقة لكنه <strong>سينسى البيانات القديمة بسرعة</strong>.
                <br>• إذا دخلت بيانات فاسدة (Bad data)، سيتدهور أداء النظام تدريجياً، لذا يجب مراقبته بدقة وتوفير زر إيقاف فوري للتعلم (Switch off).
                <br>• <strong>Attribute vs Feature:</strong> الـ Attribute هو نوع البيانات (Data type)، بينما الـ Feature هو الـ Attribute مصحوباً بقيمته (Attribute + Value).
              </div>
            </div>
          </div>

          <div class="subcard" style="margin-top: 18px;">
            <h4>3️⃣ المعيار الثالث: طريقة التعميم (Instance-Based vs. Model-Based)</h4>
            <ul>
              <li><strong>Instance-based Learning (التعلم القائم على العينات):</strong> يحفظ النظام أمثلة التدريب عن ظهر قلب (Learns by heart)، ثم يعمم على الحالات الجديدة باستخدام <strong>مقياس تشابه (Similarity measure)</strong> لمقارنتها بالأمثلة المحفوظة. (مثال: k-NN).</li>
              <li><strong>Model-based Learning (التعلم القائم على النماذج):</strong> يقوم ببناء نموذج رياضي من الأمثلة، ثم يستخدم هذا النموذج لإجراء التنبؤات. (مثال: دراسة هل المال يجعل الناس أكثر سعادة؟ عبر التوفيق الخطي بين رضا الفرد ونصيب الفرد من الناتج المحلي GDP).
                <br>معادلة النموذج: <span class="code-font" style="direction:ltr; display:inline-block;">life_satisfaction = θ0 + θ1 × GDP_per_capita</span>
              </li>
              <li><strong>دالة المنفعة مقابل دالة التكلفة:</strong>
                <br>• <em>Utility / Fitness function:</em> تقيس مدى <strong>جودة</strong> النموذج (نريد تعظيمها).
                <br>• <em>Cost function:</em> تقيس مدى <strong>سوء</strong> النموذج (نريد تصغيرها والتقليل منها).
              </li>
              <li><strong>دورة عمل المشروع النموذجية (Typical Project Workflow):</strong>
                <br>1. دراسة البيانات (Study the data).
                <br>2. اختيار النموذج (Select a model).
                <br>3. تدريب النموذج على بيانات التدريب لتصغير دالة التكلفة (Train the model).
                <br>4. تطبيق النموذج لعمل تنبؤات على حالات جديدة، وتسمى هذه الخطوة: <strong>الاستدلال (Inference)</strong>.
              </li>
            </ul>
          </div>
        `
      },
      {
        id: "l1_s5",
        titleAr: "5. التحديات الكبرى في تعلم الآلة (Bad Data & Bad Algorithms)",
        titleEn: "Main Challenges of Machine Learning",
        slidesRef: "Slides 43-52",
        summary: "مشاكل البيانات السيئة (انحياز المعاينة وهندسة الخصائص)، ومشاكل الخوارزميات السيئة (Overfitting و Underfitting والحلول والتنظيم).",
        contentHtml: `
          <p class="explanation-lead">
            ينقسم الفشل في تعلم الآلة إلى سببين رئيسيين: <strong>بيانات رديئة (Bad Data)</strong> أو <strong>خوارزميات رديئة (Bad Algorithms)</strong>:
          </p>

          <div class="cards-subgrid">
            <div class="subcard">
              <h4>🛑 أولاً: البيانات السيئة (Bad Data)</h4>
              <ul>
                <li><strong>1. عدم كفاية كمية البيانات (Insufficient Quantity):</strong> تحتاج معظم خوارزميات ML لآلاف وملايين الأمثلة لتعمل بدقة.</li>
                <li><strong>2. بيانات غير ممثلة للواقع (Nonrepresentative Training Data):</strong>
                  <br>• <em>Sampling noise:</em> يحدث عند صغر حجم العينة فتكون غير ممثلة نتيجة الصدفة.
                  <br>• <em>Sampling bias (انحياز المعاينة):</em> حتى لو كانت العينة ضخمة جداً، ستكون غير ممثلة إذا كانت طريقة أخذ العينات معيبة.
                </li>
                <li><strong>3. بيانات رديئة الجودة (Poor Quality Data):</strong> مليئة بالأخطاء، والقيم الشاذة (Outliers)، والضوضاء (Noise)، مما يعيق اكتشاف الأنماط.</li>
                <li><strong>4. خصائص غير ذات صلة (Irrelevant Features):</strong> لكي يتعلم النظام يحتاج خصائص مفيدة، وذلك عبر <strong>هندسة الخصائص (Feature Engineering)</strong> التي تشمل 3 خطوات:
                  <ol style="margin-top:6px; padding-right:16px;">
                    <li><strong>Feature Selection:</strong> اختيار الخصائص الأكثر فائدة من بين الخصائص الحالية.</li>
                    <li><strong>Feature Extraction:</strong> دمج خصائص حالية لإنتاج خاصية أكثر فائدة (مثل خوارزميات تقليل الأبعاد).</li>
                    <li><strong>إنشاء خصائص جديدة (Creating new features):</strong> بجمع بيانات إضافية.</li>
                  </ol>
                </li>
              </ul>
            </div>

            <div class="subcard">
              <h4>🛑 ثانياً: الخوارزميات السيئة (Bad Algorithms)</h4>
              <div class="memo-alert">
                <h5>🔥 الإفراط في الملاءمة (Overfitting):</h5>
                <p>يعني أن النموذج <strong>يعمل بامتياز شديد على بيانات التدريب، لكنه يفشل في التعميم على البيانات الجديدة</strong> (حفظ البيانات بدلاً من فهم النمط العام وتأثر بالضوضاء).</p>
                <strong>حلول الـ Overfitting الثلاثة:</strong>
                <ol style="padding-right:16px;">
                  <li><strong>تبسيط النموذج (Simplify model):</strong> باختيار نموذج بمعاملات أقل، أو تقليل الخصائص، أو تقييد النموذج.</li>
                  <li><strong>جمع بيانات تدريب أكثر (Gather more training data).</strong></li>
                  <li><strong>تقليل الضوضاء (Reduce noise):</strong> بتصحيح الأخطاء وحذف القيم الشاذة.</li>
                </ol>
                <p style="margin-top:8px;"><strong>التنظيم (Regularization):</strong> تقييد النموذج لجعله أبسط وتقليل خطر الـ Overfitting بواسطة معامل فائق (Hyperparameter).</p>
              </div>

              <div class="memo-alert" style="background: rgba(245, 158, 11, 0.1); border-color: var(--accent-amber);">
                <h5 style="color: var(--accent-amber);">❄️ نقص الملاءمة (Underfitting):</h5>
                <p>يحدث عندما يكون <strong>النموذج بسيطاً جداً لدرجة تعجزه عن تعلم البنية الأساسية للبيانات</strong>.</p>
                <strong>حلول الـ Underfitting الثلاثة:</strong>
                <ol style="padding-right:16px;">
                  <li>اختيار نموذج أكثر قوة يحتوي على معاملات أكثر (More powerful model).</li>
                  <li>تغذية الخوارزمية بخصائص أفضل عبر هندسة الخصائص (Feed better features).</li>
                  <li>تقليل القيود المفروضة على النموذج (تقليل معامل الـ Regularization).</li>
                </ol>
              </div>
            </div>
          </div>
        `
      }
    ]
  },

  // ==========================================
  // LECTURE 2: End-to-End Machine Learning Project
  // ==========================================
  lec2: {
    id: "lec2",
    code: "L02",
    titleEn: "End-to-End Machine Learning Project",
    titleAr: "مشروع تعلم الآلة متكامل الأركان",
    slideCount: 56,
    date: "11. October 2025",
    sections: [
      {
        id: "l2_s1",
        titleAr: "1. الخطوات الثمانية وتأطير المشكلة ومقاييس الأداء",
        titleEn: "The 8 Steps, Problem Framing & Performance Measures",
        slidesRef: "Slides 1-22",
        summary: "الخطوات الثمانية للمشروع، دراسة مسألة إسكان كاليفورنيا، خطوط الأنابيب، ومقارنة RMSE مقابل MAE ومعايير Norms.",
        contentHtml: `
          <div class="memo-alert">
            <h5>📋 الخطوات الثمانية لمشروع تعلم الآلة (يجب حفظها بالترتيب!):</h5>
            <ol style="padding-right: 20px; font-weight: 600;">
              <li>Look at the big picture (النظر للصورة الكلية وتأطير المسألة).</li>
              <li>Get the data (الحصول على البيانات).</li>
              <li>Discover and visualize the data to gain insights (استكشاف وتصوير البيانات لاستخلاص الرؤى).</li>
              <li>Prepare the data for Machine Learning algorithms (تجهيز وتنظيف البيانات لخوارزميات التعلم).</li>
              <li>Select a model and train it (اختيار النموذج وتدريبه).</li>
              <li>Fine-tune your model (الضبط الدقيق للمعاملات الفائقة للنموذج).</li>
              <li>Present your solution (عرض الحل والنتائج لأصحاب العمل).</li>
              <li>Launch, monitor, and maintain your system (إطلاق النموذج ومراقبته وصيانته في بيئة الإنتاج).</li>
            </ol>
          </div>

          <div class="cards-subgrid">
            <div class="subcard">
              <h4>🏡 تأطير المسألة (مشروع أسعار المنازل في كاليفورنيا):</h4>
              <ul>
                <li><strong>البيانات:</strong> مستقاة من بيانات تعداد سكان كاليفورنيا (California census) عبر مستودع StatLib. أصغر وحدة جغرافية هي مجموعة المربعات السكنية <em>Block groups</em> (من 600 إلى 3000 شخص) ويطلق عليها السلايد مجازاً <strong>"Districts"</strong>.</li>
                <li><strong>الهدف التجاري:</strong> تغذية المخرجات في خط أنابيب استثماري (Downstream investment analysis). الحل اليدوي السابق كان مكلفاً وبطيئاً ونسبة خطأه تفوق 20%!</li>
                <li><strong>مواصفات النظام:</strong>
                  <br>• خاضع للإشراف (Supervised learning) لأن البيانات معنونة بأسعار المنازل.
                  <br>• انحدار متعدد (Multiple regression) لوجود عدة خصائص مدخلة.
                  <br>• انحدار أحادي المتغير التنبؤي (Univariate regression) لأننا نتنبأ بقيمة وحيدة لكل منطقة (سعر المنزل الوسيط).
                  <br>• تعلم بالدفعات (Batch learning) لعدم وجود تدفق مستمر والبيانات تتسع في الذاكرة.
                </li>
              </ul>
            </div>

            <div class="subcard">
              <h4>📐 مقاييس الأداء للمسألة (Performance Measures):</h4>
              <div class="equation-box">
                <div class="equation-formula">RMSE(X, h) = √( 1/m ∑_{i=1}^m (h(x^(i)) - y^(i))^2 )</div>
                <div class="equation-desc">Root Mean Square Error: المعيار الافتراضي لمهام الانحدار. يمثل المعيار الإقليدي (Euclidean norm / l2 norm ||.||_2). يعطي وزناً كبيراً للأخطاء الضخمة، وبالتالي فهو شديد الحساسية للقيم الشاذة (Outliers).</div>
              </div>
              <div class="equation-box">
                <div class="equation-formula">MAE(X, h) = 1/m ∑_{i=1}^m |h(x^(i)) - y^(i)|</div>
                <div class="equation-desc">Mean Absolute Error: معيار مانهاتن (Manhattan norm / l1 norm ||.||_1). <strong>يُفضل استخدامه عندما تحتوي البيانات على العديد من المناطق ذات القيم الشاذة (Many outlier districts).</strong></div>
              </div>
              <p><strong>قاعدة المعايير (Rule of Norms):</strong> كلما زاد مؤشر المعيار $k$ في $l_k$ norm، كلما ركز أكثر على القيم الكبيرة وتجاهل القيم الصغيرة.</p>
            </div>
          </div>
        `
      },
      {
        id: "l2_s2",
        titleAr: "2. جلب البيانات وفحصها وتقسيم الاختبار العشوائي مقابل الطبقي",
        titleEn: "Get Data, EDA & Stratified Sampling",
        slidesRef: "Slides 23-32",
        summary: "مستودعات البيانات، ملف housing.csv وخصائصه العشرة، دوال بايثون الاستكشافية، وأهمية المعاينة الطبقية.",
        contentHtml: `
          <div class="cards-subgrid">
            <div class="subcard">
              <h4>🌐 مستودعات البيانات العامة المفتوحة:</h4>
              <p>• مستودعات شهيرة: <strong>UC Irvine (UCI), Kaggle, AWS datasets</strong>.</p>
              <p>• بوابات الميتا (Meta portals): <strong>Data Portals, OpenDataMonitor, Quandl</strong>.</p>
              <p>• مصادر أخرى: ويكيبيديا، Quora، وريديت (r/datasets).</p>
            </div>

            <div class="subcard">
              <h4>🔍 الخصائص العشرة في ملف housing.csv:</h4>
              <p>يحتوي الملف على 10 خصائص:</p>
              <p class="code-font" style="direction:ltr; font-size:0.85rem; color:#60a5fa;">longitude, latitude, housing_median_age, total_rooms, total_bedrooms, population, households, median_income, median_house_value, ocean_proximity</p>
              <p><strong>ملاحظة هامة:</strong> جميع الخصائص رقمية عددية ما عدا خاصية <strong>ocean_proximity</strong> فهي نصية فئوية (Categorical object).</p>
            </div>
          </div>

          <div class="code-display">
            <div class="code-display-header"><span>Python / Pandas Inspection Methods</span></div>
            <pre><code><span class="code-comment"># 1. عرض أول 5 صفوف</span>
housing.head()

<span class="code-comment"># 2. فحص الأنواع والنواقص (يوضح أن total_bedrooms بها 20433 قيمة فقط من أصل 20640 -> توجد قيم مفقودة!)</span>
housing.info()

<span class="code-comment"># 3. ملخص الإحصائيات (Count, Mean, Std, Min, 25%, 50%, 75%, Max)</span>
housing.describe()

<span class="code-comment"># 4. رسم المدرجات التكرارية لجميع الخصائص الرقمية</span>
housing.hist(bins=50, figsize=(20,15))</code></pre>
          </div>

          <div class="subcard" style="margin-top:16px;">
            <h4>🎯 إنشاء مجموعة الاختبار: المعاينة العشوائية مقابل المعاينة الطبقية (Stratified Sampling)</h4>
            <ul>
              <li>عادة ما نعزل <strong>20%</strong> من البيانات كمجموعة اختبار (Test set) باستخدام <code>train_test_split(..., random_state=42)</code>.</li>
              <li><strong>خطر المعاينة العشوائية البحتة (Purely Random Sampling):</strong> إدخال انحياز معاينة (Sampling bias) بحيث لا تمثل العينة شرائح المجتمع الحقيقية.</li>
              <li><strong>الحل بالمعاينة الطبقية (Stratified Sampling):</strong> تقسيم البيانات لطبقات (Strata) متجانسة لضمان تمثيل كل شريحة بنسبتها الحقيقية. في مشروع كاليفورنيا، تم التقسيم بناءً على <strong>فئات الدخل (Median income categories)</strong> لأن الدخل هو المؤشر الأهم لسعر المنزل!</li>
            </ul>
          </div>
        `
      },
      {
        id: "l2_s3",
        titleAr: "3. استكشاف البيانات بصرياً واكتشاف الارتباطات وهندسة الخصائص",
        titleEn: "Discover and Visualize Data to Gain Insights",
        slidesRef: "Slides 33-39",
        summary: "عزل الاختبار، رسم الكثافة الجغرافية بالـ alpha، معامل ارتباط بيرسون، وابتكار تركيبات خصائص جديدة.",
        contentHtml: `
          <div class="memo-alert">
            <h5>⚠️ قاعدة ذهبية احترافية:</h5>
            <p>تأكد تماماً من عزل مجموعة الاختبار جانباً، والاستكشاف فقط داخل مجموعة التدريب! <code>housing = strat_train_set.copy()</code>.</p>
          </div>

          <div class="cards-subgrid">
            <div class="subcard">
              <h4>🗺️ التمثيل البصري الجغرافي المتقدم:</h4>
              <ul>
                <li>استخدام <code>alpha=0.1</code> في <code>housing.plot(kind="scatter", x="longitude", y="latitude", alpha=0.1)</code> يسمح <strong>بإبراز المناطق ذات الكثافة السكانية العالية (High-density areas)</strong> كالمدن الكبرى وحول السواحل.</li>
                <li>إضافة الألوان والأحجام: الدائرة تمثل عدد السكان <code>s=housing["population"]/100</code>، واللون يمثل سعر المنزل <code>c="median_house_value"</code> بخريطة ألوان <code>cmap="jet"</code> (الأحمر للأغلى، والأزرق للأرخص).</li>
              </ul>
            </div>

            <div class="subcard">
              <h4>📈 البحث عن الارتباطات (Pearson's Correlation Coefficient - r):</h4>
              <ul>
                <li>يتم حسابه عبر الدالة <code>housing.corr()</code> وتتراوح قيمته بين <strong>-1 و +1</strong>.</li>
                <li><strong>قريب من +1:</strong> ارتباط طردي خطي قوي (كلما زاد أحدهما زاد الآخر).</li>
                <li><strong>قريب من -1:</strong> ارتباط عكسي خطي قوي (كلما زاد أحدهما نقص الآخر).</li>
                <li><strong>قريب من 0:</strong> انعدام الارتباط الخطي (لا توجد علاقة خطية).</li>
                <li>أظهرت النتائج أن <strong>median_income</strong> له أعلى ارتباط طردي موجب مع سعر المنزل (حوالي 0.68).</li>
              </ul>
            </div>
          </div>

          <div class="subcard" style="margin-top: 14px;">
            <h4>🧪 ابتكار تركيبات خصائص جديدة (Attribute Combinations):</h4>
            <p>العدد الكلي للغرف في منطقة ما ليس مفيداً بمفرده إذا لم تكن تعرف عدد الأسر في تلك المنطقة! لذلك نبتكر خصائص ذات دلالة أكبر:</p>
            <ul>
              <li><code>rooms_per_household = total_rooms / households</code> (عدد الغرف لكل أسرة).</li>
              <li><code>bedrooms_per_room = total_bedrooms / total_rooms</code> (نسبة غرف النوم إلى إجمالي الغرف - ارتباط عكسي قوي بالسعر!).</li>
              <li><code>population_per_household = population / households</code> (عدد السكان لكل أسرة).</li>
            </ul>
          </div>
        `
      },
      {
        id: "l2_s4",
        titleAr: "4. تجهيز وتنظيف البيانات لخوارزميات التعلم الآلي",
        titleEn: "Prepare Data for Machine Learning",
        slidesRef: "Slides 40-46",
        summary: "كتابة دوال التحويل، معالجة القيم المفقودة بثلاث طرق، ترميز النصوص (Ordinal vs OneHot)، وتحجيم الخصائص (MinMax vs Standard).",
        contentHtml: `
          <div class="memo-alert">
            <h5>💡 لماذا نكتب دوال برمجية لتجهيز البيانات بدلاً من تطبيقها يدوياً؟</h5>
            <ol style="padding-right: 20px;">
              <li>إعادة تطبيق التحويلات بسهولة على أي مجموعة بيانات جديدة.</li>
              <li>بناء مكتبة تحويلات برمجية قابلة لإعادة الاستخدام في المشاريع المستقبلية.</li>
              <li>استخدامها في النظام الحي في بيئة الإنتاج لتحويل البيانات قبل تغذيتها للنموذج.</li>
              <li>سهولة تجربة مختلف التحويلات واكتشاف أفضل تركيبة منها.</li>
            </ol>
          </div>

          <div class="cards-subgrid">
            <div class="subcard">
              <h4>🩹 التعامل مع القيم المفقودة (Missing Values في total_bedrooms):</h4>
              <p>هناك ثلاثة خيارات أساسية:</p>
              <ul>
                <li><strong>1. حذف المناطق المتضررة:</strong> <code>housing.dropna(subset=["total_bedrooms"])</code></li>
                <li><strong>2. حذف الخاصية بالكامل:</strong> <code>housing.drop("total_bedrooms", axis=1)</code></li>
                <li><strong>3. التعويض بقيمة (Zero, Mean, Median):</strong>
                  <br><code>median = housing["total_bedrooms"].median()</code>
                  <br><code>housing["total_bedrooms"].fillna(median, inplace=True)</code>
                </li>
                <li>توفر مكتبة سكايليرن صنفاً جاهزاً للتعويض: <strong>SimpleImputer(strategy="median")</strong>.</li>
              </ul>
            </div>

            <div class="subcard">
              <h4>🔤 التعامل مع النصوص والمتغيرات الفئوية (ocean_proximity):</h4>
              <ul>
                <li><strong>OrdinalEncoder:</strong> يحول الفئات لأرقام ترتيبية (0, 1, 2..). عيبه: تفترض الخوارزميات أن القيم الرقمية المتقاربة متشابهة دلالياً!</li>
                <li><strong>One-hot encoding (الترميز الأحادي الساخن):</strong> إنشاء عمود ثنائي لكل فئة؛ تصبح قيمة الخاصية الصحيحة مساوية لـ <strong>1 (Hot)</strong> وباقي الخصائص مساوية لـ <strong>0 (Cold)</strong>.
                  <br>في سكايليرن: الصنف <strong>OneHotEncoder</strong>.
                </li>
              </ul>
            </div>
          </div>

          <div class="subcard" style="margin-top: 14px;">
            <h4>⚖️ تحجيم الخصائص (Feature Scaling) - غاية في الأهمية:</h4>
            <p>لا تعمل خوارزميات ML بشكل جيد عندما تكون مقاييس الخصائص الرقمية متباينة بشدة (مثل عدد الغرف من 6 إلى 39,320 بينما الدخل من 0 إلى 15). هناك طريقتان رئيسيتان:</p>
            <div class="cards-subgrid" style="margin-top:10px;">
              <div class="subcard" style="border: 1px solid var(--accent-cyan);">
                <h5>1. Min-max scaling (Normalization):</h5>
                <p>إزاحة وإعادة تحجيم القيم لتنتهي في المجال بين <strong>0 و 1</strong>.</p>
                <p>القانون: <code>(x - min) / (max - min)</code></p>
                <p>في سكايليرن: <strong>MinMaxScaler</strong>.</p>
              </div>
              <div class="subcard" style="border: 1px solid var(--accent-emerald);">
                <h5>2. Standardization (المعايرة):</h5>
                <p>طرح المتوسط (فيكون المتوسط صفر) والقسمة على الانحراف المعياري (فيكون التباين واحد).</p>
                <p><strong>الميزة الكبرى:</strong> لا تحصر القيم بنطاق معين، وهي <strong>أقل تأثراً بالقيم الشاذة (Much less affected by outliers)</strong>!</p>
                <p>في سكايليرن: <strong>StandardScaler</strong>.</p>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "l2_s5",
        titleAr: "5. اختيار النماذج، التحقق المتقاطع، وضبط المعاملات الفائقة والإطلاق",
        titleEn: "Model Selection, Cross-Validation & Fine-Tuning",
        slidesRef: "Slides 47-56",
        summary: "مقارنة النماذج، K-Fold Cross-Validation، التعلم الجماعي، GridSearchCV مقابل RandomizedSearchCV، والجاهزية للإنتاج.",
        contentHtml: `
          <div class="cards-subgrid">
            <div class="subcard">
              <h4>🤖 تدريب وتقييم النماذج الأولية:</h4>
              <ul>
                <li><strong>LinearRegression:</strong> يعاني من <strong>Underfitting</strong> (نسبة الخطأ مرتفعة على التدريب).</li>
                <li><strong>DecisionTreeRegressor:</strong> نموذج قوي غير خطي، حقق خطأ = 0 على مجموعة التدريب، ولكنه يعاني من <strong>Overfitting شديد</strong> وفشل عند الاختبار!</li>
              </ul>
            </div>

            <div class="subcard">
              <h4>🔄 التحقق المتقاطع (K-fold Cross-Validation):</h4>
              <ul>
                <li>تقسيم مجموعة التدريب إلى <strong>10 أجزاء متساوية (10 folds)</strong>، تدريب النموذج على 9 أجزاء وتقييمه على الجزء العاشر، وتكرار ذلك 10 مرات لحساب متوسط الخطأ والانحراف المعياري بدقة.</li>
                <li><strong>RandomForestRegressor:</strong> يعتمد على <strong>Ensemble Learning</strong> (تدريب العديد من أشجار القرار على عينات عشوائية من الخصائص وتجميع توقعاتها بالمتوسط). أعطى أفضل أداء واعد!</li>
              </ul>
            </div>
          </div>

          <div class="subcard" style="margin-top: 14px;">
            <h4>⚙️ الضبط الدقيق للمعاملات الفائقة (Fine-Tune Your Model):</h4>
            <div class="cards-subgrid" style="margin-top:8px;">
              <div class="subcard">
                <h5>1. Grid Search (GridSearchCV):</h5>
                <p>تحديد قائمة بالمعاملات الفائقة وقيمها، وتقوم الخوارزمية <strong>بتجربة كافة التوافيق الممكنة رياضياً</strong> وتقييمها بالـ Cross-Validation.</p>
              </div>
              <div class="subcard">
                <h5>2. Randomized Search (RandomizedSearchCV):</h5>
                <p>بدلاً من تجربة كافة التوافيق (التي قد تستغرق شهوراً)، يختار قيماً عشوائية لكل معامل لعدد تكرارات محدد (Iterations). <strong>ممتاز للبحث في مساحات المعاملات الضخمة</strong>.</p>
              </div>
            </div>
            <p style="margin-top: 10px;">• <strong>طرق التجميع (Ensemble Methods):</strong> دمج أفضل النماذج الناتجة، فالمجموعة غالباً ما تتفوق على أفضل نموذج منفرد.</p>
            <p>• <strong>تحليل الأخطاء والتقييم النهائي:</strong> فحص الأخطاء لكسب رؤى، ثم تقييم النموذج النهائي لمرة واحدة فقط على مجموعة الاختبار <strong>Test Set</strong>.</p>
            <p>• <strong>الإطلاق والمراقبة (Launch, Monitor, Maintain):</strong> كتابة التوثيق والاختبارات البرمجية، نشر النموذج لبيئة الإنتاج ومراقبة أدائه ضد التدهور.</p>
          </div>
        `
      }
    ]
  },

  // ==========================================
  // LECTURE 3: Classification
  // ==========================================
  lec3: {
    id: "lec3",
    code: "L03",
    titleEn: "Classification",
    titleAr: "التصنيف ومقاييس الأداء",
    slideCount: 49,
    date: "18. October 2025",
    sections: [
      {
        id: "l3_s1",
        titleAr: "1. مجموعة بيانات MNIST وتدريب مصنف ثنائي (SGDClassifier)",
        titleEn: "MNIST Dataset & Binary Classifier",
        slidesRef: "Slides 1-10",
        summary: "مواصفات بيانات MNIST، كاشف الرقم 5، وخصائص مصنف التدرج العشوائي SGDClassifier.",
        contentHtml: `
          <div class="cards-subgrid">
            <div class="subcard">
              <h4>🔢 مواصفات مجموعة بيانات MNIST:</h4>
              <ul>
                <li><strong>البيانات:</strong> 70,000 صورة صغيرة لأرقام مكتوبة بخط اليد (من 0 إلى 9) بواسطة طلاب المدارس الثانوية وموظفي مكتب التعداد الأمريكي.</li>
                <li><strong>الأبعاد:</strong> كل صورة بحجم <strong>28 × 28 بكسل = 784 خاصية (Feature)</strong>.</li>
                <li><strong>قيم البكسل:</strong> تمثل شدة الإضاءة من <strong>0 (أبيض) إلى 255 (أسود)</strong>.</li>
                <li><strong>التقسيم:</strong> مقسمة مسبقاً إلى 60,000 صورة للتدريب (مخلوطة Shuffled) و 10,000 صورة للاختبار.</li>
                <li><strong>الاستيراد في بايثون:</strong> <code>from sklearn.datasets import fetch_openml; mnist = fetch_openml('mnist_784', version=1)</code> وتتضمن المفاتيح: <code>DESCR, data, target</code>.</li>
              </ul>
            </div>

            <div class="subcard">
              <h4>🎯 تدريب مصنف ثنائي (Binary Classifier - كاشف الرقم 5):</h4>
              <ul>
                <li>تبسيط المسألة لتمييز فئتين فقط: "الرقم 5" أو "ليس 5" (<code>y_train_5 = (y_train == 5)</code>).</li>
                <li>الخوارزمية المستخدمة: <strong>SGDClassifier (Stochastic Gradient Descent)</strong>.</li>
                <li><strong>ميزتان رئيسيتان للـ SGD:</strong>
                  <br>1. قادر على التعامل مع <strong>مجموعات البيانات الضخمة بكفاءة عالية</strong>.
                  <br>2. يعالج عينات التدريب بشكل مستقل، <strong>عينة واحدة في كل خطوة</strong> (مما يجعله مناسباً جداً للتعلم الفوري Online learning).
                </li>
                <li>يعتمد على العشوائية أثناء التدريب (لذا سُمي Stochastic)، ولتثبيت النتائج نحدد <code>random_state=42</code>.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "l3_s2",
        titleAr: "2. مصفوفة الارتباك ولماذا الدقة غير كافية؟",
        titleEn: "Confusion Matrix & Why Accuracy Fails on Skewed Data",
        slidesRef: "Slides 11-18",
        summary: "تجربة Never5Classifier الخادعة، بنية مصفوفة الارتباك، الأسطر مقابل الأعمدة، والمصنف المثالي.",
        contentHtml: `
          <div class="memo-alert" style="background: rgba(244, 63, 94, 0.1); border-color: var(--accent-rose);">
            <h5 style="color: var(--accent-rose);">🚨 لماذا الدقة (Accuracy) مقياس غير مفضل في التصنيف؟</h5>
            <p>عندما تكون البيانات غير متوازنة (<strong>Skewed datasets</strong>)، تعطي الدقة انطباعاً خادعاً! ففي MNIST، تشكل الأرقام 5 حوالي 10% فقط من البيانات، بينما 90% أرقام أخرى. إذا بنينا مصنفاً غبياً <code>Never5Classifier</code> يتنبأ دائماً بـ <strong>False</strong> (أنه ليس 5)، فإنه سيحقق دقة تفوق <strong>90%</strong> دون أن يتعلم أي شيء إطلاقاً!</p>
          </div>

          <div class="cards-subgrid">
            <div class="subcard">
              <h4>🔲 مصفوفة الارتباك (Confusion Matrix):</h4>
              <p>الفكرة العامة: عدّ المرات التي تم فيها تصنيف عينات الفئة A على أنها الفئة B.</p>
              <ul>
                <li>نستخدم <code>cross_val_predict(sgd_clf, X_train, y_train_5, cv=3)</code> للحصول على التنبؤات النظيفة على كل Fold اختبار.</li>
                <li><strong>قاعدة تنظيم المصفوفة:</strong>
                  <br>• كل <strong>صف (Row)</strong> يمثل <strong>الفئة الفعلية (Actual class)</strong>.
                  <br>• كل <strong>عمود (Column)</strong> يمثل <strong>الفئة المتوقعة (Predicted class)</strong>.
                </li>
              </ul>
            </div>

            <div class="subcard">
              <h4>💎 المصنف المثالي (Perfect Classifier):</h4>
              <p>يحتوي المصنف المثالي على <strong>True Positives و True Negatives فقط</strong>، وبالتالي فإن مصفوفة الارتباك الخاصة به ستحتوي على أرقام غير صفرية <strong>على القطر الرئيسي فقط (Main diagonal)</strong> من أعلى اليسار إلى أسفل اليمين، وكل ما عدا ذلك أصفار!</p>
            </div>
          </div>
        `
      },
      {
        id: "l3_s3",
        titleAr: "3. القوانين العشرة الكاملة لمقاييس التصنيف",
        titleEn: "All 10 Classification Metrics & Formulas",
        slidesRef: "Slides 19-23",
        summary: "جميع القوانين الرياضية العشرة الواردة في السلايدات (Accuracy, Recall, Specificity, Precision, F1, MCC, Jaccard..).",
        contentHtml: `
          <p class="explanation-lead">
            فيما يلي القوانين الرياضية العشرة المعتمدة في سلايدات الدكتور محمد الموجي والتي يجب حفظها عن ظهر قلب:
          </p>

          <div class="styled-table-wrapper">
            <table class="styled-table">
              <thead>
                <tr>
                  <th>المقياس (Metric)</th>
                  <th>القانون الرياضي (Formula)</th>
                  <th>المعنى والمدلول العملي</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Accuracy (ACC)</strong></td>
                  <td><code>(TP + TN) / (TP + TN + FP + FN)</code></td>
                  <td>نسبة العينات المصنفة بشكل صحيح إلى إجمالي عدد العينات.</td>
                </tr>
                <tr>
                  <td><strong>Error Rate (ERR)</strong></td>
                  <td><code>1 - ACC = (FP + FN) / Total</code></td>
                  <td>نسبة العينات المصنفة بالخطأ من كلا الفئتين الموجبة والسالبة.</td>
                </tr>
                <tr>
                  <td><strong>Sensitivity / Recall / TPR / Hit Rate</strong></td>
                  <td><code>TP / (TP + FN)</code></td>
                  <td>نسبة العينات الإيجابية الفعلية التي اكتشفها المصنف بنجاح.</td>
                </tr>
                <tr>
                  <td><strong>Specificity / TNR</strong></td>
                  <td><code>TN / (FP + TN)</code></td>
                  <td>نسبة العينات السلبية الفعلية التي صنفت كسلبية بنجاح.</td>
                </tr>
                <tr>
                  <td><strong>Precision / PPV</strong></td>
                  <td><code>TP / (FP + TP)</code></td>
                  <td>دقة التنبؤات الإيجابية: نسبة الإيجابيات الصحيحة من كل ما توقعه النموذج إيجابياً.</td>
                </tr>
                <tr>
                  <td><strong>Negative Predictive Value (NPV)</strong></td>
                  <td><code>TN / (FN + TN)</code></td>
                  <td>معكوس الدقة: نسبة السلبيات الصحيحة من إجمالي التوقعات السلبية.</td>
                </tr>
                <tr>
                  <td><strong>Youden's Index (YI)</strong></td>
                  <td><code>TPR + TNR - 1</code></td>
                  <td>يقيم القوة التمييزية للاختبار (Discriminative power).</td>
                </tr>
                <tr>
                  <td><strong>Matthews Correlation Coefficient (MCC)</strong></td>
                  <td><code>(TP×TN - FP×FN) / √((TP+FP)(TP+FN)(TN+FP)(TN+FN))</code></td>
                  <td>معامل الارتباط بين التصنيف الفعلي والتنبؤي، متوازن حتى مع اختلال البيانات.</td>
                </tr>
                <tr>
                  <td><strong>F-measure / F1 score / DSC</strong></td>
                  <td><code>2TP / (2TP + FP + FN) = 2 × (P × R) / (P + R)</code></td>
                  <td><strong>المتوسط التوافقي (Harmonic mean)</strong> للدقة والاستدعاء. يعطي وزناً أكبر بكثير للقيم المنخفضة، ولا يرتفع إلا إذا كانت كلتاهما مرتفعة!</td>
                </tr>
                <tr>
                  <td><strong>Jaccard Index</strong></td>
                  <td><code>TP / (TP + FP + FN)</code></td>
                  <td>مقياس شديد الحساسية للتغيرات في توزيع البيانات.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "l3_s4",
        titleAr: "4. الموازنة بين الدقة والاستدعاء ومنحنى ROC ومساحة AUC",
        titleEn: "Precision/Recall Trade-off & The ROC Curve",
        slidesRef: "Slides 24-32",
        summary: "عتبة القرار Decision Threshold، مقايضة Precision/Recall، منحنى ROC، ومقارنة PR Curve مع ROC Curve.",
        contentHtml: `
          <div class="cards-subgrid">
            <div class="subcard">
              <h4>⚖️ مقايضة الدقة والاستدعاء (Precision/Recall Trade-off):</h4>
              <ul>
                <li>تحسب خوارزمية SGD درجة لكل عينة عبر دالة القرار <code>decision_function()</code>. إذا كانت النتيجة أعلى من العتبة (Threshold) صُنفت إيجابية، وإلا فسلبية.</li>
                <li><strong>قاعدة العتبة:</strong>
                  <br>• <strong>رفع العتبة:</strong> يزيد الدقة (Precision) ويقلل الاستدعاء (Recall).
                  <br>• <strong>خفض العتبة:</strong> يزيد الاستدعاء (Recall) ويقلل الدقة (Precision).
                </li>
                <li>تساعد الدالة <code>precision_recall_curve()</code> على رسم المنحنى لتحديد أفضل عتبة (مثلاً قبل هبوط الدقة الحاد عند 80% استدعاء).</li>
              </ul>
            </div>

            <div class="subcard">
              <h4>📈 منحنى ROC ومساحة AUC:</h4>
              <ul>
                <li>منحنى خاص بالمصنفات الثنائية يرسم <strong>True Positive Rate (Recall / Sensitivity)</strong> مقابل <strong>False Positive Rate (FPR = 1 - Specificity)</strong>.</li>
                <li>كلما زاد الـ Recall، أنتج المصنف موجبات كاذبة (FPR) أكثر.</li>
                <li>الخط المتقطع يمثل مصنفاً عشوائياً بحتاً (AUC = 0.5). والمصنف المثالي يقترب من الزاوية العلوية اليسرى (AUC = 1.0).</li>
                <li>حساب المساحة في بايثون: <code>roc_auc_score(y_train_5, y_scores)</code>.</li>
              </ul>
            </div>
          </div>

          <div class="memo-alert" style="margin-top:16px;">
            <h5>👑 قاعدة ذهبية حاسمة للحفظ (Rule of Thumb): متى تختار منحنى PR ومتى تختار ROC؟</h5>
            <p>يجب أن تفضل منحنى <strong>PR curve</strong> عندما تكون <strong>الفئة الإيجابية نادرة (The positive class is rare)</strong> أو عندما تهتم بالأخطاء الإيجابية الكاذبة (False positives) أكثر من السلبية الكاذبة. وتفضل <strong>ROC curve</strong> في الحالات العامة الأخرى.</p>
            <p style="margin-top:6px;"><em>ملاحظة:</em> صنف <code>RandomForestClassifier</code> لا يملك دالة <code>decision_function()</code> بل يستخدم دالة الاحتمال <code>predict_proba()</code>.</p>
          </div>
        `
      },
      {
        id: "l3_s5",
        titleAr: "5. التصنيف المتعدد (Multiclass: OvR vs OvO) ومتعدد التسميات والمخرجات",
        titleEn: "Multiclass, Multilabel & Multioutput Classification",
        slidesRef: "Slides 33-48",
        summary: "استراتيجيات تحويل المصنف الثنائي لمتعدد (OvR vs OvO)، تحليل مصفوفة الأخطاء، التصنيف متعدد التسميات ومتعدد المخرجات.",
        contentHtml: `
          <div class="cards-subgrid">
            <div class="subcard">
              <h4>🔢 التصنيف متعدد الفئات (Multiclass Classification):</h4>
              <ul>
                <li>تمييز أكثر من فئتين (مثل أرقام 0 إلى 9). خوارزميات تدعمه طبيعياً: SGD, Random Forest, Naive Bayes. خوارزميات ثنائية بحتة: Logistic Regression, SVM.</li>
                <li><strong>استراتيجية One-versus-the-Rest (OvR / One-versus-All):</strong>
                  <br>تدريب <strong>N مصنف ثنائي</strong> (مصنف لكل رقم: 0 ضد الكل، 1 ضد الكل..). المصنف الذي يعطي أعلى درجة قرار يفوز بالفئة. <strong>هي الاستراتيجية المفضلة لمعظم المصنفات الثنائية!</strong>
                </li>
                <li><strong>استراتيجية One-versus-One (OvO):</strong>
                  <br>تدريب مصنف لكل زوج من الأرقام (0 ضد 1، 0 ضد 2..).
                  <br>قانون عدد المصنفات: <code>N × (N - 1) / 2</code>.
                  <br>في MNIST: <code>10 × 9 / 2 = 45</code> مصنفاً ثنائياً!
                  <br><strong>متى تفضل OvO؟</strong> تفضل في خوارزميات مثل <strong>Support Vector Machines (SVM)</strong> لأنها تتوسع بشكل سيء مع حجم البيانات، فتدريب عدة مصنفات على مجموعات صغيرة أسرع بكثير من تدريب مصنفات قليلة على مجموعات بيانات ضخمة.
                </li>
              </ul>
            </div>

            <div class="subcard">
              <h4>🖼️ تحليل الأخطاء (Error Analysis):</h4>
              <ul>
                <li>تحويل مصفوفة الارتباك إلى صورة رمادية عبر <code>plt.matshow(conf_mx, cmap=plt.cm.gray)</code>. إذا كانت الأرقام بيضاء على القطر الرئيسي فهذا يعني تصنيفاً ممتازاً.</li>
                <li><strong>المعالجة المعيارية:</strong> قسمة كل قيمة في المصفوفة على عدد صور الفئة لمقارنة <strong>معدلات الخطأ (Error rates)</strong> بدلاً من الأرقام المطلقة.</li>
                <li><strong>علاج الأخطاء الشائعة (مثل الخلط بين 8 و 3 أو 5):</strong>
                  <br>1. جمع المزيد من صور الأرقام التي تشبه 8.
                  <br>2. هندسة خصائص جديدة (مثل خوارزمية لعد الحلقات المغلقة Closed loops).
                  <br>3. معالجة الصور مسبقاً (تدوير وتمركز الصور).
                </li>
              </ul>
            </div>
          </div>

          <div class="cards-subgrid" style="margin-top:14px;">
            <div class="subcard">
              <h4>🏷️ التصنيف متعدد التسميات (Multilabel Classification):</h4>
              <p>إخراج عدة فئات لكل عينة تدريبية. (مثال: التعرف على الوجوه في صورة واحدة تظهر Alice و Bob و Charlie فيخرج: <code>[1, 0, 1]</code>).</p>
              <p><strong>طريقة التقييم:</strong> قياس الـ F1 score لكل تسمية فردية، ثم حساب المتوسط البسيط للدرجات.</p>
            </div>

            <div class="subcard">
              <h4>🎛️ التصنيف متعدد المخرجات (Multioutput Classification):</h4>
              <p>هو تعميم لـ Multilabel Classification بحيث يمكن لكل تسمية أن تكون متعددة القيم (> 2) وليست مجرد ثنائية (0 أو 1).</p>
              <p><strong>مثال MNIST:</strong> إزالة الضوضاء من الصور المشوشة (Output Noise Cleaner)، حيث يخرج النموذج 784 تسمية (بكسل)، وكل بكسل يأخذ قيمة شدة من 0 إلى 255!</p>
            </div>
          </div>
        `
      }
    ]
  },

  // ==========================================
  // LECTURE 4: Training Models
  // ==========================================
  lec4: {
    id: "lec4",
    code: "L04",
    titleEn: "Training Models",
    titleAr: "تدريب النماذج وخوارزميات التدرج التنازلي",
    slideCount: 36,
    date: "01. November 2025",
    sections: [
      {
        id: "l4_s1",
        titleAr: "1. الانحدار الخطي الرياضي والمعادلة الطبيعية (Normal Equation)",
        titleEn: "Linear Regression & The Normal Equation",
        slidesRef: "Slides 1-12",
        summary: "الصيغة الجبرية والاتجاهية للانحدار الخطي، دالة تكلفة MSE، والمعادلة الطبيعية المغلقة.",
        contentHtml: `
          <div class="memo-alert">
            <h5>💡 لماذا يجب أن نفهم آلية عمل الخوارزميات وتدريبها داخلياً؟</h5>
            <ol style="padding-right: 20px;">
              <li>الوصول السريع واختيار النموذج المناسب لمسألتك (Appropriate model).</li>
              <li>اختيار خوارزمية التدريب الصحيحة للمهمة.</li>
              <li>اختيار حزمة معاملات فائقة (Hyperparameters) ممتازة.</li>
              <li>المساعدة في استكشاف الأخطاء وتصحيحها وإجراء تحليل الأخطاء بكفاءة.</li>
            </ol>
          </div>

          <div class="cards-subgrid">
            <div class="subcard">
              <h4>📈 نموذج الانحدار الخطي (Linear Regression Model):</h4>
              <p>يقوم بعمل التنبؤ بحساب المجموع الموزون للخصائص المدخلة مضافاً إليها ثابت يسمى <strong>Bias / Intercept (الانحياز)</strong>:</p>
              <div class="equation-box">
                <div class="equation-formula">ŷ = θ0 + θ1 x1 + θ2 x2 + ... + θn xn</div>
              </div>
              <p>الصيغة الاتجاهية (Vectorized Form):</p>
              <div class="equation-box">
                <div class="equation-formula">ŷ = h_θ(x) = θ · x</div>
                <div class="equation-desc">θ: متجه المعاملات، x: متجه خصائص العينة، h_θ: دالة الفرضية.</div>
              </div>
              <p>دالة التكلفة المستخدمة للتدريب: Mean Squared Error (MSE):</p>
              <div class="equation-box">
                <div class="equation-formula">MSE(X, h_θ) = 1/m ∑_{i=1}^m (θ^T x^(i) - y^(i))^2</div>
              </div>
            </div>

            <div class="subcard">
              <h4>🎯 المعادلة الطبيعية (The Normal Equation):</h4>
              <p>حل ذو صيغة مغلقة ومباشرة (Closed-form solution) يعطي مباشرة قيمة المعاملات θ التي تصغر دالة التكلفة لأدنى حد دون الحاجة لتدريب تكراري:</p>
              <div class="equation-box">
                <div class="equation-formula">θ̂ = (X^T X)^(-1) X^T y</div>
                <div class="equation-desc">θ̂: قيمة θ التي تصغر التكلفة، y: متجه القيم المستهدفة، X: مصفوفة كل العينات.</div>
              </div>
              <p><strong>تطبيق المحاضرة:</strong> توليد بيانات عبر المعادلة <code>y = 4 + 3x1 + Gaussian noise</code> وإيجاد المعاملات عبر المعادلة الطبيعية.</p>
            </div>
          </div>
        `
      },
      {
        id: "l4_s2",
        titleAr: "2. تفكيك القيمة المفردة (SVD) والتعقيد الحسابي",
        titleEn: "Singular Value Decomposition (SVD) & Computational Complexity",
        slidesRef: "Slides 13-15",
        summary: "كيف تعمل LinearRegression في سكايليرن عبر المعكوس الزائف SVD، وتفوقها على المعادلة الطبيعية في معالجة المصفوفات الشاذة.",
        contentHtml: `
          <div class="cards-subgrid">
            <div class="subcard">
              <h4>🔬 تفكيك القيمة المفردة SVD والمعكوس الزائف:</h4>
              <p>صنف <code>LinearRegression</code> في Scikit-Learn <strong>لا يستخدم المعادلة الطبيعية</strong> بل يستخدم طريقة تفكيك المصفوفات SVD لحساب المعكوس الزائف (Moore-Penrose Pseudoinverse):</p>
              <div class="equation-box">
                <div class="equation-formula">θ̂ = X^+ y &nbsp;&nbsp;|&nbsp;&nbsp; X^+ = V Σ^+ U^T</div>
              </div>
              <div class="memo-alert">
                <h5>✨ لماذا يعتبر نهج SVD أفضل بكثير من المعادلة الطبيعية؟</h5>
                <ol style="padding-right: 18px;">
                  <li>أكثر كفاءة من الناحية الحسابية.</li>
                  <li><strong>يتعامل مع الحالات الحافة والشاذة ببراعة:</strong> فالمعادلة الطبيعية تفشل إذا كانت مصفوفة $X^T X$ غير قابلة للمعاكسة (Singular / Non-invertible)، كما يحدث لو كان عدد العينات أقل من عدد الخصائص ($m < n$) أو عند وجود خصائص مكررة وزائدة (Redundant features). أما المعكوس الزائف $X^+$ <strong>فمعرّف وموجود دائماً بلا استثناء!</strong></li>
                </ol>
              </div>
            </div>

            <div class="subcard">
              <h4>⏱️ التعقيد الحسابي (Computational Complexity):</h4>
              <ul>
                <li><strong>المعادلة الطبيعية:</strong> تتطلب حساب مقلوب مصفوفة بحجم $(n+1) \times (n+1)$، وتعقيدها الحسابي يتراوح بين <strong>O(n^2.4) إلى O(n^3)</strong> بالنسبة لعدد الخصائص $n$. تصبح شديدة البطء عند زيادة الخصائص!</li>
                <li><strong>نهج SVD في Scikit-Learn:</strong> تعقيده الحسابي حوالي <strong>O(n^2)</strong>.</li>
                <li><strong>مرحلة التنبؤ (Inference):</strong> سريعة جداً وخطية <strong>Linear Complexity</strong> بالنسبة لعدد العينات $m$ وعدد الخصائص $n$.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "l4_s3",
        titleAr: "3. خوارزمية التدرج التنازلي وتحدياتها وتحجيم الخصائص",
        titleEn: "Gradient Descent Principles, Challenges & Feature Scaling",
        slidesRef: "Slides 16-24",
        summary: "مبدأ النزول للمنحدر، تأثير معدل التعلم η، دالة التكلفة المحدبة (Convex)، وأهمية تحجيم الخصائص للسرعة.",
        contentHtml: `
          <div class="cards-subgrid">
            <div class="subcard">
              <h4>🏔️ فكرة التدرج التنازلي (Gradient Descent - GD):</h4>
              <ul>
                <li>خوارزمية تحسين عامة (Generic optimization) تعدل المعاملات تكرارياً لتقليل دالة التكلفة.</li>
                <li>تبدأ بـ θ عشوائية (Random initial value).</li>
                <li>تقيس التدرج المحلي لدالة الخطأ وتتحرك في <strong>عكس اتجاه التدرج (نزولاً للمنحدر)</strong> حتى يصبح التدرج صفراً فتصل للقاع (Minimum).</li>
                <li><strong>معدل التعلم (Learning Rate - η):</strong>
                  <br>• إذا كان <strong>صغيراً جداً (Too Small):</strong> يتطلب تكرارات هائلة ويستغرق وقتاً طويلاً للتقارب.
                  <br>• إذا كان <strong>كبيراً جداً (Too Large):</strong> يقفز عبر الوادي وقد يتباعد (Diverge) ويفشل في إيجاد حل جيد.
                </li>
              </ul>
            </div>

            <div class="subcard">
              <h4>🎯 دالة التكلفة المحدبة (Convex Function) وانعدام الصغرى المحلية:</h4>
              <p>دالة الـ MSE للانحدار الخطي هي <strong>دالة محدبة (Convex)</strong>: إذا اخترت أي نقطتين على المنحنى، فإن الخط الواصل بينهما لا يقطع المنحنى أبداً، وهي مستمرة وميلها لا يتغير فجأة.</p>
              <div class="memo-alert" style="margin-top:10px;">
                <strong>🎉 النتيجة الحاسمة:</strong> لا توجد نقاط صغرى محلية (No local minima)، بل <strong>نقطة صغرى عامة واحدة فقط (Single global minimum)</strong>! التدرج التنازلي مضمون رياضياً للوصول إليها شريطة ألا يكون معدل التعلم مفرط الارتفاع والانتظار لوقت كافٍ.
              </div>
            </div>
          </div>

          <div class="subcard" style="margin-top: 14px;">
            <h4>🥣 أهمية تحجيم الخصائص مع التدرج التنازلي (Feature Scaling):</h4>
            <p>دالة التكلفة تكون على شكل وعاء (Bowl). ولكن إذا كانت الخصائص بمقاييس مختلفة تماماً، يتحول الوعاء إلى <strong>وعاء ممدود ومستطيل (Elongated bowl)</strong>، مما يجعل مسار التدرج التنازلي يتذبذب ويستغرق وقتاً طويلاً جداً للوصول للقاع. أما عند تحجيم الخصائص (كاستخدام StandardScaler) فيصبح الوعاء كروياً متناسقاً ويسير التدرج مباشرة للقاع في أقصر مسار!</p>
          </div>
        `
      },
      {
        id: "l4_s4",
        titleAr: "4. أنواع التدرج التنازلي الثلاثة وجدول المقارنة الختامي الحاسم",
        titleEn: "Batch vs. SGD vs. Mini-batch & The Final Comparison Table",
        slidesRef: "Slides 25-36",
        summary: "Batch GD, Stochastic GD والـ Simulated Annealing, Mini-batch GD، وجدول المقارنة الكامل للخوارزميات الخمس.",
        contentHtml: `
          <div class="cards-subgrid">
            <div class="subcard">
              <h4>1. Batch Gradient Descent</h4>
              <p>يحسب المشتقات الجزئية لدالة التكلفة لجميع المعاملات باستخدام <strong>كامل بيانات التدريب في كل خطوة</strong>:</p>
              <div class="equation-box">
                <div class="equation-formula">θ^(nextStep) = θ - η ∇_θ MSE(θ)</div>
              </div>
              <p>• <strong>الميزة:</strong> مسار ناعم ومباشر نحو القاع، ويتعامل ببراعة مع مئات آلاف الخصائص $n$.</p>
              <p>• <strong>العيب:</strong> شديد البطء على مجموعات البيانات الضخمة (Large $m$).</p>
            </div>

            <div class="subcard">
              <h4>2. Stochastic Gradient Descent (SGD)</h4>
              <p>يختار عينة عشوائية واحدة فقط في كل خطوة ويحسب التدرج بناءً عليها.</p>
              <p>• <strong>المزايا:</strong> فائق السرعة، ويتيح تدريب مجموعات بيانات عملاقة (Out-of-core learning) لأن عينة واحدة فقط تلزم في الذاكرة.</p>
              <p>• مساره متذبذب وغير مستقر ولا يستقر تماماً في القاع (يعطي حلولاً جيدة لكن ليست مثالية).</p>
              <p>• <strong>ميزة التذبذب:</strong> يساعده على القفز والهروب من الصغرى المحلية!</p>
              <p>• <strong>التلدين المحاكى (Simulated Annealing):</strong> تقليل معدل التعلم تدريجياً عبر جدول زمني (Learning schedule) مستوحى من تبريد المعادن المنصرفة في علم التعدين، لتمكينه من الاستقرار في القاع الأدنى.</p>
              <p>• شرط أساسي: خلط العينات (Shuffling) لتكون مستقلة ومتطابقة التوزيع (IID).</p>
            </div>

            <div class="subcard">
              <h4>3. Mini-batch Gradient Descent</h4>
              <p>يحسب التدرجات على مجموعات صغيرة عشوائية (Mini-batches).</p>
              <p>• <strong>الميزة الكبرى:</strong> الاستفادة من تسريع عتاد الحاسوب (مصفوفات كروت الشاشة والمعالجات GPUs/CPUs).</p>
              <p>• مساره أقرب وأكثر استقراراً حول القاع من SGD، لكن الهروب من الصغرى المحلية أصعب قليلاً.</p>
            </div>
          </div>

          <div class="subcard" style="margin-top: 18px; border: 2px solid var(--primary);">
            <h4>🏆 جدول المقارنة الشامل لخوارزميات الانحدار الخطي (سلايد 34):</h4>
            <div class="styled-table-wrapper">
              <table class="styled-table">
                <thead>
                  <tr>
                    <th>الخوارزمية (Algorithm)</th>
                    <th>بيانات ضخمة (Large m)</th>
                    <th>دعم Out-of-core</th>
                    <th>خصائص كثيرة (Large n)</th>
                    <th>عدد المعاملات الفائقة</th>
                    <th>هل يلزم التحجيم؟</th>
                    <th>الصنف في Scikit-Learn</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Normal Equation</strong></td>
                    <td>Fast</td>
                    <td>No</td>
                    <td>Slow</td>
                    <td>0</td>
                    <td>No</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td><strong>SVD</strong></td>
                    <td>Fast</td>
                    <td>No</td>
                    <td>Slow</td>
                    <td>0</td>
                    <td>No</td>
                    <td><code>LinearRegression</code></td>
                  </tr>
                  <tr>
                    <td><strong>Batch GD</strong></td>
                    <td>Slow</td>
                    <td>No</td>
                    <td>Fast</td>
                    <td>2</td>
                    <td>Yes</td>
                    <td><code>SGDRegressor</code></td>
                  </tr>
                  <tr>
                    <td><strong>Stochastic GD (SGD)</strong></td>
                    <td>Fast</td>
                    <td><strong>Yes</strong></td>
                    <td>Fast</td>
                    <td>≥ 2</td>
                    <td>Yes</td>
                    <td><code>SGDRegressor</code></td>
                  </tr>
                  <tr>
                    <td><strong>Mini-batch GD</strong></td>
                    <td>Fast</td>
                    <td><strong>Yes</strong></td>
                    <td>Fast</td>
                    <td>≥ 2</td>
                    <td>Yes</td>
                    <td><code>SGDRegressor</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="memo-alert" style="margin-top:12px;">
              <h5>💡 الخلاصة الذهبية للسلايد 34:</h5>
              <p><em>"There is almost no difference after training: all these algorithms end up with very similar models and make predictions in exactly the same way."</em></p>
              <p>لا يوجد فرق تقريباً بعد انتهاء التدريب: جميع هذه الخوارزميات الخمس تنتهي بنماذج متطابقة جداً وتجري التنبؤات بنفس الطريقة تماماً!</p>
            </div>
          </div>
        `
      }
    ]
  }
};
