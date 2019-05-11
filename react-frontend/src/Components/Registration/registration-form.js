import React, { useState } from 'react'
import useRegistrationForm from './use-registration-form'
import validate from './validate-registration'

//CSS In Doc


const FormRegistration = () => {
    
    const [isSubmitted, setIsSubmitting] = useState(null)
    const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(null)

    const {
        values,
        errors,
        handleChange,
        handleSubmit
    } = useRegistrationForm(register, validate)

    async function register() {
        // send data to API
    }

    return(
        <div className = 'section is-fullheight'>
            <div className = 'container'>
                <div className = 'column is-4 is-offset-4'>
                    <div className = 'box'>
                    <h1 className ='title is-2'>Register</h1>
                        <form>
                            <label>Email Address</label>
                            <div className = 'control'>
                                <input 
                                    className = 'input'
                                    type = 'email'
                                    name = 'email'
                                    required />
                            </div>
                            <label>Password</label>
                            <div className = 'control'>
                                <input
                                    className = 'input'
                                    type = 'password'
                                    name = 'password'
                                    required />
                            </div>
                            <label>Confirm Password</label>
                            <div className = 'control'>
                                <input
                                    className = 'input'
                                    type = 'password'
                                    name = 'ConfirmPassword'
                                    required />
                            </div>
                            <label>First Name</label>
                            <div className = 'control'>
                                <input
                                    className = 'input'
                                    type = 'text'
                                    name = 'firstName'
                                    required />
                            </div>
                            <label>Last Name</label>
                            <div className = 'control'>
                                <input
                                    className = 'input'
                                    type = 'text'
                                    name = 'lastName'
                                    required />
                            </div>
                            <label>Nickname</label>
                            <div className = 'control'>
                                <input
                                    className = 'input'
                                    type = 'text'
                                    name = 'Nickname'
                                    required />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormRegistration