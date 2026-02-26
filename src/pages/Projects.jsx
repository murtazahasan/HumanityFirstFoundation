import React from "react";

function Projects() {
  const sapImages = [
    { id: 1, src: "/joinm.jpg" },
    { id: 2, src: "/joinm.jpg" },
    { id: 3, src: "/joinm.jpg" },
    { id: 4, src: "/joinm.jpg" },
    { id: 5, src: "/joinm.jpg" },
    { id: 6, src: "/joinm.jpg" },
  ];

  const sapImages2 = [
    { id: 1, src: "/joinm.jpg" },
    { id: 2, src: "/joinm.jpg" },
    { id: 3, src: "/joinm.jpg" },
    { id: 4, src: "/joinm.jpg" },
    { id: 5, src: "/joinm.jpg" },
    { id: 6, src: "/joinm.jpg" },
  ];

  const sapImages2a = [
    { id: 1, src: "/joinm.jpg" },
    { id: 2, src: "/joinm.jpg" },
    { id: 3, src: "/joinm.jpg" },
    { id: 4, src: "/joinm.jpg" },
    { id: 5, src: "/joinm.jpg" },
    { id: 6, src: "/joinm.jpg" },
  ];

  const sapImages2b = [
    { id: 1, src: "/joinm.jpg" },
    { id: 2, src: "/joinm.jpg" },
    { id: 3, src: "/joinm.jpg" },
    { id: 4, src: "/joinm.jpg" },
    { id: 5, src: "/joinm.jpg" },
    { id: 6, src: "/joinm.jpg" },
  ];

  const sapImages2c = [
    { id: 1, src: "/joinm.jpg" },
    { id: 2, src: "/joinm.jpg" },
    { id: 3, src: "/joinm.jpg" },
    { id: 4, src: "/joinm.jpg" },
    { id: 5, src: "/joinm.jpg" },
    { id: 6, src: "/joinm.jpg" },
  ];

  const sapImages3 = [
    { id: 1, src: "/joinm.jpg" },
    { id: 2, src: "/joinm.jpg" },
    { id: 3, src: "/joinm.jpg" },
    { id: 4, src: "/joinm.jpg" },
    { id: 5, src: "/joinm.jpg" },
    { id: 6, src: "/joinm.jpg" },
  ];
  return (
    <>
      <div
        className="relative h-80 sm:h-screen w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/joinm.jpg')",
        }}
      >
        <h1 className="text-white pt-20 text-5xl md:text-8xl font-black uppercase">
          HFF Projects
        </h1>
      </div>

      {/* 1 sap */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-center mb-8">
          <span className="inline-block bg-teal-700 text-white text-2xl sm:text-3xl md:text-4xl font-bold px-10 py-4 rounded-full shadow-md tracking-wide">
            Social Action Project (SAP 1)
          </span>
        </h2>
        <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-4xl overflow-hidden shadow-lg">
          {/* Left Side: Content */}
          <div className="w-full md:w-1/2 p-8 md:p-16">
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Project Purpose is to comprehensively record and highlight the
              challenges, struggles, and obstacles faced by orphanages, while
              also showcasing their accomplishments, milestones, and positive
              impacts on the lives of children in their care. Additionally, to
              raise awareness and inspire support for their ongoing efforts in
              providing a nurturing and secure environment for orphaned
              children. Ultimately, to encourage meaningful contributions toward
              their mission. Furthermore, to emphasize the sustainable growth
              and development of orphanages, ensuring they can expand their
              reach, enhance their facilities, and improve the quality of care
              for every child in need.
            </p>
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

      {/* glimpse sap 1 */}
      <div className="container mx-auto px-4 pb-10">
        {/* Section Header */}
        <h2 className="text-center mb-12">
          <span className="inline-block bg-teal-700 text-white text-2xl md:text-3xl font-bold px-10 py-4 rounded-full shadow-md tracking-wide">
            Few Glimpse (SAP 1)
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
            </div>
          ))}
        </div>
      </div>

      {/* 2 sap */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-center mb-8">
          <span className="inline-block bg-teal-700 text-white text-2xl sm:text-3xl md:text-4xl font-bold px-10 py-4 rounded-full shadow-md tracking-wide">
            Social Action Project (SAP 2)
          </span>
        </h2>
        <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-4xl overflow-hidden shadow-lg">
          {/* Left Side: Content */}
          <div className="w-full md:w-1/2 p-8 md:p-16">
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our Social Action Project at Binte-e-Fatima Old Age Home was
              designed to bring joy, compassion, dignity, and meaningful human
              connection to the elderly residents. The purpose was to engage
              them in diverse and thoughtful activities that promote emotional
              well-being, self-expression, creativity, and a strong sense of
              belonging. We aimed to spread happiness and remind the residents
              that they are valued, loved, respected, and not forgotten by
              creating memorable moments of warmth through art, music,
              storytelling, nature, and celebration. In addition, the project
              sought to encourage intergenerational dialogue, foster community
              spirit, and highlight the importance of empathy and care for the
              elderly in society.
            </p>
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

      {/* glimpse sap 2 */}
      <div className="container mx-auto px-4 pb-10">
        {/* Section Header */}
        <h2 className="text-center mb-12">
          <span className="inline-block bg-teal-700 text-white text-2xl md:text-3xl font-bold px-10 py-4 rounded-full shadow-md tracking-wide">
            Few Glimpse
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
            </div>
          ))}
        </div>
      </div>

      {/* glimpse sap 2a Plantation Drive */}
      <div className="container mx-auto px-4 pb-10">
        {/* Section Header */}
        <h2 className="text-center mb-12">
          <span className="inline-block bg-teal-700 text-white text-2xl md:text-3xl font-bold px-10 py-4 rounded-full shadow-md tracking-wide">
            Few Glimpse of the Plantation Drive{" "}
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
            </div>
          ))}
        </div>
      </div>

      {/* glimpse sap 2b Music Therapy */}
      <div className="container mx-auto px-4 pb-10">
        {/* Section Header */}
        <h2 className="text-center mb-12">
          <span className="inline-block bg-teal-700 text-white text-2xl md:text-3xl font-bold px-10 py-4 rounded-full shadow-md tracking-wide">
            Few Glimpse of the Music Therapy{" "}
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
            </div>
          ))}
        </div>
      </div>

      {/* glimpse sap 2c Art Therapy */}
      <div className="container mx-auto px-4 pb-10">
        {/* Section Header */}
        <h2 className="text-center mb-12">
          <span className="inline-block bg-teal-700 text-white text-2xl md:text-3xl font-bold px-10 py-4 rounded-full shadow-md tracking-wide">
            Few Glimpse of the Art Therapy{" "}
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
            </div>
          ))}
        </div>
      </div>

      {/* 3 sap */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-center mb-8">
          <span className="inline-block bg-teal-700 text-white text-2xl sm:text-3xl md:text-4xl font-bold px-10 py-4 rounded-full shadow-md tracking-wide">
            Social Action Project (SAP 3)
          </span>
        </h2>
        <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-4xl overflow-hidden shadow-lg">
          {/* Left Side: Content */}
          <div className="w-full md:w-1/2 p-8 md:p-16">
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              The main purpose of our visit to Al-Mohsin Orphanage was to bring
              joy, hope, and support to the children through meaningful
              interaction, educational assistance, and environmental awareness.
              Our objectives were to contribute positively by organizing a
              plantation drive, assisting in their academic activities,
              providing donations and thoughtful gifts, and spending quality
              time to make the children feel valued, loved, and empowered. In
              addition, we sought to nurture creativity, build confidence,
              encourage teamwork, and inspire a sense of belonging. Through
              these efforts, we aimed to remind the children that they are an
              important part of society, deserving of care, respect, and
              opportunities for a brighter future.
            </p>
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

      {/* glimpse sap 3 */}
      <div className="container mx-auto px-4 pb-10">
        {/* Section Header */}
        <h2 className="text-center mb-12">
          <span className="inline-block bg-teal-700 text-white text-2xl md:text-3xl font-bold px-10 py-4 rounded-full shadow-md tracking-wide">
            Few Glimpse (SAP 3)
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
