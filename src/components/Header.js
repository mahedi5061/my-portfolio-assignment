import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import personalPicture from "../images/sharif.jpg";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Alert } from "react-bootstrap";
import uploadedFileLink from '../cv/sharif_cv_updated_2.pdf'
 import ProjectDemo from '../components/SharedComponent/ProjectDemo.js'
import { Button } from "react-bootstrap";
 
//  CSS STYLES
const useStyles = makeStyles(theme => ({
  personalPicture: {
    width: theme.spacing(35),
    height: theme.spacing(35),
    margin: theme.spacing(1)
  },
  
  
  title: {
    color: "tomato"
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem"
  },
 
}));

const Header = () => {
  const classes = useStyles();
  return (
  
     <>
     <Box>
    
    <Grid container justify="center" className="header-navbar">
      <Avatar className={classes.personalPicture} src={personalPicture} alt="Mahedi Hassan Sharif" />
    </Grid>
    <div className="header-navbar-text">
    <Typography className={classes.title} variant="h4">
      <Typed strings={["Mahedi Hassan Sharif"]} typeSpeed={40} />
    </Typography>
    <br />
    <Typography className={classes.subtitle} variant="h5">
      <Typed
        strings={["I am a Web Application Developer", "I am a Mern Stack Developer", "I am good at on REACT JS"]}
        typeSpeed={40}
        backSpeed={60}
        loop
      />
     
    </Typography>
    </div>
    <Alert className="p-declear">
   
  <p >
      This is Mahedi Hassan Sharif. I am studying CSE at Bangladesh Army International University of Science & Technology. I like to learn more and 
    more. My aim is to learn more from professional 
    experience and upgrade my skills. And I really 
    believe that between hard work and diligence I 
    can achieve what I want to do in my life.
  </p>
  <h4 className="mt-4" style={{fontWeight:"bold"}}>Get My CV</h4>
  
  <a href={uploadedFileLink} target="_blank" rel="noopener noreferrer" download>
   <Button className="mt-3">
      
      Download CV <FontAwesomeIcon icon={faDownload}/>
   </Button>
</a>
   
</Alert>


  </Box>
  <ProjectDemo></ProjectDemo>
  </>
  );
};

export default Header;
