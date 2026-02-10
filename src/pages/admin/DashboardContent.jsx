import React from "react";
// 1. Import Framer Motion
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faGamepad,
  faThumbsUp,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

const DashboardContent = () => {
  // --- KONFIGURASI ANIMASI ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Jeda 0.1 detik antar elemen
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  // --- DATA ---
  const stats = [
    {
      label: "Total Visits",
      value: "12,543",
      change: "+12%",
      icon: faUsers,
      color: "bg-blue-500",
    },
    {
      label: "Active Players",
      value: "45",
      change: "+5",
      icon: faGamepad,
      color: "bg-green-500",
    },
    {
      label: "Game Likes",
      value: "856",
      change: "+24",
      icon: faThumbsUp,
      color: "bg-pink-500",
    },
    {
      label: "Feedback Masuk",
      value: "12",
      change: "New",
      icon: faCommentDots,
      color: "bg-orange-500",
    },
  ];

  const recentFeedback = [
    {
      user: "Dea",
      msg: "Yang buat ganteng banget",
      date: "2 jam lalu",
      status: "Published",
    },
    {
      user: "Rizal_Pol",
      msg: "Ada bug di parkiran motor, karakter nyangkut.",
      date: "5 jam lalu",
      status: "Fixed",
    },
    {
      user: "DinaAnggra",
      msg: "Mapnya keren banget kak! Mirip aslinya.",
      date: "1 hari lalu",
      status: "Published",
    },
  ];

  return (
    <motion.main
      className="flex-1 overflow-y-auto p-6 bg-slate-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 transition-colors cursor-default"
          >
            <div
              className={`w-12 h-12 rounded-xl ${stat.color} text-white flex items-center justify-center text-xl shadow-lg shadow-blue-500/20`}
            >
              <FontAwesomeIcon icon={stat.icon} />
            </div>
            <div>
              <p className="text-slate-500 text-sm">{stat.label}</p>
              <div className="flex items-end gap-2">
                <h3 className="text-2xl font-bold text-slate-800">
                  {stat.value}
                </h3>
                <span className="text-xs text-green-500 font-medium mb-1">
                  {stat.change}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Chart Section */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg text-slate-800">
              Statistik Pengunjung (Roblox)
            </h3>
            <select className="text-sm border-slate-200 rounded-lg p-2 bg-slate-50 outline-none cursor-pointer hover:bg-slate-100 transition-colors">
              <option>7 Hari Terakhir</option>
              <option>Bulan Ini</option>
            </select>
          </div>

          {/* Grafik dengan Animasi Framer Motion */}
          <div className="h-64 flex items-end justify-between gap-2 px-4 border-b border-l border-slate-200 pb-2">
            {[40, 65, 30, 80, 55, 90, 70].map((h, i) => (
              <div
                key={i}
                className="w-full bg-blue-50/50 rounded-t-lg relative group h-full flex items-end"
              >
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }} // Animasi bar tumbuh
                  className="w-full bg-blue-500 rounded-t-lg relative group-hover:bg-blue-600 transition-colors"
                >
                  {/* Tooltip */}
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded pointer-events-none transition-all z-10 whitespace-nowrap shadow-lg transform translate-y-2 group-hover:translate-y-0">
                    {h * 10} Visits
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-slate-400 mt-2 px-4 font-medium uppercase">
            <span>Sen</span>
            <span>Sel</span>
            <span>Rab</span>
            <span>Kam</span>
            <span>Jum</span>
            <span>Sab</span>
            <span>Min</span>
          </div>
        </motion.div>

        {/* Feedback List */}
        <motion.div
          variants={itemVariants}
          className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
        >
          <h3 className="font-bold text-lg text-slate-800 mb-4">
            Feedback Terbaru
          </h3>
          <div className="space-y-4">
            {recentFeedback.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }} // Muncul belakangan
                className="pb-4 border-b border-slate-50 last:border-0 last:pb-0 hover:bg-slate-50 p-2 rounded-lg transition-colors -mx-2"
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="font-semibold text-sm text-slate-700">
                    {item.user}
                  </span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      item.status === "Fixed"
                        ? "bg-green-100 text-green-600"
                        : item.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="text-sm text-slate-500 line-clamp-2">
                  {item.msg}
                </p>
                <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                  {item.date}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-4 py-2 text-sm text-blue-600 font-bold bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
          >
            Lihat Semua Feedback
          </motion.button>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default DashboardContent;
