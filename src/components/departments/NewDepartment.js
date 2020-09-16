import React, { useState, useEffect } from 'react';
// Redux
import { useDispatch } from 'react-redux';
import { createNewDepartmentAction } from '../../actions/departmentActions';
import { showAlert, hideAlertAction } from '../../actions/alertActions';
// Material UI
import { TextField, Button } from '@material-ui/core';

export default function NewDeparment(){

    const dispatch = useDispatch();
    
    const [name, setName] = useState('');

    const addDepartment = department => dispatch( createNewDepartmentAction(department) );
    

    const submitNewDepartment = e => {
        e.preventDefault();
        if(name.trim === ''){
            const alert = {
                msg: 'Ambos campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }
            dispatch(showAlert(alert));
            return;
        }
        dispatch(hideAlertAction());
        addDepartment({
            name,
        });
        setName('');
    }


    return (
        <form className="add-category width-90"
        onSubmit={submitNewDepartment}
        >
            <TextField 
            onChange={e => setName(e.target.value)}
            label="New Deparment" 
            name="name"
            value={name}
            />

            {
                name ? <Button variant="contained" type="submit" color="primary" className="mt-25">ADD</Button> :
                <Button disbled variant="contained" className="mt-25">ADD</Button>
            }
        </form>
    )

}