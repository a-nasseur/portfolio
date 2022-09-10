import { Box, Container, Fade, styled, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { Link as Scroll} from 'react-scroll';



import sticker from '../public/sticker.svg';
import AppHeading from './AppHeading';
import AppSubHeading from './AppSubHeading';
import AppButton from './AppButton';


const height = 184;

const HeroContainer = styled(Container)(({ theme }) => ({
  backgroundImage: 'linear-gradient(to right, #FBED96, #ABECD6)',
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
    width: '90%'
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
  [theme.breakpoints.down('md')]: {
    width: 100,
    height: 100,
  }
}));


const AppLink = styled(Box)(({ theme }) => ({
  padding: 2,
}));




const Hero = () => {
  const [viewPortWidth, setViewPortWidth] = React.useState(false)

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if(window.visualViewport.width < 600){
        setViewPortWidth(true)
      } 
    }
  }, [])

  return (
      <HeroContainer maxWidth='lg'>
        <AvatarBox>
          {viewPortWidth ? <Image src={sticker} alt='avatar image' width={70} /> : <Image src={sticker} alt='avatar image'/>}
        </AvatarBox> 
        <AppSubHeading>Hi my name is Abdelhak</AppSubHeading>
        <AppHeading>Developping your <Fade easing="1" in={true}><span style={{color: '#0994D0', backgroundImage: `url("/vector1.svg")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center bottom	'}}>ideas</span></Fade> building a better world through applications and softwares.</AppHeading> 
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 6}}> 
          <Scroll to='contact' spy={true} smooth={true} offset={50} duration={500}>
            <AppButton>Contact</AppButton>
          </Scroll>
          <AppLink>
            <a href="/Web_Software Developer.pdf" download>
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