import { Box, Container, styled, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Link as Scroll} from 'react-scroll'


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
        <AppHeading>Developping your <span style={{ color: '#0994D0'}}>ideas</span> aiming to build a better world through applications and softwares.</AppHeading> 
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 6}}> 
          <Scroll to='contact' spy={true} smooth={true} offset={50} duration={500}>
            <AppButton>Contact</AppButton>
          </Scroll>
          <AppLink>
            <Link href="/">
              <Typography
                paddingLeft={5}
                sx={{cursor: 'pointer'}}
              >
                Download CV
              </Typography>
            </Link>  
          </AppLink>
        </Box> 
    </HeroContainer>
  )
}

export default Hero;