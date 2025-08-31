import React from "react";
import { useNavigate } from "react-router";
const FirstScene = () => {
  const navigate = useNavigate();

  const handleVideoClick = () => {
    navigate("/play");
  };
  return (
    <div
      className="w-screen h-screen bg-violet-600"
      onClick={handleVideoClick}
    ></div>
  );
};

export default FirstScene;
