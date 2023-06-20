import React from "react";
import "./fraud-protection.css";

function FraudProtection() {
  return (
    <div className="lit">
      <div className="fraud-protection-container">
        <h2>Payment Recipient</h2>
        <h3>Canada Revenue Agency</h3>
        <h5>https://www.canada.ca</h5>
      </div>
      <div className="fraud-protection-container">
        <h2>Individual Taxes</h2>
        <h3>Individual (T1)</h3>
        <h5>Individual (T1) Tax amount owing</h5>
      </div>
      <div className="fraud-protection-container">
        <h3>This is a secure site</h3>
      </div>
      <div className="fraud-protection-container lowest">
        <h3>Protect yourself against fraud.</h3>
        <h4>Visit the CRA site for more information.</h4>
      </div>
    </div>
  );
}

export default FraudProtection;
