import React from "react";
import "./App.css";

import PersonalDetails from "./PersonalDetails";

function App() {
  return (
    <div className="App">
      <PersonalDetails 
        fname={"Sonny"} 
        lname={"Recio"} 
        position={"Front-End Developer"} 
      />
      <PersonalDetails 
        fname={"Yolach"} 
        lname={"Lloveras"} 
        position={"Boxtypd CEO"} 
      />
      <PersonalDetails 
        fname={"Rayjens"} 
        lname={"Code"} 
        position={"Front-End Developer"} 
      />
    </div>
  );
}

export default App;
