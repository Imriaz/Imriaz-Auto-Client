import { Grid } from '@mui/material';
import React from 'react';
import Review from '../Review/Review'

const DashboardHome = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Review></Review>
                </Grid>
            </Grid>
        </div>
    );
};

export default DashboardHome;