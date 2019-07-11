import React from 'react'
import {Formik} from 'formik'
import {Link} from 'react-router-dom'

function Change(){
    return(
        <Formik 
        initialValues={{ password1: '', password2: '' }}
        render = {props => (
        <div className='border-form'>
            
            <div className='m20'>
                
                    <form>
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
                        <Link to="/dashboard" type='submit' className='btn btn-primary btn-block'>Send</Link>
                    </form>
            </div>
        </div>
        )}
        />
    )
}

export default Change;