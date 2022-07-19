import React from 'react'
import Link from 'next/link'
import { Box, styled, Typography } from '@mui/material'

const CustomLink = styled(Box)(({ theme }) => ({
    padding: 4
}));

const AppLink = ({ children, href }) => {
  return (
    <CustomLink>
            {
                href && 
                <Link href={href} target="_blank">
                    <Typography 
                    variant='subtitle1'
                    component='div'
                    sx={{cursor: 'pointer'}}
                    borderBottom='1px solid black'
                    marginRight={2}

                    >
                    {children}
                    </Typography>
                </Link>

            }
    </CustomLink>
  )
}

export default AppLink