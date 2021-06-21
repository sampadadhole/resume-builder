import React, { useState } from "react";

function Main() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameinputBx, setFirstNameInputBx] = useState("");
  const [lastNameinputBx, setLastNameInputBx] = useState("");

  function createResume(e) {
    setFirstName(firstNameinputBx);
    setLastName(lastNameinputBx);
    setFirstName("");
    setLastName("");
    console.log(firstName);
    console.log(lastName);
    e.preventDefault();
  }

  function handleFirstName(e) {
    setFirstNameInputBx(e.target.value);
  }
  function handleLastName(e) {
    setLastNameInputBx(e.target.value);
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
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}
export default Main;
