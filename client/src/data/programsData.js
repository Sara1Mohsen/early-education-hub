//  الصور من داخل assets
// import vectaryImage from "../assets/Vectary_3D_Design_Workspace.png";// import canvaImage from "../../assets/Canva_3D_Design_Interface.png";
// import tripoAI from "../../assets/Tripo_AI_3D_Model_Interface.png";
// import splineAI from "../../assets/Spline_AI_Interactive_3D_Scene.png";
// import vectaryImage from "../../assets/Vectary_3D_Design_Workspace.png";
// import aFrameImage from "../../assets/A_Frame_3D_Scene.png";
// import aeroImage from "../../assets/Aero_AR_Dinosaur_Desk.png";
// import sketchupImage from "../../assets/SketchUp_Architectural_Modeling_Banner.png";
// import arkiImage from "../../assets/Arki_AR_Architectural_Visualization.png";
// import autodeskImage from "../../assets/Autodesk_3dsMax_Maya_Interface.png";
// import blenderImage from "../../assets/Blender_SciFi_Spaceship_Sculpting.png";


//  البيانات
export const programs = [
  {
    id: 1,
    chapter: "الفصل الأول",
    name: "مقدمة في التصميم ثلاثي الأبعاد",
    description: "محتوى نظري شامل عن أساسيات التصميم 3D",
    icon: "BookOpen",
    accentColor: "#9579ff",
    image: '../assets/Vectary_3D_Design_Workspace.png',
    level: "نظري",
    duration: "أسبوعين"
  },
  {
    id: 2,
    chapter: "الفصل الثاني",
    name: "Canva",
    description: "تصميم رسومات ومجسمات بسيطة 3D",
    icon: "Wand2",
    accentColor: "#75c3ff",
    // image: canvaImage,
    level: "مبتدئ",
    duration: "3 أسابيع"
  },
  {
    id: 3,
    chapter: "الفصل الثاني",
    name: "Tripo AI",
    description: "توليد مجسمات 3D بالذكاء الاصطناعي",
    icon: "Cpu",
    accentColor: "#8fb28b",
    // image: tripoAI,
    level: "مبتدئ",
    duration: "أسبوعين"
  },
  {
    id: 4,
    chapter: "الفصل الثاني",
    name: "Spline AI",
    description: "تصميم مشاهد 3D تفاعلية على الويب",
    icon: "Box",
    accentColor: "#ff9087",
    // image: splineAI,
    level: "مبتدئ",
    duration: "3 أسابيع"
  },
  {
    id: 5,
    chapter: "الفصل الثالث",
    name: "Vectary",
    description: "تصميم مشهد 3D كامل أونلاين",
    icon: "Layers",
    accentColor: "#fcd34d",
    // image: vectaryImage,
    level: "متوسط",
    duration: "4 أسابيع"
  },
  {
    id: 6,
    chapter: "الفصل الثالث",
    name: "A-Frame",
    description: "إطار عمل HTML لعمل مشاهد VR/3D",
    icon: "Code",
    accentColor: "#75c3ff",
    // image: aFrameImage,
    level: "متوسط",
    duration: "4 أسابيع"
  },
  {
    id: 7,
    chapter: "الفصل الرابع",
    name: "Adobe Aero",
    description: "عرض موديلات 3D في الواقع المعزز AR",
    icon: "Eye",
    accentColor: "#c6b6ff",
    // image: aeroImage, // ✔ تصحيح الامتداد العطلان
    level: "متوسط - AR",
    duration: "5 أسابيع"
  },
  {
    id: 8,
    chapter: "الفصل الرابع",
    name: "SketchUp",
    description: "تصميم معماري ونماذج 3D احترافية",
    icon: "Building",
    accentColor: "#ff9087",
    // image: sketchupImage,
    level: "متوسط",
    duration: "6 أسابيع"
  },
  {
    id: 9,
    chapter: "الفصل الخامس",
    name: "Arki",
    description: "تصميم معماري 3D أونلاين احترافي",
    icon: "Building",
    accentColor: "#fcd34d",
    // image: arkiImage,
    level: "احترافي",
    duration: "8 أسابيع"
  },
  {
    id: 10,
    chapter: "الفصل الخامس",
    name: "Autodesk (3ds Max/Maya)",
    description: "نمذجة وأنيميشن احترافي",
    icon: "Clapperboard",
    accentColor: "#5b9eff",
    // image: autodeskImage,
    level: "احترافي",
    duration: "10 أسابيع"
  },
  {
    id: 11,
    chapter: "الفصل الخامس",
    name: "Blender",
    description: "أقوى برنامج مفتوح المصدر للتصميم 3D",
    icon: "PackageOpen",
    accentColor: "#8fb28b",
    // image: blenderImage,
    level: "احترافي",
    duration: "12 أسبوع"
  }
];
