import React, { useEffect, useState } from 'react';
import './App.css'
import './personalinfo.css'

export function PersonalInfo({ activeStepIndex, setActiveStepIndex, StepsComponent }) {

    const moveToNextStep = (step) => {
        setActiveStepIndex(step + 1);
    }

    // console.log(`current step: ${activeStepIndex}`);
    const [showEmptyFieldError, setShowEmptyFieldError] = useState(true);
    const [showFormatError, setShowFormatError] = useState(true);

    const validateInput = (event) => {
        event.preventDefault();
        let name = document.getElementById('name').value;
        let phone = document.getElementById('phone').value;
        let email = document.getElementById('email').value;
        let emailPattern = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');

        switch (name) {
            case "":
                setShowEmptyFieldError(true);
                setShowFormatError(false);
                document.getElementById("name").style.outline = "1px solid hsl(0, 100%, 67%)";
                document.getElementById("name").style.backgroundColor = "hsla(4, 100%, 80%, 0.26)";
                document.getElementById("name").style.color = "hsl(0, 100%, 67%)";
                console.log('HIT 1: name field is empty');
                break;
            default:
                setShowEmptyFieldError(false);
                setShowFormatError(false);
                document.getElementById("name").style.outline = "1px solid hsl(0, 0%, 83%)";
                document.getElementById("name").style.backgroundColor = "hsla(4, 100%, 80%, 0)";
                document.getElementById("name").style.color = "hsl(0, 0%, 30%)";
                console.log('HIT 2: name field is NOT empty');
                break;
        }

        switch (phone) {
            case "":
                setShowEmptyFieldError(true);
                setShowFormatError(false);
                document.getElementById("phone").style.outline = "1px solid hsl(0, 100%, 67%)";
                document.getElementById("phone").style.backgroundColor = "hsla(4, 100%, 80%, 0.26)";
                document.getElementById("phone").style.color = "hsl(0, 100%, 67%)";
                console.log('HIT 3: phone field is empty');
                break;
            default:
                setShowEmptyFieldError(false);
                setShowFormatError(false);
                document.getElementById("phone").style.outline = "1px solid hsl(0, 0%, 83%)";
                document.getElementById("phone").style.backgroundColor = "hsla(4, 100%, 80%, 0)";
                document.getElementById("phone").style.color = "hsl(0, 0%, 30%)";
                console.log('HIT 4: phone field is NOT empty');
                break;
        }

        switch (email) {
            case "":
                setShowEmptyFieldError(true);
                setShowFormatError(false);
                document.getElementById("email").style.outline = "1px solid hsl(0, 100%, 67%)";
                document.getElementById("email").style.backgroundColor = "hsla(4, 100%, 80%, 0.26)";
                document.getElementById("email").style.color = "hsl(0, 100%, 67%)";
                console.log('HIT 5: email field is empty');
                break;
            default:
                setShowEmptyFieldError(false);
                setShowFormatError(false);
                document.getElementById("email").style.outline = "1px solid hsl(0, 0%, 83%)";
                document.getElementById("email").style.backgroundColor = "hsla(4, 100%, 80%, 0)";
                document.getElementById("email").style.color = "hsl(0, 0%, 30%)";
                console.log('HIT 6: email field is NOT empty');

                switch (emailPattern.test(email)) {
                    case true:
                        setShowFormatError(false);
                        document.getElementById("email").style.outline = "1px solid hsl(0, 0%, 83%)";
                        document.getElementById("email").style.backgroundColor = "hsla(4, 100%, 80%, 0)";
                        document.getElementById("email").style.color = "hsl(0, 0%, 30%)";
                        console.log('HIT 7: email matches pattern');
                        break;
                    case false:
                        setShowEmptyFieldError(false);
                        setShowFormatError(true);
                        document.getElementById("email").style.outline = "1px solid hsl(0, 100%, 67%)";
                        document.getElementById("email").style.backgroundColor = "hsla(4, 100%, 80%, 0.26)";
                        document.getElementById("email").style.color = "hsl(0, 100%, 67%)";
                        console.log('HIT 8: email does NOT match pattern');
                        break;
                }
                break;
        }

        if((showEmptyFieldError && showFormatError) || (showEmptyFieldError || showFormatError)) {
            console.log('your form has errors!');
            console.log(`showEmptyFieldError: ${showEmptyFieldError}`);
            console.log(`showEmptyFieldError: ${showFormatError}`);
        } 
        else {
            console.log(`no errors to report`);
            console.log(`showEmptyFieldError: ${showEmptyFieldError}`);
            console.log(`showEmptyFieldError: ${showFormatError}`);
            moveToNextStep(activeStepIndex);
        }

    }

    return (
        <>
            <h1>Step 1</h1>
            <div className='container'>
                <div className='card'>
                    <div className='card-body'>
                        <StepsComponent activeStepIndex={activeStepIndex} />
                        <div className='card-body-right'>
                            <div className='card-body-right-top'>
                                <h1>Personal info</h1>
                                <p>Please provide your name, email, address, and phone number.</p>

                                <label htmlFor='name' >Name</label>
                                <input type='text' id='name' placeholder='e.g. Stephen King' required></input>

                                <label htmlFor='email'>Email Address</label>
                                <input type='email' id='email' placeholder='e.g. stephenking@lorem.com' required></input>

                                <label htmlFor='phone'>Phone Number</label>
                                <input type='tel' id='phone' placeholder='e.g. +1 234 567 890' required></input>


                            </div>
                            <div className='card-body-right-bottom'>
                                {/* <button className='prev-step-btn' label='Next Step'>Go back</button> */}
                                <button className='next-step-btn' label='Next Step' onClick={(e) => { validateInput(e); }}>Next Step</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}