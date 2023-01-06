import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../style/Footer.css";


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
           <GitHubIcon/> 
           <LinkedInIcon/>
           <FacebookIcon/>   
        </div>
        
        <p> &copy; 2023 souravg.tech</p>
    </div>
  )
}

export default Footer
