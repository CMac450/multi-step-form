import React, { useState, useEffect } from 'react';
import './App.css';
import './summary.css';

export function Summary({ activeStepIndex, setActiveStepIndex, billingType, planName, planPrice, StepsComponent, addOn, setAddOn, addOnPrice, setAddOnPrice, addOnDetails, setAddOnDetails }) {

    const moveToNextStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex + 1);
    }

    const goBackToPreviousStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex - 1);
    }

    const [totalPrice, setTotalPrice] = useState(0);

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
    //console.log(addOns);

    return (
        <>
            <h1>Step 4</h1>
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
                                        <span className='plan-name-summary'>{planName} ({billingType})</span>
                                        {/* <span>${planPrice}/mo</span> */}
                                        {billingType === "Monthly" ? (
                                            <span className='plan-price'>${planPrice}/mo</span>
                                        ) : (
                                            <span className='plan-price'>${planPrice}/yr</span>
                                        )}
                                    </div>

                                    <hr />
                                    {addOns ? (
                                        addOns.map((item, index) => {
                                            //console.log(item.name);
                                            return (
                                                <div className='add-on-row-container'>
                                                    <div className='add-on-row'>
                                                        <div className='add-on-row-left'><span>{item.name}</span></div>
                                                        <div className='add-on-row-right'><span>${item.price}</span></div>
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
                                    <p id="price-amount">${totalPrice} {billingType === "Monthly" ? (<p>/mo</p>) : (<p>/yr</p>)}</p>
                                </div>
                            </div>
                            <div className='card-body-right-bottom'>
                                <button className='prev-step-btn' label='Next Step' onClick={(e) => { goBackToPreviousStep(activeStepIndex) }}>Go Back</button>
                                <button className='next-step-btn' label='Next Step' onClick={(e) => { moveToNextStep(activeStepIndex) }}>Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}