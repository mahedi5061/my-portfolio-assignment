import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import './ProjectDemo.css'
import project1 from "../../images/html-css-javascript-lg.jpg";
import project2 from "../../images/javascript-fullstack.jpg";
import project3 from "../../images/react-redux.jpg";
import project4 from "../../images/mern-stack.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  mainContainer: {

    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
});

const ProjectDemo = () => {
  const classes = useStyles();

  return (
    <>

      <Box component="div" className={classes.mainContainer}>

        <Grid container justify="center">
          {/* Project 1 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project4}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Car Wash Service System
                </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
          This Project is Car Wash Service System where dirty car are cleaning carefully.
                </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
             
                <Button size="small" color="primary">
                 <Link to="/projects"> Click Here</Link>
              </Button>
              
              </CardActions>
            </Card>
          </Grid>
          {/* Project 2 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 2"
                  height="140"
                  image={project2}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Fashion Park
                </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  This Project is Ecommerce site Project.
                </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
             
                <Button size="small" color="primary">
                <Link to="/projects"> Click Here</Link>
              </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 3 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 3"
                  height="140"
                  image={project1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Hungry Monstar
                </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  This is Food Meal System, where some of foods are available in this site, you can get food from this site... 
                </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                <Link to="/projects"> Click Here</Link>
              </Button>
             
              </CardActions>
            </Card>
          </Grid>
          {/* Project 4 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 4"
                  height="140"
                  image={project1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                  This is Player Selection
                </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    This Project is player selection where player are selected in a cart for buy....
                </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                <Link to="/projects"> Click Here</Link>
              </Button>
                
              </CardActions>
            </Card>
          </Grid>

            {/* Project 5*/}
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 4"
                  height="140"
                  image={project1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                  Pioneer Bank
                </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    This is Pioneer Bank Project where uses Deposite, Total Amount, WithDraw Amount
                </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                <Link to="/projects"> Click Here</Link>
              </Button>
                
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProjectDemo;
