import React, {Fragment, useEffect, useState} from 'react';
import Category from './Category';
import NewCategory from './NewCategory';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getCategoriesAction } from '../../actions/categoryActions'
// Material UI
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Categories = () => {

    const [new_category] = useState(true);

    const dispatch = useDispatch();

    useEffect( () => {
        const loadCategories = () => dispatch( getCategoriesAction());
        loadCategories();
    }, []);

    const categories = useSelector( state => state.categories.categories );

    return (
        <Fragment>

            <NewCategory /> 

            <div class="card blue-grey darken-1 category-card width-90">
                

                <Card className="mt-25">
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Categories
                        </Typography>
                        {
                        categories.map(category => (
                            <Category 
                                key={category.id}
                                category={category}
                            />
                            ))
                        }
                        </CardContent>
                    </CardActionArea>
                </Card>
                
            </div>
            
        </Fragment>
    )
}

export default Categories;