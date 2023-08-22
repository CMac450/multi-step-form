import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { PersonalInfo } from './personalinfo'
import { Plan } from './plan'
import { Addons } from './addons'
import { Summary } from './summary'
import { Thankyou } from './thankyou'
import { StepsComponent } from './steps'

function App() {

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [billingType, setBillingType] = useState("Monthly");
  const [planName, setPlanName] = useState("Arcade");
  const [planPrice, setPlanPrice] = useState(9);
  const [addOn, setAddOn] = useState("Online-service");
  const [addOnPrice, setAddOnPrice] = useState(1);
  const [addOnDetails, setAddOnDetails] = ([]);
  //let planPrice;

  return (
    <>
      {activeStepIndex === 0 ? (
        <PersonalInfo
          activeStepIndex={activeStepIndex}
          setActiveStepIndex={setActiveStepIndex}
          StepsComponent={StepsComponent}
          
        />
      ) : activeStepIndex === 1 ? (
        <Plan
          activeStepIndex={activeStepIndex}
          setActiveStepIndex={setActiveStepIndex}
          billingType={billingType}
          setBillingType={setBillingType}
          planName={planName}
          setPlanName={setPlanName}
          setPlanPrice={setPlanPrice}
          planPrice={planPrice}
          StepsComponent={StepsComponent}
        />
      ) : activeStepIndex === 2 ? (
        <Addons
          activeStepIndex={activeStepIndex}
          setActiveStepIndex={setActiveStepIndex}
          billingType={billingType}
          planName={planName}
          planPrice={planPrice}
          StepsComponent={StepsComponent}
          addOn={addOn}
          setAddOn={setAddOn}
          addOnPrice={addOnPrice}
          setAddOnPrice={setAddOnPrice}
          addOnDetails={addOnDetails}
          setAddOnDetails={setAddOnDetails}
        />
      ) : activeStepIndex === 3 ? (
        <Summary
          activeStepIndex={activeStepIndex}
          setActiveStepIndex={setActiveStepIndex}
          billingType={billingType}
          planName={planName}
          planPrice={planPrice}
          StepsComponent={StepsComponent}
          addOn={addOn}
          setAddOn={setAddOn}
          addOnPrice={addOnPrice}
          setAddOnPrice={setAddOnPrice}
          addOnDetails={addOnDetails}
          setAddOnDetails={setAddOnDetails}
        />
      ) : (
        <Thankyou
          activeStepIndex={activeStepIndex}
          setActiveStepIndex={setActiveStepIndex}
          StepsComponent={StepsComponent}
        />
      )}
    </>
  )
}

export default App
