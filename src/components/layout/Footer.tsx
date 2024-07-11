import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const footerIcons = [
  {
    icon: <FaFacebook size="24" color="#023246" />,
    link: "https://www.facebook.com",
  },
  {
    icon: <FaInstagram size="24" color="#023246" />,
    link: "https://www.instagram.com",
  },
  {
    icon: <FaWhatsapp size="24" color="#023246" />,
    link: "https://www.whatsapp.com",
  },
  {
    icon: <FaTwitter size="24" color="#023246" />,
    link: "https://www.twitter.com",
  },
  {
    icon: <FaLinkedin size="24" color="#023246" />,
    link: "https://www.linkedin.com",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#F6F6F6] py-10">
      <div className="md:container">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="max-w-[200px] mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Ahmed</h2>
              <p className="mt-2 text-sm">
                Providing quality mechanical keyboards for all your typing and
                gaming needs.
              </p>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold">Contact Us</h3>
              <p className="mt-2">Shewrapara, Mirpur 10, Dhaka</p>
              <p>Email: ahned@ullah.com</p>
              <p>Phone: +880 1712928329</p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-semibold">Quick Links</h3>
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <Link to="/products" className="hover:underline">
                Products
              </Link>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-10 flex justify-center space-x-8">
            {footerIcons.map((icon, i) => (
              <a
                key={i}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon.icon}
              </a>
            ))}
          </div>
          <div className="my-10 border-t border-gray-700"></div>
          <div className="text-center">
            <p>&copy; 2024 Ahmed. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
