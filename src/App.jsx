
import React from 'react';
import * as reactRouterDom from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
      <reactRouterDom.BrowserRouter>
          <div className="font-sans">
              <Navbar />
              <reactRouterDom.Routes>
                  <reactRouterDom.Route path="/" element={<Home />} />
                  <reactRouterDom.Route path="/about" element={<About />} />
                  <reactRouterDom.Route path="/skills" element={<Skills />} />
                  <reactRouterDom.Route path="/projects" element={<Projects />} />
                  <reactRouterDom.Route path="/contact" element={<Contact />} />
              </reactRouterDom.Routes>
              <Footer />
          </div>
      </reactRouterDom.BrowserRouter>
  );
}

export default App;