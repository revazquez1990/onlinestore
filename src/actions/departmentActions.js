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
import clientAxios from '../config/axios';
import Swal from 'sweetalert2';


export function getDepartmentsAction() {
    return async (dispatch) => {
        dispatch( downloadDepartments() );

        try {
            setTimeout(async() => {
                const reply = await clientAxios.get('/departments');
            dispatch( downloadDepartmentsSuccess(reply.data) );
            }, 500);
            
        } catch (error) {
            dispatch( downloadDepartmentsError() )
        }
    }
    
}

const downloadDepartments = () => ({
    type: START_DOWNLOAD_DEPARTMENTS,
    payload: true
})

const downloadDepartmentsSuccess = departments => ({
    type: DOWNLOAD_DEPARTMENTS_SUCCESS,
    payload: departments
}); 

const downloadDepartmentsError = () => ({
    type: DOWNLOAD_DEPARTMENTS_ERROR,
    payload: true
});

export function createNewDepartmentAction(department) {
    return async (dispatch) => {
        dispatch( addDepartment() );
        
        try {
            await clientAxios.post('/departments', department)
            dispatch(addDepartmentSuccess(department));
            Swal.fire(
                'Success',
                'The department was added successfully !!! ',
                'success'
            )
        } catch(error) {
            console.log(error);
            dispatch(addDepartmentError(true));

            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error intente de nuevo'
            })
        }
    }
}

const addDepartment = () => ({
    type: ADD_DEPARTMENT,
    payload: true
});

const addDepartmentSuccess = department => ({
    type: ADD_DEPARTMENT_SUCCESS,
    payload: department
});

const addDepartmentError = estado => ({
    type: ADD_DEPARTMENT_ERROR,
    payload: estado
});

export function deleteDepartmentAction(id) {
    return async (dispatch) => {
        dispatch(getDepartmentDelete(id));
        
        try {
            await clientAxios.delete(`/departments/${id}`);
            dispatch(deleteDepartmentSuccess());
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
        } catch (error) {
            dispatch(deleteDepartmentError());
        }
    }
}
const getDepartmentDelete = id => ({
    type: GET_DEPARTMENT_DELETE,
    payload: id
});
const deleteDepartmentSuccess = () => ({
    type: DEPARTMENT_DELETE_SUCCESS
});
const deleteDepartmentError = () => ({
    type: DEPARTMENT_DELETE_ERROR,
    payload: true
})