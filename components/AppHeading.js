import React from 'react'
import { styled, Typography } from '@mui/material'

const Heading = styled(Typography)(({ theme }) => ({
    padding: 5,
    fontSize: '4rem',
    fontWeight: 500,
    padding: '0px 40px',
    textAlign: 'center',
    lineHeight: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.6rem',
      padding: '0px 30px',
      lineHeight: 1.2
    }
  }))

const AppHeading = ({ children, style }) => {
  return (
    <Heading style={style}>{children}</Heading>
  )
}

export default AppHeading;