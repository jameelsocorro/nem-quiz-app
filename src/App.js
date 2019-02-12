import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { amber } from '@material-ui/core/colors';

import SignIn from './scenes/SignIn';
import Register from './scenes/Register';
import Leaderboard from './scenes/Leaderboard';
import Home from './scenes/Home';

import { Provider } from 'react-redux';
import configureStore from './reducers/store.config';

const store = configureStore();

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#00C4B4'
		},
		secondary: amber,
	},
});

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
	  localStorage.user
		? <Component {...props} />
		: <Redirect to='/' />
	)} />
);

class App extends Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<Provider store={store}>
					<Router>
						<Switch>
							<Route exact path="/" component={SignIn} />
							<Route exact path="/register" component={Register} />
							<PrivateRoute exact path="/leaderboard" component={Leaderboard} />
							<PrivateRoute exact path="/home" component={Home} />
						</Switch>
					</Router>
				</Provider>
			</MuiThemeProvider>
		);
	}
}

export default App;
