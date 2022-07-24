import React from 'react'
import Image from 'next/image'
import { Box, styled} from '@mui/material'


const SkillContainer = styled(Box)(({ theme }) => ({
  height: 124,
  width: 124,
  borderRadius: 41,
  marginBottom: 20,
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  // marginRight: 56,
  boxShadow: '4px 4px 4px #A6D1E6',

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