import React from 'react';
import {AiOutlineShoppingCart, AiOutlineMenu, AiOutlineShopping} from 'react-icons/ai';
import { Box, Stack, Badge } from '@mui/material';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

type NavButtonProps = {title?: string, icon?: React.ReactNode, color?: string, dotColor?: string};

const NavButton: React.FC<NavButtonProps> = 
({title, icon, color, dotColor}) => {
    return <TooltipComponent content={title} position="BottomCenter">
        <button className="w-10 main-bg-white text-3xl">
            {icon}
        </button>
    </TooltipComponent>
}


const Navbar: React.FC = () => {
  return (
    <Stack p={3} flexDirection="row" justifyContent="space-between">
        Sidebar
        <Box>
            <NavButton icon={<AiOutlineShoppingCart  />}/>
        </Box>
    </Stack>
  )
}

export default Navbar