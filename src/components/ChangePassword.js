import React, { useGlobal } from 'reactn'
import {Formik} from 'formik'

function Change(props){
    const [acc, setAcc] = useGlobal('account')
    return(
        <Formik 
        initialValues={{ password1: '', password2: '' }}
        onSubmit = {values => {
            const username=acc.user;
            setAcc({user: username, password: values.password1}, acc => {props.history.push("/")})
        }}
        render = {props => (
        <div className='border-form'>
            
            <div className='m20'>
                    <h2 className='text-center'>Set your password</h2>
                    <form onSubmit = {props.handleSubmit}>
                        <div className='form-group'>
                            <label>
                                New password:
                            </label>
                            <input name='password1' value={props.values.password1} onChange={props.handleChange} type='password' className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <label>
                                Repeat password:
                            </label>
                            <input name='password2' value={props.values.password2} onChange={props.handleChange} type='password' className='form-control'/>
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