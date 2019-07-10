import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

function SignupForm(props){
    document.title = `Register`;
    return(
        <Router>
        <div className="border-form">
            <div className="m20 text-center">
                <h2>Register</h2>
                <hr />
                <Form>
                    <div className='form-group input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text'><i class="fas fa-user"></i></span>
                        </div>
                        <input className='form-control' name='username' value={props.values.username} placeholder="Username" onChange={props.handleChange} />
                    
                    </div>
                    <div>
                        <p className='err'>{props.errors.username}</p>
                    </div>
                    <div className='form-group input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text'><i class="far fa-envelope"></i></span>
                        </div>
                        <input type='email' className='form-control' name='email' value={props.values.email} placeholder="Email" onChange={props.handleChange} />
                    </div> 
                    <div className='form-group input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text'><i class="fas fa-lock"></i></span>
                        </div>
                        <input type='password' className='form-control' name='password1' value={props.values.password1} placeholder="Create password" onChange={props.handleChange} />
                    </div>
                    <div className='form-group input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text'><i class="fas fa-key"></i></span>
                        </div>
                        <input type='password' className='form-control' name='password2' value={props.values.password2} placeholder="Repeat password" onChange={props.handleChange} />
                    </div>
                    <div className='form-group'>
                        <Link to="/" type='submit' className='btn btn-primary btn-block'>Sign up</Link>
                    </div>
                </Form>
            </div>
    
        </div>
        </Router>
     
    )
}

const FormikForm = withFormik({
    mapPropsToValues() { 
        return {
            username: '',
            email: '',
            password1: '',
            password2: '',
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required('Username is required')
            .min(5, 'Username must have min 5 characters')
            .max(50, 'Username have max 50 characters'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password1: Yup.string()
            .required('Password is required')
            .min(6, 'Password must have min 6 characters')
    })
})(SignupForm)

export default FormikForm
