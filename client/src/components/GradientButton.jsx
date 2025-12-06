import { ArrowLeft } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const GradientButton = ({ text = "ابدأ الاختبار", href = "/quiz", ...props }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isAuthenticated) {
      navigate("/login");   // لو مش عامل لوجين → وديه للصفحة اللوجين
      return;
    }
    navigate(href);          // لو عامل لوجين → وديه للصفحة المطلوبة
  };

  return (
    <div className="flex justify-center flex-wrap gap-4">
      <button
        onClick={handleClick}
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
    </div>
  );
};

export default GradientButton;
