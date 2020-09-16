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

const initialState = {
    categories: [],
    error: null,
    loading : false,
    deletecategory: null
}


export default function(state = initialState, action){
    switch(action.type) {

        case START_DOWNLOAD_CATEGORIES:
        case ADD_CATEGORY:
            return{
                ...state, 
                loading: action.payload
            }
        case DOWNLOAD_CATEGORIES_SUCCESS:
            return{
                ...state,
                loading: false,
                categories: action.payload,
                error: false
            }
        case ADD_CATEGORY_SUCCESS:
            return{
                ...state,
                loading: false, 
                categories: [...state.categories, action.payload]
            }
        case DOWNLOAD_CATEGORIES_ERROR:
        case ADD_CATEGORY_ERROR:
        case CATEGORY_DELETE_ERROR:
            return{
                ...state,
                loading: false,
                error: true,
                categories: []
            }
        case GET_CATEGORY_DELETE:
            return{
                ...state,
                deletecategory: action.payload
            }
        case CATEGORY_DELETE_SUCCESS:
            return{
                ...state,
                categories: state.categories.filter(category => category.id !== state.deletecategory),
                deletecategory: null
            }
        
        default: 
            return state;

    }
}