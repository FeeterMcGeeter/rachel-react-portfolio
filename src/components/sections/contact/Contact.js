import React from 'react';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact__inspiration mb-lg'>
                <blockquote className='contact__quote'>
                    Winning is fun... Sure. But winning is not the point.
                    Wanting to win is the point. Not giving up is the point.
                    Never letting up is the point. Never being satisfied with
                    what you've done is the point.
                    <span><i>Pat Summit</i></span>
                </blockquote>

                <div className='contact__ted-link'>
                    <a
                        href='https://www.ted.com/talks/valorie_kondos_field_why_winning_doesn_t_always_equal_success'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Link to Ted Talk Video
                    </a>
                </div>
            </div>

            <ul className='contact__list mb-lg'>
                <li className='contact__item'>
                    <a
                        className='contact__link'
                        href='https://www.facebook.com/rachel.galloway.524'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <i className='fab fa-facebook-f' />
                    </a>
                </li>
                <li className='contact__item'>
                    <a
                        className='contact__link'
                        href='https://www.instagram.com/raerae_31/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <i className='fab fa-instagram' />
                    </a>
                </li>
                <li className='contact__item'>
                    <a
                        className='contact__link'
                        href='https://www.linkedin.com/in/rachel-davis-34ab4284/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <i className='fab fa-linkedin-in' />
                    </a>
                </li>
                <li className='contact__item'>
                    <a
                        className='contact__link'
                        href='mailto:davismrach@gmail.com'
                    >
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