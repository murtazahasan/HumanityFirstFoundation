import React, { useState } from "react";

function Contact() {
  const [accordionData, setAccordionData] = useState([
    {
      title:
        "Q: What is Humanity First Foundation (HFF), and what is its mission?",
      content:
        "HFF is a humanitarian organization committed to serving people without discrimination. We believe in putting humanity first, because every individual, regardless of race, religion, or nationality, deserves dignity, opportunity, and compassion. Our mission is to create meaningful impact in education, healthcare, social justice, and ensuring no child goes hungry. In a world divided by borders, beliefs, and biases, we choose to see people as people first. Before any label, every life holds equal value, and that belief shapes everything we stand for and every action we take.",
    },
    {
      title: "Q: How can we join HFF as a volunteer?",
      content:
        "You can join HFF by submitting the Join Us form available on our website. Once received, our team will connect with you to guide you through the onboarding process and match you with projects that align with your skills and passion.",
    },
    {
      title: "Q: How can we donate to HFF?",
      content:
        "You can support our mission by donating through our secure online portal, direct bank transfer, or at our designated collection points. As a foundation built on transparency, we provide digital receipts for every contribution, ensuring your support directly fuels our education, healthcare, and hunger-relief initiatives.",
    },
    {
      title: "Q: How can we collaborate with HFF?",
      content:
        "Collaboration is at the heart of our work. Organizations, institutions, and individuals can partner with HFF by reaching out through our Contact Us page. Whether it’s joint projects, sponsorships, or community initiatives, we welcome partnerships that amplify impact and bring sustainable change.",
    },
    {
      title: "Q: How does HFF ensure transparency and accountability?",
      content:
        "We operate with full transparency and strict accountability. Every donation is tracked, every project is documented, and regular updates are shared with our community. We believe that trust is earned through action, and we live by that standard every day.",
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (index) => {
    setIsOpen(isOpen === index ? -1 : index);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div
          className="relative h-80 w-full flex flex-col items-center justify-center bg-cover bg-center mb-12 rounded-4xl"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/contact.jpg')",
          }}
        >
          <h1 className="text-white text-4xl font-bold text-center mb-4">
            Get in Touch
          </h1>
          <p className="text-white text sm:text-xl text-center max-w-2xl px-4 opacity-90">
            Have any questions or need assistance? Reach out to us through your
            preferred channel.
          </p>
        </div>

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
