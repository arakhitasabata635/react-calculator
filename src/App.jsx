import ButtonContainer from "./Button";
import Display from "./display";
import  "./App.css";
import { useState } from "react";

function App() {
  const [disValue, setDisValue] = useState("");

  const onBUttonClick = (buttonName) => {
    if (buttonName === "c") {
      setDisValue("");
    } else if (buttonName === "=") {
    let result = eval(disValue)
    setDisValue(result);
    } else {
      let newDisValue = disValue + buttonName;
      setDisValue(newDisValue);
    }
  };

  return (
    <>
      <div className="calculator">
        <Display disValue={disValue}></Display>
        <ButtonContainer onBUttonClick={onBUttonClick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
