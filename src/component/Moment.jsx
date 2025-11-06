import React from "react";
import { FiCamera } from "react-icons/fi";
import { useEffect } from "react";

const DetailMoment = () => {
  const images = [
    {
      src: "/images/konten/52.jpeg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/51.jpeg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/53.jpeg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/42.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/48.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/49.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/41.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/43.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/37.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },

    {
      src: "/images/konten/35.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/34.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/36.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/30.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/27.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/26.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },

    {
      src: "/images/konten/15.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/16.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/14.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },

    {
      src: "/images/konten/17.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/20.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/22.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/18.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/21.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/19.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },

    {
      src: "/images/konten/13.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/11.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/12.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },

    {
      src: "/images/konten/8.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/9.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/5.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/4.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/2.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
    {
      src: "/images/konten/3.jpg",
      description:
        "A timeless memory of love, where every moment whispers the harmony of two hearts becoming one.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="relative py-10 px-4 bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url('/images/bg-6.webp')`,
      }}
    >
      {/* Overlay Transparan */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Konten Utama */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Header */}
        <div className="text-center mb-10">
          <FiCamera className="w-12 h-12 text-orange-500 mx-auto mt-10" />
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4">
            Moment Details
          </h1>
          <p className="text-gray-300 mt-2">
            Relive the special memories that make our journey unforgettable.
          </p>
        </div>

        {/* Galeri Detail */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md bg-black bg-opacity-30"
            >
              <img
                src={image.src}
                alt={`Moment ${index + 1}`}
                className="w-full h-auto object-cover rounded-t-lg"
                style={{
                  aspectRatio: "16/9",
                }}
              />
              <div className="p-4 text-gray-200">
                <p className="text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto bg-black bg-opacity-60 p-4 rounded-md">
            Thank you for being a part of our journey. Each moment captured here
            is a memory of love, laughter, and togetherness. 💖
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailMoment;
