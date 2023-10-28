import { Grid } from '@mui/material';
import React from 'react';
import linkedin from "../images/home-logo.svg";
import search from "../images/search-icon.svg";
import home from "../images/nav-home.svg";
import messaging from "../images/nav-messaging.svg";
import network from "../images/nav-network.svg";
import profile from "../images/user.svg";

// import notifications from "../images/nav-notifications.svg";



const Navbar = ({userData}) => {
  return (
    <div style={{padding:"10px",borderBottom:"1px solid #D6D6D6"}}>
        <Grid container>
            <Grid item xs={6}>
                <img style={{marginLeft:"80px"}} src={linkedin} alt="logo" />
                <img style={{width:"25px",marginLeft:"20px"}} src={search} alt="logo" />    
            </Grid>
            <Grid item xs={6}>
            <img style={{marginLeft:"20px"}} src={home} alt="home" />    
            <img style={{marginLeft:"20px"}} src={network} alt="network" />                            
            <img style={{marginLeft:"20px"}} src={messaging} alt="message" /> 
            <img style={{width:"25px",marginLeft:"20px",borderRadius:"40px"}}  src={userData._document?.data?.value.mapValue.fields.profile_image.stringValue ?? profile} alt="profile" />                      
            </Grid>
        </Grid>
    </div>
  )
}

export default Navbar