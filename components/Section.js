import React from 'react'
import { styled, Container } from '@mui/material'

const SectionContainer = styled(Container)(({ theme }) => ({
    marginTop: 52,
    padding: '56px 0px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '95%'
    }
  
  }));

const Section = ({ children, style, id }) => {
  return (
    <SectionContainer style={style} id={id}>
        {children}
    </SectionContainer>
  )
}

export default Section