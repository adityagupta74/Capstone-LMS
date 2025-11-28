import { CheckCircle } from "lucide-react";

export default function UniversitySection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 px-6">
        {/* LEFT IMAGES */}
        <div className="relative space-y-6">
          {/* TOP ROW */}
          <div className="grid grid-cols-2 gap-6">
            <img
              src="/images/std1.png"
              className="rounded-xl w-full h-56 object-cover"
            />

            <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white rounded-xl flex flex-col items-center justify-center">
              <p className="text-5xl font-bold">10k+</p>
              <p className="text-sm mt-2 text-center">
                STUDENTS ACTIVE <br /> OUR COURSES
              </p>
            </div>
          </div>

          {/* BOTTOM IMAGE */}
          <img
            src="/images/std2.png"
            className="rounded-xl w-full h-64 object-cover"
          />

          {/* BACKGROUND CIRCLES (SVG) */}
          <svg
            className="absolute -bottom-10 -left-10 w-60 opacity-70"
            viewBox="0 0 200 200"
          >
            <circle
              cx="70"
              cy="120"
              r="50"
              stroke="#1D4ED8"
              strokeWidth="6"
              fill="none"
            />
            <circle
              cx="110"
              cy="120"
              r="30"
              stroke="#EF4444"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div>
          <p className="text-blue-600 font-medium tracking-wide mb-3 flex items-center gap-2">
            <span className="inline-block text-xl">📘</span> ABOUT OUR
            UNIVERSITY
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to Vaishnavi Commerce Classes.
          </h1>

          <p className="text-gray-600 leading-relaxed mb-4">
            Collaboratively simplify user friendly networks after principle
            centered coordinate effective methods of empowerment distributed
            niche markets pursue market positioning web-readiness after resource
            sucking applications.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Online education, also known as e-learning, is a method of learning
            that takes place over the internet. It offers individuals the
            opportunity to acquire knowledge, skills.
          </p>

          {/* CHECK MARK POINTS */}
          <ul className="space-y-4 text-base text-gray-800">
            <li className="flex items-center gap-3">
              <CheckCircle className="text-blue-600" size={20} />
              Get access to 4,000+ of our top courses
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle className="text-blue-600" size={20} />
              Popular topics to learn now
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle className="text-blue-600" size={20} />
              Find the right instructor for you
            </li>
          </ul>

          {/* BUTTON */}
          <button className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg font-semibold flex items-center gap-2">
            ABOUT MORE →
          </button>
        </div>
      </div>
    </section>
  );
}
