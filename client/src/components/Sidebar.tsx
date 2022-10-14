import React, { useState } from 'react'
import { useTheme } from '../contexts/theme-context'
import { Link } from 'react-router-dom';
import { links } from '../data/links';
import CloseButton from './UI/CloseButton';

const Sidebar = () => {
  const { activeMenu, activeTheme, activeTab, setActiveTab, setActiveMenu } = useTheme();

  const handleCloseSidebar = () => {
    setActiveMenu && setActiveMenu(prev => !prev )
  }
  // Omg, I just found something that is very dumb
  return (
    <div className='h-screen'>
      {activeMenu && (
        <div className='p-6'>
          {/* Website Name and exit */}
          <div className='text-xl font-semibold flex justify-between place-content-center'>
            <p>Crawly</p>
            <button onClick={handleCloseSidebar}><CloseButton/></button>
          </div>
          {/* Links */}
          <div className=' mt-10'>
            {links?.map((item, i) => (
              <div key={i}>
                <p className='text-md text-gray-500 '>
                  {item.title.toUpperCase()}
                </p>
                {item?.links?.map((link, index) => (
                  <button 
                    style={activeTab === link.name ? {backgroundColor: activeTheme, color: 'white'} :  {}}
                    onClick={() => setActiveTab && setActiveTab(link.name)}
                    className={`text-md flex flex-row cursor-pointer rounded w-full items-center p-2 my-5 gap-3`}>
                    {link.icon}
                    <p className='capitalize'>{link.name}</p>
                  </button>
                ))}
              </div>
            ))}

          </div>
        </div>
      )}

    </div>
  )

  return <>

  </>


}

export default Sidebar