import {  Box, Container, Grid, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image';

import AppSocialIcon from './AppSocialIcon';
import twitterIcon from '../public/icons8-twitter.svg'
import linkedinIcon from '../public/icons8-linkedin-circled.svg'
import githubIcon from '../public/icons8-github.svg'
import footerImage from '../public/footer.png'

const twitterLink = 'https://twitter.com/AbdelhakNasseur'
const linkedInLink = 'https://www.linkedin.com/in/abdelhak-nasseur-a79a0899/'
const githubLink = 'https://github.com/a-nasseur'



const FooterContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '56px 0px',
    marginTop: 56,
    backgroundColor: '#111827',
    minHeight: 300,
    borderTopLeftRadius: 44,
    borderTopRightRadius: 44,
    [theme.breakpoints.down('md')]: {
      width: '95%'
    }
}));


const Footer = () => {
  return (
    <FooterContainer>
      <Grid container>
        <Grid item xs={12} md={6} lg={3}>
          <Stack spacing={5}>
            <Typography
              variant='h3'
              color='white'
              fontWeight={500}
            >
              Do You have any Idea? 
            </Typography>
            <Typography
              variant='body1'
              color='white'
            >
              Let's build it together
            </Typography>
            <Typography
              variant='body1'
              color='white'
              borderBottom='1px solid white'
            >
              a.nasseur@outlook.com
            </Typography>
            <Typography
              variant='body1'
              color='white'
              borderBottom='1px solid white'
            >
              0555 826 487
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-around'}}>
              <AppSocialIcon icon={twitterIcon} background='#fff' href={twitterLink}/>
              <AppSocialIcon icon={linkedinIcon} background='#0288D1' href={linkedInLink}/>
              <AppSocialIcon icon={githubIcon} background='#fff' href={githubLink}/>
            </Box>
          </Stack>
        </Grid>
        <Grid item sx={{
              backgroundColor: '#3485BA',
              marginLeft: 20,
              display: { 'xs': 'none', 'md': 'block'},
            }}>
          <Image src={footerImage} />
        </Grid>
      </Grid>
    </FooterContainer>
  )
}

export default Footer