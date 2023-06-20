import React, { useState, useEffect, useRef } from "react";
import "./taxpayer-details.css";

function TaxpayerDetails() {
  const [inputFields, setInputFields] = useState({
    email: "",
    SIN: "",
    taxpayerName: "",
    paymentAmount: "",
  });
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  const inputRef = useRef(null);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  function handleClickOutside(event, inputRef) {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      const email = inputRef.current.value;
      if (email.length === 0) {
        setIsEmailInvalid(false);
        setIsInputEmpty(true);
      } else if (!validateEmail(email)) {
        // Display your error message here
        console.log("Invalid email address");
        setIsInputEmpty(false);
        setIsEmailInvalid(true);
      } else if (validateEmail(email)) {
        setIsInputEmpty(false);
        setIsEmailInvalid(false);
      }
    }
  }

  const updateInputField = (event, name) => {
    console.log(event.target.value);
    if (name === "email") {
      if (validateEmail(event.target.value)) {
        setIsEmailInvalid(false);
      }
    }
    setInputFields({
      ...inputFields,
      [name]: event.target.value,
    });
    console.log(inputFields);
  };

  useEffect(() => {
    document.addEventListener("mousedown", (event) =>
      handleClickOutside(event, inputRef)
    );
    return () => {
      document.removeEventListener("mousedown", (event) =>
        handleClickOutside(event, inputRef)
      );
    };
  }, []);

  return (
    <div className="taxpayer-details-container">
      <h1>Taxpayer Details</h1>
      <h5>All fields are mandatory.</h5>
      <form className="form">
        <label>Email Address</label>
        <input
          ref={inputRef}
          placeholder="Email Address"
          value={inputFields.email}
          onChange={(event) => updateInputField(event, "email")}
        />
        {isEmailInvalid ? <h5>Invalid email address.</h5> : null}
        {isInputEmpty ? <h5>Required.</h5> : null}
        <label>Social Insurance Number</label>
        <label>999 999 999</label>
        <input
          placeholder="Social Insurance Number"
          onChange={(event) => updateInputField(event, "SIN")}
        />
        <label>Taxpayer Name</label>
        <input
          placeholder="Taxpayer Name"
          onChange={(event) => updateInputField(event, "taxpayerName")}
        />
        <label>Payment Amount</label>
        <input
          placeholder="Payment Amount"
          onChange={(event) => updateInputField(event, "paymentAmount")}
        />
      </form>
      <h6>
        Your information will be encrypted and not be shared with anyone except the Canada
        Revenue Agency. By clicking the Continue Button, you agree to Payment Source's
        Terms.
      </h6>
    </div>
  );
}

export default TaxpayerDetails;
