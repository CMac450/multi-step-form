import React, { useState } from 'react';
import './App.css'

export function Summary({ activeStepIndex, setActiveStepIndex, billingType, planName, planPrice }) {

    const moveToNextStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex + 1);
    }

    const goBackToPreviousStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex - 1);
    }

    // console.log(`current step: ${activeStepIndex}`);

    return (
        <>
            <h1>Step 4</h1>
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
                            <div className='card-body-right-top'>
                                <h1>Finishing up</h1>
                                <p>Please provide your name, email, address, and phone number.</p>

                                <label htmlFor='name' >Name</label>
                                <input type='text' id='name' placeholder='e.g. Stephen King'></input>

                                <label htmlFor='email'>Email Address</label>
                                <input type='email' id='email' placeholder='e.g. stephenking@lorem.com'></input>

                                <label htmlFor='phone'>Phone Number</label>
                                <input type='phone' id='phone' placeholder='e.g. +1 234 567 890'></input>


                            </div>
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