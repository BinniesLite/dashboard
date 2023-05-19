import {lazy, Suspense} from 'react';
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { useTheme } from './contexts/theme-context';
import { ErrorPage } from './pages'
// Pages 
const Main = lazy(() => import('./pages/admin/main'))
const LoginPage = lazy(() => import('./pages/login/login'))
const RegisterPage = lazy(() => import('./pages/login/register'))


// Why is this mostly used for routing purpose
function App() {
  const { currentMode } = useTheme();
  
  return (
    <div className={currentMode === 'Dark' ? 'dark' : 'bg-main-bg'}>
      <Router>
      <Suspense fallback={<div>...Loading</div>}>
          <Routes>
              <Route path="/"  element={<LoginPage />} />
              <Route path="/admin/*"  element={<Main />} />
              <Route path="/login"  element={<LoginPage />} />
              <Route path="/register"  element={<RegisterPage />} />
              <Route path="*"  element={<ErrorPage />} />
            </Routes>
            </Suspense>
      </Router>
      
    </div>
  )
}

export default App;