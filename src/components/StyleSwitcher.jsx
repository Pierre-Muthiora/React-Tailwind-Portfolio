import React from 'react'
import { FaCog, FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";


const StyleSwitcher = ({handleModeSwitch, mode}) => {
  return (
    <div className='z-30'>        
        <div  onClick={handleModeSwitch} id='style-switcher' className='fixed right-6 top-14 z-50 w-8 h-8 bg-slate-200 dark:bg-gray-900 dark:hover:bg-gray-700 hover:bg-slate-400 rounded-lg cursor-pointer flex justify-center items-center transition-all duration-300'>
           {mode === "dark" ? <IoSunnySharp size={20} className='dark:text-white'/> : <FaMoon size={20} className='dark:text-white'/>}
        </div>
    </div>
  )
}

export default StyleSwitcher