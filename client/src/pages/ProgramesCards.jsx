import React, { useState } from 'react';
import ProgramCard from '../components/ProgramCard';
import ProgramContent from '../components/ProgramContent';
import { programs } from '../data/programsData';

export default function ProgramesCards() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  if (selectedProgram) {
    return (
      <div style={{ background: 'linear-gradient(to bottom, #3b0764, #000)' }} className="min-h-screen">
        <ProgramContent 
          program={selectedProgram} 
          onBack={() => setSelectedProgram(null)} 
        />
      </div>
    );
  }

  return (
    <div style={{ background: 'linear-gradient(to bottom, #3b0764, #000)' }} className="min-h-screen w-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-4">
            برامج التصميم ثلاثي الأبعاد
          </h1>
          <p className="text-2xl text-purple-100">
            11 برنامج شامل من المستوى المبتدئ إلى الاحترافي
          </p>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="w-full max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              onClick={setSelectedProgram}
            />
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-white/5 backdrop-blur-sm border-t border-white/10 py-12 px-8 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            🎓 ابدأ رحلتك التعليمية اليوم
          </h2>
          <p className="text-gray-300 text-lg">
            جميع البرامج تشمل وصول مدى الحياة، دروس تفاعلية، شهادة معتمدة، ودعم فني متواصل
          </p>
        </div>
      </div>
    </div>
  );
}