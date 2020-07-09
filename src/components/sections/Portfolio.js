import React from 'react';

const Portfolio = () => {
    return (
        <div className='portfolio mb-lg'>
            <h1 className='heading-1 mb-md'>Portfolio</h1>

            <h2 className="heading-2 mb-md">Projects & Success Stories</h2>

            <div className='portfolio__projects-container mb-md'>
                <div className='portfolio__projects p1 center'>
                    <h2 className='project-title'>
                        New Hire DSS Collaboration
                    </h2>

                    <p className='project-subtitle'>
                        Increase number of New Hire cases with early education classes
                    </p>

                    <a
                        className='project-link'
                        href='https://drive.google.com/file/d/1tlmnX-V2dCaMENTrdKBwCdbkDK1zfmL8/view?usp=sharing'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Link to Presentation
                    </a>
                </div>

                <div className='portfolio__projects p2 center'>
                    <h2 className='project-title'>
                        DSS Education Core
                    </h2>

                    <p className='project-subtitle'>
                        Creating a CORE library for BSIO - basic level training for any level of sales
                    </p>

                    <a
                        className='project-link'
                        href='https://drive.google.com/file/d/1mrXgdQqMN73eriRYNtqgRckVeL2RFqEN/view?usp=sharing'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Link to Presentation
                    </a>
                </div>

                <div className='portfolio__projects p3 center'>
                    <h2 className='project-title'>
                        Success Stories
                    </h2>

                    <p className='project-subtitle'>
                        Customer consultation success stories
                    </p>

                    <a
                        className='project-link'
                        href='https://drive.google.com/file/d/1I_QeNRRnOtiTL-vr3JL0W272EhZ7Q6Df/view?usp=sharing'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Link to Presentation
                    </a>
                </div>
            </div>

            <h2 className="heading-2 mb-md">Strategic Thinking</h2>

            <div className='portfolio__projects-container'>
                <div className='portfolio__projects p4 center'>
                    <h2 className='project-title'>
                        B2B E-Commerce Prospecting
                    </h2>

                    <p className='project-subtitle'>
                        How DSS can be proactive with BSIO B2B e-commerce Opportunities
                    </p>

                    <a
                        className='project-link'
                        href='https://drive.google.com/file/d/1nDlGQ6rswEwneZvctnFj94zk8yKx4u2U/view?usp=sharing'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Link to Presentation
                    </a>
                </div>

                <div className='portfolio__projects p5 center'>
                    <h2 className='project-title'>
                        Shark Tank
                    </h2>

                    <p className='project-subtitle'>
                        Shark Tank presentation on untapped market through social media
                    </p>

                    <a
                        className='project-link'
                        href='https://drive.google.com/file/d/1ZhNKZ9W5xBma86G8p30U0PXQxu7lTuHL/view?usp=sharing'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Link to Presentation
                    </a>
                </div>

                <div className='portfolio__projects p6 center'>
                    <h2 className='project-title'>
                        Finding Opportunities
                    </h2>

                    <p className='project-subtitle'>
                        How DSS can be proactive with BSIO e-commerce customers through search engines and platforms
                    </p>

                    <a
                        className='project-link'
                        href='https://drive.google.com/file/d/1vBSfR7YuYQiroBjw9TqWe-UMMGMx9bDl/view?usp=sharing'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Link to Presentation
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;