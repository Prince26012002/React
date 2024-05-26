import React, { useState } from 'react'

function ChildComp({ count, setCount }) {

  const [value, setValue] = useState(0);

  const clickHanadler = () => {
    setCount(prev => prev + 1)
    setValue(prev => prev + 1)
  }

  React.useEffect(() => {
    console.log("Rendering Child Component");
  }, []);

  return (
    <div>
      <p>Count in Child Component {count}</p>
      <p>value count {value}</p>
      <button type='button' onClick={clickHanadler}>value change</button>
    </div>
  )
}

export default ChildComp
