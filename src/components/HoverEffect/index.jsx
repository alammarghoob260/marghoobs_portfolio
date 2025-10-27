import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // smooth spring animation
  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // check for hoverable elements
      const target = e.target.closest("a, button, .project-card, .skill-card");
      setHovered(!!target);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 bg-blue-400 rounded-full mix-blend-screen"
      style={{
        width: hovered ? 60 : 24,
        height: hovered ? 60 : 24,
        x: springX,
        y: springY,
      }}
      animate={{
        scale: hovered ? 1.3 : 1,
        backgroundColor: hovered ? "#22d3ee" : "#3b82f6",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

export default Cursor;
