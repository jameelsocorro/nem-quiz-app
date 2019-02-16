import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

import { AppBar, Toolbar, IconButton, Tooltip } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';

import AppLogo from '../assets/images/logo.jpg';
import { Box } from './Box';

const homeLink = props => <Link to="/home" {...props} />
const leaderboardLink = props => <Link to="/leaderboard" {...props} />

const AppImg = styled.img`
  display: flex;
  height: 30px;
`;

class NemNavBar extends Component {
  render() {
    const { pathname } = this.props.location;
    return (
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <Box flexGrow={1}><AppImg src={AppLogo} alt="" /></Box>
          <div>
            {
              pathname !== '/home' &&
              <Tooltip title="Home">
                <IconButton component={homeLink}>
                  <HomeIcon />
                </IconButton>
              </Tooltip>
            }
            {
              pathname !== '/leaderboard' &&
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

export default withRouter(NemNavBar);
