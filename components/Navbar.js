import React from 'react'
import Image from 'next/image'
import { AppBar, Box, Container, IconButton, styled, Toolbar, Typography } from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';



import logo from '../public/logo.svg'
import menu from '../public/hamburguer.svg'

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  paddingTop: 30,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
  
}));



const Navbar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    
    <AppBar color="transparent" elevation={0} position="static">
      <Container maxWidth="lg">
        <CustomToolbar>
          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Image src={logo} /> 
            <Typography
              variant='h6'
              paddingLeft={2}
            >
              My Portfolio
            </Typography>
          </Box>
          <IconButton onClick={handleClick} >
            <Image src={menu} /> 
          </IconButton>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            
          >
            <MenuItem sx={{ color: '#F49E0A'}} onClick={handleClose}>Projects </MenuItem>
            <MenuItem sx={{ color: '#6BCFFA'}} onClick={handleClose}>About Me</MenuItem>
            <MenuItem sx={{ color: '#5ADAAD'}} onClick={handleClose}>Contact</MenuItem>
          </Menu>
        </CustomToolbar>
      </Container>
   </AppBar>     

   
  )
}

export default Navbar;