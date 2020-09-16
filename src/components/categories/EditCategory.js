import React, { useState, useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getDepartmentsAction } from '../../actions/departmentActions';
import { createNewCategoryAction } from '../../actions/categoryActions';
import { showAlert, hideAlertAction } from '../../actions/alertActions';
// Material UI
import { TextField, FormControl, Select, Input, InputLabel, MenuItem, Button } from '@material-ui/core';


export default function EditCategory(){

    const dispatch = useDispatch();

    useEffect( () => {
        const loadDepartments = () => dispatch( getDepartmentsAction());
        loadDepartments();
    }, []);

    const departments = useSelector( state => state.departments.departments);
    
    const [name, setName] = useState('');
    const [department_id, setDepartment_id] = useState('');

    const addCategory = category => dispatch( createNewCategoryAction(category) );
    

    const submitNewCategory = e => {
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
        addCategory({
            name,
            department_id
        });
    }
    
    return (
        <form className="add-category width-90"
        onSubmit={submitNewCategory}
        >

            <TextField 
            onChange={e => setName(e.target.value)}
            label="Name" 
            name="name"
            value={name}
            />

            <FormControl >
                <InputLabel>Department</InputLabel>
                <Select
                labelId="demo-mutiple-name-label"
                input={<Input />}
                value={department_id}
                onChange={e => setDepartment_id(e.target.value)}
                fullWidth
                >
                {departments.map((dpto) => (
                    <MenuItem key={dpto.id} value={dpto.id}>
                    {dpto.name}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
                
            {
                name && department_id ? 
                <button type="submit" className="mt-25">SAVE</button> :
                <Button disbled variant="contained" className="mt-25">SAVE</Button>
            }
        </form>
    )

}