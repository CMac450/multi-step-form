import React, { useState, useEffect } from 'react';
import './App.css';
import './summary.css';

export function Summary({ activeStepIndex, setActiveStepIndex, billingType, planName, planPrice, StepsComponent }) {

    const [showConfirmation, setShowConfirmation] = useState(false);
 
    return (
        <>
            {
                showConfirmation ? (
                    <ConfirmationComponent StepsComponent={StepsComponent} activeStepIndex={activeStepIndex} setActiveStepIndex={setActiveStepIndex} />
                ) : (
                    <SummaryComponent StepsComponent={StepsComponent} activeStepIndex={activeStepIndex} setActiveStepIndex={setActiveStepIndex} billingType={billingType} planName={planName} planPrice={planPrice} setShowConfirmation={setShowConfirmation} showConfirmation={showConfirmation} />
                )
            }
        </>
    )
}

function SummaryComponent({ StepsComponent, activeStepIndex, setActiveStepIndex, billingType, planName, planPrice, setShowConfirmation }) {

    const goBackToPreviousStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex - 1);
    }

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        ///get total price on page load
        let tp = planPrice;
        const localStorageItem = JSON.parse(localStorage.getItem("add-ons"));
        if (localStorageItem.length > 0) {
            for (let i = 0; i < localStorageItem.length; i++) {
                tp += localStorageItem[i].price;
            }
        }
        setTotalPrice(tp);
    }, [])

    let addOns = [];
    addOns = JSON.parse(localStorage.getItem("add-ons"));

    return (
        <>
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
                                        <div id="plan-name-summary"><span className='plan-name-summary-span'>{planName} ({billingType})</span></div>
                                        {billingType === "Monthly" ? (
                                            <div id="plan-price-summary"><span className='plan-price-summary-span'>${planPrice}/mo</span></div>
                                        ) : (
                                            <div id="plan-price-summary"><span className='plan-price-summary-span'>${planPrice}/yr</span></div>
                                        )}
                                    </div>

                                    <div>
                                        <hr />
                                    </div>

                                    {addOns ? (
                                        addOns.map((item, index) => {
                                            return (
                                                <div className='add-on-row-container' key={index}>
                                                    <div className='add-on-row'>
                                                        <div className='add-on-row-left'><span>{item.name}</span></div>
                                                        {billingType === "Monthly" ? (
                                                            <div className='add-on-row-right'><span>+${item.price}/mo</span></div>
                                                        ) : (
                                                            <div className='add-on-row-right'><span>+${item.price}/yr</span></div>
                                                        )}
                                                    </div>
                                                </div>
                                            )
                                        })) : (
                                        <></>
                                    )
                                    }
                                </div>


                            </div>
                            <div className='total'>
                                <div className='total-text'>
                                    {
                                        billingType === "Monthly" ? (
                                            <p>Total (per month)</p>
                                        ) : (
                                            <p>Total (per year)</p>
                                        )
                                    }
                                </div>
                                <div className='total-price'>
                                    {billingType === "Monthly" ? (
                                        <p id="price-amount">${totalPrice}/mo </p>
                                    ) : (
                                        <p id="price-amount">${totalPrice}/yr </p>
                                    )
                                    }

                                </div>
                            </div>
                            <div className='card-body-right-bottom'>
                                <button className='prev-step-btn' label='Next Step' onClick={(e) => { goBackToPreviousStep(activeStepIndex) }}>Go Back</button>
                                <button className='confirm-btn' label='Next Step' onClick={(e) => { setShowConfirmation(true) }}>Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function ConfirmationComponent({ StepsComponent, activeStepIndex }) {
    return (
        <>
            <div className='container'>
                <div className='card'>
                    <div className='card-body'>
                        <StepsComponent activeStepIndex={activeStepIndex} />
                        <div className='card-body-right'>
                            <div className='card-body-right-top-summary'>
                                <img src="/assets/images/icon-thank-you.svg" alt="pink circle with a checkmark centered inside"  />
                                <h1>Thank you!</h1>
                                <p>
                                    Thanks for confirming your subscription! We hope you have fun using our platform.
                                    If you ever need support, please feel free to email us at support@loremgaming.com.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}