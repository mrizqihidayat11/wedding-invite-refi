/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Story = () => {
  const stories = [
    {
      date: "28 August 2021",
      title: "Our First Meet",
      description:
        "Fate brought us together at University, where we unknowingly began a journey that would define the rest of our lives. Amid the halls of academia and the pursuit of dreams, we discovered a bond unlike any other. What began as a simple encounter grew into a connection filled with mutual understanding and admiration. It was there, in the heart of shared aspirations, that our story truly began.",
      image: "/images/konten/6.jpg",
    },
    {
      date: "12 July 2023",
      title: "Memorable Moment",
      description:
        "Our journey has been a series of remarkable milestones, each one strengthening the foundation of our bond. From supporting each other through academic challenges to celebrating every achievement together, we’ve faced life’s highs and lows hand in hand. It is in these moments of unwavering support, perseverance, and shared joy that our love story continues to flourish. Each step we take together becomes a testament to our commitment and unity as we grow side by side.",
      image: "/images/konten/21.jpg",
    },
    {
      date: "28 August 2026",
      title: "Engagement",
      description:
        "On a beautiful day, surrounded by the warmth of our loved ones, we sealed our commitment to a lifetime together. The engagement marked not just the promise of marriage but the promise of always supporting, loving, and growing together. It was a moment filled with hope and excitement as we took a step closer to building the future we’ve always dreamed of.",
      image: "/images/konten/31.jpg",
    },
  ];

  return (
    <div
      className="relative py-16 px-6 md:px-16 overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg-1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          ></motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mt-4"
          >
            Our Love Story
          </motion.h2>
        </div>

        <div className="space-y-16">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`md:flex ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
            >
              <motion.img
                src={story.image}
                alt={story.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full md:w-1/2 h-auto md:h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 bg-opacity-75 backdrop-blur-md rounded-lg shadow-lg p-6 md:w-1/2">
                <p className="text-sm text-gray-300 mb-2">{story.date}</p>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {story.title}
                </h3>
                <p className="text-gray-200">{story.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;
