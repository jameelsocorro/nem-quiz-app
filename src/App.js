import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import SignIn from './scenes/SignIn';
import { amber } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00C4B4'
    },
    secondary: amber,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <SignIn></SignIn>
      </MuiThemeProvider>
    );
  }
}

export default App;
