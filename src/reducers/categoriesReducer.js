import {
    START_DOWNLOAD_CATEGORIES,
    DOWNLOAD_CATEGORIES_SUCCESS,
    DOWNLOAD_CATEGORIES_ERROR
} from '../types';

const initialState = {
    categories: [],
    error: null,
    loading : false
}


export default function(state = initialState, action){
    switch(action.type) {

        case START_DOWNLOAD_CATEGORIES:
            return{
                ...state, 
                loading: true
            }
        case DOWNLOAD_CATEGORIES_SUCCESS:
            return{
                ...state,
                loading: false,
                categories: action.payload,
                error: false
            }
        case DOWNLOAD_CATEGORIES_ERROR:
            return{
                ...state,
                loading: false,
                error: true,
                categories: []
            }

        default: 
            return state;

    }
}