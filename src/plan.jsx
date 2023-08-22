import React, { useState, useEffect } from 'react';
import './App.css';
import './plan.css';

export function Plan({ activeStepIndex, setActiveStepIndex, billingType, setBillingType, planName, setPlanName, setPlanPrice, planPrice, StepsComponent }) { //planName, setPlanName, planPrice,

    const moveToNextStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex + 1);
    }

    const goBackToPreviousStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex - 1);
    }

    const [isToggleChecked, setIsToggleChecked] = useState(false);
    //let planName;
    //let planPrice;


    const setMonthlyOrYearly = (val) => {

        const e1 = document.getElementsByClassName("offer");
        if (val) {
            setIsToggleChecked(true);
            document.getElementById("yearly-billing").style.color = "hsl(213, 96%, 18%)";
            document.getElementById("monthly-billing").style.color = "hsl(231, 11%, 63%)";
            setBillingType("Yearly");

            for (let i = 0; i < e1.length; i++) {
                e1[i].style.display = 'inline';
            }

            switch (planName) {
                case "Arcade":
                    setPlanPrice(90);
                    break;

                case "Advanced":
                    setPlanPrice(120);
                    break;

                case "Pro":
                    setPlanPrice(150);
                    break;
            }

        } else if (!val) {
            setIsToggleChecked(false);
            document.getElementById("monthly-billing").style.color = "hsl(213, 96%, 18%)";
            document.getElementById("yearly-billing").style.color = "hsl(231, 11%, 63%)";
            setBillingType("Monthly");

            for (let i = 0; i < e1.length; i++) {
                e1[i].style.display = 'none';
            }

            switch (planName) {
                case "Arcade":
                    setPlanPrice(9);
                    break;

                case "Advanced":
                    setPlanPrice(12);
                    break;

                case "Pro":
                    setPlanPrice(15);
                    break;
            }
        }


    }

    //const [nameOfPlan, setNameOfPlan] = useState("");
    let price;
    let name;

    const setNameOfPlan = (name) => {
        //planName = name;

        switch (name) {
            case "Arcade":
                setPlanName(name);
                break;

            case "Advanced":
                setPlanName(name);
                break;

            case "Pro":
                setPlanName(name);
                break;
        }

        //console.log(`plan name is: ${planName}`);
    }

    const setPlanDetails = (n, p, b) => {
        const planDetails = {
            name: n,
            price: p,
            billing: b,
        }
        //console.log(planDetails);

        if (!localStorage.getItem('plan-details')) {
            localStorage.setItem('plan-details', JSON.stringify([]));
        }

        const localStorageItem = JSON.parse(localStorage.getItem("plan-details"));
        //localStorageItem.push(planDetails);
        console.log(planDetails);
        //localStorage.setItem("plan-details", JSON.stringify(localStorageItem));

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

        //setPlanDetails(planName, planPrice, billingType);

        const planDetails = {
            name: planName,
            price: planPrice,
            billing: billingType,
        }

        if (!localStorage.getItem('plan-details')) {
            localStorage.setItem('plan-details', JSON.stringify([]));
        } 
        // else {
        //     localStorage.removeItem("plan-details");
        // }

        
        const localStorageItem = JSON.parse(localStorage.getItem("plan-details"));
        localStorageItem.push(planDetails);
        console.log(planDetails);

        if (localStorageItem.length < 1) {

        }
        localStorage.setItem("plan-details", JSON.stringify(localStorageItem));

        ////plan-details is being set twice for some reason
        // console.log(planDetails);

        // if (planDetails.length > 1) {

        // }

        // console.log('i fire once');

    }, [billingType, planPrice, planName])

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
                                        <div className='named-plan' id='arcade-plan' onClick={(e) => { setNameOfPlan("Arcade"); billingType === "Monthly" ? setPlanPrice(9) : setPlanPrice(90); }}> {/* setPriceOfPlan(planName) */}
                                            <img src='/assets/images/icon-arcade.svg' />
                                            <p className='plan-name'>Arcade</p>
                                            {isToggleChecked ? (
                                                <p className='price' id="arcade-price">$90/yr</p>) : (
                                                <p className='price' id="arcade-price">$9/mo</p>
                                            )}
                                            <p className='offer'>2 months free</p>
                                        </div>

                                        <div className='named-plan' id='advanced-plan' onClick={(e) => { setNameOfPlan("Advanced"); billingType === "Monthly" ? setPlanPrice(12) : setPlanPrice(120); }}> {/* setPriceOfPlan(planName) */}
                                            <img src='/assets/images/icon-advanced.svg' />
                                            <p className='plan-name'>Advanced</p>
                                            {isToggleChecked ? (
                                                <p className='price' id="advanced-price">$120/yr</p>) : (
                                                <p className='price' id="advanced-price">$12/mo</p>
                                            )}
                                            <p className='offer'>2 months free</p>
                                        </div>

                                        <div className='named-plan' id='pro-plan' onClick={(e) => { setNameOfPlan("Pro"); billingType === "Monthly" ? setPlanPrice(15) : setPlanPrice(150); }}> {/* setPriceOfPlan(planName) */}
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