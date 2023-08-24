import React, { useState, useEffect } from 'react';
import './App.css';
import './plan.css';

export function Plan({ activeStepIndex, setActiveStepIndex, billingType, setBillingType, planName, setPlanName, setPlanPrice, planPrice, StepsComponent }) {

    const moveToNextStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex + 1);
    }

    const goBackToPreviousStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex - 1);
    }

    const [isToggleChecked, setIsToggleChecked] = useState(false);
    const [isPlanSelected, setIsPlanSelected] = useState(false);
    const [showSelectionError, setShowSelectionError] = useState(false);

    const setMonthlyOrYearly = (val) => {

        const offerText = document.getElementsByClassName("offer");
        //if "yearly" option selected
        if (val) {
            setIsToggleChecked(true);
            document.getElementById("yearly-billing").style.color = "hsl(213, 96%, 18%)";
            document.getElementById("monthly-billing").style.color = "hsl(231, 11%, 63%)";
            setBillingType("Yearly");

            for (let i = 0; i < offerText.length; i++) {
                offerText[i].style.display = 'inline';
            }

            //helps change value of local storage array faster
            switch (planName) {
                case "Arcade":
                    setPlanPrice(90);
                    setIsPlanSelected(true);
                    break;

                case "Advanced":
                    setPlanPrice(120);
                    setIsPlanSelected(true);
                    break;

                case "Pro":
                    setPlanPrice(150);
                    setIsPlanSelected(true);
                    break;
            }

        } else if (!val) {
            setIsToggleChecked(false);
            document.getElementById("monthly-billing").style.color = "hsl(213, 96%, 18%)";
            document.getElementById("yearly-billing").style.color = "hsl(231, 11%, 63%)";
            setBillingType("Monthly");

            for (let i = 0; i < offerText.length; i++) {
                offerText[i].style.display = 'none';
            }

            switch (planName) {
                case "Arcade":
                    setPlanPrice(9);
                    setIsPlanSelected(true);
                    break;

                case "Advanced":
                    setPlanPrice(12);
                    setIsPlanSelected(true);
                    break;

                case "Pro":
                    setPlanPrice(15);
                    setIsPlanSelected(true);
                    break;
            }
        }

        console.log(`val: ${val}`);
    }

    const setNameOfPlan = (name) => {
        switch (name) {
            case "Arcade":
                setPlanName(name);
                setIsPlanSelected(true);
                break;

            case "Advanced":
                setPlanName(name);
                setIsPlanSelected(true);
                break;

            case "Pro":
                setPlanName(name);
                setIsPlanSelected(true);
                break;
        }
    }

    useEffect(() => {
        const planContainer = document.getElementById("plan-types");
        const plans = planContainer.getElementsByClassName("named-plan");

        ////add active class
        for (let i = 0; i < plans.length; i++) {
            plans[i].addEventListener("click", function () {
                let currentPlan = document.getElementsByClassName("active");

                if (currentPlan.length > 0) {
                    currentPlan[0].className = currentPlan[0].className.replace(" active", "");
                }
                this.className += " active";
            });

            ////check if a plan is selected
            if (plans[i].className.includes("active")) {
                setIsPlanSelected(true);
                setShowSelectionError(false);
            }
        }

        ////set name, price, and billing of selected plan
        const planDetails = {
            name: planName,
            price: planPrice,
            billing: billingType,
        }

        if (!localStorage.getItem('plan-details')) {
            localStorage.setItem('plan-details', JSON.stringify([]));
        }

        //////add plan details obj to local storage
        const localStorageItem = JSON.parse(localStorage.getItem("plan-details"));
        localStorageItem.splice(0, 1, planDetails);
        localStorage.setItem("plan-details", JSON.stringify(localStorageItem));

    }, [billingType, planPrice, planName, isPlanSelected])

    return (
        <>
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
                                        <div className='named-plan' id='arcade-plan' onClick={(e) => { setNameOfPlan("Arcade"); billingType === "Monthly" ? setPlanPrice(9) : setPlanPrice(90); }}>
                                            <img src='/assets/images/icon-arcade.svg' alt="orange circle with a white joystick centered inside"/>
                                            <p className='plan-name'>Arcade</p>
                                            {isToggleChecked ? (
                                                <p className='price' id="arcade-price">$90/yr</p>) : (
                                                <p className='price' id="arcade-price">$9/mo</p>
                                            )}
                                            <p className='offer'>2 months free</p>
                                        </div>

                                        <div className='named-plan' id='advanced-plan' onClick={(e) => { setNameOfPlan("Advanced"); billingType === "Monthly" ? setPlanPrice(12) : setPlanPrice(120); }}>
                                            <img src='/assets/images/icon-advanced.svg' alt="pink circle with a remote centered inside"/>
                                            <p className='plan-name'>Advanced</p>
                                            {isToggleChecked ? (
                                                <p className='price' id="advanced-price">$120/yr</p>) : (
                                                <p className='price' id="advanced-price">$12/mo</p>
                                            )}
                                            <p className='offer'>2 months free</p>
                                        </div>

                                        <div className='named-plan' id='pro-plan' onClick={(e) => { setNameOfPlan("Pro"); billingType === "Monthly" ? setPlanPrice(15) : setPlanPrice(150); }}>
                                            <img src='/assets/images/icon-pro.svg' alt="purple circle with a game controller centered inside"/>
                                            <p className='plan-name'>Pro</p>
                                            {isToggleChecked ? (
                                                <p className='price' id="pro-price">$150/yr</p>) : (
                                                <p className='price' id="pro-price">$15/mo</p>
                                            )}
                                            <p className='offer'>2 months free</p>
                                        </div>
                                    </div>
                                    <div className='billing-toggle'>
                                        <p id='monthly-billing'>Monthly</p>
                                        <label className="toggle">
                                            <input type="checkbox" onClick={(e) => { setMonthlyOrYearly(e.target.checked) }} />
                                            <span className="slider round"></span>
                                        </label>
                                        <p id='yearly-billing'>Yearly</p>
                                    </div>
                                </div>
                            </div>
                            {showSelectionError ? (
                                <div id='selection-error'>
                                    <span>Please select a plan</span>
                                </div>
                            ) : (
                                <></>
                            )}
                            <div className='card-body-right-bottom'>
                                <button className='prev-step-btn' onClick={(e) => { goBackToPreviousStep(activeStepIndex) }}>Go back</button>
                                <button className='next-step-btn' onClick={(e) => { isPlanSelected ? moveToNextStep(activeStepIndex) : setShowSelectionError(true) }}>Next Step</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}