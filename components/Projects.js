import React from 'react'


import { Box, Grid, Stack, Typography } from '@mui/material'
import AppHeading from './AppHeading'
import AppLabel from './AppLabel'
import AppCard from './AppCard'
import AppLink from './AppLink'


const Projects = ({ data }) => {

  return (
    <div>
    <AppHeading  style={{textAlign: 'start', paddingLeft: '2px'}}>Latests<br/>Projects</AppHeading>
        <Grid container marginTop={7} spacing={2} >
          {data.map(project =>  
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <Stack spacing={2}>
                <Typography
                    variant='h4'
                    components='div'
                    >
                    {project.title}
                </Typography>
                <Box sx={{display: 'flex'}}>
                  <AppLabel labels={project.labels} />
                </Box>
                <AppCard image={project.image} background={project.background} />
                <Box sx={{ display: 'flex'}}>
                  <AppLink href={project.website}>Visite Site</AppLink>
                  <AppLink href={project.github}>Github</AppLink>
                </Box>
              </Stack>
            </Grid>
          )}
        </Grid>
    </div>
  )
}

export default Projects