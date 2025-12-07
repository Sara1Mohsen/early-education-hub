// // الصور من داخل assets
import tripoAI from "../assets/T.png";
import splineAI from "../assets/SK.png";
import vectaryImage from "../assets/AK.png";
import aFrameImage from "../assets/AR.png";
import aeroImage from "../assets/AR.png";
// import sketchupImage from "../assets/SK.png";
import arkiImage from "../assets/AK.png";
import autodeskImage from "../assets/AN.png";
import blenderImage from "../assets/BL.png";

// // البيانات
export const programs = [
  {
    id: 3,
    chapter: "الفصل الأول",
    name: "Tripo AI",
    description: "توليد مجسمات 3D بالذكاء الاصطناعي",
    icon: "Cpu",
    accentColor: "#75c3ff",
    image: tripoAI, // ✅ صحيح
    level: "مبتدئ",
    duration: "أسبوعين"
  },
  {
    id: 4,
    chapter: "الفصل الأول",
    name: "Spline AI",
    description: "تصميم مشاهد 3D تفاعلية على الويب",
    icon: "Box",
    accentColor: "#75c3ff",
    image: splineAI, // ✅
    level: "مبتدئ",
    duration: "3 أسابيع"
  },
  {
    id: 5,
    chapter: "الفصل الأول",
    name: "Vectary",
    description: "تصميم مشهد 3D كامل أونلاين",
    icon: "Layers",
    accentColor: "#75c3ff",
    image: vectaryImage, // ✅
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
    image: aFrameImage, // ✅
    level: "متوسط",
    duration: "4 أسابيع"
  },
  {
    id: 7,
    chapter: "الفصل الرابع",
    name: "Adobe Aero",
    description: "عرض موديلات 3D في الواقع المعزز AR",
    icon: "Eye",
    accentColor: "#75c3ff",
    image: aeroImage, // ✅
    level: "متوسط",
    duration: "5 أسابيع"
  },
  {
    id: 8,
    chapter: "الفصل الرابع",
    name: "SketchUp",
    description: "تصميم معماري ونماذج 3D احترافية",
    icon: "Building",
    accentColor: "#75c3ff",
    image: tripoAI, // ✅
    level: "متقدم",
    duration: "6 أسابيع"
  },
  {
    id: 9,
    chapter: "الفصل الخامس",
    name: "Arki",
    description: "تصميم معماري 3D أونلاين احترافي",
    icon: "Building",
    accentColor: "#75c3ff",
    image: arkiImage, // ✅
    level: "احترافي",
    duration: "8 أسابيع"
  },
  {
    id: 10,
    chapter: "الفصل الخامس",
    name: "Autodesk (3ds Max/Maya)",
    description: "نمذجة وأنيميشن احترافي",
    icon: "Clapperboard",
    accentColor: "#75c3ff",
    image: autodeskImage, // ✅
    level: "متقدم",
    duration: "10 أسابيع"
  },
  {
    id: 11,
    chapter: "الفصل الخامس",
    name: "Blender",
    description: "أقوى برنامج مفتوح المصدر للتصميم 3D",
    icon: "PackageOpen",
    accentColor: "#75c3ff",
    image: blenderImage, // ✅
    level: "متقدم",
    duration: "12 أسبوع"
  }
];