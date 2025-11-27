import React, { useState } from 'react';
import { ArrowRight, BookOpen, Code, Palette, Music, Globe, Calculator, Beaker, MessageSquare, Lightbulb, Star } from 'lucide-react';

// بيانات البرامج
const programs = [
  {
    id: 1,
    name: "English Language",
    description: "Master English speaking, reading, and writing",
    icon: <Globe className="w-12 h-12" />,
    bgColor: "#e0daea",
    accentColor: "#9579ff",
    image: "📚"
  },
  {
    id: 2,
    name: "Mathematics",
    description: "Build strong mathematical foundations",
    icon: <Calculator className="w-12 h-12" />,
    bgColor: "#e0f2fe",
    accentColor: "#75c3ff",
    image: "🔢"
  },
  {
    id: 3,
    name: "Programming",
    description: "Learn to code from scratch",
    icon: <Code className="w-12 h-12" />,
    bgColor: "#e1ecdf",
    accentColor: "#8fb28b",
    image: "💻"
  },
  {
    id: 4,
    name: "Art & Design",
    description: "Explore your creative side",
    icon: <Palette className="w-12 h-12" />,
    bgColor: "#ffe8e7",
    accentColor: "#ff9087",
    image: "🎨"
  },
  {
    id: 5,
    name: "Music Theory",
    description: "Understand the language of music",
    icon: <Music className="w-12 h-12" />,
    bgColor: "#fef3c7",
    accentColor: "#fcd34d",
    image: "🎵"
  },
  {
    id: 6,
    name: "Science",
    description: "Discover the wonders of science",
    icon: <Beaker className="w-12 h-12" />,
    bgColor: "#c8e7ff",
    accentColor: "#75c3ff",
    image: "🔬"
  },
  {
    id: 7,
    name: "Communication Skills",
    description: "Improve your speaking and presentation",
    icon: <MessageSquare className="w-12 h-12" />,
    bgColor: "#ede9fe",
    accentColor: "#c6b6ff",
    image: "💬"
  },
  {
    id: 8,
    name: "Creative Writing",
    description: "Express yourself through words",
    icon: <BookOpen className="w-12 h-12" />,
    bgColor: "#ffc8c4",
    accentColor: "#ff9087",
    image: "✍️"
  },
  {
    id: 9,
    name: "Problem Solving",
    description: "Develop critical thinking skills",
    icon: <Lightbulb className="w-12 h-12" />,
    bgColor: "#fde68a",
    accentColor: "#fcd34d",
    image: "💡"
  },
  {
    id: 10,
    name: "Leadership",
    description: "Become an effective leader",
    icon: <Star className="w-12 h-12" />,
    bgColor: "#c7d8c5",
    accentColor: "#8fb28b",
    image: "⭐"
  }
];

// Card Component
function ProgramCard({ program, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(program)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: program.bgColor,
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered 
          ? `0 20px 40px ${program.accentColor}40` 
          : '0 4px 12px rgba(0,0,0,0.1)'
      }}
      className="cursor-pointer rounded-3xl p-8 min-h-[25rem] max-h-[40rem] flex flex-col justify-center items-center transition-all duration-300"
    >
      {/* الأيقونة/الصورة */}
      <div 
        style={{
          backgroundColor: program.accentColor + '20',
          color: program.accentColor
        }}
        className="w-24 h-24 rounded-2xl flex items-center justify-center mb-6 text-5xl transition-transform duration-300"
      >
        {program.image}
      </div>

      {/* اسم البرنامج */}
      <h3 className="text-3xl font-bold text-gray-900 mb-3 text-center">
        {program.name}
      </h3>

      {/* الوصف */}
      <p className="text-gray-600 text-center mb-6 text-lg">
        {program.description}
      </p>

      {/* الأيقونة */}
      <div style={{ color: program.accentColor }}>
        {program.icon}
      </div>

      {/* زر الانتقال */}
      <button
        style={{
          backgroundColor: program.accentColor,
          opacity: isHovered ? 1 : 0.8
        }}
        className="mt-6 px-6 py-3 rounded-full text-white font-semibold flex items-center gap-2 transition-all duration-300"
      >
        Start Learning
        <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
      </button>
    </div>
  );
}

// صفحة محتوى البرنامج
function ProgramContent({ program, onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* زر الرجوع */}
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
        >
          <ArrowRight className="w-5 h-5 rotate-180" />
          Back to Programs
        </button>

        {/* محتوى البرنامج */}
        <div 
          style={{ backgroundColor: program.bgColor }}
          className="rounded-3xl p-12 shadow-2xl"
        >
          <div className="flex flex-col items-center text-center mb-8">
            <div 
              style={{
                backgroundColor: program.accentColor + '20',
                color: program.accentColor
              }}
              className="w-32 h-32 rounded-3xl flex items-center justify-center text-7xl mb-6"
            >
              {program.image}
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {program.name}
            </h1>
            
            <p className="text-xl text-gray-700 mb-8">
              {program.description}
            </p>
          </div>

          {/* أقسام المحتوى */}
          <div className="space-y-6">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">📋 Course Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                This comprehensive program is designed to help you master {program.name.toLowerCase()}. 
                You'll learn through interactive lessons, practical exercises, and real-world projects.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">🎯 What You'll Learn</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span style={{ color: program.accentColor }}>✓</span>
                  <span>Foundation concepts and principles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: program.accentColor }}>✓</span>
                  <span>Hands-on practical exercises</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: program.accentColor }}>✓</span>
                  <span>Advanced techniques and strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: program.accentColor }}>✓</span>
                  <span>Real-world applications and projects</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">⏱️ Duration & Level</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 text-sm">Duration</p>
                  <p className="text-gray-900 font-semibold text-lg">8-12 weeks</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Level</p>
                  <p className="text-gray-900 font-semibold text-lg">Beginner to Advanced</p>
                </div>
              </div>
            </div>

            <button
              style={{ backgroundColor: program.accentColor }}
              className="w-full py-4 rounded-2xl text-white font-bold text-lg hover:shadow-2xl transition-all duration-300"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// الصفحة الرئيسية
export default function ProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  if (selectedProgram) {
    return (
      <ProgramContent 
        program={selectedProgram} 
        onBack={() => setSelectedProgram(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Our Learning Programs
          </h1>
          <p className="text-xl md:text-2xl text-purple-100">
            Choose from 10 amazing programs to start your learning journey
          </p>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto px-8 py-16">
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
      <div className="bg-white py-12 px-8 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🎓 Start Learning Today
          </h2>
          <p className="text-gray-600 text-lg">
            All programs include lifetime access, interactive lessons, and certification upon completion
          </p>
        </div>
      </div>
    </div>
  );
}