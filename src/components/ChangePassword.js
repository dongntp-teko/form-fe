import React from 'react'
import {Formik} from 'formik'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory();

function Change(){
    return(
        <Formik 
        initialValues={{ password1: '', password2: '' }}
        onSubmit = {() => {
            history.push('/dashboard')
        }}
        render = {props => (
        <div className='border-form'>
            
            <div className='m20'>
                    <h2 className='text-center'>Set your password</h2>
                    <form onSubmit = {props.onSubmit}>
                        <div className='form-group'>
                            <label>
                                New password:
                            </label>
                            <input name='password1' type='password' className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <label>
                                Repeat password:
                            </label>
                            <input name='password2' type='password' className='form-control'/>
                        </div>
                        <button type='submit' className='btn btn-primary btn-block'>Send</button>
                    </form>
            </div>
        </div>
        )}
        />
    )
}

export default Change;