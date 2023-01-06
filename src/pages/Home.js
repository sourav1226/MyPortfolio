import React from 'react';
import "../style/Home.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hi, My Name is Sourav</h2>
                <div className='prompt'>
                    <p>A software developer with a passion for learning and creating</p>
                    <GitHubIcon />
                    <LinkedInIcon />
                    <FacebookIcon />
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>React, Redux, Html, CSS, Bootstrap</span>
                    </li>
                    <li className='item'>
                        <h2>Back-End</h2>
                        <span>React, Redux, Html, CSS, Bootstrap</span>
                    </li>
                    <li className='item'>
                        <h2>Programming Languages</h2>
                        <span>React, Redux, Html, CSS, Bootstrap</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}
export default Home;
