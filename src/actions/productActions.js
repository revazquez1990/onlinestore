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
    // PRODUCT_EDIT_ERROR,
    START_EDIT_PRODUCT
} from '../types';
import clientAxios from '../config/axios';
import Swal from 'sweetalert2';

// Crear nuevos Productos
export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch( addProduct() );
        
        try {
            // Insertar en la API
            await clientAxios.post('/products', product)
            // Si todo sale bien, actualizar el state
            dispatch(addProductSuccess(product));
            // Alerta !!! 
            Swal.fire(
                'Correcto',
                'El product se agrego corectamente !!!',
                'success'
            )
        } catch(error) {
            console.log(error);
            // si hay un error cambiar el state
            dispatch(addProductError(true));

            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error intente de nuevo'
            })
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
});

// Si el product se guarda en la BD
const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
});

// Si hubo un error
const addProductError = estado => ({
    type: ADD_PRODUCT_ERROR,
    payload: estado
});

// Funcion que descarga los products de la base de datos
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

// Selecciona y elimina el product
export function deleteProductAction(id) {
    return async (dispatch) => {
        dispatch(getProductDelete(id));
        
        try {
            await clientAxios.delete(`/products/${id}`);
            dispatch(deleteProductSuccess());
            // Si se elimina, mostrar alert
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

// Colocar el product en edicion
export function getProductEdit(product) {
    return (dispatch) => {
        dispatch( getProductEditAction(product) );
    }
}

const getProductEditAction = product => ({
    type: GET_PRODUCT_EDIT,
    payload: product
})

// Edita un registro en la BD
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