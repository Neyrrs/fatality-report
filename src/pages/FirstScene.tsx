import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import firstScene from "../assets/videos/firstScene.mp4";

const FirstScene = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [canNavigate, setCanNavigate] = useState(false);

  const handleVideoEnd = () => {
    setCanNavigate(true);
  };

  const handleClick = () => {
    if (canNavigate) {
      navigate("/play");
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay error:", err);
      });
    }
  }, []);

  return (
    <div
      className="w-screen h-screen bg-black flex justify-center items-center"
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={firstScene} // ✅ pakai import
        onEnded={handleVideoEnd}
      />
      {!canNavigate && (
        <div className="absolute bottom-5 text-white text-lg">
          Video sedang diputar...
        </div>
      )}
      {canNavigate && (
        <div className="absolute bottom-5 text-white text-lg animate-bounce">
          Klik untuk melanjutkan
        </div>
      )}
    </div>
  );
};

export default FirstScene;
