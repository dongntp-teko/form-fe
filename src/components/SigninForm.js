import React from 'react'
import { Link } from 'react-router-dom'
import { withFormik, Form } from 'formik'
import * as Yup from 'yup'

function SigninForm(props){
    document.title = `Login`;
    return(
        <div className="border-form">
            <div className="m20 text-center">
                <h2>Login</h2>
                <hr />
                <Form>
                    {props.errors.username && props.touched.username && <div className='err'>{props.errors.username}</div>}
                    <div className='form-group input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text'><i class="fas fa-user"></i></span>
                        </div>
                        <input className='form-control' name='username' value={props.values.username} onBlur={props.handleBlur} placeholder="Username" onChange={props.handleChange} />
                    </div>
                    
                    {props.errors.password && props.touched.password && <div className='err'>{props.errors.password}</div>}
                    
                    <div className='form-group input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text'><i class="fas fa-lock"></i></span>
                        </div>
                        <input type='password' className='form-control' name='password' value={props.values.password} onBlur={props.handleBlur} placeholder="Password" onChange={props.handleChange} />
                    </div>
                    
                    <div>
                        <Link to='/forgot' className='forgot-password'>Forgot password?</Link>
                    </div>
                    <div className='form-group'>
                        <Link to="/dashboard" type='submit' className='btn btn-primary btn-block'>Sign in</Link>
                    </div>

                    <div>
                        <p>Don't have an account? <Link to='/signup'>Register</Link></p>
                    </div>
                </Form>
            </div>
    
        </div>
     
    )
}

const FormikForm = withFormik({
    mapPropsToValues() { 
        return {
            username: '',
            password: '',
           
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required('Username is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must have min 6 characters')
    })
})(SigninForm)

export default FormikForm
