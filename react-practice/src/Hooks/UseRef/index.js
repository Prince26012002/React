import StopWatch from "./StopWatch";
import React from 'react'
import FocusTextInput from "./FocusTextInput";
import OwnComponentRef from "./CustomComponentRef";

export default function UseRef() {
  return (
    <div>
      <StopWatch />
      <FocusTextInput />
      <OwnComponentRef />
    </div>
  )
}
