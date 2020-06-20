import React from "react";
import { makeStyles, Container } from "@material-ui/core";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  card_block: {
    borderRadius: 30,
    boxShadow: "none",
    marginBottom: "40px"
  },
  card_media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  card_tags: {
    marginTop: "8px",
    marginRight: "6px"
  }
}));

const ProjectCardTags = ({ tags }) => {
  const classes = useStyles();
  return tags.map(tag => (
    <Chip className={classes.card_tags} size="small" label={tag} />
  ));
};

const ProjectCard = ({
  title,
  image,
  content,
  subcontent,
  subcontent1,
  tags
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container>
      <Card className={classes.card_block}>
        <CardHeader
          title={<Typography variant="h6">{title}</Typography>}
          subheader={<ProjectCardTags tags={tags} />}
        />
        <CardMedia className={classes.card_media} image={image} title="Image" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{subcontent}</Typography>
            <Typography paragraph>{subcontent1}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Container>
  );
};

export default ProjectCard;
