import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaClock, FaUserShield } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-blue-600 text-white py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Contact VCC</h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Reach out to Vaishnavi Commerce Classes (VCC) for admissions, course
          details, or any other queries.
        </p>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <div className="flex flex-col lg:flex-row justify-center gap-16 px-6 py-16 max-w-7xl mx-auto">
        {/* LEFT SIDE – DETAILS */}
        <div className="flex flex-col gap-10 max-w-lg">
          {/* Address */}
          <div className="flex items-start gap-5">
            <div className="text-4xl text-blue-600">
              <FaHome />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-2">Our Address</h2>
              <p className="text-gray-700 leading-relaxed">
                Vaishnavi Commerce Classes (VCC), Shyam Smruti, Bus Stop 27,
                Kamla Nehru Nagar, Next to Bhandup Gaon, Saidham Society, Kirti
                Nagar, Friends Colony, Bhandup East, Mumbai, Maharashtra –
                400042
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-5">
            <div className="text-4xl text-green-600">
              <FaPhoneAlt />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-2">Phone</h2>
              <p className="text-gray-700">+91 9920945143</p>
              <p className="text-gray-500 text-sm">(Available 9 AM – 9 PM)</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-5">
            <div className="text-4xl text-red-600">
              <MdEmail />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-2">Email</h2>
              <p className="text-gray-700">vccclasses@gmail.com</p>
              <p className="text-gray-500 text-sm">
                (We reply within 24 hours)
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-5">
            <div className="text-4xl text-yellow-600">
              <FaClock />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-2">Working Hours</h2>
              <p className="text-gray-700">Monday – Saturday</p>
              <p className="text-gray-700">8:00 AM – 10:00 PM</p>
            </div>
          </div>

          {/* Safety */}
          <div className="flex items-start gap-5">
            <div className="text-4xl text-purple-600">
              <FaUserShield />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-2">Student Support</h2>
              <p className="text-gray-700">
                Your information is kept secure and private with us.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="w-full max-w-md shadow-xl p-10 rounded-2xl bg-white border border-gray-200">
          <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>

          <div className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              placeholder="Your Message"
              className="border p-3 rounded-lg h-36 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-medium">
              Submit Message
            </button>
          </div>
        </div>
      </div>

      {/* GOOGLE MAP */}
      <section className="mt-10">
        <iframe
          title="Google Map – VCC Bhandup East"
          className="w-full h-80"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5900894098734!2d72.94288627534955!3d19.15301538206057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8eadc4ee1bb%3A0xf4b6b7d2a56f60d1!2sShyam%20Smruti%20Building%2C%20Kamla%20Nehru%20Nagar%2C%20Bhandup%20East%2C%20Mumbai%2C%20Maharashtra%20400042!5e0!3m2!1sen!2sin!4v1731781230000"
        />
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
