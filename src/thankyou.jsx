import React, { useState } from 'react';
import './App.css'

export function Thankyou({ activeStepIndex, setActiveStepIndex }) {

    const moveToNextStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex + 1);
    }

    const goBackToPreviousStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex - 1);
    }

    // console.log(`current step: ${activeStepIndex}`);

    return (
        <>
            <h1>Step 5</h1>
            <div className='container'>
                <div className='card'>
                    <div className='card-body'>
                        <div className='card-body-left'>
                            <div className='steps'>
                                <div className='step-num'><span>1</span></div>
                                <div className='step-description'>
                                    <span>Step 1</span>
                                    <p>Your info</p>
                                </div>
                            </div>

                            <div className='steps'>
                                <div className='step-num'>2</div>
                                <div className='step-description'>
                                    <span>Step 2</span>
                                    <p>Select plan</p>
                                </div>
                            </div>

                            <div className='steps'>
                                <div className='step-num'>3</div>
                                <div className='step-description'>
                                    <span>Step 3</span>
                                    <p>Add-ons</p>
                                </div>
                            </div>

                            <div className='steps'>
                                <div className='step-num'>4</div>
                                <div className='step-description'>
                                    <span>Step 4</span>
                                    <p>Summary</p>
                                </div>
                            </div>
                        </div>
                        <div className='card-body-right'>
                            <h1>Thank you!</h1>
                            <div className='card-body-right-bottom'>
                                <button className='prev-step-btn' label='Next Step' onClick={(e) => {goBackToPreviousStep(activeStepIndex)}}>Go back</button>
                                <button className='next-step-btn' label='Next Step' onClick={(e) => { moveToNextStep(activeStepIndex) }}>Next Step</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}