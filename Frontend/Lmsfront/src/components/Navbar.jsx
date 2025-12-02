import { useState } from "react";
import vcc from "../assets/vcc.jpeg";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  return (
    <>
      <header className="w-full shadow-md">
        {/* 🔵 TOP BLUE BAR */}
        <div className="flex justify-between bg-blue-700 text-white px-4 md:px-6 py-2 text-xs md:text-sm">
          {/* Left */}
          <div className="flex gap-3 md:gap-6 items-center">
            <p>📞 9920945143</p>
            <p className="hidden sm:block">
              📧 email-vaishnavicommerclasses1@gmail.com
            </p>
            <p className="hidden lg:block">🕒 Mon - Sat 8:00 - 10:00</p>
          </div>
         

          {/* Right */}
          <div className="flex gap-3 items-center">
            <p className="hidden sm:block">Follow us on</p>
            <Link
              to="/login"
              className="bg-white text-blue-700 px-2 md:px-3 py-1 rounded-md text-xs md:text-sm"
            >
              Login
            </Link>
          </div>
        </div>

        {/* ⚪ MAIN NAVBAR */}
        <div
          className="bg-white px-4 md:px-6 py-4 flex justify-between items-center sticky top-0 z-50"
          style={{ borderTopLeftRadius: "120px" }}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              className="h-10 w-10 md:h-12 md:w-12 object-cover"
              src={vcc}
              alt="Logo"
            />
            <h1 className="text-xl md:text-3xl font-bold text-blue-900">
              EduSync
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 lg:gap-8 text-blue-900 font-medium">
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>

              {/* Courses Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-blue-600">
                  Courses
                  <FaChevronDown className="text-xs group-hover:rotate-180 transition duration-300" />
                </button>

                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 w-44 py-2 z-50">
                  <Link
                    to="/courses/school"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    School
                  </Link>

                  <Link
                    to="/courses/commerce"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Commerce
                  </Link>

                  <Link
                    to="/courses/science"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Science
                  </Link>
                </div>
              </div>

              <Link to="/about" className="hover:text-blue-600">
                About Us
              </Link>
              <Link to="/gallery" className="hover:text-blue-600">
                Gallery
              </Link>
              <Link to="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-blue-900 text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* 📱 Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md px-6 py-4">
            <ul className="flex flex-col gap-4 text-blue-900 font-medium">
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>

              {/* Mobile Courses Dropdown */}
              <div>
                <button
                  onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                  className="flex justify-between w-full hover:text-blue-600"
                >
                  Courses
                  <FaChevronDown
                    className={`transition ${
                      mobileCoursesOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {mobileCoursesOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <Link to="/courses/school" className="hover:text-blue-600">
                      School
                    </Link>

                    <Link
                      to="/courses/commerce"
                      className="hover:text-blue-600"
                    >
                      Commerce
                    </Link>

                    <Link to="/courses/science" className="hover:text-blue-600">
                      Science
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/about" className="hover:text-blue-600">
                About Us
              </Link>
              <Link to="/gallery" className="hover:text-blue-600">
                Gallery
              </Link>
              <Link to="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
