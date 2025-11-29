import React from 'react';
import { BookOpen, Clock, Award } from 'lucide-react';

export function QuizStart({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white ">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="mb-8  ">
          <Award className="w-20 h-20 mx-auto text-yellow-400 mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            اختبار تحديد المستوى
          </h1>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 space-y-6">
          <div className=" items-start gap-4 text-right">
            <BookOpen className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              
              <p className="text-gray-300 leading-relaxed">
                يتكون الاختبار من 10 أسئلة تغطي أساسيات التصميم ثلاثي الأبعاد، 
                الواقع الافتراضي، والواقع المعزز. سيساعدك هذا الاختبار في تحديد 
                مستواك الحالي (مبتدئ أو متوسط).
              </p>
            </div>
          </div>

          <div className=" items-start gap-4 text-right">
            <Clock className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              {/* <h3 className="text-lg font-semibold mb-2">المدة الزمنية:</h3> */}
              <p className="text-gray-300">
                كل سؤال له وقت محدد (15-25 ثانية). تأكد من الإجابة قبل انتهاء الوقت!
              </p>
            </div>
          </div>

          <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-xl p-4">
            <p className="text-sm text-yellow-200">
              💡 <strong>نصيحة:</strong> اقرأ السؤال بعناية قبل اختيار الإجابة
            </p>
          </div>
        </div>

        <button
          onClick={onStart}
          className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-lg py-4 px-12 rounded-full shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105"
        >
          <span className="flex items-center gap-3">
            ابدأ الاختبار الآن
            <span className="group-hover:translate-x-1 transition-transform">←</span>
          </span>
        </button>

        <p className="text-sm text-gray-400">
          النتيجة سيتم حفظها تلقائياً عند الانتهاء
        </p>
      </div>
    </div>
  );
}