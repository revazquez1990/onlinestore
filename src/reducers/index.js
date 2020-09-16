import { combineReducers } from 'redux';
import productsReducers from './productsReducer';
import categoriesReducers from './categoriesReducer';
import departmentsReducers from './departmentsReducer';
import alertReducers from './alertReducer';



export default combineReducers({
    products: productsReducers,
    categories: categoriesReducers,  
    departments: departmentsReducers,  
    alert: alertReducers
});