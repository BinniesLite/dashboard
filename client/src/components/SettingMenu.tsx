import React from 'react'
import { Divider } from '@mui/material'
import { MdTransitEnterexit } from 'react-icons/md';
import { useTheme } from '../contexts/theme-context';
import Color from './UI/Color';
import CloseButton from './UI/CloseButton';

const SettingMenu = () => {
    const { setActiveSetting, activeMenu, setActiveMenu, activeTheme, setActiveTheme } = useTheme();

    const handleActiveSetting = () => {
        if (setActiveSetting) {
            setActiveSetting(prev => !prev)
        }
    }

    return (
        <div className='bg-half-transparent h-full w-full fixed nav-item top-0 right-0'>
            <div className='float-right w-400 bg-white min-h-full '>
                <div className='mt-5 mx-5 grid grid-cols-1 gap-10'>
                    <div className='flex place-content-between   text-xl font-bold'>
                        <p className='font-semibold text-lg'>Setting</p>
                        <button
                            onClick={handleActiveSetting}
                            className='cursor-pointer rounded-full hover:drop-shadow border-black-500 border-solid dark:hover:bg-white'>
                            <CloseButton/>
                        </button>
                    </div>
                    <Divider/>
                    <div>
                        <p className='mb-3 font-bold text-xl'>Theme Options</p>
                        <select name="" id="">
                            <option value="Dark">dark</option>
                            <option value="Light">light</option>
                        </select>
                    </div>
                    <Divider/>
                    <div>
                        <p className='mb-3 font-bold text-xl'>Theme Colors</p>
                        <div>
                          <Color activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SettingMenu