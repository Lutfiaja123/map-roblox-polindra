import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
  faRightToBracket,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
// 1. Import SweetAlert2
import Swal from "sweetalert2";

const LoginPage = () => {
  const navigate = useNavigate();

  // State untuk form
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // 2. Konfigurasi Toast SweetAlert
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  // Handle perubahan input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (formData.username === "admin" && formData.password === "admin123") {
        localStorage.setItem("isAdmin", "true");
        setIsLoading(false);

        // 3. Tampilkan Toast SUKSES
        Toast.fire({
          icon: "success",
          title: "Login Berhasil",
          text: "Selamat datang kembali, Admin!",
        });

        // Redirect ke dashboard
        navigate("/admin/dashboard");
      } else {
        setIsLoading(false);
        setError("Username atau password salah!");

        // 4. Tampilkan Toast ERROR
        Toast.fire({
          icon: "error",
          title: "Login Gagal",
          text: "Username atau password tidak sesuai.",
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-purple-600/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Login Card Container */}
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden relative z-10 min-h-[500px]">
        {/* LEFT SIDE: Visual / Image */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-900 to-slate-900 relative flex-col justify-between p-10 text-white">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                <FontAwesomeIcon icon={faGamepad} />
              </div>
              <span className="font-bold text-xl tracking-wider">
                VIRTUAL POLINDRA
              </span>
            </div>
            <h2 className="text-4xl font-extrabold leading-tight mb-4">
              Welcome Back, <br /> Administrator.
            </h2>
            <p className="text-blue-200">
              Kelola data gedung, pantau statistik pengunjung, dan atur
              konfigurasi game Roblox dari satu tempat.
            </p>
          </div>

          <div className="relative z-10 text-xs text-blue-300">
            &copy; 2026 Ryzz_230 Development
          </div>
        </div>

        {/* RIGHT SIDE: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-white flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center md:text-left mb-8">
              <h3 className="text-2xl font-bold text-slate-800">Login Akun</h3>
              <p className="text-slate-500 text-sm">
                Masukan kredensial admin kamu untuk masuk.
              </p>
            </div>

            {/* Error Message (Visual tambahan selain Toast) */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm flex items-center gap-2"
              >
                ⚠️ {error}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Username Input */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Username
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-slate-400">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-800"
                    placeholder="Contoh: admin"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-slate-400">
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-11 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-800"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3.5 text-slate-400 hover:text-slate-600 focus:outline-none"
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Lupa password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Memproses...
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faRightToBracket} />
                    Masuk Dashboard
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-slate-500">
              Bukan admin?{" "}
              <Link
                to="/"
                className="text-blue-600 font-semibold hover:underline"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
