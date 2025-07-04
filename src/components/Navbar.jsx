import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav1">
    <h1 className="text11">Kiruthikan</h1>
    <div className="space">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
