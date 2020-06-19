import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div className='hero mb-lg'>
            <div className='hero__content'>
                <h1 className='hero__title'>eCommerce Title Stuff Here</h1>
                <p className='hero__subtitle mb-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus laboriosam voluptatum.
                </p>
                <Link 
                    to='portfolio'
                    spy={true}
                    smooth={true}
                    duration={500}
                    className='hero__button'
                >
                    View Portfolio
                </Link>
            </div>
        </div>
    );
};

export default Hero;