import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Actions de Redux
import { createNewProductAction } from '../../actions/productActions';
import { showAlert, hideAlertAction } from '../../actions/alertActions';
import { getCategoriesAction } from '../../actions/categoryActions';
import { getDepartmentsAction } from '../../actions/departmentActions';
// Material UI
import { FormControl, Select, Input, InputLabel, MenuItem, TextField, Grid, Button } from '@material-ui/core';


export default function NewProduct({history}) {

    // Component state
    const [ product, setProduct ] = useState({
        name: '',
        price : '',
        category_id : '',
        department_id: ''
    });

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [category_id, setCategory_id] = useState(0);
    const [department_id, setDepartment_id] = useState(0);

    const dispatch = useDispatch();

    useEffect( () => {
        const loadCategories = () => dispatch( getCategoriesAction());
        loadCategories();

        const loadDepartments = () => dispatch( getDepartmentsAction());
        loadDepartments();
    }, []);

    const categories = useSelector( state => state.categories.categories );
    const departments = useSelector( state => state.departments.departments );

    const addProduct = product => dispatch( createNewProductAction(product) );
    

    const submitNewProduct = e => {
        e.preventDefault();
        if(name.trim === '' || price <= 0){
            const alert = {
                msg: 'Both fields are required',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }
            dispatch(showAlert(alert));
            return;
        }
        dispatch(hideAlertAction());
        addProduct({
            name,
            price, 
            department_id,
            category_id
        });

        // redirect
        history.push('/');

        
    }

    const redirectCancel = () =>{
        history.push('/');
    }


    return (

        <div className="mt-25">
        <Grid container spacing={3}>
            <Grid item xs={12} md={3}></Grid>
            <Grid item xs={12} md={6}>
                <h2>New Product</h2>
                <form Validate autoComplete
                onSubmit={submitNewProduct}
                >
                    <TextField 
                    label="Name"
                    placeholder="Product Name" 
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    <TextField
                    label="Price"
                    type="number"
                    name="price"
                    value={price}
                    onChange={e => setPrice(e.target.value)}

                    />
                    <FormControl >
                        <InputLabel>Department</InputLabel>
                        <Select
                        input={<Input />}
                        value={department_id}
                        onChange={e => setDepartment_id(e.target.value)}
                        >
                        {departments.map((dpto) => (
                            <MenuItem key={dpto.id} value={dpto.id}>
                            {dpto.name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>

                    {
                        department_id ?
                        <FormControl >
                            <InputLabel>Category</InputLabel>
                            <Select
                            input={<Input />}
                            value={category_id}
                            onChange={e => setCategory_id(e.target.value)}
                            >
                            {categories.map(cat => 
                                cat.department_id === department_id ?
                                <MenuItem key={cat.id} value={cat.id}>
                                {cat.name}
                                </MenuItem>
                                :
                                null
                            )}
                            </Select>
                        </FormControl>
                        :
                        null
                    }

                    <div className="new-product-button mt-25">
                        {
                            name && price && department_id && category_id ?
                            <Button variant="contained" type="submit" color="primary">
                                SAVE
                            </Button>
                            :
                            <Button variant="contained" disabled type="submit" color="primary">
                                SAVE
                            </Button>
                        }
                        <Button variant="contained" color="secondary" onClick={redirectCancel} className="ml-15">
                            CANCEL
                        </Button>
                    </div>
                </form>
            </Grid>
        </Grid>
        </div>

        
        
    );
    
}
