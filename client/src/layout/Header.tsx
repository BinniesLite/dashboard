import React from 'react'
import { Breadcrumbs, Link as BreadcrumbsItem } from '@mui/material'

interface Props {
  title: string,
  category: string
}

const Header = ({title, category}: Props) => {
  return (
    <div className='flex justify-between w-full'>
        <div className='font-bold capitalize text-3xl'>
            {title}
        </div>
        <div className='text-[#a9a7b1] capitalize text-xl'>
            <Breadcrumbs className='cursor-pointer'>
              <div> Main </div>
              <div> Form </div>
            </Breadcrumbs>
        </div>
    </div>
  )
}

export default Header