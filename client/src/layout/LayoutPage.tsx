import React from 'react'

interface Props {
  children: React.ReactNode
}

const LayoutPage = ({children}: Props) => {
  return (
    <div className='m-8 md:m-10 mt-24 p-8 md:p-10 bg-white rounded-3xl'>
        {children}
    </div>
  )
}

export default LayoutPage; 