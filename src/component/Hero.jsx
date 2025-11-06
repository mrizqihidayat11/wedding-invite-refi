/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "./Header";
import { Link } from "react-router-dom";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2027-08-01T10:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full h-screen bg-cover bg-center">
      <Header />
      <img
        src="/images/bg-1.webp"
        alt="Wedding Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center pt-56 pb-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 text-center max-w-md w-full"
        >
          <motion.div
            className="flex items-center justify-center mb-6"
            variants={itemVariants}
          >
            <img
              src="/images/bg-1.webp"
              alt="Wedding Icon"
              className="w-12 h-12"
            />
          </motion.div>
          <motion.h1
            className="text-3xl font-bold text-orange-400 mb-2"
            variants={itemVariants}
          >
            The Wedding Of
          </motion.h1>
          <motion.h2
            className="text-xl font-extrabold text-white"
            variants={itemVariants}
          >
            M Rizqi Hidayat & Anisa Ratna N
          </motion.h2>

          <motion.div
            className="grid grid-cols-4 gap-4 mt-8"
            variants={containerVariants}
          >
            <motion.div className="text-center" variants={itemVariants}>
              <p className="text-2xl font-bold text-white">{timeLeft.days}</p>
              <p className="text-sm text-gray-300">Days</p>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <p className="text-2xl font-bold text-white">{timeLeft.hours}</p>
              <p className="text-sm text-gray-300">Hours</p>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <p className="text-2xl font-bold text-white">
                {timeLeft.minutes}
              </p>
              <p className="text-sm text-gray-300">Minutes</p>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <p className="text-2xl font-bold text-white">
                {timeLeft.seconds}
              </p>
              <p className="text-sm text-gray-300">Seconds</p>
            </motion.div>
          </motion.div>

          <motion.div className="mt-6" variants={itemVariants}>
            <p className="text-white text-sm">Dear Sir / Madam</p>
            <input
              type="text"
              placeholder="Alumni HMIF UNEJ"
              className="mt-2 w-full p-2 rounded-md text-black text-center"
            />
          </motion.div>

          <Link to="/journey">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition flex items-center justify-center gap-2"
            >
              <FaEnvelopeOpenText size={20} />
              Open Invitation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
