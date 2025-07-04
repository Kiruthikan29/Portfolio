import React from 'react';
import KiruImage from '../assets/Kiruthikan.jpg';


const Home = () => (
  <section className="home1">
    <img src={KiruImage} alt="Profile" className="picture" />
    <h1 className="text1">Hi, I'm Kiruthikan</h1>
    <p className="text2">Computer Engineering Student</p>
    
  </section>
);

export default Home;