import React from "react";
import "../styles/Resume.css";
import pdf from "../documents/Grace-Mora-Resume.pdf";

function Resume() {
  const openPDF = () => {
    window.open(pdf, "_blank");
  };
  return (
    <div className="header-image">
      <div className="split-screen">
        <div className="left-pane-resume">
          <div className="move-left">
            <h1>Resume</h1>
            <p>Click below for the PDF version</p>
            <button onClick={openPDF}>Resume</button>
          </div>
          <h2>Education:</h2>
          <p>B.A., Computer Science, May 2023 - Michigan State University</p>
          <h2>Skills:</h2>
          <p>
            C, C++, Python, JavaScript, React, Node.js, React Native, Linux,
            SQL, Visual Studio, Docker, HTML, CSS, Android Studio, MongoDB,
            Cypress
          </p>
        </div>
        <div className="right-pane-resume">
          <h2>Experience:</h2>
          <p>IT Technician Member, May 2021 – PRESENT </p>
          <p>Little Caesars Corporate, Detroit, MI</p>
          <p>
            • Provide frontline technical support to end-users, addressing
            hardware and software issues
            <p>
              • Diagnose and troubleshoot network, hardware, and software
              problems{" "}
            </p>
            <p>
              • Install, configure, and maintain software for corporate
              colleagues
            </p>
            <p>
              • Ensure exceptional customer service by delivering concise
              technical assistance while maintaining a high level of
              professionalism
            </p>
            <p>
              • Create, manage, and alter corporate accounts for users across
              company
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
