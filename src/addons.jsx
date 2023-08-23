import React, { useEffect } from 'react';
import './App.css';
import './addons.css';

export function Addons({ activeStepIndex, setActiveStepIndex, billingType, StepsComponent }) {

    const moveToNextStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex + 1);
    }

    const goBackToPreviousStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex - 1);
    }

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

                let item;
                let itemPrice;

                const nameArray = [];

                switch (parentElementId) {
                    case "online-service":
                        item = "Online service";
                        switch (billingType) {
                            case "Monthly":
                                itemPrice = 1;
                                break;
                            case "Yearly":
                                itemPrice = 10;
                                break;
                        }

                        let onlineAddOnDetails = { name: item, price: itemPrice };
                        //check length of storage array
                        if (localStorageItem.length > 0) {
                            for (let i = 0; i < localStorageItem.length; i++) {
                                //push all name values into new array
                                nameArray.push(localStorageItem[i].name);
                            }

                            //if new array doesn't include add-on service name, 
                            //then push the service details into local storage
                            if (!nameArray.includes(item)) {
                                localStorageItem.push(onlineAddOnDetails);
                                localStorage.setItem("add-ons", JSON.stringify(localStorageItem));
                            }

                            //
                        } else {
                            localStorageItem.push(onlineAddOnDetails);
                            localStorage.setItem("add-ons", JSON.stringify(localStorageItem));
                        }

                        break;
                    case "extra-storage":
                        item = "Extra storage";
                        switch (billingType) {
                            case "Monthly":
                                itemPrice = 2;
                                break;
                            case "Yearly":
                                itemPrice = 20;
                                break;
                        }

                        let storageAddOnDetails = { name: item, price: itemPrice };
                        if (localStorageItem.length > 0) {
                            for (let i = 0; i < localStorageItem.length; i++) {
                                nameArray.push(localStorageItem[i].name);
                            }

                            if (!nameArray.includes(item)) {
                                localStorageItem.push(storageAddOnDetails);
                                localStorage.setItem("add-ons", JSON.stringify(localStorageItem));
                            }

                        } else {
                            localStorageItem.push(storageAddOnDetails);
                            localStorage.setItem("add-ons", JSON.stringify(localStorageItem));
                        }
                        break;
                    case "customizable-profile":
                        item = "Customizable profile";
                        switch (billingType) {
                            case "Monthly":
                                itemPrice = 2;
                                break;
                            case "Yearly":
                                itemPrice = 20;
                                break;
                        }

                        let profileAddOnDetails = { name: item, price: itemPrice }
                        if (localStorageItem.length > 0) {
                            for (let i = 0; i < localStorageItem.length; i++) {
                                nameArray.push(localStorageItem[i].name);
                            }

                            if (!nameArray.includes(item)) {
                                localStorageItem.push(profileAddOnDetails);
                                localStorage.setItem("add-ons", JSON.stringify(localStorageItem));
                            }

                        } else {
                            localStorageItem.push(profileAddOnDetails);
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

                let serviceToRemove;
                let indexPosInStorage;
                ////remove add-on from storage array on checked = false and set updated value of array
                switch (parentElementId) {
                    case "online-service":
                        serviceToRemove = "Online service";

                        if (localStorageItem.length > 0) {
                            for (let i = 0; i < localStorageItem.length; i++) {
                                const arrayItem = localStorageItem[i];

                                if (arrayItem.name === serviceToRemove) {
                                    indexPosInStorage = localStorageItem.indexOf(arrayItem);
                                    localStorageItem.splice(indexPosInStorage, 1);
                                    localStorage.setItem("add-ons", JSON.stringify(localStorageItem));
                                }
                            }
                        }
                        break;
                    case "extra-storage":
                        serviceToRemove = "Extra storage";
                        if (localStorageItem.length > 0) {
                            for (let i = 0; i < localStorageItem.length; i++) {
                                const arrayItem = localStorageItem[i];

                                if (arrayItem.name === serviceToRemove) {
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
                                const arrayItem = localStorageItem[i];

                                if (arrayItem.name === serviceToRemove) {
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

    useEffect(() => {
        ///check for add-ons storage item
        ///if value exists, get name and match to id
        ///set id checkbox to have checked property/css
        //if local storage item not exists, set it
        if (!localStorage.getItem('add-ons')) {
            localStorage.setItem('add-ons', JSON.stringify([]));
        }
        let localStorageItem = JSON.parse(localStorage.getItem("add-ons"));
        const addOn1 = document.getElementById("online-service");
        const cbox1 = document.getElementById("checkbox-online");
        const addOn2 = document.getElementById("extra-storage");
        const cbox2 = document.getElementById("checkbox-storage");
        const addOn3 = document.getElementById("customizable-profile");
        const cbox3 = document.getElementById("checkbox-profile");
        let addOnList = [];

        if (localStorageItem.length > 0) {
            for (let i = 0; i < localStorageItem.length; i++) {
                const arrayItem = localStorageItem[i].name;
                addOnList.push(arrayItem);
            }

            if (addOnList.includes("Online service")) {
                addOn1.style.backgroundColor = "hsl(231, 100%, 99%)";
                addOn1.style.border = "1px solid hsl(243, 100%, 62%)";
                addOn1.onmouseout = (function () {
                    this.style.border = "1px solid hsl(243, 100%, 62%)";
                });
                cbox1.checked = true;
            }

            if (addOnList.includes("Extra storage")) {
                addOn2.style.backgroundColor = "hsl(231, 100%, 99%)";
                addOn2.style.border = "1px solid hsl(243, 100%, 62%)";
                addOn2.onmouseout = (function () {
                    this.style.border = "1px solid hsl(243, 100%, 62%)";
                });
                cbox2.checked = true;
            }

            if (addOnList.includes("Customizable profile")) {
                addOn3.style.backgroundColor = "hsl(231, 100%, 99%)";
                addOn3.style.border = "1px solid hsl(243, 100%, 62%)";
                addOn3.onmouseout = (function () {
                    this.style.border = "1px solid hsl(243, 100%, 62%)";
                });
                cbox3.checked = true;
            }
        }
    }, [])

    return (
        <>
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
                                        <input id="checkbox-online" type='checkbox'
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
                                        <input id="checkbox-storage" type='checkbox'
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
                                        <input id="checkbox-profile" type='checkbox'
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