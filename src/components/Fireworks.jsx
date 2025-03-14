import { motion } from 'framer-motion';

const Fireworks = () => {
  const fireworks = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 pointer-events-none">
      {fireworks.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-yellow-400 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight,
            scale: 0
          }}
          animate={{
            y: Math.random() * window.innerHeight * 0.5,
            scale: [0, 1, 0],
            opacity: [1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

export default Fireworks;