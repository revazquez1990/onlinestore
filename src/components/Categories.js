import React, {Fragment, useEffect} from 'react';
import Category from './Category';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getCategoriesAction } from '../actions/categoryActions'

const Categories = () => {

    const dispatch = useDispatch();

    useEffect( () => {
        // consultar la api
        const loadCategories = () => dispatch( getCategoriesAction());
        loadCategories();
    }, []);

    const categories = useSelector( state => state.categories.categories );

    return (
        <Fragment>
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">Card Title</span>
                </div>
                <div class="card-action">
                    <a href="#">This is a link</a>
                    <a href="#">This is a link</a>
                </div>
                <div class="card-action">
                    <a href="#">This is a link</a>
                    <a href="#">This is a link</a>
                </div>
                <div class="card-action">
                    <a href="#">This is a link</a>
                    <a href="#">This is a link</a>
                </div>
                <div class="card-action">
                    <a href="#">This is a link</a>
                    <a href="#">This is a link</a>
                </div>
            </div>
            {
                categories.map(category => (
                    <Category 
                        key={category.id}
                        category={category}
                    />
                ))
            }
        </Fragment>
    )
}

export default Categories;