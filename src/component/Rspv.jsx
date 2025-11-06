/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const RSVPSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Pop-up will disappear after 3 seconds
  };

  return (
    <div
      className="py-10 text-center relative"
      style={{
        backgroundImage: "url('/images/bg-1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Layer */}
      <div className="relative flex items-center justify-center min-h-screen px-4 py-10">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-xl text-white w-full max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 text-white">RSVP</h2>
          <p className="text-sm mb-6">
            Please help us prepare everything smoothly by confirming your
            attendance.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">
                  How many guests with you?
                </label>
                <input
                  type="number"
                  required
                  className="w-full p-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Will you attend?</label>
              <select
                required
                className="w-full p-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option className="text-black">Yes, I will attend</option>
                <option className="text-black">No, I won’t attend</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Your Notes</label>
              <textarea
                rows="4"
                className="w-full p-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition"
            >
              <FaPaperPlane /> SEND RSVP
            </button>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center"
          >
            <div className="bg-orange-500 text-white py-3 px-6 rounded-md shadow-md text-center max-w-xs">
              <p className="text-sm font-medium">Submission Successful!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const WeddingPage = () => {
  return (
    <div>
      <RSVPSection />
    </div>
  );
};

export default WeddingPage;
