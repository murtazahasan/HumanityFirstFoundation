import React from "react";

function Join() {
  return (
    <>
      <div
        className="relative h-80 sm:h-96 w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/join.jpg')",
        }}
      >
        <h1 className="text-white pt-20 text-6xl md:text-8xl font-black uppercase">
          Join Us
        </h1>
      </div>

      <div className="container mx-auto px-4 py-28">
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
              src="/joinm.jpg"
              alt="HFF Mission"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Join;
