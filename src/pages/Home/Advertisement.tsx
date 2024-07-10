import { motion } from "framer-motion";
import { Truck, DollarSign, Headphones } from "lucide-react";

const benefits = [
  {
    icon: <Truck size={32} className="text-blue-500" />,
    title: "Free Shipping",
    description: "Enjoy free shipping on all orders above $50.",
  },
  {
    icon: <DollarSign size={32} className="text-green-500" />,
    title: "Lowest Delivery Charge",
    description: "We offer the lowest delivery charge for all your purchases.",
  },
  {
    icon: <Headphones size={32} className="text-purple-500" />,
    title: "24/7 Support",
    description: "Our support team is available 24/7 to assist you.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const Advertisement = () => {
  return (
    <div className="py-12">
      <motion.div
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Shop With Us?</h2>
          <p className="text-lg text-gray-600">Discover the benefits and services we offer.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md text-center transition-transform transform hover:-translate-y-1 hover:shadow-lg"
              variants={itemVariants}
            >
              <div className="flex justify-center items-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Advertisement;