import React from 'react'
import useForm from "./UseForm"
import validateInfo from "./validateInfo"
import "./form.css"

// passing in submit function into parameter
const FormSignup = ({ submitForm }) => {
    // destructuring values from useForm component
    // methods: handleChange, handleSubmit
    // const: values, errors
    // validateInfo sets up the value of useForm
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validateInfo);

    return (
        <div className="form-content-right">
            <form 
                className="form"
                onSubmit={ handleSubmit }
            >
                <h1>Get started with us today! Create your account by filling out the
                    information below.
                </h1>
                <div className="form-inputs">
                    <label 
                        htmlFor="username"
                        classname="form-label">
                        Username:
                    </label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        className="form-input" 
                        placeholder="Enter your username"
                        value={ values.username }
                        onChange={ handleChange }
                    />
                    {/* If errors is true/exists then pass in the following p tag */}
                    { errors.username && <p>{ errors.username }</p> }
                </div>
                <div className="form-inputs">
                    <label 
                        htmlFor="email"
                        classname="form-label">
                        Email:
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="form-input" 
                        placeholder="Enter your email"
                        value={ values.email }
                        onChange={ handleChange }
                    />
                    { errors.email && <p>{ errors.email }</p> }
                </div>
                <div className="form-inputs">
                    <label 
                        htmlFor="password"
                        classname="form-label">
                        Password:
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        className="form-input" 
                        placeholder="Enter your password"
                        value={ values.password }
                        onChange={ handleChange }
                    />
                    { errors.password && <p>{ errors.password }</p> }
                </div>
                <div className="form-inputs">
                    <label 
                        htmlFor="password2"
                        classname="form-label">
                        Password Confirmation:
                    </label>
                    <input
                        id="password2"
                        type="password"
                        name="password2"
                        className="form-input" 
                        placeholder="Enter your password"
                        value={ values.password2 }
                        onChange={ handleChange }
                    />
                    { errors.password2 && <p>{ errors.password2 }</p> }
                </div>
                <button className="form-input-btn" 
                    type="submit">
                    Sign up
                </button>
                <span className="form-input-login">
                    Already have an account? Login
                </span>
            </form>
        </div>
    )
}

export default FormSignup
