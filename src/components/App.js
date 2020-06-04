import React from 'react';
import Navbar from './navbar/Navbar';
import Hero from './sections/Hero';
import About from './sections/about/About';
import Portfolio from './sections/portfolio/Portfolio';
import Contact from './sections/Contact';
import Footer from './Footer';
import '../sass/main.scss';

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Hero />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;