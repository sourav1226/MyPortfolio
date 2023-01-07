import React from "react";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProjectItem({ image, name, id,skills }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }} onClick={() => {
      navigate("/project/" + id);
    }}>
    <CardMedia
      component="img"
      alt={{ name }}
      height="100%"
      image="http://localhost:3000/static/media/proj1.9f9938f6246869716e87.jpg"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">{name}</Typography>
      <p>{skills}</p>
    </CardContent>
  </Card>
  );
}

export default ProjectItem;