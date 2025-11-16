// Edura Theme Clone - React + TailwindCSS
// Project Structure Starter
// This file provides the base App + Routing + Layout setup.

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import StudentDashboard from "./components/StudentDashboard";
import Galary from "./pages/Gallery";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<StudentDashboard />}></Route>
      <Route path="/gallery" element={<Galary></Galary>}></Route>
    </Routes>
  );
}
