import React, { forwardRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography, Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    background: " linear-gradient(217deg, #F0C1DF, #FCEEDF, #F8CACA)",
    margin: "0 auto"
  },
  title: {
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    
  },
  container: {
    padding: theme.spacing(10)
  },
  img: {
    width: "50px"
  },
  project: {
    marginLeft: "10px",
    fontWeight: "bold",
    fontSize: "28px"
  }
}));

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 3,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 800,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 800,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
};
 

const Projects = forwardRef(({ list }, ref) => {
  const classes = useStyles();

  return (
    <div ref={ref} className={classes.root}>
      <Container className={classes.container}>
      <div className={classes.title}>
        <img className={classes.img} src="./projectLogo.png" alt="" />

        <Typography className={classes.project}>Projects</Typography>
        </div>
        
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={5000}
        centerMode={false}
        className=""
        containerClass="container-padding-bottom"
        dotListClass=""
        draggable
        focusOnSelect
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {Object.values(list).map(item => {
          return  <ProjectCard {...item} key={item.id} />;
        })}
      </Carousel>
      </Container>
    </div>
  );
});

export default Projects;
