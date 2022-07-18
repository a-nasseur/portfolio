import React from 'react'
import Image from 'next/image'
import { Box, styled} from '@mui/material'


const SkillContainer = styled(Box)(({ theme }) => ({
  height: 124,
  width: 124,
  borderRadius: 41,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 56,
  
}));

const AppSkill = ({ icon, background}) => {

  return (
    <>
      {
        icon && 

        <SkillContainer style={{ backgroundColor: background}}>
          <Image src={icon} />
        </SkillContainer>

      }
    </>

  )
}

export default AppSkill