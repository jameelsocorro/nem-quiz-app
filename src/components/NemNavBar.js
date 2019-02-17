import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { AppBar, Toolbar, IconButton, Tooltip, withStyles } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';

import AppLogo from '../assets/images/logo.jpg';
import { Box } from './Box';

const homeLink = props => <Link to="/home" {...props} />
const leaderboardLink = props => <Link to="/leaderboard" {...props} />

const styles = theme => ({
  appLogo: {
      display: 'flex',
      height: '30px'
  },
  noShadow: {
    boxShadow: 'none'
  }
});

class NemNavBar extends Component {
  render() {
    const { classes, location, noShadow } = this.props;
    return (
      <AppBar className={ noShadow && classes.noShadow } position="sticky" color="inherit">
        <Toolbar>
          <Box flexGrow={1}><img className={classes.appLogo} src={AppLogo} alt="" /></Box>
          <div>
            {
              location.pathname !== '/home' &&
              <Tooltip title="Home">
                <IconButton component={homeLink}>
                  <HomeIcon />
                </IconButton>
              </Tooltip>
            }
            {
              location.pathname !== '/leaderboard' &&
              <Tooltip title="Leaderboard">
                <IconButton component={leaderboardLink}>
                  <AssignmentIcon color="secondary" />
                </IconButton>
              </Tooltip>
            }
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(withStyles(styles)(NemNavBar));
