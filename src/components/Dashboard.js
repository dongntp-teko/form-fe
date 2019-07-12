import React, { useGlobal, useEffect } from 'reactn'
import { Link } from 'react-router-dom'

function Dashboard (props){
    const [account, setAccount] = useGlobal('account')
    console.log(account)
    
        if (account.user) {
            return(
                <div>
                    <h1 className='text-center'>Welcome!</h1>
                    <Link to='/signin'><p>Sign out</p></Link>
                </div>
            )
            } else props.history.push('/signin')
       
        
}

export default Dashboard;