"use client";
import React, { useState, useEffect } from "react";

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-primary-400 pointer-events-none z-[9999] opacity-80 transition-all duration-300 ease-out hidden md:block"
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
          opacity: isVisible ? 0.8 : 0,
        }}
      >
        <div className="absolute inset-0 rounded-full bg-primary-400 animate-ping opacity-75"></div>
      </div>
      {/* Outer ring */}
      <div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border-2 border-primary-400/30 pointer-events-none z-[9998] transition-all duration-500 ease-out hidden md:block"
        style={{
          transform: `translate(${mousePosition.x - 24}px, ${mousePosition.y - 24}px)`,
          opacity: isVisible ? 0.5 : 0,
        }}
      ></div>
    </>
  );
};

export default CursorFollower;
