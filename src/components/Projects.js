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
 
import car from "../images/car.PNG";
import fashion from "../images/fashion.PNG";
import food from "../images/food.PNG";
import player from "../images/player.PNG";
import bank from "../images/bank.PNG";
import Navbar from './Navbar';
const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
});

const Projects = () => {
  const classes = useStyles();

  return (
    <>
    <Navbar/> 
    <Box component="div" className={classes.mainContainer}>
      
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="180"
                image={car}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Car Wash Service System
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Apr 2021 – Present<br></br>

Project descriptionThis Project is Car Wash Service System where dirty car are cleaning carefully.

Features:
1. Amin Panel.
2. User Panel.
3. Add Service.
4. Add Review.
5. Manage Service.
6. Make Admin.
7. Booking List.
8. Order List.
9. Payment Gateway System.<br></br>

In this project I uses react , react-bootstrap, react-route , firebase Authentication, Node Js, Mongodb etc....
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a href="https://car-wash-service-system.web.app/">Live Site</a>
              </Button>
              <Button size="small" color="primary">
                <a href="https://github.com/mahedi5061/car-wash-service-centre-client">Code Link</a>
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
                height="180"
                image={fashion}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                Fashion Park Ecommerce Site
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Mar 2021 – Present<br></br>

Project descriptionThis Project is Ecommerce Project
Features for this projects:
1. Amin Panel.
2.User Panel.
3. Add Products.
4. Delete Products.
5. Order List.<br></br>

In this project i uses react , react-bootstrap, react-route , firebase Authentication, node js, mongodb.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a href="https://fashion-park-client-site-ad17f.web.app/">Live Site</a>
              </Button>
              <Button size="small" color="primary">
                <a href="https://github.com/mahedi5061/fashion-park-client-site">Code Link</a>
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
                height="180"
                image={food}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                Hungry Monstar
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Feb 2021<br></br>

Project descriptionThis is Food Meal System

Features:
1. Search food By first letter.
2. Search food By Full name.<br></br>

In this project I uses html,css,javascript
For data I uses Fake Data Api From themealdb site.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a href="https://mahedi5061.github.io/hungry-monstar/">Live Site</a>
              </Button>
              <Button size="small" color="primary">
                <a href="https://github.com/mahedi5061/hungry-monstar">Code Link</a>
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
                height="180"
                image={player}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                Player Selection
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Feb 2021<br></br>

Project descriptionThis is Player Selection
Features:
Select Player Into cart

This Project I uses html-css-javascript
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
               <a href="https://nostalgic-sinoussi-3a860f.netlify.app/"> Live Site</a>
              </Button>
              <Button size="small" color="primary">
                <a href="">Code Link</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>

            {/* Project 5 */}
            <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="180"
                image={bank}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                Pioneer Bank
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Feb 2021<br></br>

                This Is a Pioneer Banking System.
Features:
1. Deposite Amount.
2. WithDraw Amount.
3. Balance.<br></br>
I Uses HTML-CSS,Javascript
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
              <a href="https://mahedi5061.github.io/pioneer-bank/">Live Site</a>
              </Button>
              <Button size="small" color="primary">
                <a href="https://github.com/mahedi5061/pioneer-bank">Code Link</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default Projects;
