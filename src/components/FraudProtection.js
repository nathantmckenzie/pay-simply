import React from "react";
import "./fraud-protection.css";

function FraudProtection() {
  return (
    <div className="fraud-protection-container">
      <div className="fraud-protection-tile-container">
        <h3 className="fraud-protection-text">Payment Recipient</h3>
        <h4 className="fraud-protection-text">Canada Revenue Agency</h4>
        <a href="https://www.canada.ca">https://www.canada.ca</a>
      </div>
      <div className="fraud-protection-tile-container" id="individual-taxes-container">
        <h3 className="fraud-protection-text">Individual Taxes</h3>
        <h4 className="fraud-protection-text">Individual (T1)</h4>
        <h4 className="fraud-protection-text">Individual (T1) Tax amount owing</h4>
      </div>
      <div className="fraud-protection-tile-container">
        <h4>This is a secure site</h4>
      </div>
      <div className="fraud-protection-tile-container" id="lowest-tile">
        <h3>Protect yourself against fraud.</h3>
        <a href="https://www.canada.ca/en/revenue-agency/corporate/security/protect-yourself-against-fraud.html">
          <h5>Visit the CRA site for more information.</h5>
        </a>
      </div>
    </div>
  );
}

export default FraudProtection;
