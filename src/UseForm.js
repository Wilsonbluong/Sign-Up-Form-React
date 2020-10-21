import { useState, useEffect } from "react";

// Passing validate and callback as a parameter so it is defined
const useForm = (callback, validate) => {
    // destructuring state values and setting initial state value
    const [values, setValues] = useState({
        username:'',
        email:'',
        password:'',
        password2:''
    })

    // states
    const [errors, setErrors] = useState({})
    const [isSubmit, setSubmit] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            // spreading out ALL the values from the form inputs
            ...values,
            // this is targetting the name values for our inputs 
            // and changing that specific one
            [name]: value
        })
    }

    const handleSubmit = e => {
        // this prevents the page from refreshing. We want it to re-render
        e.preventDefault();

        // this will show error messages on page when clicking submit button
        setErrors(validate(values));
        // change submit to true when clicking submit button
        setSubmit(true);
    }

    // logic to prevent success page without filling out form
    useEffect(
        () => {
            if(Object.keys(errors).length === 0 && isSubmit) {
                callback();
            }
        },
        // this will only let the page to update when there are errors
        [errors]
    );

    // this will allow us to export it to other components
    // methods: handleChange, handleSubmit
    // const: values, errors
    return { handleChange, values, handleSubmit, errors };
};

export default useForm;