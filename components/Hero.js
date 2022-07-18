import { Box, Container, styled, Typography } from '@mui/material';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


import sticker from '../public/sticker.svg'
import AppHeading from './AppHeading'
import AppSubHeading from './AppSubHeading'
import AppButton from './AppButton'



const height = 184;

const HeroContainer = styled(Container)(({ theme }) => ({
  backgroundImage: 'linear-gradient(to right, #FFF278, 60%, #0994D0)',
  backgroundColor: '#EFFFFA',
  boxShadow: '5px 10px #EFFFFA',
  width: '75%',
  height: 732,
  marginTop: 80,
  borderRadius: 44,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    width: '95%'
  }
}));


const AvatarBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  width: 184,
  height: 184,
  borderRadius: height / 2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 66,
  [theme.breakpoints.down('sm')]: {
    width: 100,
    height: 100,
  }
}));


const AppLink = styled(Box)(({ theme }) => ({
  padding: 2,
}));





const Hero = () => {
  return (
      <HeroContainer maxWidth='lg'>
        <AvatarBox>
          <Image src={sticker} alt='avatar image' />  
        </AvatarBox> 
        <AppSubHeading>Hi my name is Abdelhak</AppSubHeading>  
        <AppHeading>Desenvolvo <span style={{ color: '#0994D0'}}>ideias</span> e ajudo a construir um mundo melhor através do software.</AppHeading> 
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 6}}> 
          <AppButton>Contact</AppButton>
          <AppLink>
            <a href="../public/Web_Software Developer.pdf" download>
              <Typography
                paddingLeft={5}
                sx={{cursor: 'pointer'}}
              >
                Download CV
              </Typography>
            </a>  
          </AppLink>
        </Box> 
    </HeroContainer>
  )
}

export default Hero;