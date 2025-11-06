/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const Location = () => {
  return (
    <div
      className="relative text-center"
      style={{
        backgroundImage: "url('/images/bg-1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay untuk gelapkan seluruh background */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Konten utama */}
      <div className="relative z-10 py-10">
        <motion.div
          className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl font-extrabold text-orange-500 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <FaMapMarkerAlt className="inline-block text-red-500 mr-2" />
            Wedding Location
          </motion.h2>
          <motion.p
            className="text-gray-700 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
          >
            Here is the exact location of our wedding. Join us on our special
            day!
          </motion.p>
          <motion.div
            className="relative w-full h-72 rounded-lg overflow-hidden shadow-lg mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <iframe
              src="https://www.google.com/maps?q=7°31'00.3%22S+111°26'43.4%22E&hl=id&z=14&output=embed"
              className="w-full h-full border-0 rounded-lg"
              allowFullScreen=""
              loading="lazy"
              title="Wedding Location"
            ></iframe>
          </motion.div>
          <motion.button
            onClick={() =>
              window.open(
                "https://maps.app.goo.gl/MZM5msYA9EEoTM8F9?g_st=aw",
                "_blank"
              )
            }
            className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Open in Google Maps
            <HiOutlineExternalLink className="text-xl" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Location;
