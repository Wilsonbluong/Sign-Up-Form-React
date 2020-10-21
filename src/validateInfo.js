// Passing values into errors logic function
export default function validateInfo(values) {
    let errors = {}

    if(!values.username) {
        errors.username = "Username required"
    } else if(values.username.length < 5) {
        errors.username = "Username must be greater than 5 characters long"
    }

    if (!values.email) {
        errors.email = "Email required"
    } else if(values.email.length < 5) {
        errors.email = "Email must be greater than 5 characters long"
    }

    if(!values.password) {
        errors.password = "Password required"
    } 
    else if(values.password.length < 8) {
        errors.password = "Password must 8 characters long"
    }

    if(!values.password2) {
        errors.password2 = "Password required"
    }
    else if (values.password2 !== values.password ) {
        errors.password2 = "Passwords do not match"
    }

    return errors;
}