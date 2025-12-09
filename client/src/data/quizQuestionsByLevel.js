// src/data/quizByLevel.js

export const QUIZ_LEVELS = {
  beginner: 'مبتدئ',
  intermediate: 'متوسط',
  advanced: 'متقدم'
};

// ==================== مستوى مبتدئ: Spline AI ====================
export const BEGINNER_QUIZ = [
  {
    id: 1,
    question: "ما هو نوع الملفات التي يمكن تصديرها من Spline AI؟",
    options: [
      { text: "PNG فقط", isCorrect: false },
      { text: "OBJ وGLTF وPNG", isCorrect: true },
      { text: "DOCX", isCorrect: false },
      { text: "PDF", isCorrect: false }
    ],
    timeLimit: 25
  },
  {
    id: 2,
    question: "أي من التالي يُستخدم لتغيير خصائص العنصر في Spline AI؟",
    options: [
      { text: "Timeline", isCorrect: false },
      { text: "Inspector Panel", isCorrect: true },
      { text: "File Menu", isCorrect: false },
      { text: "Layer Manager", isCorrect: false }
    ],
    timeLimit: 25
  },
  {
    id: 3,
    question: "أي من المميزات التالية متاحة في Spline AI؟",
    options: [
      { text: "إنشاء مشاهد ثلاثية الأبعاد تفاعلية", isCorrect: true },
      { text: "تصميم عروض بوربوينت فقط", isCorrect: false },
      { text: "تحرير الصور الثابتة فقط", isCorrect: false },
      { text: "تسجيل الصوت", isCorrect: false }
    ],
    timeLimit: 25
  },
  {
    id: 4,
    question: "ما هي أداة إنشاء النماذج في Spline AI؟",
    options: [
      { text: "AI Model Generator", isCorrect: true },
      { text: "Text-to-Image", isCorrect: false },
      { text: "Video Editor", isCorrect: false },
      { text: "Audio Mixer", isCorrect: false }
    ],
    timeLimit: 25
  }
];

// ==================== مستوى متوسط: Tripo AI + A-Frame ====================
export const INTERMEDIATE_QUIZ = [
  {
    id: 5,
    question: "أي من التالي يُستخدم لإضافة تفاعل داخل الجولة الافتراضية في Tripo AI؟",
    options: [
      { text: "Layers Panel", isCorrect: false },
      { text: "Hotspots", isCorrect: true },
      { text: "Timeline", isCorrect: false },
      { text: "Inspector Panel", isCorrect: false }
    ],
    timeLimit: 30
  },
  {
    id: 6,
    question: "أي من الملفات يمكن تصدير الجولة الافتراضية إليها؟",
    options: [
      { text: "PDF", isCorrect: false },
      { text: "Web Link", isCorrect: true },
      { text: "DOCX", isCorrect: false },
      { text: "JPEG", isCorrect: false }
    ],
    timeLimit: 30
  },
  {
    id: 7,
    question: "يمكن استخدام A-Frame لإنشاء تجارب الواقع الافتراضي (VR) مباشرة على متصفح الويب.",
    options: [
      { text: "صح", isCorrect: true },
      { text: "غلط", isCorrect: false }
    ],
    timeLimit: 20,
    isTrueFalse: true // ← هذا مهم للتعامل مع السؤال الثنائي
  },
  {
    id: 8,
    question: "A-Frame يعتمد على لغة HTML ويدمج عناصر ثلاثية الأبعاد باستخدام مكونات (Components).",
    options: [
      { text: "صح", isCorrect: true },
      { text: "غلط", isCorrect: false }
    ],
    timeLimit: 20,
    isTrueFalse: true
  }
];

// ==================== مستوى متقدم: Vectary ====================
export const ADVANCED_QUIZ = [
  {
    id: 9,
    question: "ما نوع الملفات التي يمكن تصديرها من Vectary؟",
    options: [
      { text: "DOCX وPDF", isCorrect: false },
      { text: "OBJ وGLTF وSTL", isCorrect: true },
      { text: "MP3 وWAV", isCorrect: false },
      { text: "TXT", isCorrect: false }
    ],
    timeLimit: 30
  },
  {
    id: 10,
    question: "أي من التالي يستخدم لتعديل خصائص الشكل في Vectary؟",
    options: [
      { text: "Timeline", isCorrect: false },
      { text: "Inspector Panel", isCorrect: true },
      { text: "Layer Panel", isCorrect: false },
      { text: "Color Picker فقط", isCorrect: false }
    ],
    timeLimit: 30
  },
  {
    id: 11,
    question: "ما الميزة الأساسية لبرنامج Vectary؟",
    options: [
      { text: "تصميم نماذج ثلاثية الأبعاد تفاعلية على الإنترنت", isCorrect: true },
      { text: "تحرير ملفات الفيديو", isCorrect: false },
      { text: "إنشاء عروض بوربوينت", isCorrect: false },
      { text: "تحرير الصور الثابتة فقط", isCorrect: false }
    ],
    timeLimit: 30
  },
  {
    id: 12,
    question: "أي من التالي يتيح إضافة مواد وإضاءة إلى النماذج في Vectary؟",
    options: [
      { text: "Material Editor", isCorrect: true },
      { text: "Text Editor", isCorrect: false },
      { text: "Timeline", isCorrect: false },
      { text: "Export Panel", isCorrect: false }
    ],
    timeLimit: 30
  },
  {
    id: 13,
    question: "كيف يمكن مشاركة التصميم النهائي من Vectary؟",
    options: [
      { text: "عبر رابط ويب تفاعلي أو تصدير الملف ثلاثي الأبعاد", isCorrect: true },
      { text: "فقط طباعته كصورة PNG", isCorrect: false },
      { text: "لا يمكن مشاركته إلا داخل البرنامج", isCorrect: false },
      { text: "تصديره كملف Word", isCorrect: false }
    ],
    timeLimit: 30
  },
  {
    id: 14,
    question: "يمكن إدراج نماذج ثلاثية الأبعاد بصيغة GLTF/GLB في مشاهد A-Frame.",
    options: [
      { text: "صح", isCorrect: true },
      { text: "غلط", isCorrect: false }
    ],
    timeLimit: 20,
    isTrueFalse: true
  },
  {
    id: 15,
    question: "A-Frame يحتاج إلى برنامج خارجي لتشغيل المشاهد، ولا يمكن عرضها على أي متصفح حديث.",
    options: [
      { text: "صح", isCorrect: false },
      { text: "غلط", isCorrect: true }
    ],
    timeLimit: 20,
    isTrueFalse: true
  }
];