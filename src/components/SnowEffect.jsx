import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SnowEffect = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const generateSnowflakes = () => {
      return Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDuration: 5 + Math.random() * 10,
        delay: Math.random() * 5,
        scale: 0.2 + Math.random() * 0.8
      }));
    };

    setSnowflakes(generateSnowflakes());
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {snowflakes.map((snowflake) => (
        <motion.div
          key={snowflake.id}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: `${snowflake.left}%`,
            top: '-5px',
          }}
          animate={{
            y: ['0vh', '100vh'],
            x: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: snowflake.animationDuration,
            repeat: Infinity,
            delay: snowflake.delay,
            ease: 'linear',
          }}
          initial={{ scale: snowflake.scale }}
        />
      ))}
    </div>
  );
};

export default SnowEffect;