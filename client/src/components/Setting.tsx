import { AiFillSetting } from 'react-icons/ai';
import { Tooltip } from '@mui/material';
import { useTheme } from '../contexts/theme-context';

const Setting = () => {
  const {activeTheme} = useTheme(); 

  return (
    <Tooltip title="Settings">
      <button
        style={{background: activeTheme}}
        type="button"
        className={`hover:drop-shadow-xl cursor-pointer ease-in duration-100 rounded-full text-3xl text-white p-3`}
      >
        <AiFillSetting />
      </button>

    </Tooltip>
  )
}

export default Setting