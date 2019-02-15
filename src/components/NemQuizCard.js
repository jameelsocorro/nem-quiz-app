import React from 'react';

import { Card, CardHeader, IconButton, CardContent, Typography, withStyles } from '@material-ui/core';
import PlayCirleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const styles = theme => ({
  card: {
    minHeight: "300px",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  cardHeader: {
    padding: 0
  },
  cardContent: {
    border: '2px solid #fff',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 3
  },
  textColor: {
    color: '#fff'
  }
});

const NemQuizCard = (props) => (
  <Card className={props.classes.card} style={{
    backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.64)),
      url(${props.cardImage})` }}>

    <CardHeader
      className={props.classes.cardHeader}
      action={
        <IconButton className={props.classes.textColor}>
          <PlayCirleOutlineIcon />
        </IconButton>
      }
      title={
        <Typography variant="button" gutterBottom>
          <b className={props.classes.textColor}>{props.type}</b>
        </Typography>
      }
    />

    <CardContent className={props.classes.cardContent}>
      <Typography gutterBottom variant="h5" component="h2" className={props.classes.textColor}>
        {props.title}
      </Typography>
      <Typography variant="body1" gutterBottom className={props.classes.textColor}>
        {props.description}
      </Typography>
    </CardContent>

  </Card>
);

export default withStyles(styles)(NemQuizCard);
