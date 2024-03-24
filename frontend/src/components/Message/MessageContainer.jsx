import React from 'react'
import SendMessage from './SendMessage';
import Messageviewformat from './Messageviewformat';
import useConversation from '@/zustand/useConversation';
import { useEffect } from 'react';
import useGetMessage from '@/hooks/useGetMessage';
import skeleton from '../skeleton/skeleton';
const  NoChatSelected = () => {
  return (
    <div className=' p-10 text-black  w-full h-full bg-yellow-200 border-2 border-black flex items-center justify-center'>
      <div className=' text-3xl font-sans font-semibold'>
        <h1>Choose the Anyone to Chat with</h1>
      </div>
    </div>
  )
}
const MessageContainer = () => {
  const { messages, loading } = useGetMessage();
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation])
  return <>
    {!selectedConversation ? (<NoChatSelected />) : (
      <div className='w-full h-full relative overflow-hidden'>
        <div className='border-zinc-700 border-b-2  font-semibold h-16 text-md flex p-5 items-center'>
          <h5>{selectedConversation.fullName}</h5>
        </div>
        <div className='relative overflow-auto example bg-red-600 h-[82%]'>
          <Messageviewformat/>
        </div>
        <div className='absolute bottom-0 w-full'>
          <SendMessage />
        </div>
      </div>

    )}
  </>
}

export default MessageContainer

