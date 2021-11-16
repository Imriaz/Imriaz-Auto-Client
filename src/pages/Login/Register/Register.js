import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();


    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleRegisterSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your Password didn't match");
            return

        }
        registerUser(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>
                        Registration
                    </Typography>
                    {
                        <div >
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Name"
                                name='name'
                                type='text'
                                onChange={handleOnChange}
                                variant='standard' />
                            <br />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Email"
                                name='email'
                                type='email'
                                onChange={handleOnChange}
                                variant='standard' />
                            <br />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="outlined-password-input"
                                label="Password"
                                name='password'
                                onChange={handleOnChange}
                                type="password"
                                autoComplete="current-password"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="outlined-password-input"
                                label="Re Enter Password"
                                name='password2'
                                onChange={handleOnChange}
                                type="password"
                                autoComplete="current-password"
                            />

                            <Button
                                sx={{ width: '75%', m: 1 }}
                                onClick={handleRegisterSubmit}
                                variant="contained" >Register</Button>

                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to='/login'><Button
                                    sx={{ width: '75%', m: 1 }}
                                    type='submit'
                                    variant="text" >Already Registered? Please Login</Button></NavLink>
                        </div>
                    }
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src='https://i.ibb.co/2s8mR8K/amazing-motorbike-with-stencil-banner-for-copy-space.jpg' alt='Login' />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;