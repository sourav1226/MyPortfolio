import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import "../style/ProjectDisplay.css";


function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <div className="main-container">
        <img src={project.image} />
        <div className="child-sec">
          <div>
            <h3>Skills</h3>
            <p>{project.skills}</p>
          </div>
          <div className="button-sec">
          <Button variant="outlined">GitHub</Button>
          <Button variant="contained">Live View</Button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default ProjectDisplay;