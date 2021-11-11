import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact } from "../Pages/Contact";
import { Projects } from "../Pages/Projects";
import { Landing } from "../Pages/Landing";
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
