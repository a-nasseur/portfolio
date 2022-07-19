import { Button, styled } from '@mui/material';
import React from 'react'


const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'black',
    color: 'white',
    width: 155,
    height: 46,
    borderRadius: 32,
    fontWeight: 'bold',
    '&:hover': {
      // backgroundImage: 'linear-gradient(to right, #40C4FF, 20%,  #189FFF)',
      backgroundColor: '#0994D0',
      color: '#fff',
    }
  
  }))

const AppButton = ({ children }) => {
  return (
    <CustomButton>{children}</CustomButton>
  )
}

export default AppButton;