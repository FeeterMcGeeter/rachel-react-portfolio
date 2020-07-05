import React from 'react';
import ReactPlayer from 'react-player';

const Inspiration = () => {
    return (
        <div className='inspiration'>
            <h1 className='heading-2 mb-md'>
                Inspiration
            </h1>
            <div className='inspiration__blockquote mb-lg'>
                <blockquote className='inspiration__quote'>
                    Winning is fun... Sure. But winning is not the point.
                    Wanting to win is the point. Not giving up is the point.
                    Never letting up is the point. Never being satisfied with
                    what you've done is the point.
                    <span><i>- Pat Summit</i></span>
                </blockquote>

                <div className='inspiration__player-wrapper'>
                    <ReactPlayer
                        className='inspiration__video'
                        url='https://www.youtube.com/watch?v=JJyeKiT8g4g'
                        controls
                    />
                </div>
            </div>
        </div>
    );
};

export default Inspiration;