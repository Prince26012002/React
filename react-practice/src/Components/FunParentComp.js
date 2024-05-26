import React, { useState } from 'react'
import ChildComp from './FunChildComp';

function ParentComp() {
  const [state, setState] = useState(0);
  const [show, setShow] = useState(true);

  const clickHandler = () => {
    setState(prev => prev + 1);
  }

  React.useEffect(() => {
    console.log("Rendering Parent Component");
  }, [])

  return (
    <div>
      <p>Count value {state} </p>
      <button type='button' onClick={clickHandler}>
        State Change
      </button>
      <button type='button' onClick={() => setShow(!show)} >showToggle</button>
      {show && (<ChildComp count={state} setCount={setState} />)}
    </div>
  )
}

export default ParentComp
