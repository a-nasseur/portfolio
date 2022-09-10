import React from 'react'
import Image from 'next/image'
import { Box, styled} from '@mui/material'


const SkillContainer = styled(Box)(({ theme }) => ({
  height: 124,
  width: 124,
  borderRadius: 41,
  marginBottom: 20,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 30,
  transition: 'all 0.4s ease',
  '&:hover': {
    boxShadow: '10px 10px 10px  #A6D1E6',
  },
  [theme.breakpoints.down('md')]: {
    marginRight: 0
  }
}));

const AppSkill = ({ icon, background}) => {

  return (
    <React.Fragment>
      {
        icon && 

        <SkillContainer style={{ backgroundColor: background}}>
          <Image src={icon} />
        </SkillContainer>

      }
    </React.Fragment>

  )
}

export default AppSkill