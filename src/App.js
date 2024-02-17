import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Products from "./pages/Products";
import PurchaseHistory from "./pages/PurchaseHistory";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" index element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/purchase-history" element={<PurchaseHistory />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
