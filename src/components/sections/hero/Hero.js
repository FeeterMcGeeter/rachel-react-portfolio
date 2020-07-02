import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div className='hero mb-lg'>
            <div className='hero__content'>
                <h1 className='hero__title mb-sm'>Senior Strategic Sales & Support</h1>
                <p className='hero__subtitle mb-md'>
                    I am adaptable to change quickly, collaborate with peers, and demonstrate leadership to stakeholders within many organizations.
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