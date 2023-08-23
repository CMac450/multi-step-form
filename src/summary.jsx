import React, { useState, useEffect } from 'react';
import './App.css';
import './summary.css';

export function Summary({ activeStepIndex, setActiveStepIndex, billingType, planName, planPrice, StepsComponent, addOn, setAddOn, addOnPrice, setAddOnPrice, addOnDetails, setAddOnDetails }) {



    const [showConfirmation, setShowConfirmation] = useState(false);

    // useEffect(() => {
    //     ///get total price
    //     console.log(`plan name: ${planName}, plan price: ${planPrice}, billing type: ${billingType}`);

    //     const localStorageItem = JSON.parse(localStorage.getItem("add-ons"));
    //     if (localStorageItem.length > 0) {
    //         for (let i = 0; i < localStorageItem.length; i++) {
    //             //nameArray.push(localStorageItem[i].name);
    //             //console.log(localStorageItem[i].price);

    //             let tp = planPrice;
    //             tp += localStorageItem[i].price;
    //             setTotalPrice(tp);

    //         }
    //         //console.log(`totalPrice: ${totalPrice}`);
    //     }
    //     //console.log(`totalPrice: ${totalPrice}`);
    // }, [])



    // console.log(`current step: ${activeStepIndex}`);
    //console.log(addOnDetails)

    // useEffect(() => {
    //     ///get total price
    //     let tp = planPrice;
    //     const localStorageItem = JSON.parse(localStorage.getItem("add-ons"));
    //     if (localStorageItem.length > 0) {
    //         for (let i = 0; i < localStorageItem.length; i++) {
    //             //nameArray.push(localStorageItem[i].name);
    //             console.log(localStorageItem[i].price);
    //             tp += localStorageItem[i].price;
    //         }
    //     }
    //     console.log(`totalPrice: ${tp}`);
    //     setTotalPrice(tp);
    // }, [])

    // let addOns = [];
    // addOns = JSON.parse(localStorage.getItem("add-ons"));
    //console.log(addOns);

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

function SummaryComponent({ StepsComponent, activeStepIndex, setActiveStepIndex, billingType, planName, planPrice, setShowConfirmation, showConfirmation }) {

    const moveToNextStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex + 1);
    }

    const goBackToPreviousStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex - 1);
    }

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        ///get total price
        let tp = planPrice;
        const localStorageItem = JSON.parse(localStorage.getItem("add-ons"));
        if (localStorageItem.length > 0) {
            for (let i = 0; i < localStorageItem.length; i++) {
                //nameArray.push(localStorageItem[i].name);
                console.log(localStorageItem[i].price);
                tp += localStorageItem[i].price;
            }
        }
        console.log(`totalPrice: ${tp}`);
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
                                        {/* <span>${planPrice}/mo</span> */}
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
                                            //console.log(item.name);
                                            return (
                                                <div className='add-on-row-container'>
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
                                <img src="images/icon-checkmark.svg" />
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