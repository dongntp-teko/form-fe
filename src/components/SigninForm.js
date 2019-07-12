import React, { useGlobal } from "reactn";
import { Link } from "react-router-dom";
import { withFormik, Form, Formik } from "formik";
import * as Yup from "yup";

const SigninShechma = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must have min 6 characters")
});

function SigninForm(props) {
  const [account, setAccount] = useGlobal("account");
  return (
    <Formik
      initialValues={{
        username: "",
        password: ""
      }}
      validationSchema={SigninShechma}
      onSubmit={values => {
        if (
          values.username === account.user &&
          values.password === account.password
        )
        props.history.push("/")
      }}
      render={props => (
        <div className="border-form">
          <div className="m20 text-center">
            <h2>Login</h2>
            <hr />
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
