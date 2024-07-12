import { leadersData, teamData } from "@/utils/aboutPageData";
import { motion } from "framer-motion";
import locationImg from "../../assets/location.png";

const About = () => {
  return (
    <div className="md:container mx-auto px-4 mt-4 mb-10">
      <div className="bg-gradient-to-r from-[#69acc1] to-[#023246] p-8 rounded-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            We Are MechMania
          </h1>
          <p className="text-lg text-white mb-6">
            Your one-stop destination for premium mechanical keyboards. Discover
            the perfect blend of aesthetics and performance.
          </p>
          <p className="text-md text-white">
            At MechMania, we are passionate about providing high-quality
            mechanical keyboards that cater to both enthusiasts and
            professionals. Our keyboards are designed to offer an unparalleled
            typing experience, with customizable features that suit your unique
            preferences. Join us in celebrating the art of mechanical keyboards.
          </p>
        </div>
        <div className="mt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="max-w-[400px]">
              <img
                src="https://i.ibb.co/Y7F98Rf/aboutpng.webp"
                alt="Mechanical Keyboard"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
              <h2 className="text-2xl font-bold text-white mb-2">
                Explore Our Collections
              </h2>
              <p className="text-lg text-white">
                Browse through our exclusive range of mechanical keyboards,
                crafted to perfection with the highest quality materials.
                Whether you are a gamer, a writer, or a tech enthusiast, we have
                something for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Leaders section */}
      <div>
        <h3 className="mt-10 mb-6 text-xl md:text-2xl text-center font-bold">
          Our Leaders
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
          {leadersData.map((leader, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ bounce: 0.5, duration: 1 }}
              viewport={{ once: true }}
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4 flex justify-center">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-[300px]"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
              <p className="text-gray-600 mb-2">{leader.position}</p>
              <p className="text-gray-700">{leader.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team section */}
      <div className="mt-16 py-8 bg-[#f5f9ff]">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-6">
          {teamData.map((teamMember, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ bounce: 0.5, duration: 1 }}
              viewport={{ once: true }}
              key={index}
              className="p-4 rounded-lg text-center"
            >
              <img
                src={teamMember.userImg}
                alt={teamMember.userName}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold mb-2">{teamMember.userName}</h3>
              <p className="text-gray-600">{teamMember.position}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Location section */}
      <div className="mt-16 py-8 bg-white">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-8">Our Location</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="max-w-[200px]">
            <img
              src={locationImg}
              alt="Our Location"
              className="rounded-lg w-full"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 text-center md:text-left">
            <h3 className="text-base md:text-lg font-bold mb-2">Visit Us</h3>
            <p className="text-lg mb-4">
              Come visit our showroom and experience the best mechanical
              keyboards in person.
            </p>
            <p className="text-md text-gray-700">
              <strong>Address:</strong> 123 Keyboard Ave, Tech City, TX 12345
            </p>
            <p className="text-md text-gray-700">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="text-md text-gray-700">
              <strong>Email:</strong> contact@mechmania.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
