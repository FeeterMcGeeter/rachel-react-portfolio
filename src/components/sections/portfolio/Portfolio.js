import React from 'react';
import Cases from './Cases';
import Projects from './Projects';

const Portfolio = () => {
    return (
        <div className='portfolio mb-lg'>
            <h1 className="heading-1">Portfolio</h1>
            
            <Cases />
            <Projects />
        </div>
    );
};

export default Portfolio;