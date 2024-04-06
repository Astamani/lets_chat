import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { IoIosSearch } from "react-icons/io";
import Logout from '../Logout/logout';
import useConversation from '@/zustand/useConversation';
import useGetConversation from '@/hooks/useGetConversation';
import toast, { Toaster } from 'react-hot-toast';
import { LogOut } from 'lucide-react';
const Search = () => {
    const [search, setSearch] = useState("")
    const { setSelectedConversation } = useConversation()
    const { conversation } = useGetConversation()
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            return toast.error('Enter atleast 3 charater')
        }
        const conversations = conversation.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))
        if (conversations) {
            setSelectedConversation(conversations)
            setSearch('')
        }
        else {
            toast.error('No such user Found!')
        }
    }
    return (
        <div className='sticky top-5 z-10 w-full flex mt-10 mb-5 justify-center items-center gap-5'>
            <form onSubmit={handleOnSubmit} className='flex items-center gap-2'>
                <input type="text" className='input input-bordered rounded-full' placeholder='Search..' name="" id="" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type="submit" className='btn btn-circle text-white'>
                    <IoIosSearch className='w-6 h-6 outline-none' />
                </button>
            </form>
       
        </div>
    )
}

export default Search