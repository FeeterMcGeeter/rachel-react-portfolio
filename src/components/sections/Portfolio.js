import React from 'react';

const Portfolio = () => {
    return (
        <div className='portfolio mb-lg'>
            <h1 className='heading-1 mb-md'>Portfolio</h1>

            <div className='portfolio__projects'>
                <div className='portfolio__projects-1 center'>
                    <h2 className='project-title'>
                        New Hire / DSS Collaboration
                    </h2>

                    <p className='project-subtitle'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis, eius?
                    </p>

                    <a
                        className='project-link'
                        href='https://drive.google.com/file/d/1FwEdQ-5YWdS8Ja8VXVHUZucqErP6ewA_/view?usp=sharing'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Link to Power Point Presentation
                    </a>
                </div>
                <div className='portfolio__projects-2 center'>
                    <h2 className='project-title'>
                        DSS EDU Roadmap
                    </h2>

                    <p className='project-subtitle'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis, eius?
                    </p>

                    <a
                        className='project-link'
                        href='https://drive.google.com/file/d/1wyAD0oqHCcsurow8XtPx30k-bDxROLfY/view?usp=sharing'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Link to Power Point Presentation
                    </a>
                </div>

                <div className='portfolio__projects-3 center'>
                    <h2 className='project-title'>
                        Strategic BSIO Pricing
                    </h2>

                    <p className='project-subtitle'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis, eius?
                    </p>

                    <a
                        className='project-link'
                        href='https://drive.google.com/file/d/1g4AVn5r6ARwgFeBGBTfKcdd-c53DsDto/view?usp=sharing'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Link to Power Point Presentation
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;