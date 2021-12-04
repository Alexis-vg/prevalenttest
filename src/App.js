import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    </Router>
  );
}

export default App;
