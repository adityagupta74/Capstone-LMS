import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const bgImages = ["/images/bg1.png", "/images/bg2.png", "/images/bg3.png"];

  const studentImages = [
    "/images/fg1.png",
    "/images/fg2.png",
    "/images/fg3.png",
  ];

  const texts = [
    {
      off: "35% OFF",
      title: "The World's Best Online Education",
      desc: "Education can be thought of as the transmission of values and accumulated knowledge of a society...",
    },
    {
      off: "40% OFF",
      title: "Learn From Top Instructors Worldwide",
      desc: "Learning transforms lives — gain the skills you need to succeed.",
    },
    {
      off: "50% OFF",
      title: "Upgrade Your Skills With Best Courses",
      desc: "Education is the first step towards your dream career.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full h-screen flex items-center bg-cover bg-center bg-no-repeat transition-all duration-700"
      style={{
        backgroundImage: `url(${bgImages[index]})`,
      }}
    >
      {/* ⭐ 40% Blue Overlay */}
      <div className="absolute inset-0 bg-blue-900/40"></div>

      {/* ⭐ Dim BG Image (makes image look ~60% opacity) */}
      <div className="absolute inset-0 backdrop-brightness-75"></div>

      {/* ⭐ Decorative shape */}
      <img
        src="https://wordpress.themehour.net/edura/wp-content/uploads/2023/07/shape_1_1.png"
        className="absolute right-0 bottom-0 h-180  opacity-70 pointer-events-none"
        alt="decor"
      />

      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between relative z-10 gap-10">
        {/* LEFT TEXT */}
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl text-white text-center md:text-left"
        >
          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
            <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
              {texts[index].off}
            </span>
            <span>LEARN FROM TODAY</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {texts[index].title} <br />
            <span className="text-blue-400">Institute.</span>
          </h1>

          <p className="mt-4 text-gray-200">{texts[index].desc}</p>

          <button className="mt-6 bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold shadow-lg hover:bg-blue-600 transition">
            Get Started →
          </button>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          key={"img-" + index}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-full overflow-hidden shadow-xl bg-white p-4 
          w-[260px] h-[260px] 
          sm:w-[350px] sm:h-[350px] 
          md:w-[450px] md:h-[450px] 
          lg:w-[650px] lg:h-[650px]"
        >
          <img
            src={studentImages[index]}
            className="w-full h-full object-cover rounded-full"
            alt="Students"
          />
        </motion.div>
      </div>
    </section>
  );
}
