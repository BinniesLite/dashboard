import { Setting, Sidebar, } from '../components'; 

import { useTheme } from '../contexts/theme-context';
const Layout = () => {
    const { activeMenu,setActiveSetting, activeTheme } = useTheme();
    return (
    <>
     {activeMenu ? (
          <div className='w-72 fixed dark:bg-secondary-dark-bg bg-white sidebar' >
            <Sidebar />
          </div>
        ) :
          <div className='w-0 fixed sidebar'>
            <Sidebar />
          </div>
        }
        <div className={`bg-[${activeTheme}] rounded-full fixed bottom-9 right-8`}>
          <button onClick={() => setActiveSetting && setActiveSetting(prev  => !prev)}>
            <Setting />
          </button>
        </div>
    </>
  )
}

export default Layout