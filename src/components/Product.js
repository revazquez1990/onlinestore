import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Image from 'react-random-image';
import {  deleteProductAction, getProductEdit } from '../actions/productActions';
import { getCategoriesAction } from '../actions/categoryActions'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';


export default function Product({product}) {

    const {id, name, price, department_id, category_id} = product;

    const history = useHistory();
    const dispatch = useDispatch();
    // Confirmar si desea eliminar el product
    const confirmDeleteProduct = id => {
        // preguntar al usuario
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancel: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                // pasarlo al action
                dispatch(deleteProductAction(id));
              
            }
          })
        
    }

    useEffect( () => {
        // consultar la api
        const loadCategories = () => dispatch( getCategoriesAction());
        loadCategories();
    }, []);
    const categories = useSelector( state => state.categories.categories );


    // funcion que redirige de forma programada
    const redirectEdit = product => {
        dispatch(getProductEdit(product));
        history.push(`/products/edit/${product.id}`)
    }
    console.log(categories.find(c => c.id = category_id));
    return (
        <div className="card col m4">
            <div className="card-image waves-effect waves-block waves-light">
                <Image width={277} height={277}/>
                <img src="algo.jpg" alt=""/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{name}<i className="material-icons right">more_vert</i></span>
                <p className="blue-text">$ {price}</p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
           <div className="pl-24">
                <i 
                    className="material-icons"
                    onClick={ ()=> redirectEdit(product)}    
                >
                    edit
                </i>
                <i 
                    className="material-icons"
                    onClick={() => confirmDeleteProduct(id)}
                >
                    delete
                </i>
           </div>
        </div>
        // <tr>
        //     <td>{name}</td>
        //     <td> <span className="font-weight-bold"> $ {price}</span> </td>
        //     <td>{department_id}</td>
        //     <td>{category_id}</td>
        //     <td className="acciones">
                
        //         <i 
        //             className="material-icons"
        //             onClick={ ()=> redirectEdit(product)}    
        //         >
        //             edit
        //         </i>
        //         <i 
        //             className="material-icons"
        //             onClick={() => confirmDeleteProduct(id)}
        //         >
        //             delete
        //         </i>
                
        //     </td>
        // </tr>
    )
}
