import React, { useState } from "react";
import Button from "./Button";
import "./taxpayer-details.css";

function TaxpayerDetails() {
  const [inputFields, setInputFields] = useState({
    email: "",
    SIN: "",
    taxpayerName: "",
    paymentAmount: "",
  });

  const [isInputInvalid, setIsInputInvalid] = useState({
    email: false,
    SIN: false,
    taxpayerName: false,
    paymentAmount: false,
  });

  const [isInputEmpty, setIsInputEmpty] = useState({
    email: false,
    SIN: false,
    taxpayerName: false,
    paymentAmount: false,
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateSIN = (SIN) => {
    const sanitizedInput = SIN.replace(/\s/g, "");

    if (/^\d{9}$/.test(sanitizedInput)) {
      return true;
    } else {
      return false;
    }
  };

  const validatePaymentAmount = (value) => {
    const number = Number(value);

    if (isNaN(number)) {
      return false;
    }

    return number >= 1 && number <= 50000;
  };

  const updateInputField = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "email") {
      if (validateEmail(value)) {
        setIsInputInvalid({
          ...isInputInvalid,
          email: false,
        });
      }
    } else if (name === "SIN") {
      if (validateSIN(value)) {
        setIsInputInvalid({
          ...isInputInvalid,
          SIN: false,
        });
      }
    } else if (name === "paymentAmount") {
      if (validatePaymentAmount(value)) {
        setIsInputInvalid({
          ...isInputInvalid,
          paymentAmount: false,
        });
      }
    }

    setInputFields({
      ...inputFields,
      [name]: value,
    });
  };

  const clickAwayEmail = (event) => {
    const value = event.target.value;

    if (value.length === 0) {
      setIsInputEmpty({
        ...isInputEmpty,
        email: true,
      });

      setIsInputInvalid({
        ...isInputInvalid,
        email: false,
      });
    } else if (validateEmail(value)) {
      setIsInputInvalid({
        ...isInputInvalid,
        email: false,
      });

      setIsInputEmpty({
        ...isInputEmpty,
        email: false,
      });
    } else if (!validateEmail(value)) {
      setIsInputInvalid({
        ...isInputInvalid,
        email: true,
      });

      setIsInputEmpty({
        ...isInputEmpty,
        email: false,
      });
    }
  };

  const clickAwaySIN = (event) => {
    const value = event.target.value;

    if (value.length === 0) {
      setIsInputEmpty({
        ...isInputEmpty,
        SIN: true,
      });

      setIsInputInvalid({
        ...isInputInvalid,
        SIN: false,
      });
    } else if (validateSIN(value)) {
      setIsInputInvalid({
        ...isInputInvalid,
        SIN: false,
      });

      setIsInputEmpty({
        ...isInputEmpty,
        SIN: false,
      });
    } else {
      setIsInputInvalid({
        ...isInputInvalid,
        SIN: true,
      });

      setIsInputEmpty({
        ...isInputEmpty,
        SIN: false,
      });
    }
  };

  const clickAwayTaxpayerName = (event) => {
    const value = event.target.value;

    if (value.length === 0) {
      setIsInputEmpty({
        ...isInputEmpty,
        taxpayerName: true,
      });

      setIsInputInvalid({
        ...isInputInvalid,
        taxpayerName: false,
      });
    } else {
      setIsInputEmpty({
        ...isInputEmpty,
        taxpayerName: false,
      });
    }
  };

  const clickAwayPaymentAmount = (event) => {
    const value = event.target.value;

    if (value.length === 0) {
      setIsInputEmpty({
        ...isInputEmpty,
        paymentAmount: true,
      });

      setIsInputInvalid({
        ...isInputInvalid,
        paymentAmount: false,
      });
    } else if (validatePaymentAmount(value)) {
      setIsInputInvalid({
        ...isInputInvalid,
        paymentAmount: false,
      });

      setIsInputEmpty({
        ...isInputEmpty,
        paymentAmount: false,
      });
    } else {
      setIsInputInvalid({
        ...isInputInvalid,
        paymentAmount: true,
      });

      setIsInputEmpty({
        ...isInputEmpty,
        paymentAmount: false,
      });
    }
  };

  const determineCSSClass = (inputName, inputValue) => {
    if (isInputInvalid[inputName] || isInputEmpty[inputName]) {
      return "default-input-field input-error";
    } else if (!isInputInvalid[inputName] && inputValue.length > 0) {
      return "default-input-field input-success";
    } else {
      return "default-input-field";
    }
  };

  return (
    <div className="outer-taxpayer-container">
      <div className="taxpayer-details-container">
        <div className="header">
          <h1 className="title">Taxpayer Details</h1>
          <h5 className="subtitle-text">All fields are mandatory.</h5>
        </div>
        <form className="taxpayer-details-form">
          <div className="taxpayer-details-section">
            <h4 className="input-title">Email Address</h4>
            <h5 className="subtitle-text">Where should we send your receipt?</h5>
            <input
              className={determineCSSClass("email", inputFields.email)}
              onBlur={clickAwayEmail}
              name="email"
              placeholder="Email Address"
              value={inputFields.email}
              onChange={updateInputField}
            />
            {isInputInvalid["email"] ? (
              <h5 className="error-message">Invalid email address.</h5>
            ) : null}
            {isInputEmpty["email"] ? <h5 className="error-message">Required.</h5> : null}
          </div>
          <div className="taxpayer-details-section">
            <h4 className="input-title">Social Insurance Number</h4>
            <h5 className="subtitle-text">999 999 999</h5>
            <input
              className={determineCSSClass("SIN", inputFields.SIN)}
              onBlur={clickAwaySIN}
              name="SIN"
              placeholder="999 999 999"
              value={inputFields.SIN}
              onChange={updateInputField}
            />
            {isInputInvalid["SIN"] ? (
              <h5 className="error-message">Invalid SIN.</h5>
            ) : null}
            {isInputEmpty["SIN"] ? <h5 className="error-message">Required.</h5> : null}
          </div>
          <div className="taxpayer-details-section">
            <h4 className="input-title">Taxpayer Name</h4>
            <input
              className={determineCSSClass("taxpayerName", inputFields.taxpayerName)}
              onBlur={clickAwayTaxpayerName}
              name="taxpayerName"
              placeholder="Full Name"
              value={inputFields.taxpayerName}
              onChange={updateInputField}
            />
            {isInputEmpty["taxpayerName"] ? (
              <h5 className="error-message">Required.</h5>
            ) : null}
          </div>
          <div className="taxpayer-details-section">
            <h4 className="input-title">Payment Amount</h4>
            <input
              className={determineCSSClass("paymentAmount", inputFields.paymentAmount)}
              onBlur={clickAwayPaymentAmount}
              name="paymentAmount"
              placeholder="Payment Amount"
              value={inputFields.paymentAmount}
              onChange={updateInputField}
            />
            {isInputInvalid["paymentAmount"] ? (
              <h5 className="error-message">Must be $1 - $50,000.</h5>
            ) : null}
            {isInputEmpty["paymentAmount"] ? (
              <h5 className="error-message">Required.</h5>
            ) : null}
          </div>
        </form>
        <h5 className="footer-text">
          Your information will be encrypted and not be shared with anyone except the
          Canada Revenue Agency.
        </h5>
        <h5 className="footer-text">
          By clicking the Continue Button,&nbsp;
          <a href="https://paysimply.paymentsource.ca/terms-and-conditions">
            you agree to Payment Source's Terms.
          </a>
        </h5>
      </div>
      <div className="buttons-row">
        <Button title="Back" url="https://www.paysimply.ca/" />
        <Button title="Continue" url="https://www.paysimply.ca/" />
      </div>
    </div>
  );
}

export default TaxpayerDetails;
