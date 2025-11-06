/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiPlayCircle } from "react-icons/fi";

const WeddingInvitation = () => {
  const targetDate = new Date("2026-06-06T10:00:00").getTime();

const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

useEffect(() => {
  window.scrollTo(0, 0);
  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      clearInterval(interval);
    }
  }, 1000);

  return () => clearInterval(interval);
}, [targetDate]);


  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/images/bg-6.webp')" }}
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center pt-20"
      >
        <h1 className="text-xl font-extrabold text-orange-500 tracking-wide">
          Refi Nur Ghozi & Bening Sukmaningrum
        </h1>
        <p className="text-gray-700 mt-2 italic text-lg">
          Together with their families, invite you to celebrate their love.
        </p>
      </motion.div>

      {/* Countdown Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="inset-0 bg-black bg-opacity-50 text-white py-10 px-6 rounded-lg shadow-lg mt-10 relative"
      >
        <h2 className="text-3xl font-bold text-center">Wedding Day</h2>
        <motion.div
          className="flex justify-center gap-6 mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center">
            <p className="text-4xl font-bold">{timeLeft.days}</p>
            <p className="text-sm">Days</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">{timeLeft.hours}</p>
            <p className="text-sm">Hours</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">{timeLeft.minutes}</p>
            <p className="text-sm">Minutes</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">{timeLeft.seconds}</p>
            <p className="text-sm">Seconds</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Couple Section */}
      <motion.div
        className="flex flex-col md:flex-row justify-center gap-10 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Bride (Anisa) */}
        <motion.div
          className="text-center order-2 md:order-1"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src="/images/konten/refi.png"
            alt="Bride"
            className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-orange-500 shadow-md mx-auto"
          />
          <h2 className="text-xl md:text-2xl font-semibold mt-4">
            Bening Sukmaningrum
          </h2>
          <p className="text-gray-700 mt-2 text-sm md:text-base"></p>
        </motion.div>

        {/* Groom (Rizqi) */}
        <motion.div
          className="text-center order-1 md:order-2"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src="/images/konten/refi.png"
            alt="Groom"
            className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-orange-500 shadow-md mx-auto"
          />
          <h2 className="text-xl md:text-2xl font-semibold mt-4">
            Refi Nur Ghozi
          </h2>
          <p className="text-gray-700 mt-2 text-sm md:text-base"></p>
        </motion.div>
      </motion.div>

      {/* Event Details */}
      <motion.div
        className="mt-10 text-center bg-white py-6 px-8 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-xl font-semibold text-gray-800">Ceremony</h3>
        <p className="text-gray-700">Thursday, 6 June 2026</p>
        <p className="text-gray-700">10:00 AM at The Grand Hall</p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Reception</h3>
        <p className="text-gray-700">Thursday, 6 June 2026</p>
        <p className="text-gray-700">7:00 PM at The Grand Hall</p>
      </motion.div>

      {/* Live Streaming Button */}
      <motion.div
        className="mt-10 mb-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button className="px-6 py-3 bg-orange-500 text-white rounded-full shadow-lg font-semibold hover:bg-orange-600 transition flex items-center gap-2">
          <FiPlayCircle size={20} /> Live Streaming
        </button>
      </motion.div>
    </div>
  );
};

export default WeddingInvitation;
