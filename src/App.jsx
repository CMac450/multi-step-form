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
        />
      ) : activeStepIndex === 2 ? (
        <Addons
          activeStepIndex={activeStepIndex}
          setActiveStepIndex={setActiveStepIndex}
        />
      ) : activeStepIndex === 3 ? (
        <Summary
          activeStepIndex={activeStepIndex}
          setActiveStepIndex={setActiveStepIndex}
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
