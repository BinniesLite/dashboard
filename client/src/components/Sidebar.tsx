import React from 'react'
import { Link } from 'react-router-dom';
import { links } from '../constants/links';
import CloseButton from './ui/CloseButton';
// Types
import { AppContextInterface } from '../contexts/theme-context';


const Sidebar = ({activeMenu, activeTheme, setActiveTab, setActiveMenu, activeTab}: AppContextInterface) => {
  
  const handleCloseSidebar = () => {
    setActiveMenu && setActiveMenu(prev => !prev )
  }

  return (
    <div className={activeMenu ? 'w-72 fixed dark:bg-secondary-dark-bg bg-white sidebar' : 'w-0 fixed sidebar'}>
      <div className='h-screen'>
        {activeMenu && (
          <div className='p-6'>
            <div className='text-xl font-semibold flex justify-between place-content-center'>
              <p>Crawly</p>
              <button onClick={handleCloseSidebar}><CloseButton/></button>
            </div>
            {/* Links */}
            <div className='mt-10'>
              {links?.map((item, i) => (
                <div key={i}>
                  <p className='text-md text-gray-500 '>
                    {item.title.toUpperCase()}
                  </p>
                  {item?.links?.map((link, index) => (
                    <Link key={index} to={`${link.name}`}>
                      <button
                        key={index}
                        style={activeTab === link.name ? {backgroundColor: activeTheme, color: 'white'} :  {}}
                        onClick={() => setActiveTab && setActiveTab(link.name)}
                        className={`text-md flex flex-row cursor-pointer rounded w-full items-center p-2 my-5 gap-3`}>
                        {link.icon}
                        <p className='capitalize'>{link.name}</p>
                      </button>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Sidebar