import React from 'react';

const About = () => {
    return (
        <div className='about mb-lg'>
            <h1 className='heading-1 mb-md'>About Me</h1>

            <div className='about__cards-container'>
                <div className='about__card a1'>
                    <h3 className='heading-3 card-title'>What I Do</h3>

                    <p className='about__card-description first-card'>
                        As a Sales Specialist, I consult with sales executives
                        and customers on how to eliminate obstacles in day to
                        day functions and grow their online business. Through
                        consultation, I can advise and watch the customers
                        supply chain reach their full potential. I collaborate
                        with my peers and stakeholders within FedEx. As the lead
                        for the EDU platform and my passion for structure,
                        planning, and organization, I am able to coordinate
                        education initiatives for four BSIO regions.
                    </p>
                </div>

                <div className='about__card'>
                    <h3 className='heading-3 card-title'>Expertise</h3>

                    <ul className='about__card-description about__list'>
                        <li className='about__item'>
                            <i className='fas fa-angle-right' />
                            E-Commerce specialist
                        </li>
                        <li className='about__item'>
                            <i className='fas fa-angle-right' />
                            Freight
                        </li>
                        <li className='about__item'>
                            <i className='fas fa-angle-right' />
                            B2B Supply Chain
                        </li>
                        <li className='about__item'>
                            <i className='fas fa-angle-right' />
                            Education Lead
                        </li>
                    </ul>
                </div>

                <div className='about__card'>
                    <h3 className='heading-3 card-title'>Education</h3>

                    <ul className='about__card-description about__list'>
                        <li className='about__item'>
                            <i className='fas fa-angle-right' />
                            Bachelors in Arts from the University of North Texas
                        </li>
                        <li className='about__item'>
                            <i className='fas fa-angle-right' />
                            E-Commerce certified through DigitalMarketer
                        </li>
                        <li className='about__item'>
                            <i className='fas fa-angle-right' />
                            Applied for Masters program at Louisiana State
                            University
                        </li>
                    </ul>
                </div>

                <div className='about__card'>
                    <h3 className='heading-3 card-title'>Future Goals</h3>

                    <dl className='about__card-description about__list'>
                        <dt className='about__item bold'>
                            <i className='fas fa-angle-right' />
                            Be more practive with BSI
                        </dt>
                        <dd className="about__subitem">
                            <i className='fas fa-angle-double-right' />
                            Shark Tank pitch on social media discovery calls
                        </dd>
                        <dd className="about__subitem">
                            <i className='fas fa-angle-double-right' />
                            Google and Shopify search
                        </dd>

                        <dt className='about__item bold'>
                            <i className='fas fa-angle-right' />
                            Blend FedEx Specialties with E-Commerce
                        </dt>
                        <dd className="about__subitem">
                            <i className='fas fa-angle-double-right' />
                            Freight - E-Commerce
                        </dd>
                        <dd className="about__subitem">
                            <i className='fas fa-angle-double-right' />
                            B2B E-Commerce
                        </dd>

                        <dt className='about__item bold'>
                            <i className='fas fa-angle-right' />
                            EDU Platform Podcast
                        </dt>
                        <dd className="about__subitem">
                            <i className='fas fa-angle-double-right' />
                            Introducing more stakeholders to sales floor
                        </dd>
                        <dd className="about__subitem">
                            <i className='fas fa-angle-double-right' />
                            Collaborating more with stakeholders
                        </dd>
                    </dl>
                </div>

                <div className='about__card'>
                    <h3 className='heading-3 card-title'>Family</h3>

                    <div className='about__card-description family'>
                        <div className='family-image'></div>

                        <p className='family-info'>
                            I live in Grand Prairie, Texas with my husband
                            Jeffrey. We have been married for two and a half
                            years and have four children.. Kaylie, Serenity,
                            Cooper, and Sydney.
                        </p>
                    </div>
                </div>

                <div className='about__card'>
                    <h3 className='heading-3 card-title'>
                        Awards & Recognition
                    </h3>

                    <ul className='about__card-description about__list'>
                        <li className='about__item'>
                            <i className='fas fa-award' />8 BZ Awards
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
                                    className='about__link bold'
                                >
                                    &nbsp;test&nbsp;
                                </a>
                            </span>
                            in wanting to get a better understanding of my
                            decision making, how others might view me, and how I
                            can collaborate with my peer's differences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;