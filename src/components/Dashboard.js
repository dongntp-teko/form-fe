import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard (){
    return (
        <div>
            <h1 className='text-center'>Welcome!</h1>
            <Link to='/signin'><p>Sign out</p></Link>
        </div>
    );    
}

export default Dashboard;