import React, { useState } from "react";

function Contact() {
  const [accordionData, setAccordionData] = useState([
    {
      title:
        "Q: How does Saving Mothers work with healthcare workers who have limited technology experience?",
      content:
        "Saving Mothers is designed with simplicity at its core. Healthcare workers interact with the app using natural voice commands in their local language, eliminating the need for complex typing or navigation. The system guides providers through structured questions during consultations, making it as intuitive as having a conversation. Our extensive field testing with frontline workers ensures the technology adapts to existing workflows rather than disrupting them.",
    },
    {
      title:
        "Q: What makes Saving Mothers more effective than traditional consultations?",
      content:
        "While doctors in traditional settings detect symptoms of conditions like gestational diabetes and hypertension only 9% of the time, Saving Mothers flags these same critical symptoms 44% of the time. The app ensures systematic screening by guiding healthcare workers through comprehensive question sets, preventing crucial symptoms from being overlooked during rushed consultations. Additionally, Saving Mothers creates digital medical records that support better follow-up care and continuity.",
    },
    {
      title:
        "Q: How accessible is Saving Mothers for patients and healthcare facilities with limited resources?",
      content:
        "Saving Mothers operates on standard smartphones and doesn't require expensive equipment or extensive infrastructure. We've also developed a simplified version that works entirely through WhatsApp, allowing patients to complete health screenings before their appointments using any basic smartphone. This approach ensures accessibility even in the most resource-constrained settings, while the voice-enabled interface overcomes literacy barriers that often prevent technology adoption in underserved communities.",
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (index) => {
    setIsOpen(isOpen === index ? -1 : index);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Get in Touch</h1>
        <p className="text-xl text-center text-gray-700 mb-10">
          Have any questions or need assistance? Reach out to us through your
          preferred channel:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Instagram */}
          <div className="flex items-start p-4 border rounded-md shadow-md hover:shadow-lg">
            <img
              className="w-8 h-8 mr-4 mt-1"
              src="/36instagram.png"
              alt="DM us on Instagram"
            />
            <div className="flex flex-col overflow-hidden">
              <span className="text-lg font-semibold">Instagram:</span>
              <a
                href="https://www.instagram.com/humanityfirst.foundation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline break-all"
              >
                Humanity First Foundation
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start p-4 border rounded-md shadow-md hover:shadow-lg">
            <img
              className="w-8 h-8 mr-4 mt-1"
              src="/36gmail.png"
              alt="Email us"
            />
            <div className="flex flex-col overflow-hidden">
              <span className="text-lg font-semibold">Email:</span>
              <a
                href="mailto:murtazahasan276@gmail.com"
                className="text-blue-500 hover:underline break-all"
              >
                Murtazahasan276@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-36">
        <h1 className="font-bold text-center text-3xl mt-16 mb-10">
          Frequently Asked Questions
        </h1>
        {accordionData.map((item, index) => (
          <div key={item.title} className="border-b border-gray-200">
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full p-4 focus:outline-none"
            >
              <span>{item.title}</span>
              <svg
                className={`w-4 h-4 transition transform duration-300 ${
                  index === isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {index === isOpen && (
              <div className="p-4 bg-gray-100">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Contact;
