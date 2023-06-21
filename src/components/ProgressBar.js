import React from "react";
import "./progress-bar.css";

function ProgressBar() {
  return (
    <div className="progress-bar-container">
      <div className="progress-step">Tax Type</div>
      <div className="progress-step" id="details">
        Details
      </div>
      <div className="progress-step">Payment Option</div>
      <div className="progress-step">Review</div>
      <div className="progress-step">Make Payment</div>
      <div className="progress-step">Confirmation</div>
    </div>
  );
}

export default ProgressBar;
