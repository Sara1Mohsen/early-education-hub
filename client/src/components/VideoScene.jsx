import React from "react";
import homeVideo from "../assets/home-video.mp4";
import GradientButton from "./GradientButton";

const VideoScene = () => {
return (
    <div
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        style={{
        background: "linear-gradient(0deg, #020A1C 0%, #0F1C40 70%, #0A1433 70%)"
    }}
    >

    <video
        src={homeVideo}
        autoPlay
        loop
        muted
        playsInline
        className="
        absolute inset-0 w-full h-full 
        object-cover opacity-50 
        "
        // style={{
        //             maskImage: 'linear-gradient(to bottom, transparent, white 20%, white 80%, transparent)',
        //             WebkitMaskImage: 'linear-gradient(to bottom, transparent, white 20%, white 80%, transparent)' // للتحقق من دعم المتصفحات
        //         }}
    />


<div className="absolute inset-0  opacity-10"></div>

    <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-6">



{/* BUTTON */}
            {/* <GradientButton
            text="سجّل الآن" 
            href="/login"
            style={{
                background: 'linear-gradient(0deg, #020A1C 0%, #0F1C40 70%, #0A1433 100%)',
                position: 'relative',
                top: '150px',
                color: '#FFFFFF',
                padding: '0.55rem 1.5rem',  
                borderRadius: '0.8rem', 
                fontWeight: 'bold',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)'
                }}
            /> */}
        </div>
    </div>
    );
};

export default VideoScene;