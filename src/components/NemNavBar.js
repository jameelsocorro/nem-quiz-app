import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { AppBar, Toolbar, IconButton, Tooltip, withStyles } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

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

  state = {
    user: null
  }

  componentDidMount() {
    const user = localStorage.getItem('user');
    if (user) {
      this.state({ user: JSON.parse(user) });
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.props.history.push('/');
  }

  render() {
    const { classes, location, noShadow } = this.props;
    return (
      <AppBar className={noShadow && classes.noShadow} position="sticky" color="inherit">
        <Toolbar>
          <Box flexGrow={1}><img className={classes.appLogo} src={AppLogo} alt="" /></Box>
          <div>
            {
              (this.state.user && location.pathname !== '/home') &&
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
            {
              !this.state.user &&
              <Tooltip title="Back to Login">
                <IconButton component={homeLink}>
                  <AccountBoxIcon />
                </IconButton>
              </Tooltip>
            }
            {
              this.state.user &&
              <Tooltip title="Sign Out">
                <IconButton onClick={this.logout.bind(this)}>
                  <ExitToAppIcon />
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
