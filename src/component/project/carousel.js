import React, { forwardRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography, Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  pj_block: {
    background: " linear-gradient(217deg, #F0C1DF, #FCEEDF, #F8CACA)",
    margin: "0 auto",
    padding: theme.spacing(0, 2)
  },
  pj_title: {
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",

  },
  pj_container: {
    padding: theme.spacing(10, 0)
  },
  pj_img: {
    width: "50px"
  },
  pj_font: {
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
    items: 2,
    partialVisibilityGutter: 30,
  },
};


const ProjectCarousel = forwardRef(({ list }, ref) => {
  const classes = useStyles();

  return (
    <div ref={ref} className={classes.pj_block}>
      <Container className={classes.pj_container} disableGutters={true}>
        <div className={classes.pj_title}>
          <img className={classes.pj_img} src="./projectLogo.png" alt="" />

          <Typography className={classes.pj_font}>Projects</Typography>
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
            return <ProjectCard {...item} key={item.id} />;
          })}
        </Carousel>
      </Container>
    </div>
  );
});

export default ProjectCarousel;
