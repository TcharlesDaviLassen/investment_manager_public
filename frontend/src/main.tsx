import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import { AuthProvider } from "./context/AuthContext.tsx";
import { Home } from "./pages/Home.tsx";
import { InvestmentTable } from "./pages/InvestmentTable.tsx";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/invest" element={<InvestmentTable />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
