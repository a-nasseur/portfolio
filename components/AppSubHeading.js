import React from 'react'
import { styled, Typography } from '@mui/material'



const SubHeading = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(5),
    fontSize: '2.6rem',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8rem',
    }
  
  }))
  

const AppSubHeading = ({ children }) => {
  return (
    <SubHeading>{children}</SubHeading>
  )
}

export default AppSubHeading;