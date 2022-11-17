import React from 'react'
import { Pagination, Stack } from '@mui/material'

interface Props {
    count: number,
    hideNextButton?: boolean,
    hidePreviousButton?: boolean,
    page: number,
    handlePageChange: (e: React.ChangeEvent<unknown>, value: number) => void
}

const PaginationCustom = ({count, hideNextButton, hidePreviousButton, page, handlePageChange}: Props) => {
  return (
    <Stack sx={{my: '2rem'}} spacing={2}>
        <Pagination 
            count={count} 
            page={page}
            onChange={handlePageChange}/>
    </Stack>
  )
}

export default PaginationCustom