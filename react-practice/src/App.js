import React, { useState } from "react";
import "./App.css";
import ClassComp from "./Components/ClassParentComp";
import ParentComp from "./Components/FunParentComp";
import Parent from "./LifeCycle/ClassComponent/Parent";
import UseCallback from "./Hooks/UseCallback";
import UseMemo from "./Hooks/UseMemo";
import UseReducer from "./Hooks/UseReducer";
import UseRef from "./Hooks/UseRef";
import UseState from "./Hooks/UseState";
import CustomSelect from "./Components/CustomSelect";

function App() {
  return (
    <div className="App">
      {/* <ParentComp />
      <ClassComp name={"prince"} age={20} /> */}
      <Parent />
      {/* <UseCallback /> */}
      {/* <UseMemo /> */}
      {/* <UseReducer /> */}
      {/* <UseRef /> */}
      {/* <UseState /> */}
      {/* <CustomSelect /> */}
    </div>
  );
}

export default App;
