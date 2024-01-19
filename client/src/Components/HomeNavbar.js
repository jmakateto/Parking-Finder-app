import React, { useState } from 'react'
import logo from '../Images/logo.png'
import {HiOutlineBars3} from "react-icons/hi2";
import HomeIcon from "@mui/icons-material/Home"
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InfoIcon from "@mui/icons-material/Info"
import ReviewsIcon  from '@mui/icons-material/Reviews';
import LoginIcon  from '@mui/icons-material/Login';
import AppRegistrationIcon from "@mui/icons-material/AppRegistration"
import AdminPanelIcon from "@mui/icons-material/AdminPanelSettings"

function HomeNavbar() {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions =[
        {
            text: "Home",
            icon: <HomeIcon/>
        },
        {
            text: "How it works",
            icon: <InfoIcon/>
        },
        {
            text: "Reviews",
            icon: <ReviewsIcon/>
        },
        {
            text: "Login",
            icon: <LoginIcon/>
        },
        {
            text: "Sign Up",
            icon: <AppRegistrationIcon/>
        },
        {
            text: "Admin Panel",
            icon: <AdminPanelIcon/>
        },
    ]
  return (
    <nav>
        <div className='nav-logo-container'>
            <img src={logo} alt=''/>
        </div>
        <div className='navbar-links-container'>
            <a href=''>Home</a>
            <a href=''>How it works</a>
            <a href=''>Reviews</a>
            <a href=''>Login</a>
            <a href=''>Sign -Up</a>
            <a href=''>Admin Panel</a>
            {/* <button className='primary-button'>Search Location</button> */}
        </div>
        <div className='navbar-menu-container'>
            <HiOutlineBars3 onClick={() =>setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose ={()=> setOpenMenu(false)}
        anchor="right">
            <Box
            sx={{width:250}}
            role="presentation"
            onClick={()=> setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
            >
                <List>
                    {menuOptions.map((item)=>(
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                
            </Box>
        </Drawer>
    </nav>
  )
}

export default HomeNavbar