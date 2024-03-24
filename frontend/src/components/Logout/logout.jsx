import { useAuthContext } from '@/Context/authContext'
import React from 'react'
import useLogout from '@/hooks/Logout'

const logout = () => {
    const { loading, logout } = useLogout()
    return (
        <div>
           {!loading ?( <button onClick={logout}>logout</button>):(
            <div>Please wait!1</div>
           )}
        </div>
    )
}

export default logout