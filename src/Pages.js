import React from "react";
import { Routes, Route } from "react-router-dom";
import Payment from "./components/Payment";
import Login from "./components/Login";
import Success from "./pages/Success";
import Checkout from "./pages/Checkout";
import Cancelled from "./pages/Cancelled";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/payment" exact element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancelled />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </div>
  );
};

export default Pages;
