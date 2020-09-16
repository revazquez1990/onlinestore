import React from 'react';
import Swal from 'sweetalert2';
// Redux
import {  deleteDepartmentAction } from '../../actions/departmentActions';
import { useDispatch } from 'react-redux';
// Material UI
import { Typography, Button } from '@material-ui/core';

export default function Product({department}) {

    const {id, name} = department;

    const dispatch = useDispatch();
    const confirmDeleteDepartment = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancel: 'Cancel'
          }).then((result) => {
            if (result.value) {
                dispatch(deleteDepartmentAction(id));
            }
          })
    }
    
    return (
        <Typography variant="body2" color="textSecondary">
            {name}
            <Button size="small" color="primary"
            onClick={() => confirmDeleteDepartment(id)}
            >
            Delete
            </Button> 
        </Typography>
    )
}
