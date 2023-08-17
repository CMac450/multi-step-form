import React, { useState, useEffect } from 'react';
import './App.css';
import './plan.css';

export function Plan({ activeStepIndex, setActiveStepIndex, setBillingType, setPlanName, setPlanPrice, StepsComponent }) {

    const moveToNextStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex + 1);
    }

    const goBackToPreviousStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex - 1);
    }

    const [isToggleChecked, setIsToggleChecked] = useState(false);


    const setMonthlyOrYearly = (val) => {

        // console.log(`e.target.checked: ${val}`); 
        const e1 = document.getElementsByClassName("offer");
        // const e2 = document.getElementsByClassName("price");
        if (val) {
            setIsToggleChecked(true);
            document.getElementById("yearly-billing").style.color = "hsl(213, 96%, 18%)";
            document.getElementById("monthly-billing").style.color = "hsl(231, 11%, 63%)";
            setBillingType("Yearly");

            for (let i = 0; i < e1.length; i++) {
                e1[i].style.display = 'inline';
            }
        } else if (!val) {
            setIsToggleChecked(false);
            document.getElementById("monthly-billing").style.color = "hsl(213, 96%, 18%)";
            document.getElementById("yearly-billing").style.color = "hsl(231, 11%, 63%)";
            setBillingType("Monthly");

            for (let i = 0; i < e1.length; i++) {
                e1[i].style.display = 'none';
            }
        }
    }

    useEffect(() => {
        const planContainer = document.getElementById("plan-types");
        const plans = planContainer.getElementsByClassName("named-plan");

        for (let i = 0; i < plans.length; i++) {
            plans[i].addEventListener("click", function () {
                let currentPlan = document.getElementsByClassName("active");

                if (currentPlan.length > 0) {
                    currentPlan[0].className = currentPlan[0].className.replace(" active", "");
                }
                this.className += " active";
            });
        }
    }, [])

    // console.log(`current step: ${activeStepIndex}`);

    return (
        <>
            <h1>Step 2</h1>
            <div className='container'>
                <div className='card'>
                    <div className='card-body'>
                        <StepsComponent activeStepIndex={activeStepIndex} />
                        <div className='card-body-right'>
                            <div className='card-body-right-top'>
                                <h1>Select your plan</h1>
                                <p>You have the option of monthly or yearly billing.</p>

                                <div className='plans'>
                                    <div id='plan-types'>
                                        <div className='named-plan' id='arcade-plan'> {/*onClick={(e) => {selectPlan(e.target)}}     selectPlan(e.target.id) */}
                                            <img src='/assets/images/icon-arcade.svg' />
                                            <p className='plan-name'>Arcade</p>
                                            {isToggleChecked ? (
                                                <p className='price' id="arcade-price">$90/yr</p>) : (
                                                <p className='price' id="arcade-price">$9/mo</p>
                                            )}
                                            <p className='offer'>2 months free</p>
                                        </div>

                                        <div className='named-plan' id='advanced-plan'>
                                            <img src='/assets/images/icon-advanced.svg' />
                                            <p className='plan-name'>Advanced</p>
                                            {isToggleChecked ? (
                                                <p className='price' id="advanced-price">$120/yr</p>) : (
                                                <p className='price' id="advanced-price">$12/mo</p>
                                            )}
                                            <p className='offer'>2 months free</p>
                                        </div>

                                        <div className='named-plan' id='pro-plan'>
                                            <img src='/assets/images/icon-pro.svg' />
                                            <p className='plan-name'>Pro</p>
                                            {isToggleChecked ? (
                                                <p className='price' id="pro-price">$150/yr</p>) : (
                                                <p className='price' id="pro-price">$15/mo</p>
                                            )}
                                            <p className='offer'>2 months free</p>
                                        </div>
                                    </div>
                                    <div className='billing-toggle'>
                                        {/* <div className='toggle-row'> */}
                                        <p id='monthly-billing'>Monthly</p>
                                        <label className="toggle">
                                            <input type="checkbox" onClick={(e) => { setMonthlyOrYearly(e.target.checked) }} />
                                            <span className="slider round"></span>
                                        </label>
                                        <p id='yearly-billing'>Yearly</p>
                                        {/* </div> */}
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