import './App.css'
import { Navbar, SettingMenu } from './components'; 
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { useTheme } from './contexts/theme-context';
import { Form, EditForm } from './pages'
import { Layout } from './layout';


// Why is this mostly used for routing purpose
function App() {
  const { activeMenu, currentMode } = useTheme();
  
  return (
    <div className={currentMode === 'Dark' ? 'dark' : 'bg-main-bg'}>
      <Router>
        <Layout />        
        <div className={
          activeMenu
          ? 'md:flex-2 ml-72 min-h-screen bg-main-bg dark:bg-main-dark-bg'
          : 'w-full flex-2 min-h-screen'}>
          <Navbar />
          <SettingMenu/>
          <Routes>
            <Route path="/" element={ <Form/> } />
            <Route path="/form" element={ <Form/> } />
            <Route path="/form/:id" element={ <EditForm /> }/>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;