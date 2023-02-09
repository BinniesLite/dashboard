import React from 'react'
import { Pagination, Stack } from '@mui/material'

interface Props {
    count: number,
    hideNextButton?: boolean,
    hidePreviousButton?: boolean,
    page: number,
    handlePageChange: (e: React.ChangeEvent<unknown>, value: number) => void
}

const PaginationCustom = ({count, page, handlePageChange}: Props) => {
  return (
    <Stack sx={{my: '2rem'}} justifyContent="center" alignItems="center" spacing={2}>
        <Pagination 
            size="small"
            count={count} 
            page={page}
            onChange={handlePageChange}/>
    </Stack>
  )
}

export default PaginationCustom