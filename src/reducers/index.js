import { combineReducers } from 'redux';
import productsReducers from './productsReducer';
import categoriesReducers from './categoriesReducer';
import alertReducers from './alertReducer';



export default combineReducers({
    products: productsReducers,
    categories: categoriesReducers,    
    alert: alertReducers
});