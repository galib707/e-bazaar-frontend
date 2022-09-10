import React from "react";
import { Routes, Route } from "react-router";
import Home from "../components/home/Home";

function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default Main;
