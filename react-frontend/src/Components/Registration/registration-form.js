import React, {useState} from "react";
import useRegistrationForm from "./use-registration-form";
import validate from "./validate-registration";
import axios from "axios";

const FormRegistration = () => {
  const gender = [
    { id: "1", gender: "Male" },
    { id: "2", gender: "Female" },
    { id: "3", gender: "Other" }
  ];

  const { values, errors, handleChange, handleSubmit } = useRegistrationForm(
    register,
    validate
  );

  async function register() {
    // send data to API
    let query = {
      email: `${values.email}`,
      password: `${values.password}`,
      firstName: `${values.firstName}`,
      lastName: `${values.lastName}`,
      nickname: `${values.nickname}`,
      gender: `${values.gender}`
    };
    let url = "/register";
    let baseURL = "http://localhost:8080";
    let config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    // GET DATA FROM API!
    axios
      .request({
        method: "POST",
        url: baseURL + url,
        headers: config,
        data: query
      })
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  return (
    <div className="section is-fullheight">
    <div className = 'container'>
    <div className = 'column is-4 is-offset-4'>
      <div className="box">
        <h1 className="title is-2">Register</h1>
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
          <label>Confirm Password</label>
          <div className="field">
            <div className="control">
              <input
                className={`input ${errors.confirmPassword && "is-danger"}`}
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={values.confirmPassword || ""}
                required
              />
              {errors.confirmPassword && (
                <p className="help is-danger">{errors.confirmPassword}</p>
              )}
            </div>
          </div>
          <label>First Name</label>
          <div className="field">
            <div className="control">
              <input
                className={`input ${errors.firstName && "is-danger"}`}
                type="text"
                name="firstName"
                onChange={handleChange}
                value={values.firstName || ""}
                required
              />
              {errors.firstName && (
                <p className="help is-danger">{errors.firstName}</p>
              )}
            </div>
          </div>
          <label>Last Name</label>
          <div className="field">
            <div className="control">
              <input
                className={`input ${errors.lastName && "is-danger"}`}
                type="text"
                name="lastName"
                onChange={handleChange}
                value={values.lastName || ""}
                required
              />
              {errors.lastName && (
                <p className="help is-danger">{errors.lastName}</p>
              )}
            </div>
          </div>
          <label>Nickname</label>
          <div className="field">
            <div className="control">
              <input
                className={`input ${errors.nickname && "is-danger"}`}
                type="text"
                name="nickname"
                onChange={handleChange}
                value={values.nickname || ""}
                required
              />
              {errors.nickname && (
                <p className="help is-danger">{errors.nickname}</p>
              )}
            </div>
          </div>
          <label>Gender</label>
          <div className="field">
            <div className="control">
              <select
                className="select"
                name="gender"
                onChange={handleChange}
                value={values.gender}
              >
                {gender.map(value => (
                  <option key={value.id} value={value.gender}>
                    {value.gender}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            className="button is-block is-info is-fullwidth"
            onSubmit={handleSubmit}>
            Register
          </button>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
};

export default FormRegistration;
