import React, {useMemo, memo} from 'react'
import {ImCross} from 'react-icons/im'

const CloseButton = () => {
  return (
    <div className='text-lg hover:bg-gray ease-out duration-200'>
      <button className='border-10 border-solid border-black'>
        <ImCross/>
      </button>
    </div>
  )
}   

export default memo(CloseButton);