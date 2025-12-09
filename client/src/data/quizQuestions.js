export const QUIZ_QUESTIONS = [
  // أسئلة الاختيار من متعدد
  // {
  //   id: 1,
  //   type: "multiple-choice",
  //   question: "التصميم ثلاثي الأبعاد هو عملية تهدف إلى",
  //   options: [
  //     { text: "إنشاء نماذج تحاكي الواقع بأبعادها الثلاثة", isCorrect: true },
  //     { text: "معالجة النصوص والصور", isCorrect: false },
  //     { text: "تصميم مواقع إلكترونية", isCorrect: false }
  //   ],
  //   timeLimit: 20
  // },
  {
    id: 2,
    type: "multiple-choice",
    question: "أيّ من الأدوات التالية تُستخدم في تصميم نماذج ثلاثية الأبعاد",
    options: [
      { text: "Blender", isCorrect: true },
      { text: "Tinkercad", isCorrect: true },
      { text: "Spark AR", isCorrect: false },
      { text: "Coursera", isCorrect: false }
    ],
    timeLimit: 25,
    multipleCorrect: true // إشارة لأن في إجابتين صح
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "من أدوات التصميم ثلاثي الأبعاد السهلة للمبتدئين",
    options: [
      { text: "Blender", isCorrect: false },
      { text: "Unity", isCorrect: false },
      { text: "Tinkercad", isCorrect: true },
      { text: "Kaedim3D", isCorrect: false }
    ],
    timeLimit: 20
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "تقنية الواقع الافتراضي VR تعتمد على.......",
    options: [
      { text: "تصميم صور ثنائية الأبعاد", isCorrect: false },
      { text: "دمج عناصر رقمية مع البيئة الحقيقية", isCorrect: false },
      { text: "عرض نصوص ثابتة فوق الكاميرا", isCorrect: false },
      { text: "إنشاء بيئة رقمية كاملة منفصلة عن الواقع", isCorrect: true }
    ],
    timeLimit: 25
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "من الأدوات المستخدمة لإنشاء بيئات واقع افتراضي عبر المتصفح",
    options: [
      { text: "A-Frame", isCorrect: true },
      { text: "Adobe Aero", isCorrect: false },
      { text: "Spark AR", isCorrect: false },
      { text: "Tripo AI", isCorrect: false }
    ],
    timeLimit: 20
  },
  
  // أسئلة صح وخطأ
  {
    id: 6,
    type: "true-false",
    question: "يساعد التصميم ثلاثي الأبعاد في تبسيط المفاهيم العلمية للطلاب",
    options: [
      { text: "صح", isCorrect: true },
      { text: "خطأ", isCorrect: false }
    ],
    timeLimit: 15
  },
  {
    id: 7,
    type: "true-false",
    question: "الواقع المعزز يعزل المستخدم عن العالم الحقيقي بالكامل",
    options: [
      { text: "صح", isCorrect: false },
      { text: "خطأ", isCorrect: true }
    ],
    timeLimit: 15
  },
  {
    id: 8,
    type: "true-false",
    question: "الواقع الافتراضي يمكن استخدامه في التدريب على العمليات الجراحية بطريقة آمنة",
    options: [
      { text: "صح", isCorrect: true },
      { text: "خطأ", isCorrect: false }
    ],
    timeLimit: 15
  },
  {
    id: 9,
    type: "true-false",
    question: "الذكاء الاصطناعي لا يستطيع تقديم تغذية راجعة فورية للطلاب",
    options: [
      { text: "صح", isCorrect: false },
      { text: "خطأ", isCorrect: true }
    ],
    timeLimit: 15
  },
  {
    id: 10,
    type: "true-false",
    question: "منصة Canva تعتمد على مهارات متقدمة في التصميم ولا تناسب المبتدئين",
    options: [
      { text: "صح", isCorrect: false },
      { text: "خطأ", isCorrect: true }
    ],
    timeLimit: 15
  }
];