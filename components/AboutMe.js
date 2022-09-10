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
    <Box>
        <AppHeading style={{
            textAlign: 'start', 
            paddingLeft: '2px' , 
            backgroundImage: 'url("/vector2.png")', 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'left bottom',
        }}
    >
            About<br/>Me
        </AppHeading>
    </Box>
    <Box sx={{display: 'flex' }}>
    <Stack spacing={10}>
        <Grid container spacing={6}>
            <Grid item xs={12} md={6} lg={6} order={{ xs: 2}}>
                <ContentContainer>
                    <Typography
                        variant='body1'
                        component='div'
                        paddingX={4}
                        
                    >
                        My name is Abdelhak, i am passionate about web application developement, i shifted my career
                        from aviation where i acted as operations coordination staff, and later on as aircraft maintenance
                        ground mecanic, to web developement.
                        I have been trained primarly as data analyst being selected to particpate to the one million arab coders program,
                        certifed few months later from the great online school Udacity.<br/> 
                        I started to lean towards web development after i had various experiences including building 
                        gps communication servers, network scripting with python and more..., as web development is what i am 
                        most passionate about. 
                        <br/><br/>

                        Focusing on completing my FullStack path !

                    </Typography>
                </ContentContainer>
            </Grid>
            <Grid item xs={12} md={6} lg={6} order={{ xs: 1, md: 2}}>
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