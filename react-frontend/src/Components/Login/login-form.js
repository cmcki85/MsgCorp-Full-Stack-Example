import React, {useState} from "react";
import useLoginForm from "./use-login-form";
import validate from "./validate-login";
import axios from 'axios'

const FormLogin = () => {
  const { values, errors, handleChange, handleSubmit } = useLoginForm(
    login,
    validate
  );

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  async function login() {
    // submit login to API
    let query = {
        email: `${values.email}`,
        password: `${values.password}`,
    }
    const url = 'http://localhost:8080/login'
    const config = {
        headers: {
          "Content-Type": "application/json"
        }
    }

    axios.request({
        method: 'POST',
        url: url,
        headers: config,
        data: query
    })
    .then(function (response) {
        console.log(response.data)
        setIsLoggedIn(true)
    })
    .catch(function(error) {
        console.log(error)
    })

    
  }

  return (
    <div className="section is-fullheight">
    <div className = 'container'>
    <div className = 'column is-4 is-offset-4'>
      <div className="box">
        <h1 className="title is-2">Login</h1>
        <form onSubmit={handleSubmit} noValidate>
          <label>Email Address</label>
          <div className="field">
            <div className="control">
              <input
                className={`input ${errors.email && "is-danger"}`}
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email || ""}
                required
              />
              {errors.email && <p className="help is-danger">{errors.email}</p>}
            </div>
          </div>
          <label>Password</label>
          <div className="field">
            <div className="control">
              <input
                className={`input ${errors.password && "is-danger"}`}
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password || ""}
                required
              />
              {errors.password && (
                <p className="help is-danger">{errors.password}</p>
              )}
            </div>
          </div>
          <div className='field'>
            <button
                className="button is-block is-info is-fullwidth"
                onSubmit={handleSubmit}>
                Login
            </button>
          </div>
          <label>Not Registered?</label>
          <div className='field'>
            <button
                className='button is-block is-info is-fullwidth'>
                Register
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
};

export default FormLogin;
