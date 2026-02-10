import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Admin from "./pages/admin/Admin";
import LoginPage from "./pages/auth/Login";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/admin/dashboard" element={<Admin />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
