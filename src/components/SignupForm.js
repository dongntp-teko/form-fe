import React, { useGlobal, useEffect, useState } from "reactn";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from 'axios'
import { resolveSoa } from "dns";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(5, "Username must have min 5 characters")
    .max(50, "Username have max 50 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Email is invalid"),
  password1: Yup.string()
    .required("Password is required")
    .min(6, "Password must have min 6 characters"),
  password2: Yup.string()
    .required("Confirm your password!")
});


const SignupForm = props => {
  const [status, setStatus] = useState("")
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password1: "",
        password2: ""
      }}
      validationSchema={SignupSchema}
      onSubmit= {values => {
        const body = {
          username: values.username,
          password1: values.password1,
          password2: values.password2,
          email: values.email
        }
        axios.post('http://127.0.0.1:5000/api/users/', body)
        .then( (res) => {
          if (res.data) setStatus(res.data)
          else props.history.push('/signin')
        }
        )
        .catch(function (error) {
          console.error(error);
        });
        
      }
      }
      render={props => (
        <div className="border-form">
          <div className="m20 text-center">
            <h2>Register</h2>
            <hr />
            <form onSubmit={props.handleSubmit}>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fas fa-user" />
                  </span>
                </div>
                <input
                  className="form-control"
                  name="username"
                  value={props.values.username}
                  placeholder="Username"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
              </div>
              {props.errors.username && props.touched.username && (
                <div className="err">{props.errors.username}</div>
              )}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="far fa-envelope" />
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={props.values.email}
                  placeholder="Email"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
              </div>
              {props.errors.email && props.touched.email && (
                <div className="err">{props.errors.email}</div>
              )}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fas fa-lock" />
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  name="password1"
                  value={props.values.password1}
                  placeholder="Create password"
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                />
              </div>
              {props.errors.password1 && props.touched.password1 && (
                <div className="err">{props.errors.password1}</div>
              )}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fas fa-key" />
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  name="password2"
                  value={props.values.password2}
                  placeholder="Repeat password"
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                />
              </div>
              {props.errors.password2 && props.touched.password2 && (
                <div className="err">{props.errors.password2}</div>
              )}
              <p className='err'>{status}</p>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Sign up
                </button>
              </div>
              <div className="form-group">
                <p>
                  Have an account? <Link to="/signin">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    />
  );
};

export default SignupForm;
