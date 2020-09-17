import React, {Fragment, useEffect, useState } from 'react';
import Product from './Product';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAction } from '../../actions/productActions';
import { getCategoriesAction } from '../../actions/categoryActions'
// Material
import Grid from '@material-ui/core/Grid';

const Products = () => {

    const dispatch = useDispatch();

    useEffect( () => {
        const loadProducts = () => dispatch( getProductsAction());
        loadProducts();

        const loadCategories = () => dispatch( getCategoriesAction());
        loadCategories();

    }, []);

    const products = useSelector( state => state.products.products);
    const categories = useSelector( state => state.categories.categories );
    const error = useSelector( state => state.products.error);
    const loading = useSelector( state => state.products.loading);

    return (
        <Fragment>
            <h2 className="text-center my-5">
                Products list
            </h2>
            <Grid container spacing={2}>
                { error ? <p className="font-weight-bold alert alert-danger text-center">Hubo un error</p> : null }
                { loading ? <div className="progress"><div className="indeterminate"></div></div> : null }
                    {
                        products.length === 0 ? 'No Existen Products' :
                        products.map(product => (
                            <Product 
                                key={product.id}
                                product={product}
                                catProduct={categories.filter(cat => cat.id === product.category_id)}
                            />

                        ))
                    }
            </Grid>

        </Fragment>
    )
}

export default Products;
