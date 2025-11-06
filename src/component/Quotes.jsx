/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaQuoteLeft } from "react-icons/fa";

const Quotes = () => {
  const quotes = [
    "And among His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed, in that are signs for a people who give thought (Quran 30:21:)",
    "And marry the unmarried among you and the righteous among your male slaves and female slaves. If they should be poor, Allah will enrich them from His bounty. And Allah is All-Encompassing and All-Knowing. (Quran 24:32)",
    "Marriage is a lifelong journey of learning, forgiveness, and growth. It is not about finding someone perfect, but about committing to love and grow with an imperfect person. — Gary Thomas, Sacred Marriage",
  ];

  return (
    <motion.div
      className="py-16 px-4 bg-cover bg-center text-center"
      style={{ backgroundImage: "url('/images/bg-6.webp')" }} // Sesuaikan path image-nya
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Judul */}
      <motion.h2
        className="text-4xl font-extrabold text-orange-500 mb-8 flex items-center justify-center gap-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <FaHeart className="text-red-500" /> Romantic Quotes
      </motion.h2>

      {/* Deskripsi */}
      <motion.p
        className="text-gray-800 mb-12 text-lg md:text-xl max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Love is the greatest gift of all. Here are some romantic words to
        celebrate our day.
      </motion.p>

      {/* Kartu Kutipan */}
      <motion.div
        className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.3, // Animasi akan dijalankan satu per satu
            },
          },
        }}
      >
        {quotes.map((quote, index) => (
          <motion.div
            key={index}
            className="relative bg-white bg-opacity-90 shadow-2xl p-6 sm:p-8 rounded-lg border-t-4 border-orange-500"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
          >
            <FaQuoteLeft className="absolute top-4 left-4 text-orange-400 text-3xl opacity-20" />
            <p className="italic text-gray-700 text-lg md:text-base">
              &ldquo;{quote}&rdquo;
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Quotes;
