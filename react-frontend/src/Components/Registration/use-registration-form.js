import { useState, useEffect } from 'react'

const useRegistrationForm = (callback, validate) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect (() =>{
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    const handleChange = (e) => {
        e.persist();
        setValues(values => ({ ...values, [e.target.name]: e.target.value }));
    };

    return {
        handleSubmit,
        handleChange,
        values,
        errors
    }
};

export default useRegistrationForm