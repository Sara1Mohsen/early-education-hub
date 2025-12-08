// src/data/quizQuestionsByLevel.js

export const QUIZ_LEVELS = {
  beginner: 'مبتدئ',
  intermediate: 'متوسط',
  advanced: 'متقدم'
};

// كويز المبتدئين
export const BEGINNER_QUIZ = [
  {
    id: 1,
    question: "ما هو الهدف الأساسي من التصميم الجرافيكي؟",
    options: [
      { text: "إظهار الرسومات فقط", isCorrect: false },
      { text: "نقل الرسالة بوضوح وجاذبية", isCorrect: true },
      { text: "استخدام الألوان الزاهية فقط", isCorrect: false },
      { text: "إطالة الوقت في التصميم", isCorrect: false }
    ],
    timeLimit: 30
  },
  {
    id: 2,
    question: "ما هي الأداة الأساسية لرسم الأشكال في برامج التصميم؟",
    options: [
      { text: "الأدوات المتعددة", isCorrect: false },
      { text: "أداة القلم (Pen Tool)", isCorrect: true },
      { text: "أداة النص", isCorrect: false },
      { text: "أداة التعبئة", isCorrect: false }
    ],
    timeLimit: 30
  }
];

// كويز المتوسط
export const INTERMEDIATE_QUIZ = [
  {
    id: 1,
    question: "ما هو الفرق بين RGB وCMYK؟",
    options: [
      { text: "RGB للطباعة، CMYK للشاشة", isCorrect: false },
      { text: "RGB للشاشة، CMYK للطباعة", isCorrect: true },
      { text: "كلاهما نفس الاستخدام", isCorrect: false },
      { text: "CMYK أسرع من RGB", isCorrect: false }
    ],
    timeLimit: 45
  },
  {
    id: 2,
    question: "ما هي أهمية استخدام الشبكة (Grid) في التصميم؟",
    options: [
      { text: "لجعل التصميم أكثر تعقيدًا", isCorrect: false },
      { text: "لتحسين التناسق والتناسق البصري", isCorrect: true },
      { text: "لزيادة حجم الملف", isCorrect: false },
      { text: "لإخفاء الأخطاء", isCorrect: false }
    ],
    timeLimit: 45
  }
];

// كويز المتقدم
export const ADVANCED_QUIZ = [
  {
    id: 1,
    question: "ما هو مفهوم 'التصميم التفاعلي'؟",
    options: [
      { text: "تصميم صور ثابتة", isCorrect: false },
      { text: "تصميم يتفاعل مع المستخدم (مثل النقر، السحب)", isCorrect: true },
      { text: "تصميم بدون ألوان", isCorrect: false },
      { text: "تصميم يعمل على الهاتف فقط", isCorrect: false }
    ],
    timeLimit: 60
  },
  {
    id: 2,
    question: "ما هو الـ 'Layer' في تصميم الجرافيك؟",
    options: [
      { text: "وحدة لتخزين الصور فقط", isCorrect: false },
      { text: "طبقة منفصلة يمكن تحريرها بشكل مستقل", isCorrect: true },
      { text: "نوع من الألوان", isCorrect: false },
      { text: "مقياس الحجم", isCorrect: false }
    ],
    timeLimit: 60
  }
];