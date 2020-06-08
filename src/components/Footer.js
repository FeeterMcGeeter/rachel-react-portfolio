import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className='footer'>
            <Link
                to='hero'
                spy={true}
                smooth={true}
                duration={500}
                className='footer__btn-toTop'
            >
                <i className="fas fa-chevron-up" />
            </Link>
        </div>
    );
};

export default Footer;