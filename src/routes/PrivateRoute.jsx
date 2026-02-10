import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // Cek apakah ada data 'isAdmin' di penyimpanan lokal browser
  const isAuthenticated = localStorage.getItem("isAdmin");

  // Jika ada, izinkan masuk (Outlet). Jika tidak, tendang ke /login
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
