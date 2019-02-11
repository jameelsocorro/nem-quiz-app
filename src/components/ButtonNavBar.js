import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';

const homeLink = props => <Link to="/home" {...props} />
const leaderboardLink = props => <Link to="/leaderboard" {...props} />


var divStyle = {
  backgroundColor: '#FFFFFF'
};

var imageIcon = {
  height: '30px'
};

var iconContainer = {
  flexGrow: 1,
  textAlign: 'right'
}

var leaderboardIcon = {
  color: '#F6A704'
}

export const ButtonNavBar = (props) => (
  <AppBar position="static" style={divStyle}>
    <Toolbar>      
      <img  style={imageIcon} src={require("../assets/images/logo.jpg")}/>
      <div style={iconContainer}>
        {
          props.location !== 'home' &&
          <IconButton component={homeLink}>
            <HomeIcon />
          </IconButton>
        }
        
        {
          props.location !== 'leaderboard' &&
          <IconButton component={leaderboardLink}>
            <AssignmentIcon style={leaderboardIcon} />
          </IconButton>
        }
        
      </div>
      
    </Toolbar>
  </AppBar>
);
  
 