import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProgramCard from '../components/ProgramCard';
import ProgramContent from '../components/ProgramContent';
import { programs } from '../data/programsData';

export default function ProgramesCards() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const location = useLocation();
  
  // اجلب المستوى من localStorage أو من الـ state اللي جاي من الـ navigation
  const userLevel = location.state?.level || localStorage.getItem('userLevel');
  
  // Function لفلترة البرامج حسب المستوى
  const getFilteredPrograms = () => {
    if (!userLevel) {
      return programs; // لو مافيش مستوى محدد، اعرض كل البرامج
    }

    // فلتر البرامج حسب المستوى
    return programs.filter(program => {

      return program.level === userLevel;
    });
  };

  const filteredPrograms = getFilteredPrograms();

  if (selectedProgram) {
    return (
      <div style={{ background: 'bg-gradient-to-r from-purple-500 to-pink-500' }} className="min-h-screen">
        <ProgramContent 
          program={selectedProgram} 
          onBack={() => setSelectedProgram(null)} 
        />
      </div>
    );
  }

  return (
<div className="min-h-screen w-full bg-gradient-to-br  from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header with Level Info */}
      {userLevel && (
        <div className="bg-gradient-to-r  from-slate-900 via-slate-800 to-slate-900 text-white py-12 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">
              برامج المستوى {userLevel}
            </h1>
            <p className="text-xl text-purple-100">
              {filteredPrograms.length} برنامج مخصص لمستواك
            </p>
          </div>
        </div>
      )}

      {/* Programs Grid */}
      <div className="w-full   px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-  xl:grid-cols-3 gap-6 sm:gap-8">
            {filteredPrograms.map((program) => (
              <ProgramCard
                key={program.id}
                program={program}
                onClick={setSelectedProgram}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-white text-2xl">لا توجد برامج متاحة لهذا المستوى حالياً</p>
          </div>
        )}
      </div>
    </div>
  );
}