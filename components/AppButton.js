import { Button, styled } from '@mui/material';
import React from 'react'


const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'black',
    color: 'white',
    width: 155,
    height: 46,
    borderRadius: 32,
  
  }))

const AppButton = ({ children }) => {
  return (
    <CustomButton>{children}</CustomButton>
  )
}

export default AppButton;