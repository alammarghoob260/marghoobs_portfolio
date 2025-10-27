import React, { useEffect } from "react";
import "./FerroLayer.css"; // Optional: for transitions and polish

const FerroLayer = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const elements = document.querySelectorAll(".ferro");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        el.style.transform = `translate(${x * 0.03}px, ${y * 0.03}px) rotateX(${
          -y * 0.02
        }deg) rotateY(${x * 0.02}deg)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null; // No visual output — just effect
};

export default FerroLayer;
