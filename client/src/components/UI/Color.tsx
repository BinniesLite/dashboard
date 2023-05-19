
import {theme} from '../../constants/theme-color';
import { AiFillCheckCircle, AiTwotoneCheckCircle } from 'react-icons/ai';
import { Tooltip } from '@mui/material';

interface Props {
    activeTheme: string | null| undefined,
    setActiveTheme: React.Dispatch<React.SetStateAction<string>> | null | undefined
}

const Color = ({activeTheme, setActiveTheme}: Props) => {
    return (
        <div>
            {theme?.map((item, i) => (
                <Tooltip key={i} title={item.name}>
                    <button
                        key={i}
                        style={{color: item.color}}
                        className={`text-5xl m-2 rounded-full`}
                        onClick={() => setActiveTheme && setActiveTheme(item.color)}
                        >
                            {activeTheme === item.color ? <AiFillCheckCircle /> : <AiTwotoneCheckCircle />}
                            
                    </button>
                </Tooltip>
            ))}
        </div>
    )
}

export default Color