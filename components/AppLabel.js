import { Box, styled, Typography } from '@mui/material';
import React from 'react'



const Label = styled(Box)(({ theme }) => ({
    minWidth: 80,
    backgroundColor: '#0994D0',
    color: 'white',
    padding: 2,
    marginRight: 10,
    borderRadius: '40px',
    textAlign: 'center'
  
  }));
  
  const LabelContainer = styled(Box)(({ theme }) => ({
      display: 'flex',
  }))
  

const AppLabel = ({ labels }) => {
  return (
    <>
        {labels.map(label => 
            <LabelContainer key={label.id}>
                <Label sx={{backgroundColor: label.background }}>
                    <Typography>
                        {label.title}
                    </Typography>
                </Label>
            </LabelContainer>
        )}
    </>
  )
}

export default AppLabel;