// components/TorchEffect.jsx
import React, { useEffect, useState } from "react";
import "./SpotlightLayer.css";

const TorchEffect = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="torch-layer"
      style={{
        background: `radial-gradient(
          circle 250px at ${pos.x}px ${pos.y}px,
          rgba(255, 255, 255, 0.07),
          rgba(0, 0, 0, 0.95)
        )`,
      }}
    />
  );
};

export default TorchEffect;
