import React from 'react';
import Products from '../products/Products';
import Categories from '../categories/Categories';
import Departments from '../departments/Departments';
// Material UI
import Grid from '@material-ui/core/Grid';


export default function HomeBody() {
    return(
        <Grid container spacing={2}>
            <Grid item xs={12}  md={8}>
                <Grid container justify="center" spacing="3">
                    <Products></Products>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
                <Grid container justify="center" spacing="3">
                    <Categories></Categories>
                </Grid>
                <Grid container justify="center" spacing="3">
                    <Departments></Departments>
                </Grid>
            </Grid>
        </Grid>
    )
}