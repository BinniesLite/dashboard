import React, {useMemo, memo} from 'react'
import {ImCross} from 'react-icons/im'

const CloseButton = () => {
  return (
    <div className='text-lg hover:bg-gray ease-out duration-200'>
        <ImCross/>
    </div>
  )
}   

export default memo(CloseButton);