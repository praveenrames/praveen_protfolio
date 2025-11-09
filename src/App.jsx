import React, { useState } from "react";
import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Projects from "./pages/Projects/Projectss.jsx";
import Header from "./pages/Header/Header.jsx";
import Hero from "./pages/Hero/Hero.jsx";
import Skills from "./pages/Skills/Skills.jsx";
import Education from "./pages/Education/Education.jsx";
import { Route, Routes } from "react-router-dom";

export default function App() {
    const [isOnePage, setIsOnePage] = useState(false) // Toggle state

    return (
        <>
         <Header />
         {/* Conditional Rendering */}
         {isOnePage ? (
            // One-Page Mode : Render all components together
            <>
             <Hero />
             <Skills />
             <Education />
             <Experience />
             <Contact />
            </>
         ) : (
           // Router Mode: Use routes for navigation
           <Routes>
             <Route path="/" element={<Hero />} />
             <Route path="/skills" element={<Skills />} />
             <Route path="/education" element={<Education />} />
             <Route path="/experience" element={<Experience />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/projects" element={<Projects />} />
           </Routes>
         )}
        </>
    );
}