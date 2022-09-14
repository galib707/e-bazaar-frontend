import React from "react";
import { Routes, Route } from "react-router";
import Home from "../components/home/Home";
import UploadAd from "../components/uploadAd/UploadAd";
function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadAd />} />
      </Routes>
    </>
  );
}

export default Main;
