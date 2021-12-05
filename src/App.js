import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Header } from "./components";
import Admin from "./pages/Admin";
import AproveCompanies from "./pages/AproveCompanies";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/aprobacion-empresas" element={<AproveCompanies />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
}

export default App;
