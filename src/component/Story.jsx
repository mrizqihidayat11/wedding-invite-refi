/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Story = () => {
  const stories = [
   {
  date: "28 August 2023",
  title: "Where It All Began",
  description:
    "Our story began at PT Bisi International, where destiny placed us in the same department. It started with ordinary greetings, small work conversations, and shared laughter in the midst of daily responsibilities. Yet, in those simple exchanges, we found comfort, warmth, and familiarity that gradually grew into something deeper. Among targets, reports, and deadlines, we found not just teamwork — we found each other.",
  image: "/images/konten/refi2.png",
},
{
  date: "12 July 2024",
  title: "A Moment to Remember",
  description:
    "Day by day, we came to understand one another — not through grand gestures, but through sincerity and presence. From helping each other through challenges to celebrating little victories, we learned to care, to support, and to stay. Our bond didn’t bloom overnight; it was nurtured by patience, kindness, and shared resilience. Love grew quietly, gracefully, and beautifully, becoming the foundation of our journey together.",
  image: "/images/konten/refi2.png",
},
{
  date: "06 June 2026",
  title: "The Engagement",
  description:
    "Surrounded by our beloved families, we sealed our promise to build a future together. This engagement is not only a step toward marriage — it is a commitment to continue growing side by side, hand in hand, in every season of life. What once began as colleagues in the same department at PT Bisi International has now become a lifelong partnership. With gratitude and hope, we look forward to writing the next chapters of our story as one.",
  image: "/images/konten/refi2.png",
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
