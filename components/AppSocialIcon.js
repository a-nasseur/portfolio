import { Box, styled } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const IconContainer = styled(Box)(({ theme }) => ({
    marginRight: 20,
    height: 65,
    width: 65,
    borderRadius: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}))

const AppSocialIcon = ({ icon, background, href}) => {
  return (
    <IconContainer style={{ backgroundColor: background, cursor: 'pointer'}}>
        {
            icon && href && 
            <Link href={href}>
                <Image src={icon} />
            </Link>
        }
    </IconContainer>    
  )
}

export default AppSocialIcon