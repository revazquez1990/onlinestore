import React, { Fragment, useEffect} from 'react';
import Department from './Department';
import NewDepartment from './NewDepartment';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getDepartmentsAction } from '../../actions/departmentActions';
import { Card, CardActionArea, CardContent, Typography, FormControl, Select, Input, InputLabel, MenuItem, TextField, Grid, Button } from '@material-ui/core';

const Departments = () => {

    const dispatch = useDispatch();

    useEffect( () => {
        const loadDepartments = () => dispatch( getDepartmentsAction());
        loadDepartments();
    }, []);

    

    const departments = useSelector( state => state.departments.departments);

    return(
        <Fragment>
            <NewDepartment />
            <div className="mt-25 width-90">
                <Grid item xs={12}>
                    <Card className="mt-25">
                        <CardActionArea>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Departments
                            </Typography>
                            {
                            departments.map(dpto => (
                                <Department 
                                key={dpto.id}
                                department={dpto}
                                />
                            ))
                            }
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
        </div>
        </Fragment>
    )
}

export default Departments;