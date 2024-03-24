import { useAuthContext } from '@/Context/authContext'
import useGetMessage from '@/hooks/useGetMessage';
import useConversation from '@/zustand/useConversation';
import extractTime from '@/utils/extractTime';
import React from 'react'

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    //This took me so time to do this
    // console.log("Sender ID:", message.senderId);
    // console.log("Authenticated User ID:", authUser.user._id);
    const formattedTime = extractTime(message.createdAt);
    const fromMe = message.senderId === authUser.user._id;
    const chatClassName = fromMe ? 'chat-end' : 'chat-start'
    const profilePic = fromMe ? authUser.user.profilePic : selectedConversation?.profilePic;
    const bubleBg = fromMe ? 'bg-blue-500' : '';
    return (
        <>
            < div className={`chat ${chatClassName}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src={profilePic} />
                    </div>
                </div>
                <div className="chat-header">
                    {fromMe ? authUser.user.userName : selectedConversation?.userName}
                    <time className="text-xs opacity-50">{formattedTime}</time>
                </div>
                <div className={`chat-bubble text-white ${bubleBg}`}>{message.message}</div>
                <div className="chat-footer opacity-50">
                    Delivered
                </div>
            </div >
        </>

    )
}

export default Message