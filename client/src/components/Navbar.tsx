import React from 'react';
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineShopping } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg'; 
import { Box, Stack, Tooltip } from '@mui/material';
import { useTheme } from '../contexts/theme-context';

interface NavButtonProps {
    title?: string,
    icon?: React.ReactNode,
    color?: string,
    dotColor?: string,
    customFunc?: () => any
};

const NavButton: React.FC<NavButtonProps> = ({ title, icon, color, dotColor, customFunc }) => {
    return <Tooltip
        title={title}
        sx={{color}}
    >
        <button onClick={customFunc} className={`relative p-3 text-xl dark:hover:bg-blue-500 hover:bg-gray-100 ease-out duration-200 rounded-full`}>
            <span
                style={{ background: `${dotColor}` }}
                className={`w-2 h-2 absolute inline-flex rounded-full right-2 top-2`} />
            {icon}
        </button>
    </Tooltip>
}


const Navbar: React.FC = () => {
    const theme = useTheme();
    // Need this for it to work
    if (theme !== null) {
        const { setActiveMenu, activeTheme } = theme; 
    
        return (
            <Stack sx={{color: activeTheme}} p={3} flexDirection="row" justifyContent="space-between">
                <NavButton customFunc={() => setActiveMenu && setActiveMenu(prev =>!prev)}  title="Menu" icon={<AiOutlineMenu />} />
                <Box>
                    <NavButton title="Cart" color={"blue"} dotColor="blue" icon={<AiOutlineShoppingCart />} />
                    <NavButton title="Profile" color={"blue"} dotColor="blue" icon={<CgProfile />} />
                </Box>
            </Stack>
        )
    }

    // If don't return here
    return <div>
    </div>
}

export default Navbar;