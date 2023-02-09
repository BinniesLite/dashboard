import { AiFillSetting } from 'react-icons/ai';
import { Tooltip } from '@mui/material';


interface Props {
  setActiveSetting: React.Dispatch<React.SetStateAction<boolean>> | undefined; 
  activeTheme: string | undefined
}

const Setting = ({ setActiveSetting, activeTheme }: Props) => {
  return (
    <div className={`bg-[${activeTheme}] rounded-full fixed bottom-9 right-8`}>
      <button onClick={() => setActiveSetting && setActiveSetting(prev => !prev)}>
        <Tooltip title="Settings">
          <div
            style={{ background: activeTheme }}
            className={`hover:drop-shadow-xl cursor-pointer ease-in duration-100 rounded-full text-3xl text-white p-3`}
          >
            <AiFillSetting />
          </div>
        </Tooltip>
      </button>
    </div>

  )
}

export default Setting;