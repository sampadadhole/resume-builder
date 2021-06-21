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
    <form action="#" target="_blank" onSubmit={createResume}>
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
        <hr />
        <button>submit</button>
        {/* <button>
          <a href="#" target="_blank">
            submit
          </a>
        </button> */}
      </label>
    </form>
  );
}
export default Main;
