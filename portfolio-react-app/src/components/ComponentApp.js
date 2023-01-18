import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import { Outlet } from 'react-router';
import Skills from './Skills/Skills';
import Achievement from './Achievement/Achievement';
import Contact from './Contact/Contact';
import Project from './Project/Project';

const ComponentApp = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Project />
            <Achievement />
            <Contact />
            <Outlet />
        </div>
    )
}

export default ComponentApp;
