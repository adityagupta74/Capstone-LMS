import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-[#f7faff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-blue-600 font-semibold flex items-center justify-center gap-2 text-sm sm:text-base">
            📘 OUR STUDENTS TESTIMONIALS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Students Say’s About Our University
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {/* Card 1 */}
          <div className="relative bg-white shadow-md rounded-2xl p-6 sm:p-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-28 h-20 sm:w-40 sm:h-32 bg-blue-600 rounded-br-3xl"></div>

            <div className="relative z-10 flex items-start gap-4 sm:gap-6">
              <img
                src="https://i.pravatar.cc/150?img=5"
                alt="student"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover shadow-md"
              />

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                “Quickly maximize visionary solutions after mission critical
                action items productivate premium portals for impactful services
                instinctively negotiate enabled niche markets via growth
                strategies”
              </p>
            </div>

            <hr className="my-4 sm:my-6" />

            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg sm:text-xl font-bold">
                  Zara Head Milan
                </h3>
                <p className="text-blue-600 text-sm sm:text-base">
                  Regular Student
                </p>
              </div>

              <div className="flex text-blue-500 text-base sm:text-lg">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="text-gray-300" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white shadow-md rounded-2xl p-6 sm:p-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-28 h-20 sm:w-40 sm:h-32 bg-blue-600 rounded-br-3xl"></div>

            <div className="relative z-10 flex items-start gap-4 sm:gap-6">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="student"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover shadow-md"
              />

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                “Quickly maximize visionary solutions after mission critical
                action items productivate premium portals for impactful services
                instinctively negotiate enabled niche markets via growth
                strategies”
              </p>
            </div>

            <hr className="my-4 sm:my-6" />

            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg sm:text-xl font-bold">David H. Smith</h3>
                <p className="text-blue-600 text-sm sm:text-base">IT Student</p>
              </div>

              <div className="flex text-blue-500 text-base sm:text-lg">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
