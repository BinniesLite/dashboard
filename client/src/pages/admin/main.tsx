import React, { lazy, Suspense } from 'react'
// Components 
import { Navbar, Setting } from '../../components'
const Sidebar = lazy(() => import("../../components/Sidebar"))
const SettingMenu = lazy(() => import("../../components/SettingMenu"))
// UI Context
import { useTheme } from '../../contexts/theme-context'
// Route
import { Route, Routes } from 'react-router-dom'
// Pages
import FormPage from './form/form'
import EditFormPage from './form/edit'


const Main = () => {
  const {
    activeMenu,
    setActiveSetting,
    activeSetting,
    setActiveMenu,
    activeTheme,
    setActiveTheme,
    activeTab,
    setActiveTab
  } = useTheme();

  return (
    <div>
      {activeMenu &&
        <Suspense fallback={<div>...loading</div>}>
          <Sidebar
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            activeTheme={activeTheme} />
        </Suspense>

      }

      <div className={
        activeMenu
          ? 'md:flex-2 ml-72 min-h-screen bg-main-bg dark:bg-main-dark-bg'
          : 'w-full flex-2 min-h-screen'}>
        <Navbar setActiveMenu={setActiveMenu} activeTheme={activeTheme} />
        {activeSetting && 
          <Suspense fallback={<div>...Loading</div>}>
            <SettingMenu activeTheme={activeTheme} setActiveTheme={setActiveTheme} activeSetting={activeSetting} setActiveSetting={setActiveSetting} />
          </Suspense>
        }
        <Setting activeTheme={activeTheme} setActiveSetting={setActiveSetting} />

        <Routes>
          <Route path="/form" element={<FormPage />} />
          <Route path="/form/:id" element={<EditFormPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default Main