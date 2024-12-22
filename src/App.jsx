import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

import { useState } from "react"


const INITIAL_INFORMATION = {
  "INITIAL INVESTMENT": 10000,
  "ANNUAL INVESTMENT": 1200,
  "EXPECTED RETURN": 6,
  "DURATION": 10,
}



function App() {

  const [inputInfo, setInputInfo] = useState(INITIAL_INFORMATION);
  

  
  // update the user input, the data is sent in the form of individual value frm each section
  function handleInputInfo(labelName, info){
    setInputInfo((originalObj) => ({
      ...originalObj,
      [labelName]: info,
    }));
  }

  const inputIsValid = inputInfo["DURATION"] >= 1

  return (
    <main>
      <Header />
      <section id="user-input">
        <div className="input-group">
          <UserInput labelName='INITIAL INVESTMENT' onInfoUpdate={handleInputInfo}/>
          <UserInput labelName='ANNUAL INVESTMENT' onInfoUpdate={handleInputInfo}/>
          <UserInput labelName='EXPECTED RETURN' onInfoUpdate={handleInputInfo}/>
          <UserInput labelName='DURATION' onInfoUpdate={handleInputInfo}/>
        </div>
      </section>
      {inputIsValid && <Results id="result" infoObj={inputInfo}/>}
      {!inputIsValid && <p className="center">Please enter a duration greater than zero </p> }
    </main>

  )
}

export default App
