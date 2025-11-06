/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FiCamera } from "react-icons/fi";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Galerry = () => {
  const images = [
    { src: "/images/konten/53.jpeg", orientation: "landscape" },
    { src: "/images/konten/21.jpg", orientation: "landscape" },
    { src: "/images/konten/52.jpeg", orientation: "landscape" },

    { src: "/images/konten/22.jpg", orientation: "landscape" },
    { src: "/images/konten/51.jpeg", orientation: "landscape" },
    { src: "/images/konten/20.jpg", orientation: "landscape" },

    { src: "/images/konten/15.jpg", orientation: "landscape" },
    { src: "/images/konten/27.jpg", orientation: "landscape" },
    { src: "/images/konten/16.jpg", orientation: "landscape" },

    { src: "/images/konten/35.jpg", orientation: "landscape" },
    { src: "/images/konten/14.jpg", orientation: "landscape" },
    { src: "/images/konten/36.jpg", orientation: "landscape" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <motion.div
      className="relative py-10 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url('/images/bg-1.webp')` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-white mt-10">
            Our Moments
          </h1>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/l4wcXGRIkuQ?rel=0"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-8">
          <div className="relative flex items-center justify-center">
            <motion.button
              onClick={goToPrev}
              className="absolute left-2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
              whileHover={{ scale: 1.1 }}
            >
              <BiChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.div
              className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${currentIndex * 33.33}%)`,
                }}
              >
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="w-1/3 px-2"
                    style={{ minWidth: "33.33%" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <img
                      src={image.src}
                      alt={`Carousel Image ${index + 1}`}
                      className="w-full object-cover rounded-lg"
                      style={{ aspectRatio: "16/9" }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.button
              onClick={goToNext}
              className="absolute right-2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
              whileHover={{ scale: 1.1 }}
            >
              <BiChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image.src}
                alt={`Moment ${index + 1}`}
                className="w-full h-auto object-cover max-h-64 mx-auto"
                style={{ aspectRatio: "16/9" }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm sm:text-base text-gray-200 max-w-xl mx-auto bg-black bg-opacity-60 p-4 rounded-md">
            Relive the beautiful moments of our journey through our cherished
            photo memories. Every picture holds a story!
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mt-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/detail-memories">
            <motion.button
              className="relative px-6 py-3 text-white rounded-full font-semibold shadow-md hover:opacity-90 transition flex items-center justify-center gap-2 bg-orange-500"
              whileHover={{ scale: 1.1 }}
            >
              <FiCamera className="w-5 h-5" />
              View Moments
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Galerry;
