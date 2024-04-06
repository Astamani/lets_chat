import { useSocketContext } from '@/Context/socketContext'
import useConversation from '@/zustand/useConversation';
import { CloudHail } from 'lucide-react';
import React, { useEffect } from 'react'

import notificationSound from "../assets/sound/noti.mp3"

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound)
            sound.play();
            setMessages([...messages, newMessage])
        })
        return () => socket?.off("newMessage")
    }, [socket, messages, setMessages])
}

export default useListenMessages