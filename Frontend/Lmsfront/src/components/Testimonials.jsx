import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#f7faff]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold flex items-center justify-center gap-2">
            📘 OUR STUDENTS TESTIMONIALS
          </p>
          <h2 className="text-4xl font-bold mt-2">
            Students Say’s About Our University
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Card 1 */}
          <div className="relative bg-white shadow-md rounded-2xl p-10 overflow-hidden">
            {/* Blue Corner Shape */}
            <div className="absolute top-0 left-0 w-40 h-32 bg-blue-600 rounded-br-3xl"></div>

            {/* Profile Row */}
            <div className="relative z-10 flex items-start gap-6">
              <img
                src="https://i.pravatar.cc/150?img=5"
                alt="student"
                className="w-24 h-24 rounded-lg object-cover shadow-md"
              />

              <p className="text-gray-600 leading-relaxed">
                “Quickly maximize visionary solutions after mission critical action items 
                productivate premium portals for impactful services instinctively 
                negotiate enabled niche markets via growth strategies”
              </p>
            </div>

            <hr className="my-6" />

            {/* Bottom Row */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Zara Head Milan</h3>
                <p className="text-blue-600">Regular Student</p>
              </div>

              {/* Star Rating */}
              <div className="flex text-blue-500 text-lg">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-gray-300" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white shadow-md rounded-2xl p-10 overflow-hidden">
            {/* Blue Corner Shape */}
            <div className="absolute top-0 left-0 w-40 h-32 bg-blue-600 rounded-br-3xl"></div>

            {/* Profile Row */}
            <div className="relative z-10 flex items-start gap-6">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="student"
                className="w-24 h-24 rounded-lg object-cover shadow-md"
              />

              <p className="text-gray-600 leading-relaxed">
                “Quickly maximize visionary solutions after mission critical action items 
                productivate premium portals for impactful services instinctively 
                negotiate enabled niche markets via growth strategies”
              </p>
            </div>

            <hr className="my-6" />

            {/* Bottom Row */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">David H. Smith</h3>
                <p className="text-blue-600">IT Student</p>
              </div>

              {/* Star Rating */}
              <div className="flex text-blue-500 text-lg">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
