import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, TextField, Link } from '@material-ui/core';
import { spacing } from '@material-ui/system';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signIn } from "../actions/user";

import styled from 'styled-components';
import { Box } from "../components";
import LogoSrc from '../assets/images/logo.jpg';

import { NemButton } from "../components";
import BaseComponent from '../core/BaseComponent';

const registerLink = props => <RouterLink to="/register" {...props} />

const SignInFormContainer = styled(Grid)`
    ${spacing}
    max-width: 350px;
`;

const SignInForm = styled.form`
    ${spacing}
    max-width: 320px;
    width: 100%;
`;

class SignIn extends BaseComponent {
    state = {
        email: '',
        password: '',
        errors: [],
        isLoading: false
    }

    onSignInUser = event => {
        event.preventDefault();

        if (this.isFormValid()) {
            this.setState({ isLoading: true });

            const { email, password } = this.state;

            this.props.signIn({
                email,
                password,
            }).then((data) => {
                this.setState({ isLoading: false });

                if(!this.props.error) {
                    localStorage.setItem('user', JSON.stringify(this.props.user));
                    this.props.history.push('/home');
                    return;
                }

            });;
        }
    }

    isFormValid() {

        const { email, password, errors } = this.state;

        if (email && password && errors.length === 0) {
            return true;
        }

        return false;
    }

    render() {
        const isFormValid = this.isFormValid();

        return (
            <Grid className="app-max-height" container direction="row" justify="center" alignItems="center">
                <SignInFormContainer p={4} className="app-max-width" container direction="column" justify="center" alignItems="center">
                    <img src={LogoSrc} width="100%" alt="" />
                    <SignInForm onSubmit={this.onSignInUser}>

                        <Grid container direction="column">

                            <TextField
                                autoFocus
                                required
                                fullWidth
                                margin="normal"
                                name="email"
                                label="Email"
                                type="email"
                                disabled={this.state.isLoading}
                                error={this.state.errors['email']}
                                helperText={this.state.errors['email'] ? 'Field is required' : ''}
                                onChange={this.formHandleChange}
                                onBlur={this.formHandleChange}
                            />

                            <TextField
                                required
                                fullWidth
                                margin="normal"
                                name="password"
                                label="Password"
                                type="password"
                                disabled={this.state.isLoading}
                                error={this.state.errors['password']}
                                helperText={this.state.errors['password'] ? 'Field is required' : ''}
                                onChange={this.formHandleChange}
                                onBlur={this.formHandleChange}
                            />

                            {
                                this.props.error &&
                                <Box mt={2} mb={2} color="#f44336">
                                    {this.props.error}
                                </Box>
                            }

                            <NemButton
                                mt={4}
                                disabled={!isFormValid || this.state.isLoading}
                                type="submit"
                                text="Sign In">
                            </NemButton>
                            <NemButton
                                mt={2}
                                type="button"
                                color="secondary"
                                onClick={() => this.props.history.push('/leaderboard')}
                                text="Leaderboard">
                            </NemButton>
                            <Box mt={2}></Box>
                            <Link
                                align="center"
                                color="primary"
                                variant="body2"
                                component={registerLink}>
                                Register a new account
                            </Link>

                        </Grid>
                    </SignInForm>
                </SignInFormContainer>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    const { data, error } = state.user;
    return {
        user: data,
        error
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { signIn },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
