import {
    START_DOWNLOAD_CATEGORIES,
    DOWNLOAD_CATEGORIES_SUCCESS,
    DOWNLOAD_CATEGORIES_ERROR,
    ADD_CATEGORY,
    ADD_CATEGORY_SUCCESS,
    ADD_CATEGORY_ERROR,
    GET_CATEGORY_DELETE,
    CATEGORY_DELETE_SUCCESS,
    CATEGORY_DELETE_ERROR,
} from '../types';
import clientAxios from '../config/axios';
import Swal from 'sweetalert2';


export function getCategoriesAction() {
    return async (dispatch) => {
        dispatch( downloadCategories() );

        try {
            setTimeout(async() => {
                const reply = await clientAxios.get('/categories');
            dispatch( downloadCategoriesSuccess(reply.data) );
            }, 500);
            
        } catch (error) {
            dispatch( downloadCategoriesError() )
        }
    }
    
}

const downloadCategories = () => ({
    type: START_DOWNLOAD_CATEGORIES,
    payload: true
})

const downloadCategoriesSuccess = categories => ({
    type: DOWNLOAD_CATEGORIES_SUCCESS,
    payload: categories
}); 

const downloadCategoriesError = () => ({
    type: DOWNLOAD_CATEGORIES_ERROR,
    payload: true
});

export function createNewCategoryAction(category) {
    return async (dispatch) => {
        dispatch( addCategory() );
        
        try {
            await clientAxios.post('/categories', category)
            dispatch(addCategorySuccess(category));
            Swal.fire(
                'Success',
                'The category was added successfully !!! ',
                'success'
            )
        } catch(error) {
            console.log(error);
            dispatch(addCategoryError(true));

            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error intente de nuevo'
            })
        }
    }
}

const addCategory = () => ({
    type: ADD_CATEGORY,
    payload: true
});

const addCategorySuccess = category => ({
    type: ADD_CATEGORY_SUCCESS,
    payload: category
});

const addCategoryError = estado => ({
    type: ADD_CATEGORY_ERROR,
    payload: estado
});

export function deleteCategoryAction(id) {
    return async (dispatch) => {
        dispatch(getCategoryDelete(id));
        
        try {
            await clientAxios.delete(`/categories/${id}`);
            dispatch(deleteCategorySuccess());
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
        } catch (error) {
            dispatch(deleteCategoryError());
        }
    }
}
const getCategoryDelete = id => ({
    type: GET_CATEGORY_DELETE,
    payload: id
});
const deleteCategorySuccess = () => ({
    type: CATEGORY_DELETE_SUCCESS
});
const deleteCategoryError = () => ({
    type: CATEGORY_DELETE_ERROR,
    payload: true
})