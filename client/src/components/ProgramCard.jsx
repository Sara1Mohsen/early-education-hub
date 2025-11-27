import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
// import { BookOpen, Wand2, Cpu, Box, Layers, Code, Eye, Building, Clapperboard, PackageOpen } from 'lucide-react';

export default function ProgramCard({ program, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  // const iconMap = {
  //   BookOpen: <BookOpen className="w-12 h-12" />,
  //   Wand2: <Wand2 className="w-12 h-12" />,
  //   Cpu: <Cpu className="w-12 h-12" />,
  //   Box: <Box className="w-12 h-12" />,
  //   Layers: <Layers className="w-12 h-12" />,
  //   Code: <Code className="w-12 h-12" />,
  //   Eye: <Eye className="w-12 h-12" />,
  //   Building: <Building className="w-12 h-12" />,
  //   Clapperboard: <Clapperboard className="w-12 h-12" />,
  //   PackageOpen: <PackageOpen className="w-12 h-12" />
  // };

  return (
    <div
      onClick={() => onClick(program)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 min-h-[26rem] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-white/20"
    >
      <div 
        style={{ backgroundColor: program.accentColor + '20', color: program.accentColor }}
        className="text-xs font-bold px-3 py-1.5 rounded-full w-fit mb-4"
      >
        {program.chapter}
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div 
          style={{ backgroundColor: program.accentColor + '15' }}
          className="w-24 h-24 rounded-2xl flex items-center justify-center mb-6 overflow-hidden transition-transform duration-300"
        >
          <img src={program.image} alt={program.name} className="w-16 h-16 object-contain" />
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 text-center">
          {program.name}
        </h3>

        <p className="text-gray-300 text-center mb-6 text-sm leading-relaxed">
          {program.description}
        </p>

        <div className="flex flex-wrap gap-2 justify-center mb-4">
          <span 
            style={{ backgroundColor: program.accentColor + '20', color: program.accentColor }}
            className="text-xs font-semibold px-3 py-1 rounded-full"
          >
            {program.level}
          </span>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-gray-300">
            ⏱️ {program.duration}
          </span>
        </div>
      </div>

      <button
        style={{ backgroundColor: program.accentColor }}
        className="w-full mt-4 px-6 py-3 rounded-full text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
      >
        ابدأ التعلم
        <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? '-translate-x-1' : ''}`} />
      </button>
    </div>
  );
}
