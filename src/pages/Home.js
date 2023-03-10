import React from 'react';
import "../style/Home.css";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';


function Home() {
    var text = "< FullStack />";
    var skill_1 = "< FrontEnd />";
    var skill_2 = "< BackEnd />";
    var skill_3 = "< ProgrammingLanguages />";
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hi, My Name is <span>Sourav</span></h2>
                <div className='prompt'>
                    <h3>i am a <span>{text}</span> Developer.</h3>
                    <p>A Web Developer With A Passion For <Typewriter
                        options={{
                            strings: ['Learning...', 'And Creating...'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></p>
                    <GitHubIcon />
                    <LinkedInIcon />
                    <FacebookRoundedIcon />
                </div>
                <div className='button-sec-home'>
                {/* <Button variant="outlined" endIcon={<DownloadForOfflineOutlinedIcon />}>Download Resume</Button> */}
                
                <Link to="/projects"><Button variant="outlined">Projects</Button></Link>
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>{skill_1}</h2>
                        <span>React, Redux, Html, CSS, Bootstrap</span>
                    </li>
                    <li className='item'>
                        <h2>{skill_2}</h2>
                        <span>React, Redux, Html, CSS, Bootstrap</span>
                    </li>
                    <li className='item'>
                        <h2>{skill_3}</h2>
                        <span>React, Redux, Html, CSS, Bootstrap</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}
export default Home;
