import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import React, { useState } from 'react'
import useLogin from "@/hooks/useLogin";

const login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin()
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    await login(username, password)
  }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className=' overflow-hidden  flex flex-col min-h-[30vw] items-center justify-center min-w-[25vw] mx-auto'>
        <div className='border-2 rounded-lg w-full h-full p-6  shadow-lg  bg-gray-400  backdrop-filter backdrop-blur-lg bg-opacity-0'>
          <h1 className='text-3xl font-semibold text-center my-4'>Login</h1>
          <form onSubmit={handleOnSubmit}>
            <div >
              <label className='p-2 label'>
                <span className='text-base  label-text'>Username</span>
              </label>
              <input className=" bg-black" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
              <label className='p-2  label'>
                <span className='text-base label-text'>Password</span>
              </label>
              <input className=" bg-black" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <a href="/Signup" className='text-sm mt-4 hover:underline hover:text-blue-600 inline-block'>
              "Don't" have any account?
            </a>
            <div className=" w-full flex justify-center items-center">
              <button className="mt-6 w-36 bg-black" variant="outline" disabled={loading}>{loading ? <span>This is loading</span> : 'Login'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default login