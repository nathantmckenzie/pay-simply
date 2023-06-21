import React from "react";
import "./button.css";

function Button({ title, url }) {
  return (
    <button className="button" onClick={() => (window.location.href = url)}>
      {title}
    </button>
  );
}

export default Button;
