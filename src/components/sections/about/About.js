import React from 'react';

const About = () => {
    return (
        <div className='about mb-lg'>
            <h1 className='heading-1 mb-md'>About Me</h1>

            <div className='about__cards-container'>
                <div className='about__card'>
                    <h3 className='heading-3 card-title'>What I Do</h3>

                    <p className='about__card-description'>
                        As a Sales Specialist, I consult with sales executives
                        and customers on eliminating obstacles in day to day
                        functions and grow their online business. I lead the
                        education initiative for the 4 BSI regions.
                    </p>
                </div>

                <div className='about__card'>
                    <h3 className='heading-3 card-title'>Expertise</h3>

                    <ul className='about__card-description about__list'>
                        <li className='about__item'>
                            <i className='fas fa-chevron-right' />
                            E-Commerce specialist
                        </li>
                        <li className='about__item'>
                            <i className='fas fa-chevron-right' />
                            Freight
                        </li>
                        <li className='about__item'>
                            <i className='fas fa-chevron-right' />
                            B2B Supply Chain
                        </li>
                        <li className='about__item'>
                            <i className='fas fa-chevron-right' />
                            Education Lead
                        </li>
                    </ul>
                </div>

                <div className='about__card'>
                    <h3 className='heading-3 card-title'>Family</h3>

                    <p className='about__card-description'>
                        I live in Grand Prairie, Texas with my husband Jeffrey.
                        We have been married for two and a half years and have
                        four children.. Kaylie, Serenity, Cooper, and Sydney.
                    </p>
                </div>

                <div className='about__card'>
                    <h3 className='heading-3 card-title'>Education</h3>

                    <ul className='about__card-description about__list'>
                        <li className='about__item'>
                            <i className='fas fa-chevron-right' />
                            Bachelors in Arts from the University of North Texas
                        </li>
                        <li className='about__item'>
                            <i className='fas fa-chevron-right' />
                            E-Commerce certified through DigitalMarketer
                        </li>
                        <li className='about__item'>
                            <i className='fas fa-chevron-right' />
                            Applied for Masters program at Louisiana State
                            University
                        </li>
                    </ul>
                </div>

                <div className='about__card'>
                    <h3 className='heading-3 card-title'>Myers Briggs Test</h3>

                    <div className='about__card-description'>
                        <p>
                            The Myers-Briggs test is a pseudoscientific
                            intropective self-report questionnaire inidicating
                            differing psychological preferences in how people
                            perceive the world and make decisions. I took the
                            <span>
                                <a
                                    href='https://profiles.mbtionline.com/eedba95eb7.html'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                    className='about__link'
                                >
                                    &nbsp;test&nbsp;
                                </a>
                            </span>
                            in wanting to get a better understanding of my
                            decision making, how others might view me, and how I
                            can collaborate with peer's differences.
                        </p>
                    </div>
                </div>

                <div className='about__card'>
                    <h3 className='heading-3 card-title'>
                        Awards & Recognition
                    </h3>

                    <ul className='about__card-description about__list'>
                        <li className='about__item'>
                            <i className='fas fa-award' />
                            8 BZ Awards
                        </li>
                        <li className='about__item'>
                            <i className='fas fa-award' />
                            Rising Star Q4 2020
                        </li>
                        <li className='about__item'>
                            <i className='fas fa-award' />
                            Director's Commitment to Excellence Award Q1 FY20
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
