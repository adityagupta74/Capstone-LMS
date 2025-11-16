import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Gallery = () => {
  const galleryData = [
    {
      title: "Picnic",
      images: [
        "https://preranaclasses.in/wp-content/uploads/2025/06/prerna-classes.jpg",
        "https://preranaclasses.in/wp-content/uploads/2025/06/prerna-classes.jpg",
      ],
    },
    {
      title: "Annual Day",
      images: [
        "https://preranaclasses.in/wp-content/uploads/2025/06/prerna-classes.jpg",
        "https://preranaclasses.in/wp-content/uploads/2025/06/prerna-classes.jpg",
        "https://preranaclasses.in/wp-content/uploads/2025/06/prerna-classes.jpg",
      ],
    },
    {
      title: "Waterpark",
      images: [
        "https://preranaclasses.in/wp-content/uploads/2025/06/prerna-classes.jpg",
        "https://preranaclasses.in/wp-content/uploads/2025/06/prerna-classes.jpg",
      ],
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="py-10 px-4">
        <h1 className="text-center text-3xl font-bold mb-10">Gallery</h1>

        {galleryData.map((section, index) => (
          <div key={index} className="mb-12">
            {/* Category Title */}
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>

            {/* Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.images.map((img, i) => (
                <div
                  key={i}
                  className="shadow-lg rounded-xl overflow-hidden hover:scale-105 transition duration-300"
                >
                  <img
                    src={img}
                    className="w-full h-64 object-cover"
                    alt={section.title}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
