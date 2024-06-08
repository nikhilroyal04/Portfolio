import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import Button from "../components/Home/Button";

export default function FullLayout() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <Outlet />
      <Footer />
      <Button />
    </div>
  );
}
