import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { amber, red } from '@material-ui/core/colors';

import { Provider } from 'react-redux';
import configureStore from './reducers/store.config';

import SignIn from './scenes/SignIn';
import Register from './scenes/Register';
import Leaderboard from './scenes/Leaderboard';
import Home from './scenes/Home';
import Quiz from './scenes/Quiz';
import QuizSummary from './scenes/QuizSummary';

const store = configureStore();

const theme = createMuiTheme({
	palette: {
		background: { paper: "#fff", default: "#eeee" },
		primary: {
			main: '#00C4B4'
		},
		secondary: amber,
		red: red
	},
	typography: {
		htmlFontSize: 10,
		fontFamily: "'Proxima Nova', sans-serif"
	},
	shape: {
		borderRadius: 8
	},
	maxWidth: '1280px'
});

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
		localStorage.getItem('user')
			? (rest.path === '/' || rest.path === '/register') ?
				<Redirect to='/home' /> : <Component {...props} />
			: (rest.path !== '/' && rest.path !== '/register' && rest.path !== '/leaderboard') ?
				<Redirect to='/' /> : <Component {...props} />
	)} />
);

class App extends Component {
	render() {
		console.log(theme);
		return (
			<MuiThemeProvider theme={theme}>
				<Provider store={store}>
					<Router>
						<Switch>
							<PrivateRoute exact path="/" component={SignIn} />
							<PrivateRoute exact path="/register" component={Register} />
							<PrivateRoute exact path="/leaderboard" component={Leaderboard} />
							<PrivateRoute exact path="/home" component={Home} />
							<PrivateRoute exact path="/quiz/:quizId/:quizItemId" component={Quiz} />
							<PrivateRoute exact path="/quizsummary/:quizId" component={QuizSummary} />
						</Switch>
					</Router>
				</Provider>
			</MuiThemeProvider>
		);
	}
}

export default App;
