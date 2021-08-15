// write your custom hook here to control your checkout form
import { useState } from "react";

const errorData = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };

const useForm = (initialValue, setCart) => {
    const [values, setValues] = useState(initialValue)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [errors, setErrors] = useState(errorData);
    const [submission, setSubmission] = useState(initialValue)

    const handleChanges = e => {
        const errorMessage = handleErrors(e.target.name, e.target.value);

        if (errorMessage !== "") {
          setShowSuccessMessage(false);
        }
    
        setErrors({
          ...errors,
          [e.target.name]: errorMessage
        });
    
        setValues({
          ...values,
          [e.target.name]: e.target.value
        });
      }

    const handleErrors = (fieldName, fieldValue) => {
        if (fieldValue === "")
            return `${fieldName} is required`

        const emailRegex = /(.*)@(.*)\.(.+)/g;
        if (fieldName === "email" && !fieldValue.match(emailRegex))
            return `${fieldName} must be a valid email address.`; 

        const addressRegex = /(\d{1,}) [a-zA-Z0-9\s]+(\.)?/g;
        if (fieldName === "address" && !fieldValue.match(addressRegex))
            return `${fieldName} must be a valid address.`;
        
        
        const zipRegex = /[0-9]{5,6}/g
        if (fieldName === "zip" && !fieldValue.match(zipRegex))
            return `${fieldName} must be a valid zip code.`;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const submitErrors = {};
        Object.keys(errors).forEach(field => {
            submitErrors[field] = handleErrors(field, values[field])
        });
        const hasErrors = (submitErrors.firstName === undefined && submitErrors.lastName === undefined && submitErrors.address === undefined && submitErrors.city === undefined && submitErrors.state === undefined && submitErrors.zip === undefined);

        if(hasErrors){
            setShowSuccessMessage(true);
            setSubmission(values);
            setValues({
                firstName: "",
                lastName: "",
                address: "",
                city: "",
                state: "",
                zip: "",
            })
            setCart([])  
        } else {
            alert("All fields must be completed before submitting")
        }
      };

    return [values, handleChanges, handleSubmit, showSuccessMessage, errors, submission];
}

export default useForm;