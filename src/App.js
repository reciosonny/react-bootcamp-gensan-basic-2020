import React from "react";
import "./App.css";

import PersonalDetailsComponent from "./PersonalDetailsComponent";

function App() {
  return (
    <div className="App">
      <PersonalDetailsComponent 
        fname={"Sonny"} 
        lname={"Recio"} 
        position={"Front-End Developer"} 
      />
    </div>
  );
}

export default App;
