import useSendMessages from '@/hooks/useSendMessages';
import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
const SendMessage = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessages();
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!message) return;
    await sendMessage(message)
    setMessage("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className=' w-full relative h-9 flex flex-col justify-center items-center'>
        <input type="text" className=' border text-sm rounded-br-lg block w-full p-2.5 bg-[#09090B] text-white' placeholder='Send Meassage'
        value={message}
        onChange={(e)=>setMessage(e.target.value)} />
        <button type="submit" className='absolute inset-y-0 end-0 flex items-center pe-3'>
          {loading ? <div>This is loading</div> : <IoIosSend />}
        </button>
      </div>
    </form>
  )
}

export default SendMessage
// className='  right-0 rounded-full w-9 h-9 bottom-0 bg-zinc-900'