import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import GenderCheckBox from './genderCheckBox'
import { useState } from 'react'
import useSignup from '@/hooks/useSignup'

const Signup = () => {
  let [inputs, setInputs] = useState({
    fullName: '',
    password: '',
    gender: '',
    confirmPassword: '',
    userName: ''
  })
  const { loading, signup } = useSignup();
  const handleCheckBox = (gender) => {
    setInputs({ ...inputs, gender })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
  }
  return (
    <div className='flex flex-col w-full items-center justify-center  mx-auto'>
      <div className=' min-w-[26vw] min-h-[20vw] border-2 border-white  p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center my-2'>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className='mt-2'>
            <label className='flex flex-col gap-2'>
              <span className='' >Full Name</span>
              <input className="border-2 border-slate-600 bg-black px-8 py-2 rounded-md  w-full" type="text" placeholder="Full Name"
                value={inputs.fullName}
                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
            </label>
          </div>
          <div className='mt-2 '>
            <label className='flex flex-col gap-2'>
              <span className=''>Username</span>
              <input className="border-2 border-slate-600 bg-black px-8 py-2 rounded-md  w-full" type="text" placeholder="Username" value={inputs.userName}
                onChange={(e) => setInputs({ ...inputs, userName: e.target.value })} />
            </label>
          </div>
          <div className='mt-2'>
            <label className='flex flex-col gap-2'>
              <span className='text-base  label-text'>Password</span>
              <input className="border-2 border-slate-600 bg-black px-8 py-2 rounded-md  w-full" type="password" placeholder="Password" value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
            </label>
          </div>
          <div className='mt-2'>
            <label className='flex flex-col gap-2'>
              <span className='text-base label-text'>Confirm Password</span>
              <input className="border-2 border-slate-600 bg-black px-8 py-2 rounded-md  w-full" type="password" placeholder="Confirm Password" value={inputs.confirmPassword}
                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
            </label>
          </div>
          {/* Gender check goes here */}
          <GenderCheckBox onGenderChange={handleCheckBox} selectedGender={inputs.gender} />
          <a href="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            Already have an account?
          </a>
          <div className='flex justify-center items-center'>
            <button className="mt-6 w-36 bg-black" type='submit' variant="outline" disabled={loading}>{loading ? <span>This is loading</span> : 'Signup'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup