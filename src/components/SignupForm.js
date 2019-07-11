import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

function SignupForm(props){
    document.title = `Register`;
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
    return(
        
        <div className="border-form">
            <div className="m20 text-center">
                <h2>Register</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className='form-group input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text'><i class="fas fa-user"></i></span>
                        </div>
                        <input className='form-control' name='username' value={values.username} placeholder="Username" onChange={handleChange} onBlur={handleBlur}/>
                    
                    </div>
                    {errors.username && touched.username && <div className='err'>{errors.username}</div>}
                    <div className='form-group input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text'><i class="far fa-envelope"></i></span>
                        </div>
                        <input type='email' className='form-control' name='email' value={values.email} placeholder="Email" onChange={handleChange} onBlur={handleBlur} />
                    </div> 
                    {errors.email && touched.email && <div className='err'>{errors.email}</div>}
                    <div className='form-group input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text'><i class="fas fa-lock"></i></span>
                        </div>
                        <input type='password' className='form-control' name='password1' value={values.password1} placeholder="Create password" onBlur={handleBlur} onChange={handleChange} />
                    </div>
                    {errors.password1 && touched.password1 && <div className='err'>{errors.password1}</div>}
                    <div className='form-group input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text'><i class="fas fa-key"></i></span>
                        </div>
                        <input type='password' className='form-control' name='password2' value={values.password2} placeholder="Repeat password" onBlur={handleBlur} onChange={handleChange} />
                    </div>
                    {errors.password2 && touched.password2 && <div className='err'>{errors.pa}</div>}
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary btn-block'>Sign up</button>
                    </div>
                    <div className='form-group'>
                        <p>Have an account? <Link to='/signin'>Login</Link></p> 
                    </div>
                </form>
            </div>
            
        </div>
       
     
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
    }),
    handleSubmit: (values, { setSubmitting }) => {
        //setSubmitting(false);
        window.location.push('/signin')
      },
})(SignupForm)

export default FormikForm
