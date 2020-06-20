import React from "react";
import clsx from "clsx";
import {
  Container, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse,
  IconButton, Typography, Chip
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStyles } from "./style";


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
