import React from "react";
import { Link } from "react-router-dom";
// 1. Import Framer Motion
import { motion } from "framer-motion"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGamepad, 
  faBuildingColumns, 
  faUsers, 
  faMoon, 
  faMapLocationDot, 
  faMotorcycle, 
  faArrowRight, 
  faPlay,
  faCheckCircle,
  faLaptopCode
} from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  // --- VARIANTS ANIMASI (Pengaturan Gerakan) ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Jeda 0.2 detik antar item
      }
    }
  };

  // --- DATA GEDUNG ---
  const buildings = [
    {
      title: "Gedung Direktorat",
      desc: "Pusat administrasi kampus. Gedung utama tempat rektorat dan layanan akademik. Dimodelkan dengan presisi arsitektur 1:1.",
      img: "https://placehold.co/600x400/1e293b/ffffff?text=Gedung+Direktorat"
    },
    {
      title: "Student Center",
      desc: "Pusat kegiatan mahasiswa (UKM). Fasilitas lengkap dengan ruang serbaguna, panggung, dan area santai untuk berkumpul.",
      img: "https://placehold.co/600x400/334155/ffffff?text=Student+Center"
    },
    {
      title: "Lab Teknik Informatika",
      desc: "Markas anak IT, RPL, SIKC dan TRK. Ruangan penuh PC, server, dan jaringan. Detail interior mencakup meja coding dan papan tulis.",
      img: "https://placehold.co/600x400/475569/ffffff?text=Lab+Informatika"
    },
    {
      title: "Lab Teknik Pendingin",
      desc: "Area praktek RHVAC. Dilengkapi simulasi mesin pendingin, tata udara, dan alat-alat bengkel yang realistis.",
      img: "https://placehold.co/600x400/64748b/ffffff?text=Lab+Pendingin"
    },
    {
      title: "Lab Teknik Mesin",
      desc: "Workshop industri besar. Berisi mesin bubut, CNC, dan alat berat lainnya yang disimulasikan secara visual.",
      img: "https://placehold.co/600x400/94a3b8/ffffff?text=Lab+Mesin"
    },
    {
      title: "Gedung Keperawatan",
      desc: "Fasilitas kesehatan simulasi. Termasuk ruang rawat inap, lab anatomi, dan peralatan medis standar rumah sakit.",
      img: "https://placehold.co/600x400/cbd5e1/ffffff?text=Gedung+Keperawatan"
    },
    {
      title: "Masjid",
      desc: "Sarana ibadah kampus yang megah. Tempat yang tenang dengan detail arsitektur kubah dan area wudhu.",
      img: "https://placehold.co/600x400/e2e8f0/ffffff?text=Masjid+Kampus"
    },
    {
      title: "Kantin",
      desc: "Area sosial paling ramai. Tempat makan dengan berbagai stand makanan dan meja bundar untuk roleplay makan siang.",
      img: "https://placehold.co/600x400/f1f5f9/ffffff?text=Kantin+Utama"
    }
  ];

  // --- DATA FITUR ---
  const features = [
    {
      title: "Roleplay Mahasiswa",
      icon: faUsers,
      desc: "Simulasi kehidupan kampus yang nyata. Hadiri kelas, nongkrong di kantin, dan berinteraksi dengan player lain."
    },
    {
      title: "Sistem Kendaraan",
      icon: faMotorcycle,
      desc: "Jelajahi luasnya kampus Polindra menggunakan motor atau sepeda dengan fisika berkendara yang responsif."
    },
    {
      title: "Siklus Siang/Malam",
      icon: faMoon,
      desc: "Visual dinamis dengan pencahayaan realistis. Kampus terasa hidup baik di siang hari maupun malam hari."
    },
    {
      title: "Minimap & Navigasi",
      icon: faMapLocationDot,
      desc: "Sistem UI peta canggih untuk membantu mahasiswa baru (maba) menemukan gedung dan ruangan kelas."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto text-white"
      >
        <div className="text-2xl font-bold tracking-wider flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
            <FontAwesomeIcon icon={faGamepad} className="text-sm" />
          </div>
          VIRTUAL<span className="text-blue-400">POLINDRA</span>
        </div>
        <div className="flex gap-4">
          <a href="https://www.roblox.com/id/games/87289775676522/Politeknik-Negeri-Indramayu" target="_blank" rel="noreferrer" className="hidden md:inline-block px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm font-medium backdrop-blur-sm">
            Play on Roblox
          </a>
        </div>
      </motion.nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
           <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.5 }}
            src="https://placehold.co/1920x1080/0f172a/ffffff?text=CINEMATIC+MAP+SHOT" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <motion.div 
          className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold mb-6 backdrop-blur-md uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Official Skripsi Project
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
            Jelajahi Kampus <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Tanpa Batas Fisik
            </span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Digital Twin Politeknik Negeri Indramayu. Eksplorasi detail arsitektur, lingkungan, dan suasana kampus dalam simulasi 3D interaktif.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://www.roblox.com/id/games/87289775676522/Politeknik-Negeri-Indramayu"
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <FontAwesomeIcon icon={faPlay} />
              <span>Mainkan Sekarang</span>
            </a>
            <a href="#features" className="px-8 py-4 text-slate-300 hover:text-white font-semibold transition-colors flex items-center gap-2">
              Lihat Fitur <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* --- STATS STRIP --- */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="bg-slate-900 border-y border-slate-800 relative z-20 -mt-20 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800 bg-slate-800/50 backdrop-blur-xl">
          {[
            { icon: faCheckCircle, val: "100%", label: "Akurasi Layout", col: "text-blue-500" },
            { icon: faBuildingColumns, val: "8+", label: "Gedung Utama", col: "text-purple-500" },
            { icon: faLaptopCode, val: "RPL", label: "Karya Mahasiswa", col: "text-cyan-500" },
            { icon: faUsers, val: "Open", label: "Untuk Umum", col: "text-green-500" }
          ].map((stat, idx) => (
            <div key={idx} className="p-6 text-center group hover:bg-slate-800 transition-colors">
              <FontAwesomeIcon icon={stat.icon} className={`${stat.col} text-2xl mb-2 group-hover:scale-110 transition-transform`} />
              <div className="text-3xl font-bold text-white">{stat.val}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* --- BUILDINGS SHOWCASE --- */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Eksplorasi <span className="text-blue-600 underline decoration-4 decoration-blue-200">Gedung Kampus</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Setiap sudut kampus direplikasi ke dunia digital. Berikut adalah daftar fasilitas utama yang dapat kamu kunjungi.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {buildings.map((item, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-4">
                  <span className="text-white text-xs font-bold uppercase tracking-wider">Lihat Detail ↗</span>
                </div>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Side: Content */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Gameplay Features</h4>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Lebih Dari Sekadar <br/> Visual 3D
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Map ini dirancang untuk pengalaman Roleplay yang imersif. Dilengkapi dengan sistem scripting Luau untuk interaksi yang kompleks.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 text-lg">
                      <FontAwesomeIcon icon={feature.icon} />
                    </div>
                    <h4 className="font-bold text-slate-800 mb-1">{feature.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Side: Showcase Image */}
            <motion.div 
              className="lg:w-1/2 w-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src="https://placehold.co/800x600/1e293b/ffffff?text=Interaksi+Roleplay+Roblox" 
                  alt="Gameplay Preview" 
                  className="relative rounded-2xl shadow-2xl border-4 border-slate-900 transform transition duration-500 hover:scale-[1.01]"
                />
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 text-green-600 p-2 rounded-full">
                      <FontAwesomeIcon icon={faGamepad} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase">Status Server</p>
                      <p className="text-sm font-bold text-slate-800">Online & Stabil</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Siap Menjadi Mahasiswa Virtual?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan pemain lainnya, eksplorasi kampus, dan bantu kembangkan proyek ini dengan memberikan feedback.
            </p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.roblox.com/id/games/87289775676522/Politeknik-Negeri-Indramayu"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl"
            >
              <FontAwesomeIcon icon={faPlay} />
              Buka di Roblox
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-1">Virtual Polindra</h3>
            <p className="opacity-70">Tugas Akhir / Skripsi Mahasiswa RPL.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 font-medium">
            <a href="#" className="hover:text-white transition-colors">Tentang Proyek</a>
            <a href="#" className="hover:text-white transition-colors">Dokumentasi</a>
            <a href="#" className="hover:text-white transition-colors">Kontak Developer</a>
          </div>

          <div className="text-center md:text-right">
            <p>&copy; 2026 Developed by <span className="text-blue-400 font-bold">Ryzz_230</span> (Bima).</p>
            <p className="text-slate-600 text-xs mt-1">Politeknik Negeri Indramayu</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;