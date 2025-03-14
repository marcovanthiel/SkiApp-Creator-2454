import { motion } from 'framer-motion';

const Mountain = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <motion.div 
        className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-white via-gray-200 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#fff" 
            fillOpacity="1" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,181.3C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Mountain;