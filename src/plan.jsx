import React, { useState } from 'react';
import './App.css';
import './plan.css';

export function Plan({ activeStepIndex, setActiveStepIndex }) {

    const moveToNextStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex + 1);
    }

    const goBackToPreviousStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex - 1);
    }

    const [isToggleChecked, setIsToggleChecked] = useState(false);

    const setBillingType = (val) => {
        // console.log(`e.target.checked: ${val}`);
        if (val) {
            document.getElementById("yearly-billing").style.color = "hsl(213, 96%, 18%)";
            document.getElementById("monthly-billing").style.color = "hsl(231, 11%, 63%)";
            document.getElementsByClassName("offer").style.display = 'inline';
        } else {
            document.getElementById("monthly-billing").style.color = "hsl(213, 96%, 18%)";
            document.getElementById("yearly-billing").style.color = "hsl(231, 11%, 63%)";
            document.getElementsByClassName("offer").style.display = 'none';
        }
    }



    // console.log(`current step: ${activeStepIndex}`);

    return (
        <>
            <h1>Step 2</h1>
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
                                <h1>Select your plan</h1>
                                <p>You have the option of monthly or yearly billing.</p>

                                <div className='plans'>
                                    <div className='plan-types'>
                                        <div className='named-plan' id='arcade-plan'>
                                            <img src='/assets/images/icon-arcade.svg' />
                                            <p>Arcade</p>
                                            <p className='amount'></p>
                                            <span className='offer'>2 months free</span>
                                        </div>

                                        <div className='named-plan' id='advanced-plan'>
                                            <img src='/assets/images/icon-advanced.svg' />
                                            <p>Advnced</p>
                                            <p className='amount'></p>
                                            <span className='offer'>2 months free</span>
                                        </div>

                                        <div className='named-plan' id='pro-plan'>
                                            <img src='/assets/images/icon-pro.svg' />
                                            <p>Pro</p>
                                            <p className='amount'></p>
                                            <span className='offer'>2 months free</span>
                                        </div>
                                    </div>
                                    <div className='billing-toggle'>
                                        <p id=''>Monthly</p>
                                        <label className="toggle">
                                            <input type="checkbox" onClick={(e) => { setBillingType(e.target.checked) }} />
                                            <span className="slider round"></span>
                                        </label>
                                        <p id='yearly-billing'>Yearly</p>
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