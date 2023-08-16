import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { PersonalInfo } from './personalinfo'
import { Plan } from './plan'
import { Addons } from './addons'
import { Summary } from './summary'
import { Thankyou } from './thankyou'

function App() {

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [billingType, setBillingType] = useState("Monthly");
  const [planName, setPlanName] = useState("Arcade");
  const [planPrice, setPlanPrice] = useState(9);
  const [addOn, setAddOn] = useState("");
  const [addOnPrice, setAddOnPrice] = useState(0);

  return (
    <>
      {activeStepIndex === 0 ? (
        <PersonalInfo
          activeStepIndex={activeStepIndex}
          setActiveStepIndex={setActiveStepIndex}
          
        />
      ) : activeStepIndex === 1 ? (
        <Plan
          activeStepIndex={activeStepIndex}
          setActiveStepIndex={setActiveStepIndex}
          setBillingType={setBillingType}
          setPlanName={setPlanName}
          setPlanPrice={setPlanPrice}
        />
      ) : activeStepIndex === 2 ? (
        <Addons
          activeStepIndex={activeStepIndex}
          setActiveStepIndex={setActiveStepIndex}
          billingType={billingType}
          planName={planName}
          planPrice={planPrice}
        />
      ) : activeStepIndex === 3 ? (
        <Summary
          activeStepIndex={activeStepIndex}
          setActiveStepIndex={setActiveStepIndex}
          billingType={billingType}
          planName={planName}
          planPrice={planPrice}
        />
      ) : (
        <Thankyou
          activeStepIndex={activeStepIndex}
          setActiveStepIndex={setActiveStepIndex}
        />
      )}
    </>
  )
}

export default App
