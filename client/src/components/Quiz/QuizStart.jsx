import React from 'react';
import { BookOpen, Clock, Award } from 'lucide-react';

export function QuizStart({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="mb-8">
          <Award className="w-20 h-20 mx-auto text-amber-400 mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            اختبار تحديد المستوى
          </h1>
        </div>

        <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 space-y-6 border border-slate-700">
          <div className="flex items-start gap-4 text-right">
            <BookOpen className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
            <div>
              <p className="text-slate-300 leading-relaxed">
                يتكون الاختبار من 10 أسئلة تغطي أساسيات التصميم ثلاثي الأبعاد، 
                الواقع الافتراضي، والواقع المعزز. سيساعدك هذا الاختبار في تحديد 
                مستواك الحالي (مبتدئ أو متوسط).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 text-right">
            <Clock className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <p className="text-slate-300">
                كل سؤال له وقت محدد (15-25 ثانية). تأكد من الإجابة قبل انتهاء الوقت!
              </p>
            </div>
          </div>

          <div className="bg-amber-500/20 border border-amber-400/50 rounded-xl p-4">
            <p className="text-sm text-amber-200">
              💡 <strong>نصيحة:</strong> اقرأ السؤال بعناية قبل اختيار الإجابة
            </p>
          </div>
        </div>

        <button
          onClick={onStart}
          className="group bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold text-lg py-4 px-12 rounded-full shadow-xl hover:shadow-amber-500/30 transition-all duration-300 transform hover:scale-105 active:scale-100"
        >
          <span className="flex items-center gap-3">
            ابدأ الاختبار الآن
            <span className="group-hover:translate-x-1 transition-transform">←</span>
          </span>
        </button>

        <p className="text-sm text-slate-400">
          النتيجة سيتم حفظها تلقائيًا عند الانتهاء
        </p>
      </div>
    </div>
  );
}