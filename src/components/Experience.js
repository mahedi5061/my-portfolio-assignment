import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import uploadedFileLink from '../cv/sharif_cv_updated_2.pdf';
import { Button } from "react-bootstrap";
const useStyles = makeStyles(theme => ({
  mainContainer: {
    background: "#233"
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both"
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto"
      }
    }
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute"
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)"
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan"
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato"
      }
    }
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.2rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto"
      },
      "&:nth-of-type(2n):before": {
        display: "none"
      }
    }
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",

  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
    borderBottom: "1px solid tan",
    width: "330px",
    fontSize: "1.4rem",
  }
}));

const Experience = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar></Navbar>
  
      <Box component="header" className={classes.mainContainer}>
    
        <Typography variant="h4" align="center" className={classes.heading}>
        <a href={uploadedFileLink} target="_blank" rel="noopener noreferrer" download>
   <Button className="mt-3 mb-5">
      
      Download CV <FontAwesomeIcon icon={faDownload}/>
   </Button>
</a><br></br>
          experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            BAIUST Computer Club
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              General Secretary
            </Typography>

            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
              2020-Present
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
             I am currently work with BAIUST Computer Club 
              and I am general secretary of BCC. We have
              arranged some program like, Career Lab 10,
              Global Vendor Management, Communication,
              BAIUST Express 21, Essential Skills Required by
              banglalink and many others program. I have
              won “Most Valuable Person” From BAIUST BCC.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Web Development
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
             Front end Developer 
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
            01-01-21
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
               • HTML-CSS-BOOTSTRAP
• JAVASCRIPT
• REACT JS
• REACT-BOOTSTRAP
• MATERIAL UI
• NODE JS ( BASIC KNOWLEDGE )
• MONGODB ( BASIC KNOWLEDGE )
• GIT / GITHUB
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            TRAININGS
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              Learning
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
             01-01-21-Present
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
               1. Full Stack Web Development, Programming Hero.
2. Machine Learning, Coursera online course.
3. Cyber Security, Bd Cyber 71.
                          </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Programming Knowledge
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
             Basic Knowledge
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
              02-04-2018

            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
             • C 
             • C++ 
             • JAVA
             • Javascript
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Experience;
