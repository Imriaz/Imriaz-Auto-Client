import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user, admin } = useAuth();
    if (!admin) {
        return (<>
            <CircularProgress />
            <h2>Please Go Back to your Dashboard</h2> </>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;