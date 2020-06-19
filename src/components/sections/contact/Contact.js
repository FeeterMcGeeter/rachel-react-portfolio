import React from 'react';

const Contact = () => {
    return (
        <div className='contact'>
            <h1 className='heading-1'>Contact</h1>

            <ul className='contact__list mb-md'>
                <li className='contact__item'>
                    <a href='https://www.facebook.com/rachel.galloway.524'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <i className='fab fa-facebook-f' />
                    </a>
                </li>
                <li className='contact__item'>
                    <a href='https://www.facebook.com/rachel.galloway.524'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <i className='fab fa-instagram' />
                    </a>
                </li>
                <li className='contact__item'>
                    <a href='https://www.facebook.com/rachel.galloway.524'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <i className='fab fa-linkedin-in' />
                    </a>
                </li>
                <li className='contact__item'>
                    <a href='https://www.facebook.com/rachel.galloway.524'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <i className='fas fa-envelope' />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;