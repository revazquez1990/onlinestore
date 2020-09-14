import {
    START_DOWNLOAD_CATEGORIES,
    DOWNLOAD_CATEGORIES_SUCCESS,
    DOWNLOAD_CATEGORIES_ERROR
} from '../types';
import clientAxios from '../config/axios';


// Download categories
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
})