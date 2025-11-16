import React from "react";

const CategoriesSection = () => {
  const categories = [
    { title: "Commerce", img: "/images/c1.png" },
    { title: "Accounting", img: "/images/c2.png" },
    { title: "Business Studies", img: "/images/c3.png" },
  ];

  return (
    <div
      className="relative py-24 bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://wordpress.themehour.net/edura/wp-content/uploads/2023/07/category-arrow.svg')",
      }}
    >
      {/* 🔵 BLUE OVERLAY */}
      <div className="absolute inset-0 bg-blue-900/50"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
        {/* LEFT SIDE */}
        <div className="md:w-1/3">
          <h1 className="text-5xl font-extrabold text-white leading-tight">
            Explore Top <br /> Categories
          </h1>

          <button className="bg-blue-600 text-white px-7 py-3 rounded-xl shadow-md hover:bg-blue-700 transition mt-8 font-medium">
            View all categories
          </button>
        </div>

        {/* RIGHT SIDE - CATEGORY CARDS */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/90 backdrop-blur-lg shadow-lg hover:shadow-2xl transition hover:-translate-y-1 p-8 flex flex-col items-center text-center"
            >
              {/* ICON SECTION */}
              <div className="h-20 w-20 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden shadow-inner mb-5">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* TITLE */}
              <h2 className="text-xl font-semibold text-blue-900 mb-4">
                {cat.title}
              </h2>

              {/* BUTTON */}
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
