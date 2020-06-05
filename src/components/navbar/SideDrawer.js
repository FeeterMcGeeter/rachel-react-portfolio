import React from 'react';
import { Link } from 'react-scroll';

const SideDrawer = props => {
    // Set styling based on side drawer open or closed
    let drawerClasses = 'side-drawer';

    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <button 
                className="side-drawer__close"
                onClick={props.click}
            >
                &times;
            </button>
            <ul className="side-drawer__list">
                    <li className="side-drawer__item">
                        <Link
                            to='about'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='side-drawer__link'
                            onClick={props.click}
                        >
                            About
                        </Link>
                    </li>

                    <li className='side-drawer__item'>
                        <Link
                            to='portfolio'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='side-drawer__link'
                            onClick={props.click}
                        >
                            Portfolio
                        </Link>
                    </li>

                    <li className='side-drawer__item'>
                        <Link
                            to='contact'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='side-drawer__link'
                            onClick={props.click}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
        </nav>
    );
};

export default SideDrawer;