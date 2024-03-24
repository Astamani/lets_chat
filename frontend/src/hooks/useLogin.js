import { useAuthContext } from '@/Context/authContext'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'

function useLogin() {
    const [loading, setLoading] = useState(false)
    const {setAuthUser}=useAuthContext()
    
    const login = async (userName, password) => {
        const success = handleInputErr(userName,password);
        if (!success) return;
        setLoading(true);
        try {
            console.log(`This is the userName:"${userName}" and this is the password:"${password}"`)
            const res =  await axios.post('/api/auth/login', { userName, password });
            const data = res.data;
        console.log(data)
            if(data.error){
                throw new Error (data.error)
            }
            localStorage.setItem("chat-user",JSON.stringify(data))
            setAuthUser(data);
        } catch (error) {
            toast.error(`This message from useLogin catch:${error.message}`)
        } finally {
            setLoading(false)
        }
    }
    return{loading,login}
}

export default useLogin
function handleInputErr(userName,password) {
    if ( !userName || !password ) {
        toast.error("Plreas fill the all the information")
        return false
    }
   
    return true;
}