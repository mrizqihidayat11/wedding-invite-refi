/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRegSmile, FaPaperPlane } from "react-icons/fa";

const GuestMessages = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentName, setCurrentName] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("😊");

  const handleSubmit = () => {
    if (currentMessage.trim() !== "" && currentName.trim() !== "") {
      setMessages([
        ...messages,
        { name: currentName, message: currentMessage, emoji: selectedEmoji },
      ]);
      setCurrentMessage("");
      setCurrentName("");
      setSelectedEmoji("😊");
    }
  };

  const emojis = ["😊", "🎉", "❤️", "🌟", "🥳", "💐", "💖", "🙌"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="py-20 px-4 sm:px-8 bg-cover bg-center text-center"
      style={{ backgroundImage: "url('/images/bg-6.webp')" }}
    >
      <motion.div
        className="max-w-sm sm:max-w-md md:max-w-3xl mx-auto bg-white/80 p-6 sm:p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-orange-500 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaRegSmile className="inline-block text-orange-500 mr-2" />
          Guest Wishes
        </motion.h2>
        <motion.p
          className="text-gray-700 text-sm sm:text-base md:text-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Leave your prayers and wishes for the bride and groom!
        </motion.p>
        <div>
          <motion.input
            type="text"
            placeholder="Your Name"
            value={currentName}
            onChange={(e) => setCurrentName(e.target.value)}
            className="w-full mb-3 border rounded-lg p-3 shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800"
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
          <motion.textarea
            placeholder="Write your message here..."
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            className="w-full h-24 sm:h-32 border rounded-lg p-4 mb-3 shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800"
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          ></motion.textarea>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            {emojis.map((emoji, index) => (
              <motion.button
                key={index}
                className={`text-xl sm:text-2xl p-2 rounded-full shadow-sm transition ${
                  selectedEmoji === emoji
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setSelectedEmoji(emoji)}
                whileHover={{ scale: 1.2 }}
              >
                {emoji}
              </motion.button>
            ))}
          </div>
          <motion.button
            onClick={handleSubmit}
            className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 sm:px-6 rounded-full shadow-lg font-medium transition duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPaperPlane className="text-lg" />
            Submit
          </motion.button>
          <div className="mt-8">
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-orange-500 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Guest Messages
            </motion.h3>
            {messages.length > 0 ? (
              <motion.ul
                className="space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {messages.map((msg, index) => (
                  <motion.li
                    key={index}
                    className="bg-white p-3 sm:p-4 rounded-lg shadow-md text-gray-800 text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                  >
                    <p className="font-bold text-orange-500">
                      {msg.name} {msg.emoji}
                    </p>
                    <p>{msg.message}</p>
                  </motion.li>
                ))}
              </motion.ul>
            ) : (
              <motion.p
                className="text-gray-500 text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                No messages yet. Be the first!
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GuestMessages;
