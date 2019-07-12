import React from 'react'
import { useState } from 'react'
import { Formik } from 'formik';
import { Link } from 'react-router-dom'

function Forgot(props){
    const [status, setStatus] = useState(true);
    return (
        <Formik
        initialValues={{ email: '',code: ''} }
        onSubmit={() => {
            if (status){
                setStatus(false)
            } else {
                props.history.push('/change')
            }
            
        }}
        render={props => (
        <div className='border-form'>
            
            <div className='m20 text-center'>
                {status ? (
                    <form onSubmit={props.handleSubmit}>
                        <div className='form-group'>
                            <label for='email'>
                                Enter your email address: 
                            </label>
                            <input name='email' type='email' className='form-control'/>
                        </div>
                        <button type='submit' className='btn btn-primary btn-block'>Send</button>
                    </form>
                ) : (
                    <div>
                    <form onSubmit={props.handleSubmit}>
                        <div className='form-group'>
                            <label for='code'>
                                Please check your email for a message with your code:
                            </label>
                            <input name='code' type='text' className='form-control' placeholder='Code'/>
                        </div>
                        <button type='submit' className='btn btn-primary btn-block'>Submit</button>
                        
                    </form>  
                    <p>Didn't get a code? <Link>Re-send</Link></p>
                    </div>
                )
                }
            </div>
        </div>
        )}
        />
    )
}

export default Forgot;