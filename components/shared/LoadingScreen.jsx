import React from "react";
import { GoLightBulb } from "react-icons/go";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] w-[100vw] bg-primary">
      <GoLightBulb className="w-14 h-14 animate-bounce text-secondary" />
    </div>
  );
};

export default LoadingScreen;
