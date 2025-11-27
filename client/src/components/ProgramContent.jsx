import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProgramContent({ program, onBack }) {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
        >
          <ArrowRight className="w-5 h-5 rotate-180" />
          العودة للبرامج
        </button>

        <div className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-12 shadow-2xl">
          <div className="flex flex-col items-center text-center mb-8">
            <div 
              style={{ backgroundColor: program.accentColor + '20', color: program.accentColor }}
              className="text-sm font-bold px-4 py-2 rounded-full mb-4"
            >
              {program.chapter}
            </div>

            <div 
              style={{ backgroundColor: program.accentColor + '15' }}
              className="w-32 h-32 rounded-3xl flex items-center justify-center mb-6 overflow-hidden"
            >
              <img src={program.image} alt={program.name} className="w-24 h-24 object-contain" />
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-4">
              {program.name}
            </h1>
            
            <p className="text-xl text-gray-300 mb-6">
              {program.description}
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <span 
                style={{ backgroundColor: program.accentColor + '20', color: program.accentColor }}
                className="text-base font-bold px-4 py-2 rounded-full"
              >
                المستوى: {program.level}
              </span>
              <span className="text-base font-bold px-4 py-2 rounded-full bg-white/10 text-gray-300">
                المدة: {program.duration}
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <h2 className="text-2xl font-bold text-white mb-3">📋 نظرة عامة</h2>
              <p className="text-gray-300 leading-relaxed">
                برنامج تدريبي شامل مصمم لمساعدتك على إتقان {program.name}. 
                ستتعلم من خلال دروس تفاعلية، تمارين عملية، ومشاريع واقعية.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <h2 className="text-2xl font-bold text-white mb-3">🎯 ماذا ستتعلم</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span style={{ color: program.accentColor }} className="text-lg">✓</span>
                  <span>المفاهيم والمبادئ الأساسية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: program.accentColor }} className="text-lg">✓</span>
                  <span>تمارين عملية تطبيقية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: program.accentColor }} className="text-lg">✓</span>
                  <span>تقنيات واستراتيجيات متقدمة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: program.accentColor }} className="text-lg">✓</span>
                  <span>مشاريع واقعية وتطبيقات عملية</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <h2 className="text-2xl font-bold text-white mb-3">⏱️ تفاصيل البرنامج</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">المدة الزمنية</p>
                  <p className="text-white font-semibold text-lg">{program.duration}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">المستوى</p>
                  <p className="text-white font-semibold text-lg">{program.level}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <h2 className="text-2xl font-bold text-white mb-3">🎁 ما ستحصل عليه</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span>🎓</span>
                  <span>شهادة إتمام معتمدة</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📚</span>
                  <span>وصول مدى الحياة للمحتوى</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>💬</span>
                  <span>دعم فني متواصل</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🎯</span>
                  <span>مشاريع عملية قابلة للتطبيق</span>
                </li>
              </ul>
            </div>

            <button
              style={{ backgroundColor: program.accentColor }}
              className="w-full py-4 rounded-2xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              سجل الآن في البرنامج
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}