import React from 'react'

const PersonalDetailsComponent = (props) => {

  return (
    <div>
      <h1>Your personal details</h1>
      <br />
      
      <h3>First name: {props.fname}</h3>
      <h3>Last name: {props.lname}</h3>
      <h3>Position: {props.position}</h3>
    </div>
  );
}



export default PersonalDetailsComponent;