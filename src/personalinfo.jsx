import React, { useState } from 'react';
import './App.css'
import './personalinfo.css'

export function PersonalInfo({ activeStepIndex, setActiveStepIndex, StepsComponent}) {

    const moveToNextStep = (step) => {
        setActiveStepIndex(step + 1);
    }

    // console.log(`current step: ${activeStepIndex}`);

    return (
        <>
            <h1>Step 1</h1>
            <div className='container'>
                <div className='card'>
                    <div className='card-body'>
                        <StepsComponent activeStepIndex={activeStepIndex}/>
                        <div className='card-body-right'>
                            <div className='card-body-right-top'>
                                <h1>Personal info</h1>
                                <p>Please provide your name, email, address, and phone number.</p>

                                <label htmlFor='name' >Name</label>
                                <input type='text' id='name' placeholder='e.g. Stephen King'></input>

                                <label htmlFor='email'>Email Address</label>
                                <input type='email' id='email' placeholder='e.g. stephenking@lorem.com'></input>

                                <label htmlFor='phone'>Phone Number</label>
                                <input type='phone' id='phone' placeholder='e.g. +1 234 567 890'></input>


                            </div>
                            <div className='card-body-right-bottom'>
                                {/* <button className='prev-step-btn' label='Next Step'>Go back</button> */}
                                <button className='next-step-btn' label='Next Step' onClick={(e) => {moveToNextStep(activeStepIndex)}}>Next Step</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}