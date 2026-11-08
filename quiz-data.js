/**
 * quiz-data.js
 * Comprehensive Quiz Banks & Flashcards for all 4 Lectures
 * Machine Learning & Pattern Recognition - Prof. Dr. Mohammed Elmogy
 */

// ========================================================
// 1. SECTION QUIZZES (اختبارات فورية لكل جزئية)
// ========================================================
window.SECTION_QUIZZES = {
  // --- Lecture 1 ---
  l1_s1: [
    {
      question: "ما هو تعريف آرثر صامويل (Arthur Samuel - 1959) لتعلم الآلة؟",
      options: [
        "علم وفن برمجة الحواسيب لكي تتعلم من البيانات.",
        "مجال الدراسة الذي يمنح الحواسيب القدرة على التعلم دون أن تتم برمجتها بشكل صريح.",
        "برنامج يتعلم من الخبرة E بالنسبة للمهمة T ومقياس الأداء P.",
        "خوارزميات تستخدم لحل المعادلات الرياضية المعقدة في الذاكرة."
      ],
      correctIndex: 1,
      explanation: "تعريف آرثر صامويل التاريخي عام 1959 ينص نصاً على: 'It is the field of study that gives computers the ability to learn without being explicitly programmed'."
    },
    {
      question: "في تعريف توم ميتشل (Tom Mitchell - 1997)، ماذا يمثل كل من (E, T, P) على الترتيب؟",
      options: [
        "التكلفة (Error)، الوقت (Time)، التنبؤ (Prediction)",
        "الخبرة (Experience)، المهمة (Task)، مقياس الأداء (Performance measure)",
        "البيئة (Environment)، التدريب (Training)، المعاملات (Parameters)",
        "الاستدلال (Estimation)، الاختبار (Testing)، الاحتمال (Probability)"
      ],
      correctIndex: 1,
      explanation: "قاعدة ميتشل الشهيرة: يتعلم البرنامج من الخبرة Experience E بالنسبة للمهمة Task T ومقياس الأداء Performance measure P إذا تحسن أداؤه P في المهمة T بزيادة الخبرة E."
    },
    {
      question: "ما هو أول تطبيق لتعلم الآلة أصبح شائعاً ومستخدماً على نطاق عالمي واسع في التسعينات (1990s)؟",
      options: [
        "السيارات ذاتية القيادة (Self-driving cars)",
        "مرشح البريد المزعج (Spam Filter)",
        "برنامج ألفا جو (AlphaGo)",
        "المساعد الصوتي سيري (Siri)"
      ],
      correctIndex: 1,
      explanation: "وفقاً للسلايد 5، مرشح البريد المزعج (Spam Filter) هو أول تطبيق ML دخل الاستخدام العام وحسن حياة مئات الملايين من الناس في التسعينات."
    },
    {
      question: "كل مثال فردي داخل مجموعة التدريب (Training set) يُطلق عليه رسمياً في السلايدات:",
      options: [
        "Feature vector",
        "Hyperparameter",
        "Training instance (or sample)",
        "Decision boundary"
      ],
      correctIndex: 2,
      explanation: "السلايد 5: 'Each training example is called a training instance (or sample)'."
    }
  ],

  l1_s2: [
    {
      question: "ما هو العيب القاتل في المنهج التقليدي (The Traditional Approach) عند مكافحة البريد المزعج؟",
      options: [
        "يحتاج دائماً إلى كروت شاشة GPU عملاقة.",
        "إذا غيّر مروجو البريد أساليبهم، فستضطر لكتابة قواعد جديدة يدوياً للأبد مما يجعله صعب الصيانة.",
        "لا يمكن تشغيله على أنظمة التشغيل الحديثة.",
        "دائماً ما يعطي أخطاء تجميع في لغة بايثون."
      ],
      correctIndex: 1,
      explanation: "السلايد 7: في المنهج التقليدي 'If spammers keep working around your spam filter, you will need to keep writing new rules forever' مما يجعل الكود طويلاً ومعقداً وصعب الصيانة."
    },
    {
      question: "ما هي المزايا الثلاث لمنهج تعلم الآلة مقارنة بالمنهج التقليدي؟",
      options: [
        "كود أطول، أصعب في الفهم، وأكثر تعقيداً",
        "كود أقصر بكثير (Much shorter)، أسهل في الصيانة (Easier to maintain)، وأكثر دقة (More accurate)",
        "لا يحتاج لأي بيانات تدريبية إطلاقاً",
        "يعمل دون الحاجة إلى معالج حاسوبي"
      ],
      correctIndex: 1,
      explanation: "السلايد 8 نصاً: يتميز نهج ML بأنه: 'It is much shorter, easier to maintain, and more accurate'."
    },
    {
      question: "تطبيق تقنيات تعلم الآلة للغوص في كميات ضخمة من البيانات لاكتشاف أنماط غير ظاهرة يُسمى:",
      options: [
        "تشفير البيانات (Data Encryption)",
        "تنقيب البيانات (Data Mining)",
        "ضغط البيانات (Data Compression)",
        "المعاينة الطبقية (Stratified Sampling)"
      ],
      correctIndex: 1,
      explanation: "السلايد 10: 'Applying ML techniques to dig into large amounts of data can help discover patterns that were not immediately apparent. This is called data mining'."
    },
    {
      question: "أي من الحالات التالية يعتبر تعلم الآلة ممتازاً جداً لها (ML is Great for)؟",
      options: [
        "المسائل البسيطة التي يمكن حلها بشرطين If/Else فقط",
        "المسائل المعقدة، والبيئات المتغيرة، والمشاكل التي تتطلب قواعد طويلة",
        "طباعة نصوص ثابتة على الشاشة",
        "حساب ناتج ضرب رقمين عاديين"
      ],
      correctIndex: 1,
      explanation: "السلايد 11: تعلم الآلة رائع للمشاكل التي تتطلب ضبطاً دقيقاً أو قواعد طويلة، والمشاكل المعقدة، والبيئات المتغيرة (Fluctuating environments)، واكتشاف الرؤى من البيانات."
    }
  ],

  l1_s3: [
    {
      question: "لتصنيف صور المنتجات على خط الإنتاج آلياً (Image Classification)، ما هو النموذج الموصى به في السلايد؟",
      options: ["RNNs", "CNNs (Convolutional Neural Networks)", "Linear Regression", "Apriori"],
      correctIndex: 1,
      explanation: "السلايد 13: تصنيف صور المنتجات يعتمد على CNNs."
    },
    {
      question: "لاكتشاف أورام المخ في صور الأشعة (Semantic Segmentation)، ما هو النموذج المناسب؟",
      options: ["K-Means", "CNNs", "Decision Tree", "One-class SVM"],
      correctIndex: 1,
      explanation: "السلايد 13: 'Detecting tumors in brain scans -> semantic segmentation: CNNs'."
    },
    {
      question: "لتصنيف المقالات الإخبارية، تلخيص النصوص، وروبوتات المحادثة (Chatbots)، ما هي النماذج الثلاثة المقررة في السلايدات؟",
      options: [
        "K-Means, PCA, DBSCAN",
        "RNNs, CNNs, or Transformers",
        "Linear Regression, Polynomial, SVD",
        "Apriori, Eclat, HCA"
      ],
      correctIndex: 1,
      explanation: "السلايدات 13-14: مهام معالجة اللغات الطبيعية (NLP, Text Classification, Summarization, NLU) تعتمد على: RNNs, CNNs, or Transformers."
    },
    {
      question: "أي مهمة من مهام تعلم الآلة التالية تُستخدم لاكتشاف الاحتيال في البطاقات الائتمانية (Credit Card Fraud)؟",
      options: ["Clustering", "Anomaly Detection", "Dimensionality Reduction", "Reinforcement Learning"],
      correctIndex: 1,
      explanation: "السلايد 15: اكتشاف الاحتيال في البطاقات يندرج تحت كشف الشذوذ (Anomaly detection)."
    },
    {
      question: "لبناء روبوت ذكي يتعلم كيف يلعب لعبة أو يتعلم المشي، نستخدم:",
      options: ["Reinforcement Learning (التعلم المعزز)", "Linear Regression", "Dimensionality Reduction", "Association Rules"],
      correctIndex: 0,
      explanation: "السلايد 16 والسلايد 29: بناء البوتات الذكية للعبة وتدريب الروبوتات على المشي يعتمد على Reinforcement Learning."
    }
  ],

  l1_s4: [
    {
      question: "في التعلم الخاضع للإشراف (Supervised Learning)، ما الذي تتضمنه مجموعة التدريب؟",
      options: [
        "بيانات بدون أي حلول مرغوبة إطلاقاً",
        "الحلول المرغوبة والمستهدفة وتسمى التسميات (Labels)",
        "مكافآت وعقوبات فقط",
        "مصفوفة قيم مفردة SVD فقط"
      ],
      correctIndex: 1,
      explanation: "السلايد 18: 'Supervised Learning: The training set you feed to the algorithm includes the desired solutions, called labels'."
    },
    {
      question: "أي من الخوارزميات التالية ينتمي للتعلم غير الخاضع للإشراف (Unsupervised Learning)؟",
      options: [
        "Linear Regression و Logistic Regression",
        "K-Means, DBSCAN, PCA, و Isolation Forest",
        "Neural Networks المسؤولة عن الانحدار",
        "k-Nearest Neighbors (k-NN)"
      ],
      correctIndex: 1,
      explanation: "السلايدات 21 و 23: K-Means و DBSCAN (تجميع)، PCA (تقليل أبعاد)، و Isolation Forest (كشف شذوذ) كلها خوارزميات غير خاضعة للإشراف."
    },
    {
      question: "خدمة Google Photos التي تتعرف على صور أفراد العائلة بمجرد إخبار النظام باسم شخص واحد تُعد مثالاً شهيراً على:",
      options: ["Batch Learning", "Semi-supervised Learning (شبه خاضع للإشراف)", "Reinforcement Learning", "Strictly Supervised"],
      correctIndex: 1,
      explanation: "السلايد 27: Google Photos مثال رئيسي على Semi-supervised Learning حيث توجد ملايين الصور غير المعنونة مع عدد قليل جداً من التسميات."
    },
    {
      question: "ما هو التعلم الذي يدرب النظام على عينات البيانات بشكل تدريجي ومتسلسل (عينة عينة أو مجموعات صغيرة)؟",
      options: ["Batch Learning", "Online Learning", "Instance-Based Learning", "Offline Training"],
      correctIndex: 1,
      explanation: "السلايد 31: Online Learning يدرب النظام تدريجياً (Incrementally) بتغذيته بالبيانات متسلسلة فردياً أو بـ mini-batches."
    },
    {
      question: "ماذا يحدث إذا تم ضبط معدل التعلم (Learning rate) على قيمة مرتفعة جداً في نظام Online Learning؟",
      options: [
        "سيتوقف النظام عن التعلم نهائياً فوراً",
        "سيتكيف النظام بسرعة فائقة مع البيانات الجديدة ولكنه سينسى البيانات القديمة بسرعة أيضاً",
        "سيتحول النظام إلى Batch Learning",
        "لن يتأثر النظام بأي شيء"
      ],
      correctIndex: 1,
      explanation: "السلايد 34: 'If you set a high learning rate, then your system will rapidly adapt to new data, but it will also tend to quickly forget the old data'."
    }
  ],

  l1_s5: [
    {
      question: "ما هو الفرق بين خطأ المعاينة (Sampling Noise) وانحياز المعاينة (Sampling Bias)؟",
      options: [
        "Sampling noise يحدث نتيجة خلل في طريقة الجمع، بينما sampling bias يحدث بالصدفة",
        "Sampling noise يحدث نتيجة الصدفة في العينات الصغيرة، بينما sampling bias ينتج عن عيب في طريقة أخذ العينات حتى لو كانت العينة ضخمة",
        "كلاهما نفس الشيء تماماً بدون أي فرق",
        "Sampling bias يحدث فقط في التعلم غير الخاضع للإشراف"
      ],
      correctIndex: 1,
      explanation: "السلايد 42: الصدفة في العينات الصغيرة تسبب sampling noise، بينما طريقة الجمع المعيبة تسبب sampling bias حتى مع العينات الضخمة."
    },
    {
      question: "تتضمن هندسة الخصائص (Feature Engineering) ثلاث خطوات أساسية، هي:",
      options: [
        "حذف البيانات، زيادة الضوضاء، وتقليل المعاملات",
        "اختيار الخصائص (Feature Selection)، استخلاص الخصائص (Feature Extraction)، وإنشاء خصائص جديدة (Creating new features)",
        "التدريب، الاختبار، والتقييم النهائي",
        "المعاينة العشوائية، المعاينة الطبقية، والتقسيم"
      ],
      correctIndex: 1,
      explanation: "السلايد 45 يحدد خطوات Feature Engineering الثلاثة: Feature Selection, Feature Extraction, Creating new features."
    },
    {
      question: "ماذا يعني الإفراط في الملاءمة (Overfitting) وما أحد أهم حلوله؟",
      options: [
        "النموذج بسيط جداً؛ والحل هو تقليل عدد الخصائص",
        "النموذج يعمل بامتياز على بيانات التدريب لكنه يفشل في التعميم على البيانات الجديدة؛ وأحد حلوله هو تبسيط النموذج أو تقييده (Regularization)",
        "النموذج يفشل في التدريب والاختبار معاً؛ وحله حذف كل البيانات",
        "النموذج يعمل بسرعة عالية جداً دون حساب التكلفة"
      ],
      correctIndex: 1,
      explanation: "السلايد 46 و 47: Overfitting يعني أن النموذج يؤدي جيداً على التدريب ولا يعمم جيداً. وحلوله: تبسيط النموذج بمعاملات أقل أو تقييده بالـ Regularization، جمع بيانات أكثر، وتقليل الضوضاء."
    },
    {
      question: "أي من الخيارات التالية يُعد حلاً لمشكلة نقص الملاءمة (Underfitting)؟",
      options: [
        "اختيار نموذج أبسط بمعاملات أقل بكثير",
        "اختيار نموذج أكثر قوة بمعاملات أكثر، وتغذية الخوارزمية بخصائص أفضل (Feature engineering)",
        "زيادة القيود والمعامل الفائق للتنظيم (Regularization)",
        "حذف نصف مجموعة التدريب"
      ],
      correctIndex: 1,
      explanation: "السلايد 49: حلول الـ Underfitting هي: اختيار نموذج أقوى بمعاملات أكثر، إمداده بخصائص أفضل، وتقليل القيود (تقليل Regularization hyperparameter)."
    }
  ],

  // --- Lecture 2 ---
  l2_s1: [
    {
      question: "ما هو الترتيب الصحيح للخطوات الثلاث الأولى في مشروع تعلم الآلة المتكامل (End-to-End ML Project)؟",
      options: [
        "1. Get data, 2. Train model, 3. Launch",
        "1. Look at the big picture, 2. Get the data, 3. Discover and visualize the data",
        "1. Select model, 2. Fine-tune, 3. Get data",
        "1. Prepare data, 2. Look at big picture, 3. Evaluate"
      ],
      correctIndex: 1,
      explanation: "السلايدات 4-5: الخطوة 1 هي النظر للصورة الكلية، ثم 2 الحصول على البيانات، ثم 3 استكشاف وتصوير البيانات."
    },
    {
      question: "في مسألة التنبؤ بأسعار المنازل في كاليفورنيا، تم تصنيف النظام على أنه:",
      options: [
        "Unsupervised, Classification, Online learning",
        "Supervised learning, Multiple Univariate Regression, Batch learning",
        "Semi-supervised, Multivariate Classification",
        "Reinforcement learning, Game policy"
      ],
      correctIndex: 1,
      explanation: "السلايد 17: النظام خاضع للإشراف (Supervised)، وانحدار متعدد (Multiple regression) لوجود عدة خصائص، وأحادي التنبؤ (Univariate) للتنبؤ بسعر واحد، وتعلم بالدفعات (Batch learning)."
    },
    {
      question: "ما هو المعيار الرياضي الذي يمثله مقياس RMSE؟",
      options: [
        "معيار مانهاتن (Manhattan norm / l1 norm)",
        "المعيار الإقليدي (Euclidean norm / l2 norm)",
        "معامل ارتباط بيرسون",
        "مؤشر يودن"
      ],
      correctIndex: 1,
      explanation: "السلايد 20: RMSE يمثل المعيار الإقليدي Euclidean norm ويُسمى أيضاً l2 norm."
    },
    {
      question: "متى نفضل استخدام مقياس متوسط الخطأ المطلق (MAE) بدلاً من RMSE؟",
      options: [
        "عندما تكون البيانات خالية تماماً من الأخطاء",
        "عندما تحتوي البيانات على العديد من القيم والمناطق الشاذة (Many outlier districts)",
        "عندما نريد إعطاء وزن هائل للأخطاء الكبيرة",
        "فقط في مهام التصنيف الثنائي"
      ],
      correctIndex: 1,
      explanation: "السلايد 19-20: MAE يفضل عند وجود قيم شاذة كثيرة (Outliers) لأن RMSE شديد الحساسية للقيم الشاذة بسبب التربيع."
    }
  ],

  l2_s2: [
    {
      question: "في ملف بيانات housing.csv، ما هي الخاصية الوحيدة النصية الفئوية (Categorical) من بين الخصائص العشر؟",
      options: ["housing_median_age", "median_income", "ocean_proximity", "total_bedrooms"],
      correctIndex: 2,
      explanation: "السلايد 27: جميع الخصائص العشر رقمية، باستثناء خاصية ocean_proximity فهي فئوية نصية (object)."
    },
    {
      question: "عند تشغيل الأمر `housing.info()`، ما الخاصية التي ظهر فيها قيم مفقودة (Missing values) (20433 قيمة فقط من 20640)؟",
      options: ["median_house_value", "total_bedrooms", "population", "longitude"],
      correctIndex: 1,
      explanation: "السلايد 27: أظهر الأمر housing.info() أن total_bedrooms تحتوي على 20433 قيمة غير فارغة من أصل 20640، وبالتالي توجد بها قيم مفقودة."
    },
    {
      question: "لماذا تم تفضيل المعاينة الطبقية (Stratified Sampling) على المعاينة العشوائية البحتة لإنشاء مجموعة الاختبار في مشروع الإسكان؟",
      options: [
        "لتقليل استهلاك مساحة القرص الصلب",
        "لضمان تمثيل مختلف فئات الدخل (Income categories) في مجموعة الاختبار بنفس نسبتها في كامل البيانات ومنع انحياز المعاينة",
        "لأن سكايليرن لا تدعم التقسيم العشوائي",
        "للتخلص من جميع الخصائص النصية تلقائياً"
      ],
      correctIndex: 1,
      explanation: "السلايد 31: المعاينة الطبقية تضمن أن تكون مجموعة الاختبار ممثلة بدقة لمختلف فئات الدخل لتفادي الـ Sampling Bias."
    }
  ],

  l2_s3: [
    {
      question: "عند رسم البيانات الجغرافية `housing.plot(...)`، ما فائدة المعامل `alpha=0.1`؟",
      options: [
        "تغيير ألوان النقاط إلى الأبيض والأسود",
        "إبراز المناطق ذات الكثافة السكانية العالية (High-density areas)",
        "حذف القيم الشاذة تلقائياً",
        "حساب معامل الارتباط"
      ],
      correctIndex: 1,
      explanation: "السلايد 35: ضبط الشفافية عبر alpha=0.1 يبرز المناطق عالية الكثافة حيث تتراكم النقاط فوق بعضها."
    },
    {
      question: "ما هي الخاصية التي أظهرت أعلى ارتباط طردي موجب مع سعر المنزل (Median house value) في مصفوفة الارتباط؟",
      options: ["total_rooms", "housing_median_age", "median_income", "latitude"],
      correctIndex: 2,
      explanation: "السلايد 37 و 38: أظهر معامل بيرسون أن الدخل الوسيط (median_income) له أقوى ارتباط إيجابي بسعر المنزل (~0.68)."
    },
    {
      question: "أي من تركيبات الخصائص التالية تم ابتكارها في السلايد لأن عدد الغرف الكلي بمفرده لا يفيد؟",
      options: [
        "rooms_per_household (عدد الغرف لكل أسرة)",
        "income_per_room",
        "age_per_population",
        "latitude_plus_longitude"
      ],
      correctIndex: 0,
      explanation: "السلايد 38: تم ابتكار rooms_per_household (عدد الغرف مقسوماً على الأسر) و bedrooms_per_room و population_per_household."
    }
  ],

  l2_s4: [
    {
      question: "ما هو صنف Scikit-Learn المخصص لتعويض القيم المفقودة في البيانات (Imputation)؟",
      options: ["StandardScaler", "OneHotEncoder", "SimpleImputer", "OrdinalEncoder"],
      correctIndex: 2,
      explanation: "السلايد 41: 'Scikit-Learn provides a handy class to take care of missing values: SimpleImputer'."
    },
    {
      question: "لماذا يُفضل OneHotEncoder على OrdinalEncoder عند التعامل مع المتغيرات الفئوية الاسمية مثل ocean_proximity؟",
      options: [
        "لأنه أصغر حجماً في الذاكرة",
        "لأن OrdinalEncoder يفترض أن الفئات ذات الأرقام المتقاربة متشابهة بالمعنى، بينما OneHotEncoder ينشئ متجهات ثنائية مستقلة",
        "لأن OneHotEncoder يحذف القيم الشاذة",
        "لأن OrdinalEncoder يعمل فقط مع الأرقام السالبة"
      ],
      correctIndex: 1,
      explanation: "السلايد 42: التشفير الترتيبي يجعل الخوارزميات تظن أن القيم القريبة (0 و 1) أكثر تشابهاً من (0 و 4)، بينما OneHotEncoder يعطي كل فئة عموداً ثنائياً مستقلاً (1 للنشط و 0 لغيره)."
    },
    {
      question: "ما الفرق الأساسي بين Min-max scaling و Standardization في تحجيم الخصائص؟",
      options: [
        "Min-max يحصر القيم بين 0 و 1، بينما Standardization يطرح المتوسط ويقسم على الانحراف المعياري وهو أقل تأثراً بالقيم الشاذة",
        "Standardization يحصر القيم دائماً بين -1 و +1",
        "Min-max لا يتأثر إطلاقاً بالقيم الشاذة",
        "كلاهما يستخدم نفس المعادلة الرياضية تماماً"
      ],
      correctIndex: 0,
      explanation: "السلايدات 44-45: Min-max ينقل القيم للمجال [0, 1]، بينما Standardization يعطي متوسطاً صفرياً وتبايناً واحداً ويكون 'much less affected by outliers'."
    }
  ],

  l2_s5: [
    {
      question: "عند تدريب نموذج DecisionTreeRegressor على مجموعة بيانات الإسكان، لماذا حقق خطأ = 0 على مجموعة التدريب؟",
      options: [
        "لأنه النموذج الأمثل عالمياً بلا أي أخطاء",
        "بسبب حدوث إفراط حاد في الملاءمة (Severe Overfitting) وحفظ البيانات",
        "بسبب حدوث Underfitting",
        "لأنه استخدم المعاينة الطبقية"
      ],
      correctIndex: 1,
      explanation: "السلايد 47: شجرة القرار حققت خطأ صفر على التدريب لأنها بالغت في ملاءمة وحفظ بيانات التدريب (Overfitting the training data)."
    },
    {
      question: "ما هو الصنف الذي يقوم بتجربة كافة التوافيق الممكنة بين المعاملات الفائقة (Hyperparameters) وتقييمها بالتحقق المتقاطع؟",
      options: ["RandomizedSearchCV", "GridSearchCV", "KFoldRegressor", "EnsembleSearchCV"],
      correctIndex: 1,
      explanation: "السلايد 49: 'Grid Search (Scikit-Learn’s GridSearchCV) evaluates all the possible combinations of hyperparameter values'."
    },
    {
      question: "ما الفائدة الرئيسية لاستخدام RandomizedSearchCV بدلاً من GridSearchCV؟",
      options: [
        "يضمن تجربة كل التوافيق المليونية",
        "يقيم عدداً عشوائياً محدداً من التوافيق في كل تكرار، مما يجعله ممتازاً عند البحث في مساحات معاملات ضخمة",
        "يحذف تلقائياً النماذج الضعيفة دون تدريب",
        "يعمل دون الحاجة لكتابة كود بايثون"
      ],
      correctIndex: 1,
      explanation: "السلايد 49: RandomizedSearchCV يختار قيماً عشوائية لكل معامل عند كل تكرار، وهو موفر جداً للوقت والجهد في المساحات الكبيرة."
    }
  ],

  // --- Lecture 3 ---
  l3_s1: [
    {
      question: "كم عدد الصور وإجمالي الخصائص (Features) في كل صورة داخل مجموعة بيانات MNIST؟",
      options: [
        "60,000 صورة، وكل صورة 20 × 20 = 400 خاصية",
        "70,000 صورة، وكل صورة 28 × 28 = 784 خاصية",
        "10,000 صورة، وكل صورة 100 × 100 = 10,000 خاصية",
        "50,000 صورة، وكل صورة 32 × 32 = 1024 خاصية"
      ],
      correctIndex: 1,
      explanation: "السلايد 4: مجموعة MNIST بها 70,000 صورة صغيرة، كل صورة 28 × 28 بكسل مما يعطي 784 خاصية."
    },
    {
      question: "ما هي ميزة استخدام مصنف SGDClassifier في التصنيف الثنائي لكاشف الرقم 5؟",
      options: [
        "أنه قادر على التعامل مع مجموعات البيانات الضخمة بكفاءة ويعالج كل عينة بشكل مستقل (مناسب لـ Online Learning)",
        "أنه لا يستخدم أي عشوائية في التدريب إطلاقاً",
        "أنه يعطي دائماً نسبة خطأ صفرية",
        "أنه لا يحتاج لتحديد الفئات مسبقاً"
      ],
      correctIndex: 0,
      explanation: "السلايد 9: SGDClassifier قادر على التعامل مع البيانات الضخمة بكفاءة، ويعالج العينات عينة بعينة مما يجعله ملائماً لـ online learning."
    }
  ],

  l3_s2: [
    {
      question: "لماذا حقق المصنف الغبي Never5Classifier دقة تفوق 90% على مجموعة MNIST؟",
      options: [
        "لأنه نموذج ذكاء اصطناعي متطور جداً",
        "لأن البيانات غير متوازنة (Skewed Dataset) حيث تشكل الأرقام 5 فقط 10% بينما 90% أرقام أخرى",
        "بسبب استخدام SVD في الحساب",
        "لأنه تدرب على كل بيانات الاختبار"
      ],
      correctIndex: 1,
      explanation: "السلايد 13: الدقة خادعة في البيانات غير المتوازنة (Skewed datasets)؛ فبما أن 10% فقط من الصور رقم 5، فالتنبؤ الدائم بأن الصورة 'ليست 5' يصيب في 90% من الحالات!"
    },
    {
      question: "في مصفوفة الارتباك (Confusion Matrix)، ماذا يمثل كل صف (Row) وماذا يمثل كل عمود (Column)؟",
      options: [
        "الصف يمثل الفئة المتوقعة، والعمود يمثل الفئة الفعلية",
        "الصف يمثل الفئة الفعلية (Actual class)، والعمود يمثل الفئة المتوقعة (Predicted class)",
        "الصف يمثل نسبة الدقة، والعمود يمثل الاستدعاء",
        "الصف يمثل التدريب، والعمود يمثل الاختبار"
      ],
      correctIndex: 1,
      explanation: "السلايد 18: 'Each row in a confusion matrix represents an actual class, while each column represents a predicted class'."
    },
    {
      question: "أين تقع القيم غير الصفرية في مصفوفة الارتباك الخاصة بمصنف مثالي (Perfect Classifier)؟",
      options: [
        "في الصف الأول فقط",
        "على القطر الرئيسي فقط (Main diagonal من أعلى اليسار لأسفل اليمين)",
        "في الزوايا الأربع فقط",
        "في العمود الأخير فقط"
      ],
      correctIndex: 1,
      explanation: "السلايد 18: المصنف المثالي يملك فقط TP و TN، وتكون أرقامه غير الصفرية فقط على القطر الرئيسي (Main diagonal)."
    }
  ],

  l3_s3: [
    {
      question: "ما هو القانون الرياضي للاستدعاء أو الحساسية (Recall / Sensitivity / TPR)؟",
      options: [
        "TP / (TP + FP)",
        "TP / (TP + FN)",
        "TN / (TN + FP)",
        "(TP + TN) / Total"
      ],
      correctIndex: 1,
      explanation: "السلايد 19: Recall = Sensitivity = TPR = TP / (TP + FN)."
    },
    {
      question: "ما هو قانون الدقة التنبؤية (Precision / PPV)؟",
      options: [
        "TP / (TP + FP)",
        "TN / (TN + FN)",
        "FN / (TP + FN)",
        "TP / (TP + TN)"
      ],
      correctIndex: 0,
      explanation: "السلايد 20: Precision = Positive Prediction Value (PPV) = TP / (FP + TP)."
    },
    {
      question: "ما نوع المتوسط الرياضي المستخدم لحساب مقياس F1 Score، ولماذا تم اختياره؟",
      options: [
        "المتوسط الحسابي العادي، لأنه يعامل القيم بالتساوي",
        "المتوسط التوافقي (Harmonic Mean)، لأنه يعطي وزناً أكبر بكثير للقيم المنخفضة",
        "المتوسط الهندسي، لحساب الأبعاد المتعددة",
        "الوسيط الإحصائي، لتفادي القيم الشاذة"
      ],
      correctIndex: 1,
      explanation: "السلايد 22-23: F1 Score هو المتوسط التوافقي (Harmonic mean) للدقة والاستدعاء، وهو يعطي وزناً كبيراً للقيم المنخفضة فلا يرتفع إلا إذا كانت كل من Precision و Recall مرتفعتين."
    },
    {
      question: "مؤشر يودن (Youden's Index - YI) يُحسب بالمعادلة:",
      options: [
        "TPR + TNR - 1",
        "Precision + Recall / 2",
        "1 - Error Rate",
        "TP - FP"
      ],
      correctIndex: 0,
      explanation: "السلايد 21: Youden's Index (YI) = TPR + TNR - 1 ويقيس القوة التمييزية للاختبار."
    }
  ],

  l3_s4: [
    {
      question: "عند رفع عتبة القرار (Decision Threshold) في المصنف، ماذا يحدث لكل من Precision و Recall؟",
      options: [
        "تزداد Precision ويزداد Recall معاً",
        "تزداد Precision (الدقة) ويقل Recall (الاستدعاء)",
        "تقل Precision ويزداد Recall",
        "تقل كلاهما معاً"
      ],
      correctIndex: 1,
      explanation: "السلايد 24: مقايضة الدقة والاستدعاء تعني أن زيادة أحدهما تؤدي لنقصان الآخر؛ رفع العتبة يزيد الدقة ويقلل الاستدعاء."
    },
    {
      question: "ماذا يمثل منحنى ROC وما هو معيار المصنف العشوائي البحت؟",
      options: [
        "يرسم الدقة مقابل التكلفة، والمصنف العشوائي AUC = 0",
        "يرسم معدل الموجب الحقيقي (TPR/Recall) مقابل معدل الموجب الكاذب (FPR)، ومساحة المصنف العشوائي AUC = 0.5",
        "يرسم عدد الصور مقابل الوقت، والمصنف العشوائي خط أفقي",
        "يرسم مقياس F1 مقابل العتبة"
      ],
      correctIndex: 1,
      explanation: "السلايد 28-30: منحنى ROC يرسم TPR ضد FPR (وهو 1 - Specificity)، والمصنف العشوائي يمثله خط مائل بمساحة AUC = 0.5 بينما المثالي AUC = 1.0."
    },
    {
      question: "وفقاً للقاعدة الذهبية (Rule of Thumb)، متى يجب أن تفضل منحنى PR (Precision/Recall) على منحنى ROC؟",
      options: [
        "عندما تكون الفئات متساوية تماماً في العدد",
        "عندما تكون الفئة الإيجابية نادرة (Rare positive class) أو تهتم بالـ False Positives أكثر من False Negatives",
        "فقط عندما يتجاوز عدد العينات المليون",
        "عند استخدام الانحدار الخطي فقط"
      ],
      correctIndex: 1,
      explanation: "السلايد 30: 'Rule of Thumb: You should prefer the PR curve whenever the positive class is rare or when you care more about the false positives than the false negatives'."
    }
  ],

  l3_s5: [
    {
      question: "في استراتيجية One-versus-One (OvO) لمجموعة بيانات MNIST (10 أرقام)، كم عدد المصنفات الثنائية التي يلزم تدريبها؟",
      options: [
        "10 مصنفات",
        "45 مصنفاً ثنائياً [طبقاً للقانون: N × (N-1) / 2]",
        "90 مصنفاً",
        "100 مصنف"
      ],
      correctIndex: 1,
      explanation: "السلايد 36: قانون OvO هو N × (N-1) / 2، وبالتعويض عن N=10 ينتج: 10 × 9 / 2 = 45 مصنفاً ثنائياً."
    },
    {
      question: "لماذا تُفضل استراتيجية OvO تحديداً مع خوارزمية آلات المتجهات الداعمة (Support Vector Machines - SVM)؟",
      options: [
        "لأن SVM لا تقبل الأرقام العشرية",
        "لأن SVM تتوسع بشكل سيء مع حجم البيانات، فتدريب مصنفات كثيرة على مجموعات صغيرة أسرع بكثير من تدريب مصنفات قليلة على مجموعات بيانات ضخمة",
        "لأن OvR ممنوع برمجياً في سكايليرن مع SVM",
        "لتقليل عدد المعاملات الفائقة إلى الصفر"
      ],
      correctIndex: 1,
      explanation: "السلايد 37: 'SVM classifiers scale poorly with the size of the training set. For these algorithms, OvO is preferred because it is faster to train many classifiers on small training sets'."
    },
    {
      question: "ما هو التصنيف متعدد المخرجات (Multioutput Classification) مع ذكر المثال الوارد في المحاضرة؟",
      options: [
        "هو تعميم لـ Multilabel بحيث يمكن لكل تسمية أن تأخذ قيماً متعددة (> 2)؛ ومثاله إزالة الضوضاء من صور MNIST للتنبؤ بشدة كل بكسل من 0 إلى 255",
        "هو التنبؤ بقيمة رقمية وحيدة لكل عميل",
        "هو تشغيل 10 خوارزميات في نفس الوقت",
        "هو تدريب نموذج دون إعطائه أي مخرجات"
      ],
      correctIndex: 0,
      explanation: "السلايد 48: Multioutput classification هو تعميم للـ multilabel بحيث تأخذ التسميات قيماً متعددة، ومثاله في MNIST تنظيف الصور حيث يخرج النموذج 784 بكسل وكل بكسل له قيمة من 0 إلى 255."
    }
  ],

  // --- Lecture 4 ---
  l4_s1: [
    {
      question: "ما هما الطريقتان البسيطتان لتدريب نموذج الانحدار الخطي (Linear Regression)؟",
      options: [
        "1. K-Means، 2. PCA",
        "1. استخدام معادلة مغلقة مباشرة (The Normal Equation / SVD)، 2. استخدام التحسين التكراري (Gradient Descent)",
        "1. الأشجار العشوائية، 2. شبكات التلافيف",
        "1. One-Hot Encoding، 2. SimpleImputer"
      ],
      correctIndex: 1,
      explanation: "السلايد 5: الطريقتان هما: المعادلة المغلقة المباشرة (Closed-form equation) أو التحسين التكراري بالتدرج التنازلي (Gradient Descent)."
    },
    {
      question: "ما هي صيغة المعادلة الطبيعية (The Normal Equation) لإيجاد قيم المعاملات θ̂ التي تصغر دالة التكلفة؟",
      options: [
        "θ̂ = (X^T X)^(-1) X^T y",
        "θ̂ = X y^T / m",
        "θ̂ = (X X^T) / y",
        "θ̂ = θ - η ∇MSE"
      ],
      correctIndex: 0,
      explanation: "السلايد 10: المعادلة الطبيعية هي: θ̂ = (X^T X)^(-1) X^T y."
    },
    {
      question: "في نموذج الانحدار الخطي Vectorized form: `ŷ = h_θ(x) = θ · x`، ماذا يمثل الرمز `θ · x`؟",
      options: [
        "الضرب القياسي / النقطي لمتجه المعاملات والمتجه الخاص بالعينة (Dot Product)",
        "القسمة المصفوفية",
        "معدل التعلم في المشتقة الجزئية",
        "المعكوس الزائف"
      ],
      correctIndex: 0,
      explanation: "السلايد 8: 'θ.x is the dot product of the vectors θ and x'."
    }
  ],

  l4_s2: [
    {
      question: "ما هي الطريقة التي تعتمد عليها دالة `LinearRegression` في Scikit-Learn لحساب المعاملات؟",
      options: [
        "المعادلة الطبيعية العادية (Normal Equation)",
        "تفكيك القيمة المفردة (SVD) لحساب المعكوس الزائف لمور-بنروز (Moore-Penrose Pseudoinverse: θ̂ = X^+ y)",
        "الشبكات العصبية العميقة",
        "خوارزمية الاستبعاد العشوائي"
      ],
      correctIndex: 1,
      explanation: "السلايد 13: LinearRegression في سكايليرن تحسب θ̂ = X^+ y بالاعتماد على تفكيك SVD لحساب المعكوس الزائف X^+."
    },
    {
      question: "لماذا يُعد نهج SVD أفضل وأكثر أماناً من المعادلة الطبيعية (Normal Equation)؟",
      options: [
        "لأنه يعمل بدون ذاكرة رام",
        "لأن المعادلة الطبيعية تفشل إذا كانت مصفوفة X^T X غير قابلة للعكس (Singular / Non-invertible كما لو كان m < n أو مع الخصائص المكررة)، بينما المعكوس الزائف معرّف دائماً",
        "لأن SVD لا يحتاج لأي عمليات ضرب مصفوفات",
        "لأن SVD خاص ببيانات الصور فقط"
      ],
      correctIndex: 1,
      explanation: "السلايد 14: المعادلة الطبيعية تفشل لو كانت المصفوفة شاذة (singular) كحالة m < n، بينما المعكوس الزائف SVD معرف وموجود دائماً."
    },
    {
      question: "ما هو التعقيد الحسابي لنهج SVD المستخدم في سكايليرن مقارنة بالمعادلة الطبيعية بالنسبة لعدد الخصائص n؟",
      options: [
        "المعادلة الطبيعية O(n) و SVD هو O(n^5)",
        "المعادلة الطبيعية تتراوح بين O(n^2.4) إلى O(n^3)، بينما نهج SVD حوالي O(n^2)",
        "كلاهما له تعقيد O(1) ثابت",
        "SVD تعقيده أسي O(2^n)"
      ],
      correctIndex: 1,
      explanation: "السلايد 15: حساب مقلوب مصفوفة في المعادلة الطبيعية يأخذ O(n^2.4) إلى O(n^3)، بينما SVD يأخذ O(n^2)."
    }
  ],

  l4_s3: [
    {
      question: "ما هي الخاصية الرياضية المميزة لدالة تكلفة MSE في الانحدار الخطي، وما نتيجتها على التدرج التنازلي؟",
      options: [
        "دالة غير مستقرة وبها آلاف النقاط الصغرى المحلية",
        "دالة محدبة (Convex Function)؛ ونتيجتها عدم وجود أي نقاط صغرى محلية (No local minima) بل نقطة صغرى عامة واحدة فقط يضمن GD الوصول إليها",
        "دالة مقعرة تتصاعد للأبد",
        "دالة خطية مستقيمة لا يوجد لها ميل"
      ],
      correctIndex: 1,
      explanation: "السلايد 22: دالة MSE للانحدار الخطي محدبة (Convex) وبالتالي لا توجد أي local minima بل global minimum واحدة فقط ومضمون التقارب إليها."
    },
    {
      question: "ماذا يحدث لمسار التدرج التنازلي إذا كانت الخصائص بمقاييس مختلفة تماماً (بدون Feature Scaling)؟",
      options: [
        "تصبح دالة التكلفة على شكل وعاء ممدود ومستطيل (Elongated bowl) مما يجعل المسار يتذبذب ويستغرق وقتاً طويلاً جداً للتقارب",
        "ينزل النموذج فوراً في خط مستقيم خلال تكرار واحد",
        "تتحول دالة التكلفة إلى خط مستقيم",
        "لا يؤثر مقياس الخصائص إطلاقاً على خوارزميات التدرج"
      ],
      correctIndex: 0,
      explanation: "السلايد 23: بدون تحجيم يكون الوعاء ممدوداً ومستطيلاً مما يسبب تذبذباً وبطئاً شديداً، لذا يجب توحيد مقاييس الخصائص ليكون الوعاء كروياً متناسقاً."
    }
  ],

  l4_s4: [
    {
      question: "ما هو العيب الرئيسي لخوارزمية Batch Gradient Descent؟",
      options: [
        "أنها لا تقبل أكثر من خاصيتين فقط",
        "أنها تستخدم كامل بيانات التدريب في كل خطوة مما يجعلها شديدة البطء على مجموعات البيانات الضخمة (Terribly slow on large datasets)",
        "أنها تعتمد على القفز العشوائي المستمر",
        "أنها لا تصل للنقطة الصغرى إطلاقاً"
      ],
      correctIndex: 1,
      explanation: "السلايد 25: Batch GD تستخدم كل دفعة التدريب في كل خطوة، فتكون شديدة البطء على مجموعات البيانات الكبيرة جداً."
    },
    {
      question: "ما هي تقنية التلدين المحاكى (Simulated Annealing) المستخدمة مع Stochastic Gradient Descent (SGD)؟",
      options: [
        "تبريد المعالج المركزي بالنيتروجين",
        "تقليل معدل التعلم تدريجياً عبر جدول تعلم (Learning schedule) لمساعدة النموذج على الاستقرار في القاع الأدنى بدلاً من التذبذب الدائم",
        "زيادة معدل التعلم للأبد للهروب من البيانات",
        "حذف العينات العشوائية أثناء التدريب"
      ],
      correctIndex: 1,
      explanation: "السلايد 30: Simulated Annealing مستوحاة من تبريد المعادن في التعدين، وتعني تقليل معدل التعلم تدريجياً لتمكين SGD من الاستقرار في القاع."
    },
    {
      question: "ما الميزة الفريدة لخوارزمية Mini-batch Gradient Descent مقارنة بـ SGD الصرف؟",
      options: [
        "القدرة على استغلال التحسينات العتادية للمصفوفات في كروت الشاشة والمعالجات (GPUs / Hardware acceleration)",
        "الهروب من الصغرى المحلية بشكل أسهل بكثير من SGD",
        "أنها لا تتطلب تحديد معدل تعلم",
        "أنها تستخدم عينة واحدة فقط دائماً"
      ],
      correctIndex: 0,
      explanation: "السلايد 32-33: Mini-batch تستغل التسريع العتادي لعمليات المصفوفات في GPUs/CPUs وتكون أكثر استقراراً."
    },
    {
      question: "حسب جدول المقارنة الرسمي النهائي (سلايد 34)، ما هي الخوارزميات التي تدعم التعلم خارج الذاكرة (Out-of-core learning)؟",
      options: [
        "Normal Equation و SVD فقط",
        "Stochastic GD و Mini-batch GD",
        "Batch GD فقط",
        "لا توجد أي خوارزمية تدعم ذلك"
      ],
      correctIndex: 1,
      explanation: "السلايد 34: الخوارزميتان اللتان تدعمان Out-of-core هما: Stochastic GD و Mini-batch GD."
    },
    {
      question: "ما هي الخلاصة الختامية المهمة لمقارنة خوارزميات الانحدار الخطي الخمس بعد انتهاء التدريب (سلايد 34)؟",
      options: [
        "أن خوارزمية SVD تعطي تنبؤات مختلفة جذرياً عن الباقي",
        "لا يوجد فرق تقريباً بعد التدريب؛ فجميع الخوارزميات تنتهي بنماذج متطابقة جداً وتجري التنبؤات بنفس الطريقة تماماً",
        "أن خوارزمية Batch GD هي الوحيدة التي تصلح للإنتاج",
        "أن المعاملات لا تتطابق أبداً بين أي خوارزميتين"
      ],
      correctIndex: 1,
      explanation: "السلايد 34 نصاً: 'There is almost no difference after training: all these algorithms end up with very similar models and make predictions in exactly the same way'."
    }
  ]
};

// ========================================================
// 2. FLASHCARDS DATA (بطاقات الحفظ الذكية)
// ========================================================
window.FLASHCARDS_DATA = [
  // Lecture 1
  {
    id: "fc_1",
    lec: "lec1",
    lecName: "المحاضرة 1",
    question: "ما هو تعريف آرثر صامويل (Arthur Samuel - 1959) لتعلم الآلة؟",
    answer: "هو مجال الدراسة الذي يمنح الحواسيب القدرة على التعلم دون أن تتم برمجتها بشكل صريح (without being explicitly programmed)."
  },
  {
    id: "fc_2",
    lec: "lec1",
    lecName: "المحاضرة 1",
    question: "ما هي ثلاثية توم ميتشل (E, T, P) في تعريف تعلم الآلة عام 1997؟",
    answer: "• E = Experience (الخبرة/بيانات التدريب)\n• T = Task (المهمة المطلوب إنجازها)\n• P = Performance measure (مقياس جودة الأداء مثل Accuracy)"
  },
  {
    id: "fc_3",
    lec: "lec1",
    lecName: "المحاضرة 1",
    question: "ما هي مزايا منهج تعلم الآلة مقارنة بالمنهج التقليدي القائم على القواعد؟",
    answer: "1. كود أقصر بكثير (Much shorter)\n2. أسهل في الصيانة (Easier to maintain)\n3. أعلى دقة (More accurate)\n4. يتكيف تلقائياً مع تغير البيانات."
  },
  {
    id: "fc_4",
    lec: "lec1",
    lecName: "المحاضرة 1",
    question: "ما هو تنقيب البيانات (Data Mining)؟",
    answer: "تطبيق تقنيات تعلم الآلة للغوص في كميات ضخمة من البيانات لاكتشاف أنماط خفية لم تكن ظاهرة للعيان (Discover patterns not immediately apparent)."
  },
  {
    id: "fc_5",
    lec: "lec1",
    lecName: "المحاضرة 1",
    question: "ما النموذج المستخدم في: تصنيف صور المنتجات، وكشف أورام المخ؟",
    answer: "الشبكات العصبية الالتفافية: CNNs (Convolutional Neural Networks)."
  },
  {
    id: "fc_6",
    lec: "lec1",
    lecName: "المحاضرة 1",
    question: "ما النماذج المستخدمة في معالجة اللغات الطبيعية (NLP) وتلخيص النصوص والـ Chatbots؟",
    answer: "RNNs, CNNs, or Transformers."
  },
  {
    id: "fc_7",
    lec: "lec1",
    lecName: "المحاضرة 1",
    question: "ما الفرق بين التعلم الخاضع للإشراف وغير الخاضع للإشراف؟",
    answer: "• Supervised: بيانات التدريب تحتوي على الحلول المطلوبة وتسمى التسميات (Labels).\n• Unsupervised: البيانات غير معنونة (Unlabeled) ويتعلم النظام بدون معلم."
  },
  {
    id: "fc_8",
    lec: "lec1",
    lecName: "المحاضرة 1",
    question: "ما هو التعلم خارج الذاكرة (Out-of-core learning)؟",
    answer: "قدرة خوارزميات Online Learning على تدريب البيانات العملاقة التي لا تتسع في ذاكرة الجهاز (RAM) عبر تحميل أجزاء صغيرة وتدريبها تباعاً."
  },
  {
    id: "fc_9",
    lec: "lec1",
    lecName: "المحاضرة 1",
    question: "ما الفرق بين Attribute و Feature في بيانات تعلم الآلة؟",
    answer: "• Attribute: هو نوع البيانات ومسماها (Data type مثل: العمر).\n• Feature: هو الخاصية وقيمتها الفعلية (Attribute + Value مثل: العمر = 25)."
  },
  {
    id: "fc_10",
    lec: "lec1",
    lecName: "المحاضرة 1",
    question: "ما هو الإفراط في الملاءمة (Overfitting) وما هي حلوله الثلاثة؟",
    answer: "النموذج يعمل بامتياز على التدريب لكنه يفشل في التعميم على البيانات الجديدة.\nحلوله:\n1. تبسيط النموذج بمعاملات أقل أو تقييده (Regularization)\n2. جمع بيانات تدريب إضافية\n3. تقليل الضوضاء وحذف الشواذ والأخطاء."
  },
  {
    id: "fc_11",
    lec: "lec1",
    lecName: "المحاضرة 1",
    question: "ما هو نقص الملاءمة (Underfitting) وما هي حلوله؟",
    answer: "النموذج بسيط للغاية ويعجز عن تعلم بنية البيانات.\nحلوله:\n1. اختيار نموذج أكثر قوة بمعاملات أكثر\n2. تغذية النموذج بخصائص أفضل (Feature engineering)\n3. تقليل قيود النموذج (تقليل معامل Regularization)."
  },

  // Lecture 2
  {
    id: "fc_12",
    lec: "lec2",
    lecName: "المحاضرة 2",
    question: "اذكر الخطوات الثمانية لمشروع تعلم الآلة بالترتيب الدقيق:",
    answer: "1. Look at big picture\n2. Get the data\n3. Discover & visualize data\n4. Prepare data for ML\n5. Select & train model\n6. Fine-tune model\n7. Present solution\n8. Launch, monitor, maintain."
  },
  {
    id: "fc_13",
    lec: "lec2",
    lecName: "المحاضرة 2",
    question: "ما الفرق الجوهري بين مقياس RMSE ومقياس MAE؟",
    answer: "• RMSE: معيار إقليدي (l2 norm)، يعطي وزناً كبيراً للأخطاء الضخمة وشديد الحساسية للقيم الشاذة (Outliers).\n• MAE: معيار مانهاتن (l1 norm)، يُفضل عند وجود العديد من القيم الشاذة في البيانات."
  },
  {
    id: "fc_14",
    lec: "lec2",
    lecName: "المحاضرة 2",
    question: "لماذا نستخدم المعاينة الطبقية (Stratified Sampling) بدلاً من العشوائية؟",
    answer: "لضمان تمثيل الشرائح الهامة (مثل فئات الدخل) في مجموعة الاختبار بنفس نسبتها الحقيقية في كامل المجتمع لمنع انحياز المعاينة (Sampling bias)."
  },
  {
    id: "fc_15",
    lec: "lec2",
    lecName: "المحاضرة 2",
    question: "ما دلالة معامل ارتباط بيرسون (r) عند القيم: +1، -1، 0؟",
    answer: "• +1: ارتباط طردي خطي تام وقوي.\n• -1: ارتباط عكسي خطي تام وقوي.\n• 0: انعدام الارتباط الخطي بين الخاصيتين."
  },
  {
    id: "fc_16",
    lec: "lec2",
    lecName: "المحاضرة 2",
    question: "ما هو الصنف المستخدم في سكايليرن لتعويض القيم المفقودة (Imputation)؟",
    answer: "SimpleImputer (مثال: SimpleImputer(strategy='median'))."
  },
  {
    id: "fc_17",
    lec: "lec2",
    lecName: "المحاضرة 2",
    question: "ما الفرق بين MinMaxScaler و StandardScaler؟",
    answer: "• MinMaxScaler: يغير المقياس ليصبح بين 0 و 1 (يتأثر بالشواذ).\n• StandardScaler: يطرح المتوسط (المتوسط=0) ويقسم على الانحراف (التباين=1)، وهو أقل تأثراً بالقيم الشاذة."
  },
  {
    id: "fc_18",
    lec: "lec2",
    lecName: "المحاضرة 2",
    question: "ما الفرق بين GridSearchCV و RandomizedSearchCV؟",
    answer: "• GridSearchCV: يجرب كل التوافيق الممكنة بين المعاملات المحددة.\n• RandomizedSearchCV: يختار قيماً عشوائية لكل معامل لعدد تكرارات محدد (أسرع بكثير في المساحات الكبيرة)."
  },

  // Lecture 3
  {
    id: "fc_19",
    lec: "lec3",
    lecName: "المحاضرة 3",
    question: "ما هي مواصفات مجموعة بيانات MNIST للأرقام المكتوبة بخط اليد؟",
    answer: "70,000 صورة رمادية، حجم 28×28 بكسل (784 خاصية)، شدة البكسل من 0 إلى 255. مقسمة إلى 60,000 تدريب و 10,000 اختبار."
  },
  {
    id: "fc_20",
    lec: "lec3",
    lecName: "المحاضرة 3",
    question: "لماذا لا تعتبر الدقة (Accuracy) مقياساً مناسباً لتقييم المصنفات على البيانات غير المتوازنة (Skewed)؟",
    answer: "لأن مصنفاً غبياً يتوقع الفئة الأكثر شيوعاً دائماً سيحصل على نسبة دقة عالية جداً دون أن يتعلم التمييز الحقيقي (مثل Never5Classifier الذي حقق >90% بمجرد قول False دائماً!)."
  },
  {
    id: "fc_21",
    lec: "lec3",
    lecName: "المحاضرة 3",
    question: "ما هو قانون الحساسية / الاستدعاء (Sensitivity / Recall / TPR)؟",
    answer: "Recall = TP / (TP + FN)\nنسبة الحالات الإيجابية الحقيقية التي اكتشفها المصنف بنجاح."
  },
  {
    id: "fc_22",
    lec: "lec3",
    lecName: "المحاضرة 3",
    question: "ما هو قانون الدقة التنبؤية (Precision / PPV)؟",
    answer: "Precision = TP / (TP + FP)\nدقة التنبؤات الإيجابية: نسبة الصحيح من بين كل ما توقعه النموذج إيجابياً."
  },
  {
    id: "fc_23",
    lec: "lec3",
    lecName: "المحاضرة 3",
    question: "ما هو مقياس F1 Score ولماذا يستخدم المتوسط التوافقي (Harmonic Mean)؟",
    answer: "F1 = 2 × (Precision × Recall) / (Precision + Recall) = 2TP / (2TP + FP + FN)\nالمتوسط التوافقي يعطي وزناً أكبر بكثير للقيم المنخفضة، فلا يرتفع F1 إلا إذا كانت الدقة والاستدعاء معاً مرتفعتين."
  },
  {
    id: "fc_24",
    lec: "lec3",
    lecName: "المحاضرة 3",
    question: "ماذا يحدث عند رفع عتبة القرار (Decision Threshold) في المصنف؟",
    answer: "ترتفع الدقة (Precision) وينخفض الاستدعاء (Recall) طبقاً لمقايضة Precision/Recall Trade-off."
  },
  {
    id: "fc_25",
    lec: "lec3",
    lecName: "المحاضرة 3",
    question: "متى نفضل منحنى PR على منحنى ROC (Rule of Thumb)؟",
    answer: "نفضل PR curve عندما تكون الفئة الإيجابية نادرة (Rare positive class / Imbalanced data) أو عندما نهتم بالأخطاء الإيجابية الكاذبة (FP) أكثر من (FN)."
  },
  {
    id: "fc_26",
    lec: "lec3",
    lecName: "المحاضرة 3",
    question: "ما قانون عدد المصنفات في استراتيجية One-versus-One (OvO) ومتى تُفضل؟",
    answer: "القانون: N × (N - 1) / 2\n(في MNIST: 10×9/2 = 45 مصنفاً).\nتُفضل مع خوارزميات مثل SVM لأنها تتوسع ببطء مع حجم البيانات، وتدريب عدة مصنفات على مجموعات صغيرة أسرع."
  },
  {
    id: "fc_27",
    lec: "lec3",
    lecName: "المحاضرة 3",
    question: "ما الفرق بين Multilabel و Multioutput Classification؟",
    answer: "• Multilabel: يخرج قيماً ثنائية متعددة للعينة (مثل التعرف على عدة وجوه في صورة).\n• Multioutput: تعميم له بحيث تأخذ كل تسمية قيماً متعددة (> 2) مثل إزالة الضوضاء وتوقع 784 بكسل بقيم من 0-255."
  },

  // Lecture 4
  {
    id: "fc_28",
    lec: "lec4",
    lecName: "المحاضرة 4",
    question: "ما هي صيغة المعادلة الطبيعية (The Normal Equation) للانحدار الخطي؟",
    answer: "θ̂ = (X^T X)^(-1) X^T y\nتعطي حلاً مغلقاً ومباشراً للمعاملات التي تصغر دالة التكلفة MSE."
  },
  {
    id: "fc_29",
    lec: "lec4",
    lecName: "المحاضرة 4",
    question: "لماذا تعتمد Scikit-Learn على تفكيك SVD والمعكوس الزائف بدلاً من المعادلة الطبيعية؟",
    answer: "1. SVD أكثر كفاءة حسابياً O(n^2) مقابل O(n^3).\n2. المعادلة الطبيعية تفشل لو كانت X^T X غير قابلة للعكس (شاذة كحالة m < n)، بينما المعكوس الزائف X^+ معرف دائماً."
  },
  {
    id: "fc_30",
    lec: "lec4",
    lecName: "المحاضرة 4",
    question: "لماذا تضمن خوارزمية Gradient Descent الوصول للنقطة الصغرى في الانحدار الخطي؟",
    answer: "لأن دالة التكلفة MSE للانحدار الخطي دالة محدبة (Convex Function) مستمرة ذات ميل ناعم، ولا تحتوي على أي نقاط صغرى محلية (No local minima)، بل صغرى عامة واحدة فقط."
  },
  {
    id: "fc_31",
    lec: "lec4",
    lecName: "المحاضرة 4",
    question: "ماذا يحدث لمسار التدرج عند اختيار معدل تعلم (Learning Rate) مفرط الكبر؟",
    answer: "يقفز النموذج عبر الوادي (Jump across the valley) وينتهي في الجانب الآخر بتكلفة أعلى ويتباعد (Diverges) ويفشل في إيجاد الحل."
  },
  {
    id: "fc_32",
    lec: "lec4",
    lecName: "المحاضرة 4",
    question: "ما هي تقنية Simulated Annealing في خوارزمية SGD؟",
    answer: "تقليل معدل التعلم تدريجياً عبر جدول زمني (Learning schedule) مستوحى من تبريد المعادن في علم التعدين، لتمكين SGD من الاستقرار في القاع وتفادي التذبذب المستمر."
  },
  {
    id: "fc_33",
    lec: "lec4",
    lecName: "المحاضرة 4",
    question: "ما الميزة الكبرى لخوارزمية Mini-batch Gradient Descent؟",
    answer: "الاستفادة القصوى من تسريع عتاد الحاسوب (Hardware acceleration) لعمليات المصفوفات على كروت الشاشة والمعالجات (GPUs / CPUs)."
  },
  {
    id: "fc_34",
    lec: "lec4",
    lecName: "المحاضرة 4",
    question: "ما الخلاصة الذهبية لمقارنة خوارزميات الانحدار الخطي الخمس بعد التدريب؟",
    answer: "لا يوجد فرق عملي بعد انتهاء التدريب؛ فجميع الخوارزميات الخمس تنتهي بنماذج متطابقة جداً وتجري التنبؤات بنفس الطريقة تماماً."
  }
];

// ========================================================
// 3. COMPREHENSIVE FINAL EXAM QUESTIONS (بنك الامتحان النهائي)
// ========================================================
window.COMPREHENSIVE_EXAM_QUESTIONS = [
  {
    id: "ex_1",
    lectureRef: "L01",
    question: "صيغة توم ميتشل (1997) لتعلم الآلة تنص على أن البرنامج يتعلم من الخبرة E بالنسبة للمهمة T ومقياس الأداء P إذا كان:",
    options: [
      "معدل التعلم يساوي صفراً دائماً",
      "أداؤه في المهمة T كما يقاس بـ P يتحسن بزيادة الخبرة E",
      "النموذج يعمل بدون أي تكلفة حسابية",
      "البيانات خالية تماماً من المتغيرات الفئوية"
    ],
    correctIndex: 1,
    explanation: "هذا هو نص تعريف توم ميتشل الشهير في السلايد 4 من المحاضرة الأولى."
  },
  {
    id: "ex_2",
    lectureRef: "L01",
    question: "أي من الخوارزميات التالية ينتمي لفئة التعلم غير الخاضع للإشراف (Unsupervised Learning) وتحديداً لاكتشاف القواعد المترابطة (Association Rule Learning)؟",
    options: ["One-class SVM", "Linear Regression", "Apriori و Eclat", "Random Forest"],
    correctIndex: 2,
    explanation: "السلايد 23 يحدد Apriori و Eclat كخوارزميات Association Rule Learning غير الخاضعة للإشراف."
  },
  {
    id: "ex_3",
    lectureRef: "L01",
    question: "في التعلم المعزز (Reinforcement Learning)، الاستراتيجية التي يتعلمها الوكيل لتحديد الفعل الأنسب في كل موقف تُسمى:",
    options: ["دالة التكلفة (Cost Function)", "السياسة (Policy)", "المعكوس الزائف (Pseudoinverse)", "العتبة (Threshold)"],
    correctIndex: 1,
    explanation: "السلايد 29: 'It must then learn by itself what is the best strategy, called a policy'."
  },
  {
    id: "ex_4",
    lectureRef: "L01",
    question: "الفرق الجوهري بين Attribute و Feature في بيانات تعلم الآلة هو:",
    options: [
      "الـ Attribute هو نوع البيانات (Data type)، بينما الـ Feature هو الخاصية مصحوبة بقيمتها (Attribute + Value)",
      "الـ Feature هو نوع البيانات بينما الـ Attribute هو القيمة",
      "كلاهما مصطلحان متطابقان بلا أي فرق",
      "الـ Feature يستخدم فقط في الصور"
    ],
    correctIndex: 0,
    explanation: "السلايد 34: 'An attribute is a datatype, whereas a feature means an attribute plus its value'."
  },
  {
    id: "ex_5",
    lectureRef: "L01",
    question: "تقييد النموذج لجعله أبسط وتقليل خطر الإفراط في الملاءمة (Overfitting) بواسطة معامل فائق يُسمى:",
    options: ["Standardization", "Regularization (التنظيم)", "One-hot encoding", "Imputation"],
    correctIndex: 1,
    explanation: "السلايد 48: تقييد النموذج لتبسيطه وخفض خطر الـ Overfitting يُسمى Regularization."
  },
  {
    id: "ex_6",
    lectureRef: "L02",
    question: "في مسألة أسعار منازل كاليفورنيا، لماذا وُصفت بأنها مسألة Multiple Univariate Regression؟",
    options: [
      "لأنها تستخدم خاصية واحدة وتتنبأ بقيم متعددة",
      "لأنها تعتمد على خصائص مدخلة متعددة (Multiple) ولكنها تتنبأ بقيمة رقمية وحيدة لكل منطقة (Univariate)",
      "لأنها مسألة تصنيف ثنائي",
      "لأنها تستخدم أشجار القرار فقط"
    ],
    correctIndex: 1,
    explanation: "السلايد 17: Multiple لأنها تستخدم عدة خصائص للتنبؤ، و Univariate لأننا نتنبأ بقيمة واحدة فقط هي سعر المنزل الوسيط."
  },
  {
    id: "ex_7",
    lectureRef: "L02",
    question: "مقياس Root Mean Square Error (RMSE) يمثل أي نوع من المعايير الاتجاهية (Norms)؟",
    options: ["l1 norm (Manhattan norm)", "l2 norm (Euclidean norm)", "l0 norm", "lk norm عندما k=∞"],
    correctIndex: 1,
    explanation: "السلايد 20: RMSE يمثل المعيار الإقليدي Euclidean norm / l2 norm."
  },
  {
    id: "ex_8",
    lectureRef: "L02",
    question: "إذا كانت بياناتك تحتوي على العديد من القيم والمناطق الشاذة (Many outlier districts)، فما هو المقياس الأفضل للاستخدام؟",
    options: ["RMSE", "MAE (Mean Absolute Error)", "Pearson r", "Jaccard"],
    correctIndex: 1,
    explanation: "السلايد 19 و 20: MAE يفضل عند وجود قيم شاذة كثيرة لأن RMSE يتأثر بها بشدة بسبب التربيع."
  },
  {
    id: "ex_9",
    lectureRef: "L02",
    question: "الهدف من كتابة دوال برمجية مخصصة لتجهيز البيانات (Data Preparation Functions) هو:",
    options: [
      "إعادة تطبيق التحويلات بسهولة على أي بيانات جديدة وبناء مكتبة تحويلات قابلة لإعادة الاستخدام في الإنتاج",
      "تثبيت نظام التشغيل",
      "إلغاء الحاجة لتدريب النموذج",
      "حذف المتغيرات الرقمية فقط"
    ],
    correctIndex: 0,
    explanation: "السلايد 40: دوال التحويل تضمن إعادة الإنتاج بسهولة، وبناء مكتبة تحويلات، واستخدامها في النظام الحي للإنتاج."
  },
  {
    id: "ex_10",
    lectureRef: "L02",
    question: "طريقة التحجيم التي تقوم بطرح المتوسط والقسمة على الانحراف المعياري، وتكون أقل تأثراً بالقيم الشاذة هي:",
    options: ["Min-max scaling", "Standardization (StandardScaler)", "OrdinalEncoding", "OneHotEncoding"],
    correctIndex: 1,
    explanation: "السلايد 45: Standardization تعطي متوسطاً صفرياً وتبايناً واحداً وهي 'much less affected by outliers'."
  },
  {
    id: "ex_11",
    lectureRef: "L03",
    question: "في مصفوفة الارتباك، إذا كانت عينة سالبة وصنفها النموذج بالخطأ على أنها موجبة، فهذا يمثل:",
    options: [
      "True Positive",
      "False Positive (Type I Error - خطأ من النوع الأول)",
      "False Negative (Type II Error - خطأ من النوع الثاني)",
      "True Negative"
    ],
    correctIndex: 1,
    explanation: "السلايد 16: العينة السالبة المصنفة خطأ كموجبة هي False Positive وتسمى خطأ من النوع الأول (Type I Error)."
  },
  {
    id: "ex_12",
    lectureRef: "L03",
    question: "المتوسط التوافقي (Harmonic Mean) بين الدقة والاستدعاء يسمى رسمياً:",
    options: ["Accuracy", "Youden's Index", "F1 Score (F-measure / DSC)", "Matthews Correlation Coefficient"],
    correctIndex: 2,
    explanation: "السلايد 21 و 22: مقياس F1 Score هو المتوسط التوافقي للدقة والاستدعاء."
  },
  {
    id: "ex_13",
    lectureRef: "L03",
    question: "إذا كان مصنف معين يملك TP = 80 و FP = 20، فما هي قيمة الدقة التنبؤية (Precision)؟",
    options: ["80%", "75%", "20%", "100%"],
    correctIndex: 0,
    explanation: "Precision = TP / (TP + FP) = 80 / (80 + 20) = 80 / 100 = 80%."
  },
  {
    id: "ex_14",
    lectureRef: "L03",
    question: "إذا كان TP = 80 و FN = 20، فما هي قيمة الاستدعاء (Recall)؟",
    options: ["80%", "50%", "25%", "64%"],
    correctIndex: 0,
    explanation: "Recall = TP / (TP + FN) = 80 / (80 + 20) = 80%."
  },
  {
    id: "ex_15",
    lectureRef: "L03",
    question: "منحنى ROC يقوم برسم:",
    options: [
      "الدقة (Precision) مقابل الاستدعاء (Recall)",
      "معدل الموجب الحقيقي (TPR / Recall) مقابل معدل الموجب الكاذب (FPR = 1 - Specificity)",
      "التكلفة مقابل عدد التكرارات",
      "الخطأ مقابل حجم البيانات"
    ],
    correctIndex: 1,
    explanation: "السلايد 28: منحنى ROC يرسم TPR مقابل FPR (أو الحساسية مقابل 1 - النوعية)."
  },
  {
    id: "ex_16",
    lectureRef: "L03",
    question: "في استراتيجية One-versus-the-Rest (OvR) لتصنيف 10 فئات، كم مصنفاً ثنائياً يتم تدريبه؟",
    options: ["45 مصنفاً", "10 مصنفات ثنائية", "100 مصنف", "مصنف واحد فقط"],
    correctIndex: 1,
    explanation: "السلايد 34: في OvR ندرب N مصنفاً ثنائياً (واحد لكل فئة)، وبالتالي لـ 10 فئات ندرب 10 مصنفات."
  },
  {
    id: "ex_17",
    lectureRef: "L04",
    question: "المعادلة الطبيعية (The Normal Equation) هي حل ذو صيغة:",
    options: [
      "مغلقة ومباشرة (Closed-form solution)",
      "تكرارية استدلالية (Iterative optimization)",
      "عشوائية تقريبية (Stochastic approximation)",
      "شبكة عصبية متعددة الطبقات"
    ],
    correctIndex: 0,
    explanation: "السلايد 5 و 10: المعادلة الطبيعية هي Closed-form equation تحسب المعاملات مباشرة."
  },
  {
    id: "ex_18",
    lectureRef: "L04",
    question: "لماذا تضمن خوارزمية Gradient Descent الوصول للنقطة الصغرى العامة لدالة MSE في الانحدار الخطي؟",
    options: [
      "لأن الدالة محدبة (Convex Function) خالية تماماً من النقاط الصغرى المحلية",
      "لأنها تستخدم SVD دائماً",
      "لأن معدل التعلم يكون سالباً",
      "لأن عدد الخصائص لا يتعدى 10"
    ],
    correctIndex: 0,
    explanation: "السلايد 22: دالة MSE محدبة Convex ولا تحتوي على أي local minima."
  },
  {
    id: "ex_19",
    lectureRef: "L04",
    question: "خوارزمية التدريب التي تختار عينة عشوائية واحدة فقط في كل خطوة وتدعم Out-of-core learning هي:",
    options: ["Batch Gradient Descent", "Stochastic Gradient Descent (SGD)", "Normal Equation", "SVD"],
    correctIndex: 1,
    explanation: "السلايد 28-29 و 34: خوارزمية SGD تختار عينة واحدة عشوائية في كل خطوة وتدعم Out-of-core."
  },
  {
    id: "ex_20",
    lectureRef: "L04",
    question: "ما هو التلدين المحاكى (Simulated Annealing) وما الهدف منه في SGD؟",
    answer: "تقليل معدل التعلم تدريجياً لتمكين النموذج من الاستقرار في القاع الأدنى بدلاً من التذبذب الدائم",
    options: [
      "زيادة سرعة المروحة لتبريد الحاسوب",
      "تقليل معدل التعلم تدريجياً وفق جدول زمني لتمكين SGD من الاستقرار في القاع",
      "خلط البيانات عشوائياً قبل التدريب",
      "حساب المعكوس الزائف للمصفوفة"
    ],
    correctIndex: 1,
    explanation: "السلايد 30: Simulated Annealing يعني خفض معدل التعلم تدريجياً لتمكين الخوارزمية من الاستقرار."
  },
  {
    id: "ex_21",
    lectureRef: "L04",
    question: "ما هو التعقيد الحسابي لعملية التنبؤ (Inference) في نموذج الانحدار الخطي؟",
    options: [
      "خطي بالنسبة لعدد العينات والخصائص Linear complexity: O(m) and O(n)",
      "تكعيبي O(n^3)",
      "أسي O(2^n)",
      "ثابت O(1) لا يعتمد على أي شيء"
    ],
    correctIndex: 0,
    explanation: "السلايد 15: التنبؤ بعد التدريب سريع جداً وتعقيده خطي مع عدد العينات وعدد الخصائص."
  },
  {
    id: "ex_22",
    lectureRef: "L01",
    question: "ما هي المهمة التي تستخدم لتجزئة العملاء حسب مشترياتهم لتصميم حملات تسويقية مخصصة؟",
    options: ["Clustering (التجميع)", "Speech Recognition", "Regression", "Dimensionality Reduction"],
    correctIndex: 0,
    explanation: "السلايد 15: تجزئة العملاء حسب المشتريات هو تطبيق مباشر للتجميع (Clustering)."
  },
  {
    id: "ex_23",
    lectureRef: "L03",
    question: "صنف RandomForestClassifier في Scikit-Learn لا يملك دالة `decision_function()`، فما الدالة البديلة التي يوفرها؟",
    options: ["`predict_proba()`", "`score_function()`", "`threshold_proba()`", "`fit_transform()`"],
    correctIndex: 0,
    explanation: "السلايد 31: RandomForestClassifier لا يملك decision_function بل يستخدم predict_proba()."
  },
  {
    id: "ex_24",
    lectureRef: "L04",
    question: "أي من الخوارزميات التالية لا يتطلب تحجيم الخصائص (Feature Scaling) للعمل بشكل سليم؟",
    options: [
      "Batch Gradient Descent",
      "The Normal Equation و SVD",
      "Stochastic Gradient Descent",
      "Mini-batch Gradient Descent"
    ],
    correctIndex: 1,
    explanation: "السلايد 34 في جدول المقارنة: Normal Equation و SVD لا يتطلبان Scaling (No)، بينما جميع خوارزميات التدرج التنازلي تتطلبه (Yes)."
  },
  {
    id: "ex_25",
    lectureRef: "L02",
    question: "التحقق المتقاطع (K-fold Cross-Validation) في مشروع كاليفورنيا قام بتقسيم البيانات إلى كم جزء (Folds)؟",
    options: ["3 أجزاء", "5 أجزاء", "10 أجزاء (10 folds)", "100 جزء"],
    correctIndex: 2,
    explanation: "السلايد 48: استخدم المشروع 10 distinct subsets (folds)."
  }
];
