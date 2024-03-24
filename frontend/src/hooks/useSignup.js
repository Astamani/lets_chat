import { useAuthContext } from '@/Context/authContext'
import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const useSignup = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const signup = async ({ fullName, password, confirmPassword, gender, userName }) => {
        const success = handleInputErr({ fullName, password, confirmPassword, gender, userName })
        if (!success) return;
        setLoading(true);
        try {

            // console.log({ fullName, password, confirmPassword, gender, userName });

            // const { data } = await axios.post('/api/auth/signup', { fullName, password, confirmPassword, gender, userName })
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, password, confirmPassword, gender, userName })
            })

            const data = await res.json();

            
            if (!data.success) {
                throw new Error('Network response was not ok');
            }
            console.log(`The useSignup Clg:${data}`);



            localStorage.setItem('chat-user', JSON.stringify(data))

            // console.log(data.user);
            setAuthUser(data)

            // const data = await res.json();
        } catch (error) {
            toast.error(error.message || 'An error occurred while processing your request.');
            console.log("catch error")
        } finally {
            setLoading(false);
        }

    }
    return { loading, signup }
}

export default useSignup

function handleInputErr({ fullName, password, confirmPassword, gender, userName }) {
    if (!fullName || !userName || !password || !confirmPassword || !gender) {
        toast.error("Plreas fill the all the information")
        return false
    }
    if (password !== confirmPassword) {
        toast.error("Password don't match")
        return false;
    }
    if (password.length < 6) {
        toast.error("Password atlease 6 characters")
        return false
    }
    return true;
}