import React from "react";
import "./progress-bar.css";

function ProgressBar() {
  return (
    <div className="progress-bar-container">
      <div className="pointer" id="start">
        Tax Type
      </div>
      <div className="pointer" id="details">
        Details
      </div>
      <div className="pointer">Payment Option</div>
      <div className="pointer">Review</div>
      <div className="pointer">Make Payment</div>
      <div className="pointer" id="end">
        Confirmation
      </div>
    </div>
  );
}

export default ProgressBar;
