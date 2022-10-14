import React from 'react'

interface Props {
  title: string,
  category: string
}

const Header = ({title, category}: Props) => {
  return (
    <div>
        <div className='text-[#a9a7b1] capitalize text-xl'>
            {category}
        </div>
        <div className='font-bold capitalize text-3xl'>
            {title}
        </div>
    </div>
  )
}

export default Header