import useGetMessage from '@/hooks/useGetMessage';
import useConversation from '@/zustand/useConversation'
import React, { useEffect, useRef } from 'react'
import Message from './Message';
import Skeleton from '../skeleton/skeleton';
import { useAuthContext } from '@/Context/authContext';
import useListenMessages from '@/hooks/useListenMessages';

const Messageviewformat = () => {
    const{authUser}=useAuthContext();
    const { messages, loading } = useGetMessage();
   useListenMessages();
    const lastMessage = useRef();
    // console.log(messages)
    // const { selectedConversation, setSelectedConversation } = useConversation();
    useEffect(()=>{
        console.log(messages);
        setTimeout(() => {
            lastMessage.current?.scrollIntoView({behaviou:"smooth"})
        }, 100);
    },[messages])
    return (<>
        <div>
        {!loading && messages.length > 0 && messages.map((message, index) => (
    <div key={message._id} ref={index === messages.length - 1 ? lastMessage : null}>
        {/* {console.log(message)} */}
        <Message message={message} />
    </div>
))}


            {loading && [...Array(3)].map((_, idx) => <Skeleton key={idx} />)}
            {!loading && messages.length === 0 && (<div className='flex justify-center items-center my-10'>
                <h1 className='text-2xl text-white font-semibold'>Welcome <span>{authUser.user.userName}</span> to Chat-App</h1>
                <p className='text-white'>Send message to start the Conversation</p>
            </div>
        )}
        </div>
    </>
    )
}

export default Messageviewformat

// < div className = 'relative max-w-80 flex gap-6 mb-2 ' >
//     <div className=' bg-green-400 rounded-lg p-4'>
//

        
//     </div>
//     </div >