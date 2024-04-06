import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useGetConversation = () => {
    const [loading, setLoading] = useState(false);
    const [conversation, setConversation] = useState([])

    useEffect(() => {
        const getConversation = async () => {
            setLoading(true);
            try {
                const res = await axios.get('/api/user');
                const data = await res.data;
                if (data.error) {
                    throw new Error(data.error);
                }
                setConversation(data)
            } catch (error) {
                toast.error(`This is form catch of useGetConversation:${error.message}`)
            } finally {
                setLoading(false)
            }
        }
        getConversation();
    }, [])
    return { loading, conversation }
}

export default useGetConversation