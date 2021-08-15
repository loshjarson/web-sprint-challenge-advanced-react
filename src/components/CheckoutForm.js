import React, { useState } from "react";
import useForm from "../hooks/useForm";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [values, handleChanges, handleSubmit, showSuccessMessage, errors, submission] = useForm(initialValue);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
          />
        </label>
        {(errors.firstName) && <p data-testid="firstNameError" className="error">Error: {errors.firstName}</p>}
        <label>
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
          />
        </label>
        {(errors.lastName) && <p data-testid="lastNameError" className="error">Error: {errors.lastName}</p>}
        <label>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={handleChanges}
          />
        </label>
        {(errors.address) && <p data-testid="addressError" className="error">Error: {errors.address}</p>}
        <label>
          City:
          <input name="city" value={values.city} onChange={handleChanges} />
        </label>
        {(errors.city) && <p data-testid="cityError" className="error">Error: {errors.city}</p>}
        <label>
          State:
          <input name="state" value={values.state} onChange={handleChanges} />
        </label>
        {(errors.state) && <p data-testid="stateError" className="error">Error: {errors.state}</p>}
        <label>
          Zip:
          <input name="zip" value={values.zip} onChange={handleChanges} />
        </label>
        {(errors.zip) && <p data-testid="zipError" className="error">Error: {errors.zip}</p>}
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {submission.firstName} {submission.lastName}
          </p>
          <p>{submission.address}</p>
          <p>
            {submission.city}, {submission.state} {submission.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
