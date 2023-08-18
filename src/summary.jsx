import React, { useState, useEffect } from 'react';
import './App.css';
import './summary.css';

export function Summary({ activeStepIndex, setActiveStepIndex, billingType, planName, planPrice, StepsComponent, addOn, setAddOn, addOnPrice, setAddOnPrice, addOnDetails, setAddOnDetails }) {

    const moveToNextStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex + 1);
    }

    const goBackToPreviousStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex - 1);
    }

    // console.log(`current step: ${activeStepIndex}`);
    console.log(addOnDetails)

    useEffect(() => {

    }, [])

    return (
        <>
            <h1>Step 4</h1>
            <div className='container'>
                <div className='card'>
                    <div className='card-body'>
                        <StepsComponent activeStepIndex={activeStepIndex} />
                        <div className='card-body-right'>
                            <div className='card-body-right-top-summary'>
                                <h1>Finishing up</h1>
                                <p>Double-check everything looks OK before confirming.</p>

                                <div className='summary-container'>
                                    <div className='plan-details'>
                                        <span className='plan-name-summary'>{planName} ({billingType})</span>
                                        {/* <span>${planPrice}/mo</span> */}
                                        {billingType === "Monthly" ? (
                                            <span className='plan-price'>${planPrice}/mo</span>
                                        ) :(
                                            <span className='plan-price'>${planPrice}/yr</span>
                                        )}
                                    </div>
                                    
                                    <hr />
                                    {addOn}

                                    {}
                                </div>


                            </div>
                            <div className='card-body-right-bottom'>
                                <button className='prev-step-btn' label='Next Step' onClick={(e) => { goBackToPreviousStep(activeStepIndex) }}>Go back</button>
                                <button className='next-step-btn' label='Next Step' onClick={(e) => { moveToNextStep(activeStepIndex) }}>Next Step</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}