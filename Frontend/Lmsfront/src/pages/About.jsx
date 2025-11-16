import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StatsSection from "../components/StatsSection";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-blue-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Our Institution
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          We believe in shaping the future of students by providing the best
          quality education, modern learning environment, and personalized
          guidance for their academic excellence.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              We are a team of passionate educators dedicated to providing
              exceptional learning experiences for students of Commerce,
              Science, and School-level subjects. With a commitment to
              innovation and quality education, we aim to empower every learner
              with knowledge and skills needed to achieve excellence.
            </p>
            <br />
            <p className="text-gray-700 leading-relaxed">
              Our institution has helped hundreds of students achieve their
              academic goals with structured courses, personalized mentoring,
              and an interactive learning environment.
            </p>
          </div>

          <img
            src="/images/about1.jpg"
            alt="About us"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/about2.jpg"
            alt="Our mission"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to make education more accessible, impactful, and
              enjoyable for every student. We focus on teaching with practical
              examples, concept clarity, and real-world understanding so that
              each learner builds a strong foundation for their future.
            </p>
            <br />
            <p className="text-gray-700 leading-relaxed">
              We continuously update our curriculum and adopt modern teaching
              techniques to ensure students get the best learning experience.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 md:px-20 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-white shadow-md rounded-2xl hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-2">Experienced Faculty</h3>
              <p className="text-gray-600">
                Our teachers bring years of experience and deep subject
                knowledge to make learning simple and effective.
              </p>
            </div>

            <div className="p-8 bg-white shadow-md rounded-2xl hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-2">Concept-Based Learning</h3>
              <p className="text-gray-600">
                We emphasize building strong concepts through examples,
                diagrams, and practice sessions.
              </p>
            </div>

            <div className="p-8 bg-white shadow-md rounded-2xl hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-2">
                Regular Tests & Analysis
              </h3>
              <p className="text-gray-600">
                Weekly tests, performance tracking, and improvement sessions to
                help students grow consistently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION (Already existing component) */}
      <StatsSection />

      {/* OUR VALUES */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Core Values
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-gray-50 p-8 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Integrity</h3>
            <p className="text-gray-700">
              We believe in honesty, transparency, and dedication in everything
              we do.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Student Success</h3>
            <p className="text-gray-700">
              Our priority is the academic and personal growth of every student.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Excellence</h3>
            <p className="text-gray-700">
              We aim for high-quality teaching and continuously improve our
              methods.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-700">
              Using modern tools, interactive learning, and creative teaching
              approaches.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
