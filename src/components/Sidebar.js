import React from 'react';
import cardbg from "../images/card-bg.svg";
import profile from "../images/user.svg";
import { Link } from 'react-router-dom';

function Sidebar({userData}) {
  console.log(userData._document?.data?.value.mapValue.fields.username.stringValue)
  console.log(userData._document?.data?.value.mapValue.fields.designation.stringValue);
    return (
        <div style={{backgroundColor:"white",border: "1px solid #D6D6D6", width: "210px", height: "370px", borderRadius: "15px" }}>
            <img style={{ height: "65px", width: "210px",borderTopRightRadius:"15px",borderTopLeftRadius:"15px" }} src={cardbg} alt="card-bg" />
            <div style={{ position: "relative", left: "37%" }}>
                <img style={{ width: "55px",borderRadius:"40px"}} src={userData._document?.data?.value.mapValue.fields.profile_image.stringValue ?? profile} alt="profile" />
                <h3 style={{ position: "relative",top:"5px",right:"2%" }}>{userData._document?.data?.value.mapValue.fields.username.stringValue}</h3> 
            </div><br/>
            <h4 style={{ position: "relative", left: "30%",color: "#6F6F6F" }}>{userData._document?.data?.value.mapValue.fields.designation.stringValue}</h4><br/>
            <div style={{ color: "#6F6F6F", borderTop: "1px solid #D6D6D6", paddingLeft:"10px" }}>
                <Link to="/connect" state={{username:userData._document?.data?.value.mapValue.fields.username.stringValue, designation:userData._document?.data?.value.mapValue.fields.designation.stringValue,profile_img:userData._document?.data?.value.mapValue.fields.profile_image.stringValue }}><h5 style={{fontWeight:"100"}}>Connections</h5></Link> <br />
               <Link to="/invite"> <h5 style={{fontWeight:"100"}}>Invitations</h5></Link>

           </div>
        </div>
    )
}

export default Sidebar