import {
    START_DOWNLOAD_DEPARTMENTS,
    DOWNLOAD_DEPARTMENTS_SUCCESS,
    DOWNLOAD_DEPARTMENTS_ERROR,
    ADD_DEPARTMENT,
    ADD_DEPARTMENT_SUCCESS,
    ADD_DEPARTMENT_ERROR,
    GET_DEPARTMENT_DELETE,
    DEPARTMENT_DELETE_SUCCESS,
    DEPARTMENT_DELETE_ERROR,
} from '../types';

const initialState = {
    departments: [],
    error: null,
    loading : false,
    deletedepartment: null
}


export default function(state = initialState, action){
    switch(action.type) {

        case START_DOWNLOAD_DEPARTMENTS:
        case ADD_DEPARTMENT:
            return{
                ...state, 
                loading: action.payload
            }
        case DOWNLOAD_DEPARTMENTS_SUCCESS:
            return{
                ...state,
                loading: false,
                departments: action.payload,
                error: false
            }
        case ADD_DEPARTMENT_SUCCESS:
            return{
                ...state,
                loading: false, 
                departments: [...state.departments, action.payload]
            }
        case DOWNLOAD_DEPARTMENTS_ERROR:
        case ADD_DEPARTMENT_ERROR:
        case DEPARTMENT_DELETE_ERROR:
            return{
                ...state,
                loading: false,
                error: true,
                departments: []
            }
            case GET_DEPARTMENT_DELETE:
                return{
                    ...state,
                    deletedepartment: action.payload
                }
            case DEPARTMENT_DELETE_SUCCESS:
                return{
                    ...state,
                    departments: state.departments.filter(department => department.id !== state.deletedepartment),
                    deletedepartment: null
                }

        default: 
            return state;

    }
}