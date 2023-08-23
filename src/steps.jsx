import React, { useEffect } from 'react';
import './App.css'

export function StepsComponent({ activeStepIndex }) {

    useEffect(() => {
        switch (activeStepIndex) {
            case 0:
                document.getElementById("step-one").style.fontWeight = 'bold';
                document.getElementById("step-one").style.color = 'hsl(213, 96%, 18%)';
                document.getElementById("step-one").style.backgroundColor = 'hsl(206, 94%, 87%)';
                document.getElementById("step-one").style.border = '1px solid hsl(206, 94%, 87%)';
            break;
            case 1:
                document.getElementById("step-two").style.fontWeight = 'bold';
                document.getElementById("step-two").style.color = 'hsl(213, 96%, 18%)';
                document.getElementById("step-two").style.backgroundColor = 'hsl(206, 94%, 87%)';
                document.getElementById("step-two").style.border = '1px solid hsl(206, 94%, 87%)';
            break;
            case 2:
                document.getElementById("step-three").style.fontWeight = 'bold';
                document.getElementById("step-three").style.color = 'hsl(213, 96%, 18%)';
                document.getElementById("step-three").style.backgroundColor = 'hsl(206, 94%, 87%)';
                document.getElementById("step-three").style.border = '1px solid hsl(206, 94%, 87%)';
            break;
            case 3:
                document.getElementById("step-four").style.fontWeight = 'bold';
                document.getElementById("step-four").style.color = 'hsl(213, 96%, 18%)';
                document.getElementById("step-four").style.backgroundColor = 'hsl(206, 94%, 87%)';
                document.getElementById("step-four").style.border = '1px solid hsl(206, 94%, 87%)';
            break;
        }
    }, [])

    return (
        <>
            <div className='card-body-left'>
                <div className='steps'>
                    <div className='step-num' id='step-one'><span>1</span></div>
                    <div className='step-description'>
                        <span >Step 1</span>
                        <p>Your info</p>
                    </div>
                </div>

                <div className='steps'>
                    <div className='step-num' id='step-two'>2</div>
                    <div className='step-description'>
                        <span>Step 2</span>
                        <p>Select plan</p>
                    </div>
                </div>

                <div className='steps'>
                    <div className='step-num' id='step-three'>3</div>
                    <div className='step-description'>
                        <span>Step 3</span>
                        <p>Add-ons</p>
                    </div>
                </div>

                <div className='steps'>
                    <div className='step-num' id='step-four'>4</div>
                    <div className='step-description'>
                        <span>Step 4</span>
                        <p>Summary</p>
                    </div>
                </div>
            </div>
        </>
    )
}