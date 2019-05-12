function validateReg(values) {
    let errors = {};
    // validate name 
    if (!values.firstName) {
        errors.firstName = 'Name is required.'
    }
    if (!values.lastName) {
        errors.lastName = 'Name is required.'
    }
    if (!values.nickname) {
        errors.nickname = 'Nickname is required.'
    }
    
    // validate email
    if (!values.email) {
        errors.email = 'Email address is required.'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid.'
    }

    // validate password
    if (!values.password) {
        errors.password = 'Password is required.'
    } else if (values.password.length < 8) {
        errors.password = 'Password must be 8 or more characters.'
    }

    // validate password confirmation
    if (!values.confirmPassword) {
        errors.confirmPassword = 'Password is required.'
    } else if (values.confirmPassword.length < 8) {
        errors.confirmPassword = 'Password must be 8 or more characters.'
    } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Password must match.'
    }


    return errors;
};

export default validateReg