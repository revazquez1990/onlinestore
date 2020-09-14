import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  editProductAction } from '../actions/productActions';
import { useHistory } from 'react-router-dom';

export default function EditProduct() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [ product, saveProduct ] = useState({
        name: '',
        price : '',
        department_id : '',
        category_id : ''
    });

    const editproduct = useSelector(state => state.products.editproduct);

    // Llenar el state
    useEffect( () => {
        saveProduct(editproduct);
        
    }, [editproduct]);

    const {name, price, department_id, category_id} = product;


    const onChangeForm = e => {
        saveProduct({
            ...product,
            [e.target.name] : e.target.value

        })
    }

    const submitEditProduct = e => {
        e.preventDefault();

        dispatch(editProductAction(product));
        history.push('/');
    }

    return (


        <div className="row">
            <h2 className="text-center mb-4 font-weight-bold">
                Edit Product
            </h2>
            <form className="col m6"
            onSubmit={submitEditProduct}
            >
                
                <div className="input-field">
                    <input 
                        type="text"
                        className="validate" 
                        value={name}
                        onChange={onChangeForm}
                    />
                    <label className="active">Product Name</label>
                </div>

                <div className="input-field">
                    <input 
                        type="number" 
                        className="validate" 
                        value={price}
                        onChange={onChangeForm}    
                    />
                    <label className="active">Price</label>
                </div>

                <span>Category:</span>
                <select
                >
                    <option value="general">general</option>
                    <option value="business">business</option>
                    <option value="entertainment">entertainment</option>
                    <option value="health">health</option>
                    <option value="science">science</option>
                    <option value="sports">sports</option>
                    <option value="technology">technology</option>    
                </select>

                <button class="waves-effect waves-light btn mt-25" type="submit">SAVE CHANGES</button>
                <a class="waves-effect waves-light btn mt-25 ml-15 red lighten-1">Cancel</a>

            </form>
        </div>


        // <div className="row justify-content-center">
        //     <div className="col-md-8">
        //         <div className="card">
        //             <div className="card-body">
        //                 <h2 className="text-center mb-4 font-weight-bold">
        //                     Edit Product
        //                 </h2>
        //                 <form
        //                     onSubmit={submitEditProduct}
        //                 >
        //                     <div className="form-group">
        //                         <label>
        //                             Product Name
        //                         </label>
        //                         <input 
        //                             type="text"
        //                             className="form-control" 
        //                             placeholder="Product Name" 
        //                             name="name"
        //                             value={name}
        //                             onChange={onChangeForm}
        //                         />
        //                     </div>

        //                     <div className="form-group">
        //                         <label> Price of the product </label>
        //                         <input 
        //                             type="number"
        //                             className="form-control" 
        //                             placeholder="Price of the product" 
        //                             name="price"
        //                             value={price}
        //                             onChange={onChangeForm}
        //                         />
        //                     </div>
        //                     <button 
        //                         type="submit"
        //                         className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
        //                     >
        //                         SAVE CHANGES
        //                     </button>

        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}