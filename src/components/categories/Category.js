import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
// Redux
import {  deleteCategoryAction } from '../../actions/categoryActions';
import { useDispatch } from 'react-redux';
// Material UI
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function Category({category}) {

    const { id, name } = category;
    const dispatch = useDispatch();
    
    const confirmDeleteCategory = id => {
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
                dispatch(deleteCategoryAction(id));
              
            }
          })
        
    }

    return (
        <Typography variant="body2" color="textSecondary">
            {name}
            <Button size="small" color="primary"
            onClick={() => confirmDeleteCategory(id)}
            >
            Delete
            </Button> 
        </Typography>
    )
}