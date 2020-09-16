import React, {useState, useEffect} from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import {  editProductAction } from '../../actions/productActions';
import { getCategoriesAction } from '../../actions/categoryActions';
import { getDepartmentsAction } from '../../actions/departmentActions';
import { useHistory } from 'react-router-dom';
// Material UI
import { Grid, Button, TextField, FormControl, Select, Input, InputLabel, MenuItem } from '@material-ui/core';

export default function EditProduct() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [ product, setProduct ] = useState({
        name: '',
        price : '',
        category_id : '',
        department_id: ''
    });
    
    const categories = useSelector( state => state.categories.categories );
    const departments = useSelector( state => state.departments.departments );
    const editproduct = useSelector(state => state.products.editproduct);

    // Fill the state
    useEffect( () => {
        // consult the api
        setProduct(editproduct);

        const loadCategories = () => dispatch( getCategoriesAction());
        loadCategories();
        const loadDepartments = () => dispatch( getDepartmentsAction());
        loadDepartments();
        
    }, [editproduct]);

    const {name, price, category_id, department_id} = product;

    const onChangeForm = e => {
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }

    const submitEditProduct = e => {
        e.preventDefault();

        dispatch(editProductAction(product));
        history.push('/');
    }

    const redirectCancel = () =>{
        history.push('/');
    }

    return (

        <div className="mt-25">
            <Grid container spacing={3}>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                <h2>Edit Product</h2>
                <form Validate autoComplete
                onSubmit={submitEditProduct}
                >
                    <TextField 
                    label="Name"
                    placeholder="Product Name" 
                    name="name"
                    value={name}
                    onChange={onChangeForm}
                    />

                    <TextField
                    label="Price"
                    type="number"
                    name="price"
                    value={price}
                    onChange={onChangeForm}

                    />
                    <FormControl >
                        <InputLabel>Department</InputLabel>
                        <Select
                        name="department_id"
                        input={<Input />}
                        value={department_id}
                        onChange={onChangeForm}
                        >
                        {departments.map((dpto) => (
                            <MenuItem key={dpto.id} value={dpto.id}>
                            {dpto.name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>

                    <FormControl >
                        <InputLabel>Category</InputLabel>
                        <Select
                        name="category_id"
                        value={category_id}
                        onChange={onChangeForm}
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

                    <div className="new-product-button mt-25">
                        <Button variant="contained" type="submit" color="primary">
                            SAVE
                        </Button>
                        <Button variant="contained" color="secondary" onClick={redirectCancel} className="ml-15">
                            CANCEL
                        </Button>
                    </div>
                </form>
                </Grid>
            </Grid>
        </div>
    )
}