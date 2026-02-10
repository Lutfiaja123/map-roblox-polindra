import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faBuilding,
  faNewspaper,
  faComments,
  faGear,
  faRightFromBracket,
  faChevronLeft,
  faChevronRight,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";

const Sidebar = ({ isOpen, isCollapsed, toggleCollapse }) => {
  const navigate = useNavigate();

  // --- LOGOUT LOGIC ---
  const handleLogout = () => {
    Swal.fire({
      title: "Logout?",
      text: "Sesi anda akan berakhir.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("isAdmin");
        navigate("/login");
      }
    });
  };

  return (
    <motion.aside
      // Mengatur lebar berdasarkan state isCollapsed
      animate={{
        width: isCollapsed ? "80px" : "256px",
        transition: { duration: 0.3, type: "spring", stiffness: 100 },
      }}
      className={`
        fixed inset-y-0 left-0 z-30 bg-slate-900 text-white shadow-xl
        md:relative flex flex-col
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
    >
      {/* --- HEADER --- */}
      <div className="h-20 flex items-center justify-center border-b border-slate-800 relative">
        {/* Logo / Title */}
        <div className="flex items-center gap-2 overflow-hidden px-4">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
            <FontAwesomeIcon icon={faGamepad} />
          </div>

          {/* Teks Title (Hilang saat collapsed) */}
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="whitespace-nowrap overflow-hidden"
              >
                <h2 className="text-xl font-bold tracking-wider text-blue-400 ml-2">
                  ADMIN
                </h2>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tombol Collapse (Desktop Only) */}
        {/* Posisi absolute di perbatasan kanan */}
        <button
          onClick={toggleCollapse}
          className="hidden md:flex absolute -right-3 top-8 w-6 h-6 bg-blue-600 rounded-full items-center justify-center text-xs border-2 border-slate-800 hover:bg-blue-500 transition-colors z-50"
        >
          <FontAwesomeIcon
            icon={isCollapsed ? faChevronRight : faChevronLeft}
          />
        </button>
      </div>

      {/* --- MENU LIST --- */}
      <nav className="flex-1 p-3 space-y-2 overflow-y-auto overflow-x-hidden mt-2">
        <MenuItem
          href="#"
          icon={faChartPie}
          label="Dashboard"
          isCollapsed={isCollapsed}
          active
        />
        <MenuItem
          href="#"
          icon={faBuilding}
          label="Gedung"
          isCollapsed={isCollapsed}
        />
        <MenuItem
          href="#"
          icon={faNewspaper}
          label="Berita"
          isCollapsed={isCollapsed}
        />
        <MenuItem
          href="#"
          icon={faComments}
          label="Feedback"
          isCollapsed={isCollapsed}
        />

        <div className="pt-6 border-t border-slate-800 mt-4">
          {!isCollapsed && (
            <p className="px-4 text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-2 animate-pulse">
              Settings
            </p>
          )}
          <MenuItem
            href="#"
            icon={faGear}
            label="Config"
            isCollapsed={isCollapsed}
          />
        </div>
      </nav>

      {/* --- FOOTER (LOGOUT) --- */}
      <div className="p-3 border-t border-slate-800 bg-slate-900">
        <button
          onClick={handleLogout}
          className={`
            flex items-center gap-3 px-3 py-3 rounded-xl transition-colors w-full text-red-400 hover:bg-slate-800
            ${isCollapsed ? "justify-center" : ""}
          `}
          title="Logout"
        >
          <FontAwesomeIcon icon={faRightFromBracket} className="w-5 h-5" />

          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="whitespace-nowrap overflow-hidden"
              >
                Logout
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.aside>
  );
};

// --- KOMPONEN MENU ITEM ---
const MenuItem = ({ href, icon, label, isCollapsed, active = false }) => {
  return (
    <a
      href={href}
      className={`
        flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 group
        ${active ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" : "text-slate-400 hover:bg-slate-800 hover:text-white"}
        ${isCollapsed ? "justify-center" : ""}
      `}
      title={isCollapsed ? label : ""} // Tampilkan tooltip native saat collapsed
    >
      <FontAwesomeIcon icon={icon} className="w-5 h-5 shrink-0" />

      {/* Teks Label dengan Animasi */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2 }}
            className="whitespace-nowrap overflow-hidden"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Tooltip Kustom (Opsional: Muncul di sebelah kanan saat collapsed) */}
      {isCollapsed && (
        <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-xl border border-slate-700">
          {label}
        </div>
      )}
    </a>
  );
};

export default Sidebar;
