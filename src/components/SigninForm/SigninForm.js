import React from 'react'
import { Link } from 'react-router-dom'
import { withFormik, Form } from 'formik'
import * as Yup from 'yup'

function SigninForm(props){
    document.title = `Login`;
    return(
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
                            <span className='input-group-text'><i class="fas fa-lock"></i></span>
                        </div>
                        <input type='password' className='form-control' name='password' value={props.values.password} placeholder="Password" onChange={props.handleChange} />
                    </div>

                    <div className='form-group'>
                        <Link to="/" type='submit' className='btn btn-primary btn-block'>Sign in</Link>
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
