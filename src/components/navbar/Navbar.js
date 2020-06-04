import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <p className="navbar__logo">
                rachel<span>DAVIS</span>
            </p>

            <ul className="navbar__list">
                <li className="navbar__item">
                    <Link
                        to='about'
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='navbar__link'
                    >
                        About
                    </Link>
                </li>
                <li className='navbar__item'>
                    <Link
                        to='portfolio'
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='navbar__link'
                    >
                        Portfolio
                    </Link>
                </li>
                <li className='navbar__item'>
                    <Link
                        to='contact'
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='navbar__link'
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;