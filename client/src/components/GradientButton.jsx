import { ArrowLeft } from "lucide-react";

const GradientButton = ({ text = "ابدأ الاختبار", href = "#quiz" ,...props }) => {
  return (
    <div className="flex justify-center flex-wrap gap-4">
      <a href={href} className="no-underline">
        <button
        // style=(style{props.style})
        {...props}
          className="
            bg-gradient-to-r from-purple-500 to-pink-500
            text-white font-bold text-lg 
            px-8 py-3 
            rounded-full
            shadow-[0_0_30px_rgba(168,85,247,0.5)]
            flex items-center gap-2
            hover:opacity-90 
            transition-all duration-200
          "
        >
          {text}
          <ArrowLeft size={20} />
        </button>
      </a>
    </div>
  );
};

export default GradientButton;
