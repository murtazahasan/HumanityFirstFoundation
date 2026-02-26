import React from "react";

function Home() {
  const sapImages = [
    { id: 1, src: "/joinm.jpg", title: "Orphanage Visit" },
    { id: 2, src: "/joinm.jpg", title: "Old Age Home" },
    { id: 3, src: "/joinm.jpg", title: "Plantation Drive" },
    { id: 4, src: "/joinm.jpg", title: "Medical Camp" },
    { id: 5, src: "/joinm.jpg", title: "Food Distribution" },
    { id: 6, src: "/joinm.jpg", title: "Education Workshop" },
  ];

  return (
    <>
      <div
        className="relative h-80 sm:h-screen w-full flex flex-col items-center justify-center bg-cover bg-center text-center px-4"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/joinm.jpg')",
        }}
      >
        {/* Heading */}
        <h1 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter">
          HFF Journey
        </h1>

        {/* Paragraph - Now Below */}
        <p className="text-white text-lg md:text-2xl mt-2 font-medium italic opacity-90">
          "Be the reason for someone’s happiness."
        </p>
      </div>

      <div className="container mx-auto px-4 pt-28 pb-20">
        <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-4xl overflow-hidden shadow-lg">
          {/* 1. Image: Now Top (Mobile) & Left (Desktop) */}
          <div className="w-full md:w-1/2 h-64 md:h-112.5">
            <img
              src="/joinm.jpg"
              alt="HFF Mission"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 2. Text Content: Now Bottom (Mobile) & Right (Desktop) */}
          <div className="w-full md:w-1/2 p-8 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About Us
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              HFF is a humanitarian organization committed to serving people
              without discrimination. We believe in putting humanity first,
              because every individual, regardless of race, religion, or
              nationality, deserves dignity, opportunity, and compassion. Our
              mission is to create meaningful impact in education, healthcare,
              social justice, and ensuring no child goes hungry. In a world
              divided by borders, beliefs, and biases, we choose to see people
              as people first. Before any label, every life holds equal value,
              and that belief shapes everything we stand for and every action we
              take.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-10">
        {/* Section Header */}
        <h2 className="text-center mb-12">
          <span className="inline-block bg-teal-700 text-white text-2xl md:text-3xl font-bold px-10 py-4 rounded-full shadow-md tracking-wide">
            Let’s bring smiles to others.
          </span>
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sapImages.map((image) => (
            <div
              key={image.id}
              className="group overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-700 font-semibold text-center">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-4xl overflow-hidden shadow-lg">
          {/* Left Side: Content */}
          <div className="w-full md:w-1/2 p-8 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Volunteer With Us
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Become a part of the Humanity First Foundation (HFF) family.
              Beyond just volunteering, you are joining a movement of compassion
              that knows no borders. Whether it's comforting a lonely soul or
              uplifting an entire community, your kindness becomes the hope
              someone is praying for today.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeJPQl1awe-mupOUQDcoNjxybBq6NSKCjMPtnbnJozcbujj_Q/viewform?usp=sharing&ouid=113443898129931943522"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-green-700 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
                Join the Mission
              </button>
            </a>
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 h-64 md:h-112.5">
            <img
              src="/join.jpg"
              alt="HFF Mission"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
