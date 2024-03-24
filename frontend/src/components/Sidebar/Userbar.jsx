import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import useConversation from '@/zustand/useConversation'

const Userbar = ({ conversation, lastindex, emoji }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;
    return (
        <>
            <div className={`${isSelected ? "bg-sky-500" : ""} hover:bg-sky-300 flex justify-center items-center  w-full h-16  px-2`} onClick={()=>setSelectedConversation(conversation)}>
                <div className='w-14 border-2 h-14 rounded-full'><Avatar className='w-full h-full'>
                    <AvatarImage src={conversation.profilePic} />
                </Avatar>
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