// src/data/programContent.js
import Picture1 from '../assets/contentImages/Adobe/Picture1.jpg';
import Picture2 from '../assets/contentImages/Adobe/Picture2.jpg';
import Picture3 from '../assets/contentImages/Adobe/Picture3.jpg';
import Picture4 from '../assets/contentImages/Adobe/Picture4.jpg';
import Picture5 from '../assets/contentImages/Adobe/Picture5.jpg';
import Picture6 from '../assets/contentImages/Adobe/Picture6.jpg';
import Picture7 from '../assets/contentImages/Adobe/Picture7.jpg';
import Picture8 from '../assets/contentImages/Adobe/Picture8.jpg';
////
import Picture1s from '../assets/contentImages/Spline/Picture1s.jpg';
import Picture2s from '../assets/contentImages/Spline/Picture2s.jpg';
import Picture3s from '../assets/contentImages/Spline/Picture3s.jpg';
import Picture4s from '../assets/contentImages/Spline/Picture4s.jpg';
import Picture5s from '../assets/contentImages/Spline/Picture5s.jpg';
import Picture6s from '../assets/contentImages/Spline/Picture6s.jpg';
import Picture7s from '../assets/contentImages/Spline/Picture7s.jpg';
import Picture8s from '../assets/contentImages/Spline/Picture8s.jpg';
////
import Picture1t from '../assets/contentImages/Tripo/Picture1.png';
// import Picture2t from '../assets/contentImages/Tripo/Picture2.jpg';
// import Picture3t from '../assets/contentImages/Tripo/Picture3.jpg';
// import Picture4t from '../assets/contentImages/Tripo/Picture4.jpg';
// import Picture5t from '../assets/contentImages/Tripo/Picture5.jpg';
// import Picture6t from '../assets/contentImages/Tripo/Picture6.jpg';
// import Picture7t from '../assets/contentImages/Tripo/Picture7.jpg';
// import Picture8t from '../assets/contentImages/Tripo/Picture8.jpg';
export const PROGRAM_CONTENT = {
  "Blender": {
    sections: [
      {
        title: "تنزيل البرنامج",
        content: "أولاً تنزيل البرنامج نضغط هنا: Download Aero (Desktop) – Adobe HelpX",
        hasImage: true,
        imagePlaceholder: "🖼️ صورة صفحة التحميل",
        imageUrl: Picture1
      },
      {
        title: "الواجهة الرئيسية للبرنامج",
        content: "الواجهة الرئيسية للبرنامج تتكون من 3 تبويبات رئيسية",
        hasImage: true,
        imagePlaceholder: "📸 صورة الواجهة الرئيسية",
        imageUrl: Picture2
      },
      {
        title: "🔝 أولاً: الشريط العلوي",
        content: `1. شعار Adobe (أقصى اليسار) → بيرجعك للصفحة الرئيسية لو ضغطت عليه.

2. شريط البحث (Search Adobe) → تقدر تكتب اسم برنامج أو أداة من Adobe وتبحث عنها.

3. Plans & products (أقصى اليمين) → بيعرض خطة الاشتراك بتاعتك، ممكن تدخل منه لتغيير الباقة أو معرفة تفاصيل الدفع.

4. أيقونة الحساب (صورتك أو أول حرف من اسمك) → تفتح منها إعدادات الحساب أو تسجل خروج.

5. أيقونة الجرس → فيها إشعارات Adobe.

6. أيقونة التطبيقات (تحتها شريط علوي صغير "Desktop / Mobile / Web")
   • Desktop → البرامج اللي بتتسطب على الكمبيوتر.
   • Mobile → تطبيقات للموبايل.
   • Web → الأدوات اللي بتشتغل من المتصفح مباشرة.`,
        hasImage: true,
        imageUrl: Picture3
      },
      {
        title: "🧭 ثانياً: الشريط الجانبي",
        content: `ده فيه أقسام للتنقل بين صفحات Adobe المختلفة:

1. Home → الصفحة الرئيسية لحسابك.
2. Apps → القسم اللي انت فيه حاليًا (لإدارة التطبيقات).
3. Files → ملفاتك المحفوظة على السحابة الخاصة بـ Adobe.
4. Learn → دروس تعليمية وموارد للتعلم.
5. Discover → محتوى من مستخدمين آخرين أو أفكار إبداعية.

وتحتهم فيه فئة تانية اسمها Categories (الفئات):
• Photo → برامج تعديل الصور (زي Photoshop وLightroom).
• Firefly and Generative AI → أدوات الذكاء الاصطناعي الجديدة من Adobe.
• Graphic design → برامج التصميم الجرافيكي.
• Video → برامج المونتاج (زي Premiere Pro).
• Illustration → للرسم والتوضيح.
• 3D and AR → للتصميم الثلاثي الأبعاد والواقع المعزز.
• Acrobat and PDF → لملفات PDF.

وفي آخر الشريط Resource Links:
• Stock → مكتبة صور وفيديوهات جاهزة.
• Fonts → خطوط Adobe.
• Tutorials → دروس تعليمية.
• Portfolio → إنشاء معرض أعمالك.
• Behance → شبكة المصممين التابعة لـ Adobe.
• Support Community → الدعم والمجتمع.`,
        hasImage: true,
        imagePlaceholder: "📸 صورة الشريط الجانبي",
        imageUrl: Picture4
      },
      {
        title: "📦 ثالثاً: الجزء الرئيسي",
        content: `العنوان: "Available in your plan" → يعني التطبيقات المتاحة في خطتك الحالية.

وبيظهر فيها كل برنامج في بطاقة (Card) فيها:
• شعار البرنامج (زي Ps – Ai – Pr ... إلخ).
• وصف بسيط تحت الاسم.
• زر Install لتثبيت البرنامج.
• أحيانًا فيه أيقونات صغيرة فوق بتوضح لو متاح للويب أو الموبايل كمان.

وفي الأسفل بيظهر شريط أزرق مكتوب عليه:
"Checking for installed apps…"
→ ده معناه إن النظام بيتحقق إذا كنت مثبت أي من التطبيقات دي على جهازك بالفعل.`,
        hasImage: true,
        imagePlaceholder: "📸 صورة التطبيقات المتاحة",
        imageUrl: Picture5
      },
      {
        title: "الصفحة الرئيسية عند إنشاء مشروع",
        content: "الصفحة الرئيسية للبرنامج عند إنشاء مشروع تتكون من 4 تبويبات",
        hasImage: true,
        imagePlaceholder: "📸 صورة واجهة المشروع",
        imageUrl: Picture3

      },
      {
        title: "أولاً: الشريط العلوي للمشروع",
        content: `1. File → فيه أوامر عامة زي:
   • New (مشروع جديد)
   • Open (فتح مشروع)
   • Save (حفظ)
   • Export (تصدير المشهد)
   • Import (إضافة ملفات أو عناصر من بره البرنامج)

2. Edit → أدوات التعديل:
   • Undo / Redo (تراجع أو إعادة)
   • Copy / Paste (نسخ أو لصق)
   • Duplicate (تكرار العناصر)
   • Delete (حذف عنصر)

3. Object → قائمة خاصة بالعناصر الثلاثية الأبعاد:
   • Group / Ungroup (تجميع أو فك تجميع العناصر)
   • Align (محاذاة)
   • Transform (تدوير أو تكبير وتصغير)

4. Camera → أدوات التحكم في الكاميرا داخل المشهد:
   • Reset view (إعادة ضبط العرض)
   • Perspective / Orthographic (تغيير زاوية العرض)

5. Help → للدخول على مركز المساعدة أو الدروس التعليمية من Adobe.

6. Share (زر أزرق في أقصى اليمين) → لتصدير أو مشاركة المشروع (مثلاً لينك AR أو ملف).`,
        hasImage: true,
        imagePlaceholder: "📸 صورة القوائم العلوية",
        imageUrl: Picture6
      },
      {
        title: "🧭 ثانياً: الشريط الجانبي الأيسر (Sidebar)",
        content: `ده الجزء الخاص بإضافة العناصر (Assets) إلى المشهد.

العنوان: Starter Assets
وده معناه إن فيه مكتبة جاهزة من العناصر اللي تقدر تستخدمها.

تحتها موجودة فئات (Categories) تقدر تفتح كل وحدة منها وتختار منها عناصر 3D أو صور:

1. Abstract shapes → أشكال هندسية وفنية.
2. Animation → عناصر متحركة.
3. Directable characters → شخصيات يمكن تحريكها أو توجيهها.
4. Interior design → أثاث وغرف وتصميمات داخلية.
5. Layered illustrations → رسومات طبقية أو متعددة الطبقات.
6. Letters & symbols – ornate → حروف وزخارف مزخرفة.
7. Letters & symbols – simple → حروف ورموز بسيطة.
8. Nature & plants → نباتات وأشجار وعناصر طبيعية.
9. Origami forest pack → عناصر ورقية على شكل غابة (ستايل أورغامي).
10. Space exploration pack → عناصر فضائية (كواكب، صواريخ…).
11. Transportation toys → وسائل نقل صغيرة أو ألعاب.

وفي الأعلى تحت العنوان Filter By → تقدر تبحث أو تصفي العناصر بنوعها.`,
        hasImage: true,
        imagePlaceholder: "📸 صورة مكتبة العناصر",
        imageUrl: Picture7
      },
      {
        title: "⚙️ ثالثاً: منطقة العمل (المنطقة الوسطى)",
        content: `دي هي منطقة العمل أو المشهد (Scene)

فيها شبكة ثلاثية الأبعاد (Grid) بتوضح المحاور X, Y, Z.
الخطوط بتوضح الأرضية، وعند المركز فيه دائرة صغيرة (Anchor Point).

دي المنطقة اللي بتضيف فيها المجسمات أو الصور وبتتحكم في مكانها وحجمها.`,
        hasImage: true,
        imagePlaceholder: "📸 صورة منطقة العمل",
        imageUrl: Picture8
      },
      {
        title: "📋 رابعاً: الجانب الأيمن (Panel)",
        content: `فيه 3 أجزاء رئيسية:

1. Scene
هنا بتشوف كل العناصر الموجودة في المشهد.
حالياً ظاهر عنصر واحد: Horizontal Surface (سطح أفقي).
هو المكان اللي هيتثبت عليه النموذج أو العنصر في الواقع المعزز.

2. Actions
فيها أدوات للتعامل مع العناصر:
🗑️ حذف العنصر
📄 نسخ
📥 استيراد
🔄 تدوير
⚖️ محاذاة
🔍 معاينة
(الأيقونات بتختلف حسب العنصر اللي محدده).

3. Properties (الخصائص)
هنا بتتحكم في خصائص العنصر المحدد.
مثلًا مكتوب:
Anchor Type: نوع التثبيت، وفيها خيار "Horizontal surface" → يعني السطح الأفقي اللي يثبت عليه العنصر لما يتم عرضه في الواقع المعزز.
Perspective → رؤية واقعية ثلاثية الأبعاد.`,
        // hasImage: true,
        // imagePlaceholder: "📸 صورة لوحة الخصائص"
      }
    ]
  },
  " Adobe Aero": {
    sections: [
      {
        title: "تنزيل البرنامج",
        content: "أولاً تنزيل البرنامج نضغط هنا: Download Aero (Desktop) – Adobe HelpX",
        hasImage: true,
        imagePlaceholder: "🖼️ صورة صفحة التحميل",
        imageUrl: "/assets/contentImages/Adobe/Picture1.jpg"
      },
      {
        title: "الواجهة الرئيسية للبرنامج",
        content: "الواجهة الرئيسية للبرنامج تتكون من 3 تبويبات رئيسية:",
        hasImage: true,
        imagePlaceholder: "📸 صورة الواجهة الرئيسية",
        // imageUrl: "/images/adobe-aero/main-interface.png"
      },
      {
        title: "🔝 أولاً: الشريط العلوي",
        content: `1. شعار Adobe (أقصى اليسار) → بيرجعك للصفحة الرئيسية لو ضغطت عليه.

2. شريط البحث (Search Adobe) → تقدر تكتب اسم برنامج أو أداة من Adobe وتبحث عنها.

3. Plans & products (أقصى اليمين) → بيعرض خطة الاشتراك بتاعتك.

4. أيقونة الحساب (صورتك أو أول حرف من اسمك) → تفتح منها إعدادات الحساب.

5. أيقونة الجرس → فيها إشعارات Adobe.

6. أيقونة التطبيقات (Desktop / Mobile / Web)`,
        hasImage: true,
        imagePlaceholder: "📸 صورة الشريط العلوي",
        imageUrl: "/images/adobe-aero/top-bar.png"
      },
      {
        title: "🧭 ثانياً: الشريط الجانبي",
        content: `الشريط الجانبي يحتوي على أقسام للتنقل:

1. Home → الصفحة الرئيسية لحسابك
2. Apps → إدارة التطبيقات
3. Files → ملفاتك المحفوظة على السحابة
4. Learn → دروس تعليمية
5. Discover → محتوى من مستخدمين آخرين

Categories (الفئات):
• Photo → برامج تعديل الصور
• Graphic design → برامج التصميم الجرافيكي
• Video → برامج المونتاج
• 3D and AR → للتصميم الثلاثي الأبعاد`,
        hasImage: true,
        imagePlaceholder: "📸 صورة الشريط الجانبي",
        imageUrl: "/images/adobe-aero/sidebar.png"
      },
      {
        title: "📦 ثالثاً: الجزء الرئيسي",
        content: `العنوان: "Available in your plan" → التطبيقات المتاحة في خطتك

كل برنامج يظهر في بطاقة (Card) تحتوي على:
• شعار البرنامج (Ps – Ai – Pr)
• وصف بسيط
• زر Install لتثبيت البرنامج`,
        hasImage: true,
        imagePlaceholder: "📸 صورة التطبيقات المتاحة",
        imageUrl: "/images/adobe-aero/main-content.png"
      },
      {
        title: "الصفحة الرئيسية عند إنشاء مشروع",
        content: "الصفحة الرئيسية للبرنامج عند إنشاء مشروع تتكون من 4 تبويبات:",
        hasImage: true,
        imagePlaceholder: "📸 صورة واجهة المشروع",
        imageUrl: "/images/adobe-aero/project-interface.png"
      },
      {
        title: "أولاً: الشريط العلوي للمشروع",
        content: `1. File → New, Open, Save, Export, Import
2. Edit → Undo/Redo, Copy/Paste, Duplicate, Delete
3. Object → Group, Align, Transform
4. Camera → Reset view, Perspective/Orthographic
5. Help → مركز المساعدة والدروس
6. Share → تصدير أو مشاركة المشروع`,
        hasImage: true,
        imagePlaceholder: "📸 صورة القوائم العلوية",
        imageUrl: "/images/adobe-aero/top-menu.png"
      },
      {
        title: "🧭 ثانياً: الشريط الجانبي الأيسر",
        content: `Starter Assets - مكتبة العناصر الجاهزة:

1. Abstract shapes → أشكال هندسية
2. Animation → عناصر متحركة
3. Directable characters → شخصيات متحركة
4. Interior design → أثاث وتصميمات داخلية
5. Nature & plants → نباتات وعناصر طبيعية
6. Space exploration pack → عناصر فضائية
7. Transportation toys → وسائل نقل`,
        hasImage: true,
        imagePlaceholder: "📸 صورة مكتبة العناصر",
        imageUrl: "/images/adobe-aero/assets-library.png"
      },
      {
        title: "⚙️ ثالثاً: منطقة العمل",
        content: `منطقة العمل أو المشهد (Scene):

• شبكة ثلاثية الأبعاد (Grid) توضح المحاور X, Y, Z
• الخطوط توضح الأرضية
• دائرة صغيرة في المركز (Anchor Point)
• هنا تضيف المجسمات والصور وتتحكم في مكانها وحجمها`,
        hasImage: true,
        imagePlaceholder: "📸 صورة منطقة العمل",
        imageUrl: "/images/adobe-aero/workspace.png"
      },
      {
        title: "📋 رابعاً: الجانب الأيمن",
        content: `Panel الأيمن يحتوي على:

1. Scene → كل العناصر الموجودة في المشهد
   • Horizontal Surface (سطح أفقي)

2. Actions → أدوات التعامل مع العناصر:
   • حذف، نسخ، استيراد
   • تدوير، محاذاة، معاينة

3. Properties → خصائص العنصر المحدد:
   • Anchor Type
   • Perspective → رؤية واقعية ثلاثية الأبعاد`,
        hasImage: true,
        imagePlaceholder: "📸 صورة لوحة الخصائص",
        imageUrl: "/images/adobe-aero/properties-panel.png"
      }
    ]
  },
  "SketchUp": {
    sections: [
      {
        title: "مقدمة في استخدام SketchUp",
        content: "في هذا القسم، ستتعرف على واجهة برنامج SketchUp، وأدواته الأساسية. سنتعرف على كيفية فتح المشروع، واستخدام الشريط العلوي، والعمل في بيئة ثلاثية الأبعاد لتصميم نماذج هندسية وعمارية.",
        hasImage: true,
        imageUrl: "/images/sketchup/overview.png",
        imagePlaceholder: "واجهة البرنامج SketchUp"
      },
      {
        title: "أدوات الرسم والنمذجة",
        content: "ستتعلم كيفية إنشاء الأشكال الهندسية مثل المستطيلات، الدوائر، والخطوط. كما سنتعامل مع أدوات السحب والدفع (Push & Pull) لإنشاء نماذج ثلاثية الأبعاد من أشكال ثنائية الأبعاد.",
        hasImage: true,
        imageUrl: "/images/sketchup/drawing-tools.png",
        imagePlaceholder: "أدوات الرسم في SketchUp"
      },
      {
        title: "الطبقات والمكونات",
        content: "ستتعلم كيفية تنظيم العمل باستخدام الطبقات (Layers) والمكونات (Components). سنتعامل مع إدارة المجموعات، وإعادة الاستخدام، وتنظيم المشهد بطريقة احترافية.",
        hasImage: true,
        imageUrl: "/images/sketchup/layers-components.png",
        imagePlaceholder: "إدارة الطبقات والمكونات"
      },
      {
        title: "الإضاءة والظلال",
        content: "ستتعلم كيفية تفعيل الظلال، وضبط زاوية الشمس، وعرض النموذج في ظروف إضاءة مختلفة. سنتعامل مع أدوات التحكم في الظلال والانعكاسات.",
        hasImage: true,
        imageUrl: "/images/sketchup/shadows-lighting.png",
        imagePlaceholder: "إضاءة وظلال في SketchUp"
      },
      {
        title: "التصدير والاستيراد",
        content: "ستتعلم كيفية تصدير النموذج بصيغ متعددة مثل SKP, DWG, DXF, STL. كما سنتعامل مع استيراد ملفات CAD ودمجها في مشروعك.",
        hasImage: true,
        imageUrl: "/images/sketchup/export-import.png",
        imagePlaceholder: "تصدير واستيراد ملفات"
      },
      {
        title: "استخدام الإضافات (Plugins)",
        content: "ستتعلم كيفية استخدام إضافات مثل V-Ray, Enscape, أو Style Builder لتحسين جودة العرض، وإضافة خامات واقعية، وتحويل النماذج إلى عروض تقديمية احترافية.",
        hasImage: true,
        imageUrl: "/images/sketchup/plugins.png",
        imagePlaceholder: "إضافة V-Ray للنماذج"
      },
      {
        title: "العرض التفاعلي والمشي داخل النموذج",
        content: "ستتعلم كيفية استخدام أداة Walk Tool لتجربة المساحات كأنك داخلها. كما سنتعامل مع أدوات Orbit, Pan, وZoom لرؤية النموذج من جميع الزوايا.",
        hasImage: true,
        imageUrl: "/images/sketchup/walk-pan-orbit.png",
        imagePlaceholder: "العرض التفاعلي في SketchUp"
      },
      {
        title: "التكامل مع Google Earth",
        content: "ستتعلم كيفية ربط النموذج مع Google Earth لعرضه في الموقع الحقيقي. كما سنتعامل مع ميزة Match Photo لبناء نموذج ثلاثي الأبعاد من صورة واقعية.",
        hasImage: true,
        imageUrl: "/images/sketchup/google-earth.png",
        imagePlaceholder: "التكامل مع Google Earth"
      }
    ]
  },
    "Spline AI": {
    sections: [
      {
        title: "مقدمة في استخدام Spline AI",
        content: "في هذا القسم، ستتعرف على واجهة برنامج Spline AI، وأدواته الأساسية. سنتعرف على كيفية تسجيل الدخول، واستخدام الشريط العلوي، والشريط الجانبي، ومنطقة التصميم الرئيسية.",
        hasImage: true,
        imageUrl: Picture1s,
        imagePlaceholder: "واجهة البرنامج Spline AI"
      },
      {
        title: "أدوات التصميم الثلاثي الأبعاد",
        content: "ستتعلم كيفية إنشاء عناصر ثلاثية الأبعاد مثل Box, Sphere, Cylinder. سنتعامل مع أدوات التحريك (Transform)، والتحريك باستخدام Keyframes، وتعديل الحجم والاتجاه بدقة.",
        hasImage: true,
        imageUrl: Picture2s,
        imagePlaceholder: "أدوات التصميم ثلاثي الأبعاد"
      },
      {
        title: "إضافة الخامات والإضاءة",
        content: "ستتعلم كيفية تطبيق الخامات (Materials) على الكائنات، وضبط اللمعة، والشفافية. كما سنتعامل مع أنواع الإضاءة المختلفة: Ambient, Directional, Point، وإضافة ظلال ناعمة وتأثيرات بصرية.",
        hasImage: true,
        imageUrl: Picture3s,
        imagePlaceholder: "إضاءة وخامات في مشهد ثلاثي الأبعاد"
      },
      {
        title: "التحريك والكاميرات",
        content: "ستتعلم كيفية تحريك الكاميرا داخل المشهد، وإضافة Keyframes للحركة، وضبط سرعة الحركة. سنتعامل مع رؤية Orthographic وPerspective لاختيار أفضل منظور للعرض.",
        hasImage: true,
        imageUrl: Picture4s,
        imagePlaceholder: "تحريك الكاميرا في المشهد"
      },
      {
        title: "التصدير والنشر",
        content: "ستتعلم كيفية تصدير المشروع كصورة (PNG/JPG)، أو كـ WebGL لاستخدامه في الويب. كما سنتعلم كيفية مشاركة المشروع عبر رابط مباشر، أو دمجها في مواقع مثل Notion أو Webflow.",
        hasImage: true,
        imageUrl: Picture5s,
        imagePlaceholder: "تصدير ومشاركة المشروع"
      },
      {
        title: "التصميم التفاعلي والواقع المعزز",
        content: "ستتعلم كيفية إضافة تفاعلات (Interactions) باستخدام أحداث الفأرة أو اللمس. سنتعامل مع تقنيات التفاعلية، وتوفير مشاهد VR/AR بسيطة باستخدام Spline Mirror.",
        hasImage: true,
        imageUrl: Picture6s,
        imagePlaceholder: "تصميم تفاعلي في الواقع المعزز"
      },
      {
        title: "استخدام الذكاء الاصطناعي في التصميم",
        content: "ستتعلم كيفية استخدام خاصية AI 3D Generation لتوليد مجسمات ثلاثية الأبعاد مباشرةً من وصف نصي (Prompt). سنتعامل مع تحسين النتائج، وتعديل النماذج التي يولدتها الذكاء الاصطناعي.",
        hasImage: true,
        imageUrl: Picture7s,
        imagePlaceholder: "استخدام الذكاء الاصطناعي لتوليد نموذج 3D"
      },
      {
        title: "تحليل التصميم والتقييم المهني",
        content: "ستتعلم كيفية تحليل جودة التصميم من حيث توزيع الإضاءة، الألوان، والأداء. سنتعامل مع تحسين الأداء (Performance Optimization)، وتحسين تجربة المستخدم في المشهد.",
        hasImage: true,
        imageUrl: Picture8s,
        imagePlaceholder: "تحليل جودة التصميم"
      }
    ]
  },
    "Tripo AI": {
    sections: [
      {
        title: "مقدمة في استخدام Tripo AI",
        content: "في هذا القسم، ستتعرف على واجهة برنامج Tripo AI، وأدواته الأساسية. سنتعرف على كيفية تسجيل الدخول، واستخدام الشريط العلوي، والشريط الجانبي، ومنطقة التصميم الرئيسية. سنتعلم كيف تُولَّد نماذج ثلاثية الأبعاد من أوصاف نصية أو صور ثنائية الأبعاد.",
        hasImage: true,
        imageUrl: "/images/tripo/overview.png",
        imagePlaceholder: "واجهة البرنامج Tripo AI"
      },
      {
        title: "أدوات التوليد الثلاثي الأبعاد",
        content: "ستتعلم كيفية استخدام خاصية One-Click لتكوين نموذج كامل جاهزًا للنشر، وكذلك استخدام وضع Build & Refine لتعديل التفاصيل قبل تطبيق الخامات. سنتعامل مع أدوات مثل Image and Text to 3D، وضبط الإعدادات حسب الحاجة.",
        hasImage: true,
        imageUrl: "/images/tripo/generation.png",
        imagePlaceholder: "توليد نموذج ثلاثي الأبعاد من نص أو صورة"
      },
      {
        title: "إعادة التشكيل والتقليل (Retopology)",
        content: "ستتعلم كيفية إعادة تنظيم شبكة النموذج لتقليل عدد المضلعات (Low Poly) وتحسين الأداء. سنتعامل مع تقنيات Retopology وQuad/Triangle Topology لجعل النموذج مناسبًا للألعاب أو الواقع الافتراضي.",
        hasImage: true,
        imageUrl: "/images/tripo/retopology.png",
        imagePlaceholder: "إعادة تشكيل الشبكة الهندسية"
      },
      {
        title: "التقسيم التلقائي (Segmentation)",
        content: "ستتعلم كيفية تقسيم النموذج إلى أجزاء منطقية تُسهل التعديل، التلوين، أو التحريك. سنتعامل مع أدوات التقسيم التلقائي، وإمكانية دمج الأجزاء أو إزالتها.",
        hasImage: true,
        imageUrl: "/images/tripo/segmentation.png",
        imagePlaceholder: "تقسيم النموذج إلى أجزاء ملونة"
      },
      {
        title: "إضافة الخامات الفيزيائية (PBR Materials)",
        content: "ستتعلم كيفية استخدام PBR Generator لإنشاء خامات واقعية تشمل Metallic, Roughness, Normal Maps. كما سنتعامل مع Magic Brush لتطبيق خامات مباشرة على السطوح.",
        hasImage: true,
        imageUrl: "/images/tripo/pbr-materials.png",
        imagePlaceholder: "إضافة خامات PBR على النموذج"
      },
      {
        title: "التحريك التلقائي (Auto-Rigging)",
        content: "ستتعلم كيفية توليد هيكل تحريك (Skeleton) تلقائيًا للشخصيات، وإضافة حركات جاهزة. سنتعامل مع ميزات التحكم في الحركة، وتخصيصها حسب الحاجة.",
        hasImage: true,
        imageUrl: "/images/tripo/rigging.png",
        imagePlaceholder: "تحريك تلقائي للنموذج"
      },
      {
        title: "التصدير والتكامل مع البرامج الأخرى",
        content: "ستتعلم كيفية تصدير النموذج بصيغ متعددة مثل FBX, OBJ, STL, GLB. كما سنتعامل مع إمكانية استيراد النموذج في برامج مثل Blender، Unity، Unreal Engine، أو دمجه في مواقع الويب عبر Embed.",
        hasImage: true,
        imageUrl: "/images/tripo/export.png",
        imagePlaceholder: "تصدير النموذج بصيغ مختلفة"
      },
      {
        title: "استخدام الذكاء الاصطناعي في التصميم",
        content: "ستتعلم كيفية استخدام وصف نصي (Prompt) لتوليد نموذج ثلاثي الأبعاد بدقة عالية. سنتعامل مع تحسين النتائج، وتعديل النماذج التي يولدتها الذكاء الاصطناعي.",
        hasImage: true,
        imageUrl: "/images/tripo/ai-generation.png",
        imagePlaceholder: "استخدام الذكاء الاصطناعي لتوليد نموذج 3D"
      }
    ]
  }, 
  "Autodesk Maya": {
    sections: [
      {
        title: "مقدمة في استخدام Autodesk Maya",
        content: "في هذا القسم، ستتعرف على واجهة البرنامج وأدواته الأساسية. سنتعرف على كيفية فتح المشروع، واستخدام القوائم، والعمل في بيئة ثلاثية الأبعاد لتصميم نماذج ورسومات متحركة.",
        hasImage: true,
        imageUrl: "/images/maya/overview.png",
        imagePlaceholder: "واجهة البرنامج Autodesk Maya"
      },
      {
        title: "أدوات النمذجة ثلاثية الأبعاد",
        content: "ستتعلم كيفية إنشاء المجسمات الأولية (Primitives) مثل Box, Sphere, Cylinder. كما سنتعامل مع أدوات النمذجة المتقدمة مثل Extrude, Bevel, Merge، وإنشاء نماذج معقدة باستخدام تقنيات Polygon وNURBS.",
        hasImage: true,
        imageUrl: "/images/maya/modeling.png",
        imagePlaceholder: "أدوات النمذجة في Maya"
      },
      {
        title: "التحريك والتحريك التلقائي (Animation)",
        content: "ستتعلم كيفية تحريك الشخصيات باستخدام Keyframes، وضبط الحركات على Timeline. كما سنتعامل مع أدوات الـ Rigging والـ Skinning لإنشاء هيكل عظمي وربطه بالنماذج.",
        hasImage: true,
        imageUrl: "/images/maya/animation.png",
        imagePlaceholder: "تحريك شخصية في Maya"
      },
      {
        title: "الإضاءة والرندر (Lighting & Rendering)",
        content: "ستتعلم كيفية إضافة أنواع مختلفة من الإضاءة (Area, Directional, Skydome)، وضبط الظلال، والانعكاسات. كما سنتعامل مع محرك Arnold Renderer لإنتاج صور وفيديوهات واقعية.",
        hasImage: true,
        imageUrl: "/images/maya/lighting-rendering.png",
        imagePlaceholder: "إضاءة ورندر في Maya"
      },
      {
        title: "المؤثرات البصرية (VFX)",
        content: "ستتعلم كيفية محاكاة السوائل، النار، الدخان، والأقمشة باستخدام أدوات مثل nCloth, nParticles, وBifrost. سنتعامل مع المحاكاة الفيزيائية لخلق تأثيرات واقعية.",
        hasImage: true,
        imageUrl: "/images/maya/vfx.png",
        imagePlaceholder: "مؤثرات بصرية في Maya"
      },
      {
        title: "الرسم والتلوين (UV Mapping & Texturing)",
        content: "ستتعلم كيفية فك الـ UVs، وإضافة خامات واقعية (Metal, Wood, Skin). كما سنتعامل مع دمج العمل مع برامج مثل Substance Painter أو Photoshop.",
        hasImage: true,
        imageUrl: "/images/maya/texturing.png",
        imagePlaceholder: "تلوين النموذج في Maya"
      },
      {
        title: "إدارة المشروع والعمل الجماعي",
        content: "ستتعلم كيفية تنظيم المشروع باستخدام Folders, Projects, وTeams. كما سنتعامل مع أدوات إدارة الأصول (Assets) وتنظيم المشهد باستخدام Outliner وHypergraph.",
        hasImage: true,
        imageUrl: "/images/maya/project-management.png",
        imagePlaceholder: "إدارة المشروع في Maya"
      },
      {
        title: "التكامل مع البرامج الأخرى",
        content: "ستتعلم كيفية تصدير النماذج بصيغ متعددة مثل FBX, OBJ, STL. كما سنتعامل مع دمج النماذج في برامج مثل Blender, Unreal Engine, وAdobe After Effects.",
        hasImage: true,
        imageUrl: "/images/maya/integration.png",
        imagePlaceholder: "التكامل مع برامج أخرى"
      }
    ]
  },
  
};




