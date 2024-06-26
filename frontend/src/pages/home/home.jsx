import React from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "../../components/ui/resizable"
import Search from '../../components/Sidebar/Search'
import Userbar from '../../components/Sidebar/Userbar'
import MessageContainer from '../../components/Message/MessageContainer'
import useGetConversation from '../../hooks/useGetConversation'
import { getRandomEmoji } from '../../utils/emojis'
import Logout from '../../components/Logout/logout'
const Home = () => {
    const { conversation } = useGetConversation();
    console.log("Conversations", conversation)
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className=' w-20 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full font-bold m-10'>
                <Logout/>
            </div>
            <ResizablePanelGroup
                direction="horizontal"
                className="max-h-[80%] max-w-[50vw] rounded-lg border"
            >
                <ResizablePanel defaultSize={50} className=' overflow-auto'>
                    <div style={{ maxHeight: 'calc(100% - 50px)', overflow: 'auto' }} className='example'>
                        <Search />
                        {conversation.map((conversation, index) => (
                            <Userbar key={conversation._id} conversation={conversation} emoji={getRandomEmoji()} lastindex={index === conversation.length - 1} />
                        ))}
                        {/* Add more Userbar components as needed */}
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle />

                <ResizablePanel defaultSize={75}>
                    <div className='h-full '>
                        <MessageContainer></MessageContainer>

                    </div>
                </ResizablePanel>

            </ResizablePanelGroup>
        </div>
    )
}

export default Home