import React, {Fragment, useEffect} from 'react';
import Product from './Product';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAction } from '../../actions/productActions';
// Material
import Grid from '@material-ui/core/Grid';

const Products = () => {

    const dispatch = useDispatch();

    useEffect( () => {
        const loadProducts = () => dispatch( getProductsAction());
        loadProducts();
    }, []);

    

    const products = useSelector( state => state.products.products);
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
                            />

                        ))
                    }
            </Grid>

        </Fragment>
    )
}

export default Products;
