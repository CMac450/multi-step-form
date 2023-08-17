import React, { useState, useEffect } from 'react';
import './App.css';
import './addons.css';

export function Addons({ activeStepIndex, setActiveStepIndex, billingType, planName, planPrice, StepsComponent, addOn, setAddOn, addOnPrice, setAddOnPrice }) {

    const moveToNextStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex + 1);
    }

    const goBackToPreviousStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex - 1);
    }

    // console.log(`billingType: ${billingType}`);
    // console.log(`planName: ${planName}`);
    // console.log(`planPrice: ${planPrice}`);

    // console.log(`current step: ${activeStepIndex}`);

    const setCheckedAddOn = (e) => {
        const parentElement = e.target.parentElement.id;
        switch (e.target.checked) {
            case true:
                document.getElementById(parentElement).style.backgroundColor = "hsl(231, 100%, 99%)";
                document.getElementById(parentElement).style.border = "1px solid hsl(243, 100%, 62%)";
                document.getElementById(parentElement).onmouseout = (function() {
                    this.style.border = "1px solid hsl(243, 100%, 62%)";
                });
                break;
            case false:
                document.getElementById(parentElement).style.backgroundColor = "hsl(0, 0%, 100%)";
                document.getElementById(parentElement).onmouseout = (function () {
                    this.style.border = "1px solid hsl(229, 24%, 87%)";
                });
                document.getElementById(parentElement).onmouseover = (function () {
                    this.style.border = "1px solid hsl(243, 100%, 62%)";
                });
                break;
            default:
                document.getElementById(parentElement).onmouseover = (function () {
                    this.style.border = "1px solid hsl(243, 100%, 62%)"
                });
                break;
        }

        if(billingType === "Monthly" && document.getElementById("online-service")) {
            setAddOn("Online service");
            setAddOnPrice(1);
        } else {
            setAddOnPrice(10);
        }

        if(billingType === "Monthly" && document.getElementById("extra-storage")) {
            setAddOn("Extra Storage");
            setAddOnPrice(2);
        } else {
            setAddOnPrice(20);
        }

        if(billingType === "Monthly" && document.getElementById("customizable-profile")) {
            setAddOn("Customizable profile");
            setAddOnPrice(2);
        } else {
            setAddOnPrice(20);
        }
    }

    // useEffect(() => {

    // }, [])

    return (
        <>
            <h1>Step 3</h1>
            <div className='container'>
                <div className='card'>
                    <div className='card-body'>
                        <StepsComponent activeStepIndex={activeStepIndex} />
                        <div className='card-body-right'>
                            <div className='card-body-right-top'>
                                <h1>Pick add-ons</h1>
                                <p>Add-ons help enhance your gaming experience.</p>

                                <div id='add-on-container'>
                                    <div className='add-on' id="online-service">
                                        <input id="chkbx" type='checkbox' onClick={(e) => { setCheckedAddOn(e) }}></input>
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

                                    <div className='add-on' id="extra-storage">
                                        <input id="chkbx" type='checkbox' onClick={(e) => { setCheckedAddOn(e) }}></input>
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
                                        <input id="chkbx" type='checkbox' onClick={(e) => { setCheckedAddOn(e) }}></input>
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