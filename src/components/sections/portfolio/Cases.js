import React, { useState } from 'react';

const Cases = () => {
    return (
        <div className='cases'>
            <h1 className="heading-2">Freight Cases Worked</h1>

            <p className="cases__description">
                On each case, I walk through with the AE all of the necessary Q&A's to understand the customers <span>Supply Chain</span>.  This will ensure the AE sells on value and not price alone.  After every consultation, I provide a detailed write-up for the AE to keep.  I review the write-up in detail with the AE and let them know that the form provided is to help them with future <span>Freight</span> opportunities.
            </p>

            <div className="cases__container">
                <div className="cases__modal-btn">
                    <button 
                        className="cases__btn"
                    >
                        Carry Manufacturing
                    </button>
                </div>
                
                <div className="cases__modal-btn">
                    <button 
                        className="cases__btn"
                    >
                        Best Buy Bones
                    </button>
                </div>

                <div className="cases__modal-btn">
                    <button 
                        className="cases__btn"
                    >
                        Timeless Wood Care
                    </button>  
                </div>
            </div>
        </div>
    );
};

export default Cases;