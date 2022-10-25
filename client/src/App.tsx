import './App.css'
import { Navbar, Setting, Sidebar, SettingMenu } from './components'; 
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { useTheme } from './contexts/theme-context';

import { Form } from './pages'

// Why is this mostly used for routing purpose
function App() {
  const { activeMenu, currentMode, activeSetting, setActiveSetting, activeTheme } = useTheme();
  
  return (
    <div className={currentMode === 'Dark' ? 'dark' : 'bg-main-bg'}>
      <Router>
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
        
        <div className={
          activeMenu
          ? 'md:ml-72 flex-2 min-h-screen bg-main-bg dark:bg-main-dark-bg'
          : 'w-full flex-2 min-h-screen'}>
          <div>
            <Navbar />
          </div>
          {activeSetting && <SettingMenu/>}
          <Routes>
            <Route path="/" element={ <Form/> } />
            <Route path="/form" element={ <Form/> } />
          </Routes>
        </div>
      </Router>

    </div>
  )

}

export default App