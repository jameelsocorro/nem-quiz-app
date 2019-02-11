import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import photo from "../assets/images/quiz-card.jpeg";
import PlayCirleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

var card = {
  width: '350px',
  height: '300px',
  margin: '10px',
  background: `linear-gradient(rgba(27, 35, 34, 0.5),rgba(16, 21, 20, 0.9)),url(${photo})`,
  backgroundSize: 'cover'
}

var headerTitle = {
  color: '#FFFFFF !important',
  fontSize: '16px'
}

var playIcon = {
  color: '#FFFFFF',
  height: '20px',
  width: '20px'
}

var iconContainer = {
  marginLeft: 'auto'
}

var cardContent = {
  display: 'flex'
}

var cardContainer = {
  display: 'inline-block',
  cursor: 'pointer'
}


export const QuizCard = (props) => (
  <div style={cardContainer}>
    <Card style={card}>
      <CardHeader style={{ headerTitle }}
        action={
          <IconButton>
            <PlayCirleOutlineIcon />
          </IconButton>
        }
        title={props.title} />

      <CardContent>


        <Typography gutterBottom variant="h5" component="h2">
          NEM Quiz 1
      </Typography>


      </CardContent>
    </Card>
  </div>

);

