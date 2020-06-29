import React from 'react';

const About = () => {
    return (
        <div className='about mb-lg'>
            <h1 className='heading-1 mb-sm'>
                About Me
            </h1>

            <div className='about__cards-container'>
                <div className='about__card'>
                    <h3 className='heading-3 card-title'>What I Do</h3>

                    <p className='about__card-description'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Debitis suscipit molestias accusamus harum vero,
                        ipsum facilis pariatur excepturi architecto dicta!
                    </p>
                </div>

                <div className='about__card'>
                    <h3 className='heading-3 card-title'>My Philosophy</h3>

                    <p className='about__card-description'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Debitis suscipit molestias accusamus harum vero,
                        ipsum facilis pariatur excepturi architecto dicta!
                    </p>
                </div>

                <div className='about__card'>
                    <h3 className='heading-3 card-title'>Family</h3>

                    <p className='about__card-description'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Debitis suscipit molestias accusamus harum vero,
                        ipsum facilis pariatur excepturi architecto dicta!
                    </p>
                </div>

                <div className='about__card'>
                    <h3 className='heading-3 card-title'>
                        Education & Certifications
                    </h3>

                    <p className='about__card-description'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Debitis suscipit molestias accusamus harum vero,
                        ipsum facilis pariatur excepturi architecto dicta!
                    </p>
                </div>

                <div className='about__card'>
                    <h3 className='heading-3 card-title'>Myers Briggs Test</h3>

                    <div className='about__card-description flex-btn'>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum mollitia quam ab consectetur aperiam perferendis pariatur et fugit repellat adipisci.
                        </p>

                        <div className="flex-push"></div>

                        <a
                            href='https://profiles.mbtionline.com/eedba95eb7.html'
                            rel='noopener noreferrer'
                            target='_blank'
                            className='about__card-button'
                        >
                            Show Results
                        </a>
                    </div>
                </div>

                <div className='about__card'>
                    <h3 className='heading-3 card-title'>
                        Awards & Recognition
                    </h3>

                    <p className='about__card-description'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Debitis suscipit molestias accusamus harum vero,
                        ipsum facilis pariatur excepturi architecto dicta!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;