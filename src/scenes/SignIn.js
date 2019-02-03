import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, TextField, Fab, Button } from '@material-ui/core';
import { spacing } from '@material-ui/system';

import styled from 'styled-components';
import { Box } from "../components";
import LogoSrc from '../assets/images/logo.jpg';

const registerLink = props => <Link to="/register" {...props} />

const SignInFormContainer = styled(Grid)`
    ${spacing}
    max-width: 350px;
`;

const SignInForm = styled.form`
    ${spacing}
    max-width: 320px;
    width: 100%;
`;

class SignIn extends Component {
    state = { userName: '', password: '' }
    render() {
        return (
            <Grid className="app-max-height" container direction="row" justify="center" alignItems="center">
                <SignInFormContainer p={4} className="app-max-width" container direction="column" justify="center" alignItems="center">
                    <img src={LogoSrc} width="100%" alt="" />
                    <SignInForm noValidate autoComplete="off">

                        <Grid container direction="column">
                            <TextField
                                id="username"
                                label="User Name"
                                value={this.state.userName}
                                margin="normal"
                            />

                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                                value={this.state.password}
                                margin="normal"
                            />

                            <Box mt={4}></Box>
                            <Fab color="primary" variant="extended" aria-label="Sign In">Sign In</Fab>
                            <Box mt={2}></Box>
                            <Button
                                color="primary"
                                component={registerLink}>
                                New Account
                            </Button>

                        </Grid>
                    </SignInForm>
                </SignInFormContainer>
            </Grid>
        );
    }
}

export default SignIn;
