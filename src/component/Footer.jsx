/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const waNumber = "6282264693559"; // Ganti dengan nomor WhatsApp Anda
  const waMessage =
    "Halo, saya ingin bertanya tentang acara pernikahan kalian☺️";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    waMessage
  )}`;

  return (
    <footer className="bg-gray-900 bg-opacity-80 text-white py-6 text-center">
      <motion.div
        className="max-w-4xl mx-auto backdrop-blur-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <p className="text-sm text-gray-300">
          Thank you for celebrating our special day with us. Your presence is
          the greatest gift.
        </p>
        <h3 className="text-lg font-bold text-orange-400 mt-2">
          Rizqi Hidayat & Anisa Ratna
        </h3>
        <p className="text-sm text-gray-300 mt-1">August 28, 2027</p>
        <div className="flex justify-center space-x-6 mt-4">
          <motion.a
            href="https://www.instagram.com/anisaaa17"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-300 hover:text-orange-400"
          >
            <FaInstagram className="text-xl" />
          </motion.a>
          <motion.a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-300 hover:text-orange-400"
          >
            <FaWhatsapp className="text-xl" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/rizqihidayat_"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-300 hover:text-orange-400"
          >
            <FaInstagram className="text-xl" />
          </motion.a>
        </div>
        <p className="text-xs text-gray-400 mt-4">
          © {currentYear} Muhammad Rizqi Hidayat. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
