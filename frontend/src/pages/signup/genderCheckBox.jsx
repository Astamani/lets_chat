import React from 'react';

const GenderSelect = ({ onGenderChange, selectedGender }) => {
  return (
    <div className='my-2 flex flex-col gap-2'>
      <label htmlFor="gender" className='label-text'>Select Gender:</label>
      <select 
        id="gender" 
        className=' w-full px-5 py-2 bg-black border-2 rounded-md  border-slate-400' 
        value={selectedGender} 
        onChange={(e) => onGenderChange(e.target.value)}
      >
        <option >Xender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};

export default GenderSelect;
