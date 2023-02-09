import { Divider } from '@mui/material'
import { useTheme } from '../contexts/theme-context';
import Color from './ui/Color';
import CloseButton from './ui/CloseButton';

interface Props {
    activeSetting: boolean | undefined,
    setActiveSetting: React.Dispatch<React.SetStateAction<boolean>> | undefined,
    activeTheme: string| undefined,
    setActiveTheme: React.Dispatch<React.SetStateAction<string>> | undefined
}

const SettingMenu = ({activeSetting, setActiveSetting, activeTheme, setActiveTheme} : Props) => {
    function handleActiveSetting(): void {
        if (setActiveSetting) {
            setActiveSetting(prev => !prev)
        }
    }

    if (activeSetting)
    return (
    <div className='bg-half-transparent z-2 h-full w-full fixed nav-item top-0 right-0'>
            <div className='float-right w-400 bg-white min-h-full'>
                <div className='mt-5 mx-5 grid grid-cols-1 gap-10'>
                    <div className='flex place-content-between text-xl font-bold'>
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
    else {
        return <>
        </>
    }
}

export default SettingMenu