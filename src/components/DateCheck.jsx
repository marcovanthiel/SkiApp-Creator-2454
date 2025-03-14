import { useState } from 'react';
import { motion } from 'framer-motion';
import { format, differenceInDays } from 'date-fns';
import Fireworks from './Fireworks';
import { FaQuestion } from 'react-icons/fa';

const TARGET_DATE = new Date('2026-02-14');

const DateCheck = () => {
  const [showResult, setShowResult] = useState(false);
  
  const checkDate = () => {
    setShowResult(true);
  };

  const today = new Date();
  const isTargetDate = format(today, 'yyyy-MM-dd') === '2026-02-14';
  const daysUntil = differenceInDays(TARGET_DATE, today);

  if (!showResult) {
    return (
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-shadow">Is het al tijd om te skiën?</h1>
        <button
          onClick={checkDate}
          className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <FaQuestion size={24} />
        </button>
      </motion.div>
    );
  }

  if (isTargetDate) {
    return (
      <div className="relative min-h-screen bg-black">
        <Fireworks />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-white text-shadow">YES!</h1>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-6xl font-bold mb-4 text-shadow">NO</h1>
      <p className="text-xl text-shadow">
        {daysUntil} days until February 14, 2026
      </p>
      <button
        onClick={() => setShowResult(false)}
        className="mt-8 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/30 transition-all duration-300"
      >
        Back
      </button>
    </motion.div>
  );
};

export default DateCheck;