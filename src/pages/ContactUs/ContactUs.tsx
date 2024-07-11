import { Button } from "@/components/ui/button";
import { FormEvent } from "react";
import toast from "react-hot-toast";

const ContactUs = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    toast.success("Message send successfully!!");
  };
  return (
    <div className="md:container mx-auto  mb-20 px-4 py-8 shadow-lg rounded">
      <h1 className="text-xl md:text-2xl font-bold text-center mb-10">
        Contact Us
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        {/*Form */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Subject"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-300 rounded-md resize-none"
                rows={4}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <Button>Send Message</Button>
            </div>
          </form>
        </div>

        {/* Contacts */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-700">ahmed@ullah.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="text-gray-700">+880 1338383838</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold">Address</h3>
            <p className="text-gray-700">Shewrapara, Mirpur 10, Dhaka</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
