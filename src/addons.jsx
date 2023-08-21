import React, { useState, useEffect } from 'react';
import './App.css';
import './addons.css';

export function Addons({ activeStepIndex, setActiveStepIndex, billingType, StepsComponent }) {

    const moveToNextStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex + 1);
    }

    const goBackToPreviousStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex - 1);
    }

    console.log(JSON.parse(localStorage.getItem("add-ons")));  //////testing

    const setCheckedAddOn = (e) => {
        const parentElementId = e.target.parentElement.id;
        const element = document.getElementById(parentElementId);

        //toggle active class
        element.classList.toggle(`active`);

        //if local storage item not exists, set it
        if (!localStorage.getItem('add-ons')) {
            localStorage.setItem('add-ons', JSON.stringify([]));
        }

        const localStorageItem = JSON.parse(localStorage.getItem("add-ons")); // || [];
        

        switch (e.target.checked) {
            case true:
                document.getElementById(parentElementId).style.backgroundColor = "hsl(231, 100%, 99%)";
                document.getElementById(parentElementId).style.border = "1px solid hsl(243, 100%, 62%)";
                document.getElementById(parentElementId).onmouseout = (function () {
                    this.style.border = "1px solid hsl(243, 100%, 62%)";
                });


                const addOnContainer = document.getElementById("add-on-container");
                const activeElements = addOnContainer.getElementsByClassName("active");
                let a;
                let ap;


                // //if local storage item not exists, set it //////moving to top of script so that it updates automatically or in a useEffect
                // if (!localStorage.getItem('add-ons')) {
                //     localStorage.setItem('add-ons', JSON.stringify([]));
                // }

                // const localStorageItem = JSON.parse(localStorage.getItem("add-ons")); // || [];
                const nameArray = [];

                switch (parentElementId) {
                    case "online-service":
                        a = "Online service";
                        switch (billingType) {
                            case "Monthly":
                                ap = 1;
                                break;
                            case "Yearly":
                                ap = 10;
                                break;
                        }

                        let array1 = { name: a, price: ap };

                        if (localStorageItem.length > 0) {
                            for (let i = 0; i < localStorageItem.length; i++) {
                                nameArray.push(localStorageItem[i].name);
                            }

                            if (!nameArray.includes(a)) {
                                localStorageItem.push(array2);
                                localStorage.setItem("add-ons", JSON.stringify(localStorageItem));
                            }

                        } else {
                            localStorageItem.push(array1);
                            localStorage.setItem("add-ons", JSON.stringify(localStorageItem));
                        }

                        break;
                    case "extra-storage":
                        a = "Extra storage";
                        switch (billingType) {
                            case "Monthly":
                                ap = 2;
                                break;
                            case "Yearly":
                                ap = 20;
                                break;
                        }

                        let array2 = { name: a, price: ap };
                        if (localStorageItem.length > 0) {
                            for (let i = 0; i < localStorageItem.length; i++) {
                                nameArray.push(localStorageItem[i].name);
                            }

                            if (!nameArray.includes(a)) {
                                localStorageItem.push(array2);
                                localStorage.setItem("add-ons", JSON.stringify(localStorageItem));
                            }

                        } else {
                            localStorageItem.push(array2);
                            localStorage.setItem("add-ons", JSON.stringify(localStorageItem));
                        }
                        break;
                    case "customizable-profile":
                        a = "Customizable profile";
                        switch (billingType) {
                            case "Monthly":
                                ap = 2;
                                break;
                            case "Yearly":
                                ap = 20;
                                break;
                        }

                        let array3 = { name: a, price: ap }
                        if (localStorageItem.length > 0) {
                            for (let i = 0; i < localStorageItem.length; i++) {
                                nameArray.push(localStorageItem[i].name);
                            }

                            if (!nameArray.includes(a)) {
                                localStorageItem.push(array3);
                                localStorage.setItem("add-ons", JSON.stringify(localStorageItem));
                            }

                        } else {
                            localStorageItem.push(array3);
                            localStorage.setItem("add-ons", JSON.stringify(localStorageItem));
                        }

                        break;
                }

                break;

            case false:
                document.getElementById(parentElementId).style.border = "1px solid hsl(229, 24%, 87%)";
                document.getElementById(parentElementId).style.backgroundColor = "hsl(0, 0%, 100%)";
                document.getElementById(parentElementId).onmouseout = (function () {
                    this.style.border = "1px solid hsl(229, 24%, 87%)";
                });
                document.getElementById(parentElementId).onmouseover = (function () {
                    this.style.border = "1px solid hsl(243, 100%, 62%)";
                });

                //let a;
                // let ap;


                // //if local storage item not exists, set it
                // if (!localStorage.getItem('add-ons')) {
                //     localStorage.setItem('add-ons', JSON.stringify([]));
                // }

                let localStorageCopy =[]; //= [...localStorageItem];
                let names = [];
                let serviceToRemove;
                let indexPosInStorage;

                switch (parentElementId) {
                    

                    case "online-service":
                        serviceToRemove = "Online service";

                        // let array1 = { name: a, price: ap };

                        // if (localStorageItem.length > 0) {
                        //     for (let i = 0; i < localStorageItem.length; i++) {
                        //         nameArray.push(localStorageItem[i].name);
                        //     }

                        //     if (!nameArray.includes(a)) {
                        //         localStorageItem.push(array2);
                        //         localStorage.setItem("add-ons", JSON.stringify(localStorageItem));
                        //     }

                        // } else {
                        //     localStorageItem.push(array1);
                        //     localStorage.setItem("add-ons", JSON.stringify(localStorageItem));
                        // }
                        // console.log(`localStorageItem: ${localStorage.getItem('add-ons')}`);
                        //localStorageCopy.push([...localStorageItem]);
                        //console.log(`localStorageCopy: ${localStorageCopy}`);

                        
                        
                        if (localStorageItem.length > 0) {
                            for (let i = 0; i < localStorageItem.length; i++) {
                                names.push(localStorageItem[i].name);
                                console.log(localStorageItem[i]);

                                const arrayItem = localStorageItem[i];
                                //indexPosStorage = localStorageItem.find((element) => element[i].name === a);

                                if(arrayItem.name === serviceToRemove) {
                                    // console.log('HIT');
                                    
                                    console.log(`index of ${arrayItem.name}: ${localStorageItem.indexOf(arrayItem)}`);

                                    ////might have to do this with a copt of localstorage and them set it to this value
                                    indexPosInStorage = localStorageItem.indexOf(arrayItem);
                                    localStorageItem.splice(indexPosInStorage, 1);

                                    localStorage.setItem("add-ons", JSON.stringify(localStorageItem));
                                }
                            }
                        }
                        console.log(localStorageItem);
                        

                        break;
                    case "extra-storage":
                        serviceToRemove = "Extra storage";
                        if (localStorageItem.length > 0) {
                            for (let i = 0; i < localStorageItem.length; i++) {
                                names.push(localStorageItem[i].name);
                                console.log(localStorageItem[i]);

                                const arrayItem = localStorageItem[i];
                                //indexPosStorage = localStorageItem.find((element) => element[i].name === a);

                                if(arrayItem.name === serviceToRemove) {
                                    // console.log('HIT');
                                    
                                    console.log(`index of ${arrayItem.name}: ${localStorageItem.indexOf(arrayItem)}`);

                                    ////might have to do this with a copt of localstorage and them set it to this value
                                    indexPosInStorage = localStorageItem.indexOf(arrayItem);
                                    localStorageItem.splice(indexPosInStorage, 1);

                                    localStorage.setItem("add-ons", JSON.stringify(localStorageItem));
                                }
                            }
                        }
                        break;
                    case "customizable-profile":
                        serviceToRemove = "Customizable profile";                     
                        if (localStorageItem.length > 0) {
                            for (let i = 0; i < localStorageItem.length; i++) {
                                names.push(localStorageItem[i].name);
                                console.log(localStorageItem[i]);

                                const arrayItem = localStorageItem[i];
                                //indexPosStorage = localStorageItem.find((element) => element[i].name === a);

                                if(arrayItem.name === serviceToRemove) {
                                    // console.log('HIT');
                                    
                                    console.log(`index of ${arrayItem.name}: ${localStorageItem.indexOf(arrayItem)}`);

                                    ////might have to do this with a copt of localstorage and them set it to this value
                                    indexPosInStorage = localStorageItem.indexOf(arrayItem);
                                    localStorageItem.splice(indexPosInStorage, 1);

                                    localStorage.setItem("add-ons", JSON.stringify(localStorageItem));
                                }
                            }
                        }
                        break;
                }

                break;
        }
    }

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
                                        <input id="chkbx" type='checkbox'
                                            onClick={(e) => {
                                                setCheckedAddOn(e);
                                            }}
                                        />
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
                                        <input id="chkbx" type='checkbox'
                                            onClick={(e) => {
                                                setCheckedAddOn(e);
                                            }}
                                        />
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
                                        <input id="chkbx" type='checkbox'
                                            onClick={(e) => {
                                                setCheckedAddOn(e);
                                            }}
                                        />
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