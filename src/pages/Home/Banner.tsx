import { motion } from "framer-motion";
import "../../style/Banner.css";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <div className="banner relative bg-[#F6F6F6] overflow-hidden">
      <motion.div
        className="banner container mx-auto px-6 py-12 sm:py-16 md:py-20 lg:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left lg:max-w-xl mb-8 lg:mb-0">
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-800 leading-tight"
              variants={itemVariants}
            >
              Elevate Your Typing Experience
            </motion.h1>
            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-gray-600"
              variants={itemVariants}
            >
              Find Your Perfect Mechanical Keyboard Match
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg mb-6 text-gray-500"
              variants={itemVariants}
            >
              Dive into our exclusive collection of mechanical keyboards,
              crafted for precision and style. Whether you're a gamer, a coder,
              or a keyboard enthusiast, discover unmatched quality and
              performance.
            </motion.p>
            <motion.div className="flex justify-center lg:justify-start">
              <Button
                onClick={() => {
                  console.log("Button clicked");
                }}
                className="bg-[#023246] flex items-center gap-2 "
              >
                Explore Now <ArrowRight size={16} />
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="flex-shrink-0 relative"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
            <img
              src="https://i.ibb.co/Px922PH/top-view-white-keyboard-with-lights-2.jpg"
              alt="Mechanical Keyboard"
              className="max-w-[500px] rounded-lg shadow-2xl relative z-10"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
