import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Image from 'react-random-image';
// Redux
import {  deleteProductAction, getProductEdit } from '../../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
// Sweetalert plugin
import Swal from 'sweetalert2';
// Material UI 
import { Card, Grid, CardActionArea, CardActions, CardContent, Typography,  Button } from '@material-ui/core';

export default function Product({product, catProduct}) {

    const {id, name, price, department_id, category_id} = product;

    const history = useHistory();
    const dispatch = useDispatch();
    const confirmDeleteProduct = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancel: 'Cancel'
          }).then((result) => {
            if (result.value) {
                dispatch(deleteProductAction(id));
              
            }
          })
        
    }

    const redirectEdit = product => {
        dispatch(getProductEdit(product));
        history.push(`/products/edit/${product.id}`)
    }

    return (
        <Grid item xs={12} md={4}>
            <Grid container justify="center" >
            <Card >
                <CardActionArea>
                    <Image width={317} height={200}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>

                        <Typography variant="body2" component="p">
                            {catProduct.map(cat => (
                                cat.name
                            ))} 
                        </Typography>

                        <Typography variant="body2" color="error" component="p">
                            $ {price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary"
                    onClick={ ()=> redirectEdit(product)}
                    >
                    Edit
                    
                    </Button>
                    <Button size="small" color="primary"
                    onClick={() => confirmDeleteProduct(id)}
                    >
                    Delete
                    </Button>
                </CardActions>
            </Card>
            </Grid>
        </Grid>
    )
}
