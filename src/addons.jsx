import React, { useState, useEffect } from 'react';
import './App.css';
import './addons.css';

export function Addons({ activeStepIndex, setActiveStepIndex, billingType, planName, planPrice }) {

    const moveToNextStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex + 1);
    }

    const goBackToPreviousStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex - 1);
    }

    console.log(`billingType: ${billingType}`);

    // console.log(`current step: ${activeStepIndex}`);

    const setCheckedAddOn = (e) => {
        //add-on
        // const addonsContainer = document.getElementById("add-on-container");
        // const addons = addonsContainer.getElementsByClassName("add-on");

        // for(let i=0; i < addons.length; i++) {

        // }
        const parentElement = e.target.parentElement.id;
        if (e.target.checked) {
            console.log(`true`);
            console.log(e.target);
            document.getElementById(parentElement).style.backgroundColor = "hsl(231, 100%, 99%)";
            document.getElementById(parentElement).style.border = "1px solid hsl(243, 100%, 62%)"
        } else if(!e.target.checked) {
            document.getElementById(parentElement).style.backgroundColor = "hsl(0, 0%, 100%)";
        }
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <h1>Step 3</h1>
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
                                <h1>Pick add-ons</h1>
                                <p>Add-ons help enhance your gaming experience.</p>

                                <div id='add-on-container'>
                                    <div className='add-on' id="online-service">
                                        <input id="chkbx" type='checkbox' onClick={(e) => {setCheckedAddOn(e)}}></input>
                                        <div className='add-on-text'>
                                            <p id='heading'>Online service</p>
                                            <p>Access to multiplayer games</p>
                                        </div>
                                        {billingType === "Monthly" ? (
                                            <span className='add-on-price'>+$1/mo</span>
                                        ) : (
                                            <span className='add-on-price'>+$10/yr</span>
                                        )}
                                    </div>

                                    <div className='add-on'id="extra-storage">
                                        <input id="chkbx" type='checkbox' onClick={(e) => {setCheckedAddOn(e)}}></input>
                                        <div className='add-on-text'>
                                            <p id='heading'>Larger storage</p>
                                            <p>Extra 1TB of cloud save</p>
                                        </div>
                                        {billingType === "Monthly" ? (
                                            <span className='add-on-price'>+$2/mo</span>
                                        ) : (
                                            <span className='add-on-price'>+$20/yr</span>
                                        )}
                                    </div>

                                    <div className='add-on' id="customizable-profile">
                                        <input id="chkbx" type='checkbox' onClick={(e) => {setCheckedAddOn(e)}}></input>
                                        <div className='add-on-text'>
                                            <p id='heading'>Customizable profile</p>
                                            <p>Custom theme on your profile</p>
                                        </div>
                                        {billingType === "Monthly" ? (
                                            <span className='add-on-price'>+$2/mo</span>
                                        ) : (
                                            <span className='add-on-price'>+$20/yr</span>
                                        )}
                                    </div>
                                </div>

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