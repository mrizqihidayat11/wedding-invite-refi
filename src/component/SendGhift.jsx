/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FiCopy } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify"; // For notifications
import "react-toastify/dist/ReactToastify.css";

const GiftSection = () => {
  const copyToClipboard = (account) => {
    navigator.clipboard.writeText(account);
    toast.success("Copied successfully!", {
      position: "top-center",
      autoClose: 2000,
      theme: "light",
    });
  };

  return (
    <div
      className="py-10 text-center relative"
      style={{
        backgroundImage: "url('/images/bg-6.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold mb-4 text-orange-400"
        >
          Send Your Gift
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed"
        >
          Celebrate this special moment by sending your gift through one of the
          options below. Choose the method that works best for you!
        </motion.p>

        {/* Gift Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* BCA */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-black bg-opacity-50 shadow-md rounded-md p-3 text-white space-y-2"
          >
            <img src="/images/bank/bca.png" alt="BCA" className="mx-auto h-6" />
            <p className="text-center font-semibold text-sm">Bank BCA</p>
            <p className="text-center text-xs text-gray-100">
              <strong>7790528811</strong>
              <br />
              A/N Refi Nur Ghozi
            </p>
            <button
              onClick={() => copyToClipboard("7790528811")}
              className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 rounded-md flex items-center justify-center gap-2 text-xs font-semibold transition"
            >
              <FiCopy size={14} />
              Copy Account
            </button>
          </motion.div>

          {/* BRI */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-black bg-opacity-50 shadow-md rounded-md p-3 text-white space-y-2"
          >
            <img src="/images/bank/bri.jpg" alt="BRI" className="mx-auto h-6" />
            <p className="text-center font-semibold text-sm">Bank BRI</p>
            <p className="text-center text-xs text-gray-100">
              <strong>643901017910534</strong>
              <br />
              A/N Refi Nur Ghozi
            </p>
            <button
              onClick={() => copyToClipboard("643901017910534")}
              className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 rounded-md flex items-center justify-center gap-2 text-xs font-semibold transition"
            >
              <FiCopy size={14} />
              Copy Account
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-black bg-opacity-50 shadow-md rounded-md p-3 text-white space-y-2"
          >
            <img
              src="/images/bank/cimb.jpg"
              alt="BRI"
              className="mx-auto h-6"
            />
            <p className="text-center font-semibold text-sm">Bank CIMB Niaga</p>
            <p className="text-center text-xs text-gray-100">
              <strong>707741757800</strong>
              <br />
              A/N Refi Nur Ghozi
            </p>
            <button
              onClick={() => copyToClipboard("707741757800")}
              className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 rounded-md flex items-center justify-center gap-2 text-xs font-semibold transition"
            >
              <FiCopy size={14} />
              Copy Account
            </button>
          </motion.div>

          {/* Bank Jatim */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-black bg-opacity-50 shadow-md rounded-md p-3 text-white space-y-2"
          >
            <img
              src="/images/bank/jatim.png"
              alt="Bank Jatim"
              className="mx-auto h-6"
            />
            <p className="text-center font-semibold text-sm">Bank Jatim</p>
            <p className="text-center text-xs text-gray-100">
              <strong>0146048641</strong>
              <br />
              A/N Refi Nur Ghozi
            </p>
            <button
              onClick={() => copyToClipboard("0146048641")}
              className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 rounded-md flex items-center justify-center gap-2 text-xs font-semibold transition"
            >
              <FiCopy size={14} />
              Copy Account
            </button>
          </motion.div>

          {/* Dana */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-black bg-opacity-50 shadow-md rounded-md p-3 text-white space-y-2"
          >
            <img
              src="/images/bank/dana.png"
              alt="Dana"
              className="mx-auto h-6"
            />
            <p className="text-center font-semibold text-sm">Dana</p>
            <p className="text-center text-xs text-gray-100">
              <strong>085748821216</strong>
              <br />
              A/N Refi Nur Ghozi
            </p>
            <button
              onClick={() => copyToClipboard("085748821216")}
              className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 rounded-md flex items-center justify-center gap-2 text-xs font-semibold transition"
            >
              <FiCopy size={14} />
              Copy Account
            </button>
          </motion.div>

          {/* Ovo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-black bg-opacity-50 shadow-md rounded-md p-3 text-white space-y-2"
          >
            <img src="/images/bank/ovo.jpg" alt="Ovo" className="mx-auto h-6" />
            <p className="text-center font-semibold text-sm">Ovo</p>
            <p className="text-center text-xs text-gray-100">
              <strong>085748821216</strong>
              <br />
              A/N Refi Nur Ghozi
            </p>
            <button
              onClick={() => copyToClipboard("085748821216")}
              className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 rounded-md flex items-center justify-center gap-2 text-xs font-semibold transition"
            >
              <FiCopy size={14} />
              Copy Account
            </button>
          </motion.div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default GiftSection;
