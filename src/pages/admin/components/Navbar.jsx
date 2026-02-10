import React from "react";
// Import Framer Motion
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ toggleSidebar }) => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white shadow-sm border-b border-slate-200 h-16 flex items-center justify-between px-6 sticky top-0 z-20"
    >
      <div className="flex items-center gap-4">
        {/* Tombol Hamburger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleSidebar}
          className="md:hidden text-slate-500 text-xl p-2 hover:bg-slate-100 rounded focus:outline-none transition-colors"
        >
          <FontAwesomeIcon icon={faBars} />
        </motion.button>
        <h1 className="text-xl font-bold text-slate-800">Dashboard Overview</h1>
      </div>

      <div className="flex items-center gap-4">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-right hidden sm:block"
        >
          <p className="text-sm font-bold text-slate-800">Ryzz_230</p>
          <p className="text-xs text-slate-500">Administrator</p>
        </motion.div>

        {/* Avatar Placeholder */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 10 }}
          className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 border-2 border-white shadow-sm cursor-pointer"
        >
          <FontAwesomeIcon icon={faUser} />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;
