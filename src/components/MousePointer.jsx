import React, { useState, useEffect } from "react";

const MousePointer = ({ position, displayText }) => {
  const { x, y } = position;
  const [showPointer, setShowPointer] = useState(false);
  const [showText, setShowText] = useState(false);

  // Delay before showing the pointer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPointer(true);
    }, 500); // Adjust delay time as needed

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };

  return (
    <div className="fixed top-0 left-0 z-50 pointer-events-none">
      {showPointer && (
        <div
          className="w-5 h-5 bg-orange-500 rounded-full cursor-pointer"
          style={{
            position: "absolute",
            top: y - 20.5,
            left: x - 10.5,
            transform: showText ? "scale(1.5)" : "scale(1)",
            transition: "transform 0.3s ease-out",
            zIndex: 1000,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}
      {showText && (
        <div
          className="pointer-events-none bg-black text-white px-2 py-1 rounded-md text-xs absolute left-[3rem] -top-1"
        >
          {displayText}
        </div>
      )}
    </div>
  );
};

export default MousePointer;
