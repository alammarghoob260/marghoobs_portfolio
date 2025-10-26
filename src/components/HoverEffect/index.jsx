import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 w-12 h-12 bg-blue-400 rounded-full mix-blend-screen"
      style={{
        x: position.x - 24,
        y: position.y - 24,
      }}
      animate={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

export default Cursor;
