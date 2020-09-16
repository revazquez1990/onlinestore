import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    DOWNLOAD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCTS, 
    DOWNLOAD_PRODUCTS_SUCCESS,
    GET_PRODUCT_DELETE, 
    PRODUCT_DELETE_ERROR, 
    PRODUCT_DELETE_SUCCESS,
    GET_PRODUCT_EDIT,
    PRODUCT_EDIT_SUCCESS,
    PRODUCT_EDIT_ERROR,
    START_EDIT_PRODUCT
} from '../types';
import clientAxios from '../config/axios';
import Swal from 'sweetalert2';

// Create new Product
export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch( addProduct() );
        
        try {
            // API Insert
            await clientAxios.post('/products', product)
            // If all goes well, update the state
            dispatch(addProductSuccess(product));
            // Alert 
            Swal.fire(
                'Success',
                'The product was added successfully',
                'success'
            )
        } catch(error) {
            console.log(error);
            // If error => change state
            dispatch(addProductError(true));

            Swal.fire({
                icon: 'error',
                title: 'An error was detected',
                text: 'There was an error try again'
            })
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
});

// If success => save DB
const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
});

// If error
const addProductError = estado => ({
    type: ADD_PRODUCT_ERROR,
    payload: estado
});

// Get Products from the DB
export function getProductsAction() {
    return async (dispatch) => {
        dispatch( downloadProducts() );

        try {
            setTimeout(async() => {
                const reply = await clientAxios.get('/products');
            dispatch( downloadProductsSuccess(reply.data) );
            }, 500);
            
        } catch (error) {
            dispatch( downloadProductError() )
        }
    }
    
}

const downloadProducts = () => ({
    type: START_DOWNLOAD_PRODUCTS,
    payload: true
})

const downloadProductsSuccess = products => ({
    type: DOWNLOAD_PRODUCTS_SUCCESS,
    payload: products
}); 

const downloadProductError = () => ({
    type: DOWNLOAD_PRODUCT_ERROR,
    payload: true
})

// Select and delete a Product 
export function deleteProductAction(id) {
    return async (dispatch) => {
        dispatch(getProductDelete(id));
        
        try {
            await clientAxios.delete(`/products/${id}`);
            dispatch(deleteProductSuccess());
            // If eliminated, alert show
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
        } catch (error) {
            dispatch(deleteProductError());
        }
    }
}
const getProductDelete = id => ({
    type: GET_PRODUCT_DELETE,
    payload: id
});
const deleteProductSuccess = () => ({
    type: PRODUCT_DELETE_SUCCESS
});
const deleteProductError = () => ({
    type: PRODUCT_DELETE_ERROR,
    payload: true
})

// Place the product in edition
export function getProductEdit(product) {
    return (dispatch) => {
        dispatch( getProductEditAction(product) );
    }
}

const getProductEditAction = product => ({
    type: GET_PRODUCT_EDIT,
    payload: product
})

// Edit the record in the DB
export function editProductAction(product) {
    return async (dispatch) => {
        dispatch( editProduct());

        try {
            await clientAxios.put(`/products/${product.id}`, product);
            dispatch(editProductSuccess(product));
        } catch (error) {
            
        }
    }
}
const editProduct = () => ({
    type: START_EDIT_PRODUCT,
})

const editProductSuccess = product => ({
    type: PRODUCT_EDIT_SUCCESS,
    payload: product
})