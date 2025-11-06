/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black bg-opacity-50 text-white shadow-md fixed w-full z-50">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <span className="mr-2"></span>
      </div>

      {/* Hamburger Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <FiX size={24} className="text-white" />
          ) : (
            <FiMenu size={24} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        className={`absolute top-16 left-0 w-full bg-black bg-opacity-50 text-gray-300 shadow-md p-6 md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <NavLink
          to="/"
          className="block mb-4 hover:text-white transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Welcome
        </NavLink>
        <NavLink
          to="/journey"
          className="block mb-4 hover:text-white transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Our Journey
        </NavLink>
        <NavLink
          to="/memories"
          className="block mb-4 hover:text-white transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Memories
        </NavLink>
        <NavLink
          to="/rsvp-wishes"
          className="block hover:text-white transition"
          onClick={() => setIsMenuOpen(false)}
        >
          RSVP & Wishes
        </NavLink>
      </motion.nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <NavLink to="/" className="text-gray-300 hover:text-white transition">
          Welcome
        </NavLink>
        <NavLink
          to="/journey"
          className="text-gray-300 hover:text-white transition"
        >
          Our Journey
        </NavLink>
        <NavLink
          to="/memories"
          className="text-gray-300 hover:text-white transition"
        >
          Memories
        </NavLink>
        <NavLink
          to="/rsvp-wishes"
          className="text-gray-300 hover:text-white transition"
        >
          RSVP & Wishes
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
