import { Box, Typography, styled, Stack, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import AppHeading from './AppHeading'
import headingVector from '../public/vector2.png'
import AppSkill from './AppSkill'

import { skills } from '../database/skills'
import aboutMe from '../public/sticker2.svg'


const ContentContainer = styled(Box)(({ theme }) => ({
    margin: '56px 0px',
    borderLeft: '5px solid black',
    maxWidth: 427,
}));

const AboutMe = () => {
  return (
   <div>
    <Box sx={{backgroundImage: `url(${"../public/vector2.png"})`}}>
        <AppHeading style={{textAlign: 'start', paddingLeft: '2px'}}>About<br/>Me</AppHeading>
        <Image src={headingVector} />
    </Box>
    <Box sx={{display: 'flex' }}>
    <Stack spacing={10}>
        <Grid container spacing={6}>
            <Grid item xs={12} md={6} lg={6}>
                <ContentContainer>
                    <Typography
                        variant='body1'
                        component='div'
                        paddingX={4}
                        
                    >
                        Tenho 20 anos, estou em transição de carreira, vindo da área administrativa onde 
                        desenvolvi experiência com gestão de pessoas, gestão de empresas e negociação com cliente.
                        Tenho 20 anos, estou em transição de carreira, vindo da área administrativa onde 
                        desenvolvi experiência com gestão de pessoas, gestão de empresas e negociação com cliente.
                        Tenho 20 anos, estou em transição de carreira, vindo da área administrativa onde 
                        desenvolvi experiência com gestão de pessoas, gestão de empresas e negociação com cliente.
                        <br/><br/>

                        Hoje construo aplicações fullstack!

                    </Typography>
                </ContentContainer>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Image src={aboutMe} />
            </Grid>
        </Grid>

        <AppHeading style={{textAlign: 'start', paddingLeft: '2px'}}>Skills</AppHeading>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            {skills.map(skill => 
                <React.Fragment key={skill.id}> 
                    <AppSkill icon={skill.icon} background={skill.background}/> 
                </React.Fragment>
            )}
        </Box>
    </Stack>
    </Box>
   </div>
  )
}

export default AboutMe 