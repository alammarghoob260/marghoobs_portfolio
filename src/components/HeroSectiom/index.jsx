import { motion } from "framer-motion";

const HeroSection = () => (
  <section
    id="home"
    className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white"
  >
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl font-bold mb-4 text-center"
    >
      Hello, I’m John Doe
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="text-xl text-gray-300 text-center max-w-xl"
    >
      A passionate Frontend Developer crafting beautiful and functional web
      experiences.
    </motion.p>
  </section>
);

export default HeroSection;
