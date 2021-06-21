import "./styles.css";
import React, { useState } from "react";
import Main from "./Components/Main";
// import createResume from "./Components/createResume";

function App() {
  const [resumeData, setResumeData] = useState({});
  // console.log(resumeData);
  return (
    <div>
      <Main resumeData={resumeData} setResumeData={setResumeData} />
    </div>
  );
}
export default App;
