import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProgramContent({ program, onBack }) {
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
              style={{ backgroundColor: program.accentColor + '30', color: program.accentColor }}
              className="text-sm font-bold px-4 py-2 rounded-full mb-4"
            >
              {/* {program.chapter} */}
            </div>

            <div
              style={{ backgroundColor: program.accentColor + '20' }}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl flex items-center justify-center mb-6 overflow-hidden"
            >
              <img src={program.image} alt={program.name} className="w-full h-full object-contain" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 px-4">
              {program.name}
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-2xl px-4 leading-relaxed">
              {program.description}
            </p>

            <div className="flex flex-wrap justify-center gap-3 px-4">
              <span
                style={{ backgroundColor: program.accentColor + '30', color: program.accentColor }}
                className="text-sm sm:text-base font-bold px-4 py-2 rounded-full"
              >
                المستوى: {program.level}
              </span>
              <span className="text-sm sm:text-base font-bold px-4 py-2 rounded-full bg-white/10 text-gray-300">
                المدة: {program.duration}
              </span>
            </div>
          </div>

          <div className="space-y-6">

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-5 flex items-center gap-3">
                <span className="text-3xl">📋</span>
                نظرة عامة
              </h2>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                برنامج تدريبي شامل مصمم لمساعدتك على إتقان {program.name}.
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
                    <span style={{ color: program.accentColor }} className="text-xl font-bold mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
{/* 
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-5 flex items-center gap-3">
                <span className="text-3xl">🎁</span>
                ما ستحصل عليه
              </h2>
              <ul className="space-y-3 text-gray-300 text-base sm:text-lg">
                {[
                  "شهادة إتمام معتمدة عند الانتهاء",
                  "وصول مدى الحياة للمحتوى والتحديثات",
                  "دعم فني متواصل من فريق الخبراء",
                  "مشاريع عملية قابلة للتطبيق مباشرة"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-2xl" style={{ color: program.accentColor }}>•</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
}
