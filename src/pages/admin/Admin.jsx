import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import DashboardContent from "./DashboardContent";

const Admin = () => {
  // State untuk mengontrol Sidebar Mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-slate-100 font-sans text-slate-900 overflow-hidden relative">
      {/* 1. Sidebar */}
      {/* Kita oper state 'isOpen' ke Sidebar supaya dia tau kapan harus muncul */}
      <Sidebar
        isOpen={isSidebarOpen}
        isCollapsed={isCollapsed}
        toggleCollapse={() => setIsCollapsed(!isCollapsed)}
      />

      {/* Overlay Gelap (Hanya muncul di Mobile saat sidebar terbuka) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Wrapper Konten Kanan */}
      <div className="flex-1 flex flex-col h-screen w-full transition-all duration-300">
        {/* 2. Navbar */}
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* 3. Konten Utama */}
        <DashboardContent />
      </div>
    </div>
  );
};

export default Admin;
