import React, { useState } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { programs as allPrograms } from '../data/programsData';

export default function ProgramContent({ program, onBack }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  // استرجاع البرنامج الكامل من المصفوفة
  const selectedProgram = allPrograms[program.id] || program;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-x-hidden min-h-screen flex justify-center items-center px-4" dir="rtl">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        <button
          onClick={onBack}
          className="mb-8 sm:mb-12 flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-all duration-300 hover:gap-3"
        >
          <ArrowRight className="w-5 h-5" />
          العودة للبرامج
        </button>

        <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 lg:p-12 shadow-2xl">

          <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
            <div
              style={{ backgroundColor: selectedProgram.accentColor + '30', color: selectedProgram.accentColor }}
              className="text-sm font-bold px-4 py-2 rounded-full mb-4"
            >
              {/* {selectedProgram.chapter} */}
            </div>

            <div
              style={{ backgroundColor: selectedProgram.accentColor + '20' }}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl flex items-center justify-center mb-6 overflow-hidden"
            >
              <img src={selectedProgram.image} alt={selectedProgram.name} className="w-full h-full object-contain" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 px-4">
              {selectedProgram.name}
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-2xl px-4 leading-relaxed">
              {selectedProgram.description}
            </p>

            {/* زر "المزيد" أو "التالي →" */}
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:gap-3 text-sm sm:text-base"
            >
              {showFullDescription ? 'إخفاء المزيد' : 'المزيد →'}
              <ArrowDown
                className={`w-4 h-4 transition-transform duration-300 ${showFullDescription ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          <div className="space-y-6">

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-5 flex items-center gap-3">
                <span className="text-3xl">📋</span>
                نظرة عامة
              </h2>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                برنامج تدريبي شامل مصمم لمساعدتك على إتقان {selectedProgram.name}.
                ستتعلم من خلال دروس تفاعلية، تمارين عملية، ومشاريع واقعية تساعدك على
                تطبيق ما تعلمته في الحياة العملية.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-5 flex items-center gap-3">
                ماذا ستتعلم
              </h2>
              <ul className="space-y-3 text-gray-300 text-base sm:text-lg">
                {[
                  "المفاهيم والمبادئ الأساسية للتصميم",
                  "تمارين عملية تطبيقية ومشاريع حقيقية",
                  "تقنيات واستراتيجيات متقدمة في المجال",
                  "مشاريع واقعية وتطبيقات عملية متنوعة"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span style={{ color: selectedProgram.accentColor }} className="text-xl font-bold mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* قسم fullDescription - يظهر فقط عند النقر على الزر */}
            {selectedProgram.fullDescription && (
              <div
                className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 transition-all duration-500 ease-in-out ${
                  showFullDescription ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
                }`}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">📝 عن البرنامج</h2>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg whitespace-pre-line">
                  {selectedProgram.fullDescription}
                </p>
              </div>
            )}
              {selectedProgram.features && (
              <div
                className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 transition-all duration-500 ease-in-out ${
                  showFullDescription ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
                }`}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4"> التفاصيل</h2>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg whitespace-pre-line">
                  {selectedProgram.features}
                </p>
              </div>
            )}

    {/* زر أبدأ الاختبار */}
    {selectedProgram.level && (
      <div className="flex justify-center mt-8">
        <button
          onClick={() => {
            // const level = selectedProgram.level.toLowerCase(); // "مبتدئ" → "beginner"
            window.open(`/quiz/end/}`);
          }}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg transition-all duration-300 flex items-center gap-2"
        >
          <span>🏁 أبدأ اختبار نهاية البرنامج</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    )}

          </div>
        </div>
      </div>
    </div>
  );
}