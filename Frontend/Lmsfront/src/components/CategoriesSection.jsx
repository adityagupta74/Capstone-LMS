import React from "react";

const CategoriesSection = () => {
  const categories = [
    {
      title: "School Section",
      img: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=200",
    },
    {
      title: "Science",
      img: "https://images.unsplash.com/photo-1559757175-5700dde6751b?w=200",
    },
    {
      title: "Commerce",
      img: "https://images.unsplash.com/photo-1521790361543-f645cf042ec4?w=200",
    },
  ];

  return (
    <div
      className="relative py-20 bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://wordpress.themehour.net/edura/wp-content/uploads/2023/07/category-arrow.svg')",
      }}
    >
      {/* BLUE OVERLAY */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* LEFT SIDE */}
          <div className="md:w-1/3 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Explore Top <br /> Categories
            </h1>

            <button className="bg-blue-600 text-white px-7 py-3 rounded-xl shadow-md hover:bg-blue-700 transition mt-8 font-semibold">
              View all categories
            </button>
          </div>

          {/* RIGHT SIDE – CARDS */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white/95 backdrop-blur-lg shadow-lg hover:shadow-2xl transition hover:-translate-y-1 p-8 flex flex-col items-center text-center"
              >
                {/* IMAGE */}
                <div className="h-20 w-20 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden shadow-inner mb-5">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-14 h-14 object-cover"
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
    </div>
  );
};

export default CategoriesSection;
