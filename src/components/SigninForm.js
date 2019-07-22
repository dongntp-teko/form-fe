import React, { useGlobal, useState } from "reactn";
import { Link } from "react-router-dom";
import { withFormik, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SigninShechma = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must have min 6 characters")
});

function SigninForm(props) {
  const [account, setAccount] = useGlobal("account");
  const [status, setStatus] = useState("");
  return (
    <Formik
      initialValues={{
        username: "",
        password: ""
      }}
      validationSchema={SigninShechma}
      onSubmit={values => {
        const body = {
          username: values.username,
          password: values.password
        }
        axios.post(`http://127.0.0.1:5000/api/users/${values.username}`, body)
        .then( res => {
          console.log(res)
          if (res.data) {
            setAccount({
              user: res.data.username,
              password: res.data.password
            }, account => props.history.push('/'))
          } else {
            setStatus("Username or password is incorrect")
          }
        })
        
      }}
      render={props => (
        <div className="border-form">
          <div className="m20 text-center">
            <h2>Login</h2>
            <hr />
            <p className='err'>{status}</p>
            <Form onSubmit={props.handleSubmit}>
              {props.errors.username && props.touched.username && (
                <div className="err">{props.errors.username}</div>
              )}
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
                  onBlur={props.handleBlur}
                  placeholder="Username"
                  onChange={props.handleChange}
                />
              </div>

              {props.errors.password && props.touched.password && (
                <div className="err">{props.errors.password}</div>
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
                  name="password"
                  value={props.values.password}
                  onBlur={props.handleBlur}
                  placeholder="Password"
                  onChange={props.handleChange}
                />
              </div>

              <div>
                <Link to="/forgot" className="forgot-password">
                  Forgot password?
                </Link>
              </div>
              <div className="form-group">
                <button
                  to="/dashboard"
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  Sign in
                </button>
              </div>

              <div>
                <p>
                  Don't have an account? <Link to="/signup">Register</Link>
                </p>
              </div>
            </Form>
          </div>
        </div>
      )}
    />
  );
}

export default SigninForm;
