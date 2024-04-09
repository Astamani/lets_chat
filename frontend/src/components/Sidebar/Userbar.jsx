import React from 'react'
import useConversation from '@/zustand/useConversation'
import { useSocketContext } from '@/Context/socketContext';

const Userbar = ({ conversation, lastindex, emoji }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;
    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id)
    
    return (
        <>
            <div className={`${isSelected ? "bg-sky-500" : ""} hover:bg-sky-300 flex justify-center items-center  w-full h-16  px-2`} onClick={() => setSelectedConversation(conversation)}>
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="w-14 rounded-full">
                        <img src={conversation.profilePic} />
                    </div>
                </div>
                <div className='w-[76%] text-[15px] pl-4 flex flex-col flex-1'>
                    <div>{conversation.fullName}</div>
                </div>
                <span>{emoji}</span>
            </div>
            {!lastindex && <div className=' border-t-2 border-zinc-500 my-0 py-0 h-1' />}

        </>
    )
}

export default Userbar