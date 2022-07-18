import React from 'react'
import { Card, CardContent, styled } from '@mui/material';


import Image from 'next/image';

const CustomCard = styled(Card)(({ theme }) => ({
    minWidth: 275,
    maxHeight: 285,  
    color: 'black',
    borderRadius: '18px'
}))

const AppCard = ({ image, background }) => {
  return (
    <CustomCard sx={{ backgroundColor: background}}>
        <CardContent>
            <Image src={image} />
        </CardContent>
    </CustomCard>    
  )
}

export default AppCard