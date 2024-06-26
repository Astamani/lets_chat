import useConversation from '@/zustand/useConversation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useGetMessage = () => {
  const [loading, setloading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const getMessages = async () => {
    setloading(true);
    try {
      const res = await fetch(`/api/message/${selectedConversation._id}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error)
      await setMessages(data)
    } catch (error) {
      toast.error(error.message);
    } finally {
      setloading(false)
    }
  }

  useEffect(() => {
    if (selectedConversation?._id) getMessages()
  }, [selectedConversation?._id, setMessages])
  return { messages, loading, getMessages }
}

export default useGetMessage