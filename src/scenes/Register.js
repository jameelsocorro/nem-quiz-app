import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { registerUser } from "../actions/user";

import styled from 'styled-components';
import { Grid, TextField, Typography } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import { NemButton } from "../components";
import BaseComponent from '../core/BaseComponent';

const SignInFormContainer = styled(Grid)`
    ${spacing}
    max-width: 650px;
`;

const SignInForm = styled.form`
    ${spacing}
    width: 100%;
`;

class Register extends BaseComponent {

    state = {
        firstname: '',
        lastname: '',
        password: '',
        email: '',
        nemAddress: '',
        errors: [],
        isLoading: false
    }

    onRegisterUser = event => {
        event.preventDefault();

        if (this.isFormValid()) {
            this.setState({ isLoading: true });

            const { firstname, lastname, password, email, nemAddress } = this.state;

            this.props.registerUser({
                firstname,
                lastname,
                password,
                email,
                nemAddress
            }).then(() => {
                this.setState({ isLoading: false });
                this.props.history.push('/');
            });;
        }
    }

    isFormValid() {

        const { firstname, lastname, password, email, nemAddress, errors} = this.state;

        if (firstname && lastname && password && email && nemAddress && errors.length === 0) {
            return true;
        }

        return false;
    }

    render() {
        const isFormValid = this.isFormValid();
        return (
            <Grid className="app-max-height" container direction="row" justify="center" alignItems="center">
                <SignInFormContainer p={4} className="app-max-width" container direction="column" justify="center" alignItems="center">
                    <Typography style={{ alignSelf: 'flex-start' }} variant="h2" gutterBottom>
                        Register new account
                    </Typography>

                    <SignInForm onSubmit={this.onRegisterUser}>

                        <Grid container direction="column">

                            <Grid container direction="row" spacing={16}>

                                <Grid item xs={6}>

                                    <TextField
                                        autoFocus
                                        required
                                        fullWidth
                                        margin="normal"
                                        name="firstname"
                                        label="First Name"
                                        type="firstname"
                                        disabled={this.state.isLoading}
                                        error={this.state.errors['firstname']}
                                        helperText={this.state.errors['firstname'] ? 'Field is required' : ''}
                                        onChange={this.formHandleChange}
                                        onBlur={this.formHandleChange}
                                    />

                                </Grid>

                                <Grid item xs={6}>

                                    <TextField
                                        required
                                        fullWidth
                                        margin="normal"
                                        name="lastname"
                                        label="Last Name"
                                        type="lastname"
                                        disabled={this.state.isLoading}
                                        error={this.state.errors['lastname']}
                                        helperText={this.state.errors['lastname'] ? 'Field is required' : ''}
                                        onChange={this.formHandleChange}
                                        onBlur={this.formHandleChange}
                                    />

                                </Grid>

                            </Grid>

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

                            <TextField
                                required
                                fullWidth
                                margin="normal"
                                name="email"
                                label="Email"
                                type="email"
                                disabled={this.state.isLoading}
                                error={this.state.errors['email']}
                                helperText={this.state.errors['email'] ? 'Invalid email' : ''}
                                onChange={this.formHandleChange}
                                onBlur={this.formHandleChange}
                            />

                            <TextField
                                required
                                fullWidth
                                margin="normal"
                                name="nemAddress"
                                label="NEM Address"
                                type="nemAddress"
                                disabled={this.state.isLoading}
                                error={this.state.errors['nemAddress']}
                                helperText={this.state.errors['nemAddress'] ? 'Field is required' : ''}
                                onChange={this.formHandleChange}
                                onBlur={this.formHandleChange}
                            />

                            <NemButton
                                mt={4}
                                isLoading={this.state.isLoading}
                                disabled={!isFormValid || this.state.isLoading}
                                type="submit"
                                text="Register">
                            </NemButton>

                        </Grid>
                    </SignInForm>
                </SignInFormContainer>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    const { data } = state.user;
    return { user: data };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { registerUser },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
