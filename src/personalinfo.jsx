import React, { useState } from 'react';
import './App.css'
import './personalinfo.css'

export function PersonalInfo({ activeStepIndex, setActiveStepIndex, StepsComponent }) {

    const moveToNextStep = (step) => {
        setActiveStepIndex(step + 1);
    }

    const [showEmptyNameFieldError, setShowNameEmptyFieldError] = useState(true);
    const [showEmptyPhoneFieldError, setShowEmptyPhoneFieldError] = useState(true);
    const [showEmptyEmailFieldError, setShowEmptyEmailFieldError] = useState(true);
    const [showFormatError, setShowFormatError] = useState(true);
    const [isFormValid, setIsFormValid] =useState(false);


    const validateInput = (event) => {
        event.preventDefault();
        let name = document.getElementById('name').value;
        let phone = document.getElementById('phone').value;
        let email = document.getElementById('email').value;
        let emailPattern = new RegExp('[a-zA-Z0-9]+\.[a-zA-Z0-9]+@lorem\.com');

        switch (name) {
            case "":
                setShowNameEmptyFieldError(true);
                document.getElementById("name").style.outline = "1px solid hsl(0, 100%, 67%)";
                document.getElementById("name").style.backgroundColor = "hsla(4, 100%, 80%, 0.26)";
                document.getElementById("name").style.color = "hsl(0, 100%, 67%)";

                document.getElementById("name-error").style.display = "inline";
                document.getElementById("name-error").style.fontSize = "10px";
                document.getElementById("name-error").style.color = "hsl(0, 100%, 67%)";
            break;
            default:
                setShowNameEmptyFieldError(false);
                document.getElementById("name").style.outline = "1px solid hsl(0, 0%, 83%)";
                document.getElementById("name").style.backgroundColor = "hsla(4, 100%, 80%, 0)";
                document.getElementById("name").style.color = "hsl(0, 0%, 30%)";

                document.getElementById("name-error").style.display = "none";
            break;
        }

        switch (phone) {
            case "":
                setShowEmptyPhoneFieldError(true);
                document.getElementById("phone").style.outline = "1px solid hsl(0, 100%, 67%)";
                document.getElementById("phone").style.backgroundColor = "hsla(4, 100%, 80%, 0.26)";
                document.getElementById("phone").style.color = "hsl(0, 100%, 67%)";

                document.getElementById("phone-error").style.display = "inline";
                document.getElementById("phone-error").style.fontSize = "10px";
                document.getElementById("phone-error").style.color = "hsl(0, 100%, 67%)";
            break;
            default:
                setShowEmptyPhoneFieldError(false);
                document.getElementById("phone").style.outline = "1px solid hsl(0, 0%, 83%)";
                document.getElementById("phone").style.backgroundColor = "hsla(4, 100%, 80%, 0)";
                document.getElementById("phone").style.color = "hsl(0, 0%, 30%)";
                document.getElementById("phone-error").style.display = "none";
            break;
        }

        switch (email) {
            case "":
                setShowEmptyEmailFieldError(true);
                document.getElementById("email").style.outline = "1px solid hsl(0, 100%, 67%)";
                document.getElementById("email").style.backgroundColor = "hsla(4, 100%, 80%, 0.26)";
                document.getElementById("email").style.color = "hsl(0, 100%, 67%)";

                document.getElementById("email-error").style.display = "inline";
                document.getElementById("email-error").style.fontSize = "10px";
                document.getElementById("email-error").style.color = "hsl(0, 100%, 67%)";
                break;
            default:
                setShowEmptyEmailFieldError(false);
                document.getElementById("email").style.outline = "1px solid hsl(0, 0%, 83%)";
                document.getElementById("email").style.backgroundColor = "hsla(4, 100%, 80%, 0)";
                document.getElementById("email").style.color = "hsl(0, 0%, 30%)";
                document.getElementById("email-error").style.display = "none";

                switch (emailPattern.test(email)) {
                    case true:
                        setShowFormatError(false);
                        document.getElementById("email").style.outline = "1px solid hsl(0, 0%, 83%)";
                        document.getElementById("email").style.backgroundColor = "hsla(4, 100%, 80%, 0)";
                        document.getElementById("email").style.color = "hsl(0, 0%, 30%)";
                        document.getElementById("email-format-error").style.display = "none";
                        break;
                    case false:
                        setShowEmptyEmailFieldError(false);
                        setShowFormatError(true);
                        document.getElementById("email").style.outline = "1px solid hsl(0, 100%, 67%)";
                        document.getElementById("email").style.backgroundColor = "hsla(4, 100%, 80%, 0.26)";
                        document.getElementById("email").style.color = "hsl(0, 100%, 67%)";

                        document.getElementById("email-format-error").style.display = "inline";
                        document.getElementById("email-format-error").style.fontSize = "10px";
                        document.getElementById("email-format-error").style.color = "hsl(0, 100%, 67%)";
                        break;
                }
                break;
        }

        if (!showEmptyNameFieldError && !showEmptyPhoneFieldError && !showEmptyEmailFieldError && !showFormatError) {
            moveToNextStep(activeStepIndex);
        } else if (showEmptyNameFieldError || showEmptyPhoneFieldError || showEmptyEmailFieldError || showFormatError) {
            setIsFormValid(false);
        }
    }


    return (
        <>
            <div className='container'>
                <div className='card'>
                    <div className='card-body'>
                        <StepsComponent activeStepIndex={activeStepIndex} />
                        <div className='card-body-right'>
                            <div className='card-body-right-top'>
                                <h1>Personal info</h1>
                                <p>Please provide your name, email, address, and phone number.</p>

                                <label htmlFor='name' >Name</label>
                                <div className='user-info-error' id="name-error">
                                    <span>Name is required</span>
                                </div>
                                <input type='text' id='name' placeholder='e.g. Stephen King' />


                                <label htmlFor='email'>Email Address</label>
                                <div className='user-info-error' id="email-error">
                                    <span>Email address is required</span>
                                </div>
                                <div className='user-info-error' id="email-format-error">
                                    <span>Email must end in '@lorem.com'</span>
                                </div>
                                <input type='email' id='email' placeholder='e.g. stephenking@lorem.com'/>


                                <label htmlFor='phone'>Phone Number</label>
                                <div className='user-info-error' id="phone-error">
                                    <span>Phone is required</span>
                                </div>
                                <input type='tel' id='phone' placeholder='e.g. +1 234 567 890' maxLength={13}/>


                            </div>
                            <div className='card-body-right-bottom'>
                                <button className='next-step-btn' label='Next Step' onClick={(e) => { isFormValid ? moveToNextStep(activeStepIndex) : validateInput(e); }}>Next Step</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}