import React, { useState } from "react";

function Main() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [firstNameinputBx, setFirstNameInputBx] = useState("");
  const [lastNameinputBx, setLastNameInputBx] = useState("");
  const [ageinputBx, setAgeInputBx] = useState("");

  function createResume(e) {
    setFirstName(firstNameinputBx);
    setLastName(lastNameinputBx);
    setAge(ageinputBx);
    setFirstName("");
    setLastName("");
    setAge("");
    console.log(firstNameinputBx);
    console.log(lastNameinputBx);
    console.log(ageinputBx);
    e.preventDefault();
  }

  function handleFirstName(e) {
    setFirstNameInputBx(e.target.value);
  }
  function handleLastName(e) {
    setLastNameInputBx(e.target.value);
  }
  function handleAge(e) {
    setAgeInputBx(e.target.value);
  }
  return (
    <form onSubmit={createResume}>
      <label>
        First Name:
        <input
          type="text"
          // value={firstName}
          placeholder="Enter First Name"
          onChange={handleFirstName}
          // onKeyDown={handleFirstName}
        />
        <br />
        Last Name:
        <input
          type="text"
          placeholder="Enter Last Name"
          onChange={handleLastName}
          // onKeyDown={handleLastName}
        />
        <br />
        Age:
        <input
          type="number"
          placeholder="Enter Last Name"
          onChange={handleAge}
          // onKeyDown={handleLastName}
        />
      </label>
      <br />
      <hr />
      <button>Submit</button>
    </form>
  );
}
export default Main;
