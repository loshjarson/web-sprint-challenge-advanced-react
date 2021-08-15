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

const useForm = (initialValue) => {
    const [form, setForm] = useState(initialValue)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [errors, setErrors] = useState(errorData);

    const handleChanges = e => {
        const errorMessage = handleErrors(e.target.name, e.target.value);

        if (errorMessage !== "") {
          setShowSuccessMessage(false);
        }
    
        setErrors({
          ...errors,
          [e.target.name]: errorMessage
        });
    
        setForm({
          ...form,
          [e.target.name]: e.target.value
        });
      }

    const handleErrors = (fieldName, fieldValue) => {
        if (fieldValue === "")
            return `${fieldName} is required`

        const emailRegex = /(.*)@(.*)\.(.+)/g;
        if (fieldName === "email" && !fieldValue.match(emailRegex))
            return `${fieldName} must be a valid email address.`;        
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const submitErrors = {};
        Object.keys(errors).forEach(field => {
            submitErrors[field] = handleErrors(field, form[field])
        });
        if(submitErrors.length === 0){
            setShowSuccessMessage(true);
        
            setForm({
                firstName: "",
                lastName: "",
                address: "",
                city: "",
                state: "",
                zip: "",
            })  
        } else {
            alert("All fields must be completed before submitting")
        }
      };

    return [form, handleChanges, handleSubmit, showSuccessMessage, errors];
}

export default useForm;