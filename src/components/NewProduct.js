import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Actions de Redux
import { createNewProductAction } from '../actions/productActions';
import { showAlert, hideAlertAction } from '../actions/alertActions';

export default function NewProduct({history}) {

    // Component state
    const [name, saveName] = useState('');
    const [price, savePrice] = useState(0);

    // Utitlizar use dispatch y te crea una funcion 
    const dispatch = useDispatch();

    // Acceder al state del store
    const loading = useSelector( state => state.products.loading);
    const error = useSelector( state => state.products.error);
    const alert = useSelector( state => state.alert.alert);

    // Mandar a llamar el action de productoAction
    const addProduct = product => dispatch( createNewProductAction(product) );
    

    // Cuando el usuario haga submit
    const submitNewProduct = e => {
        e.preventDefault();
        // Validar el formulario
        if(name.trim === '' || price <= 0){
            const alert = {
                msg: 'Ambos campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }
            dispatch(showAlert(alert));
            return;
        }
        // si no hay errores
        dispatch(hideAlertAction());
        // crear el nuevo product
        addProduct({
            name,
            price
        });

        // redireccionar
        history.push('/');

        
    }


    return (

        <div className="row">
            <h2 className="text-center mb-4 font-weight-bold">
                Add New Product
            </h2>
            <form className="col m6"
            onSubmit={submitNewProduct}
            >
                
                <div className="input-field">
                    <input 
                        type="text"
                        className="form-control validate" 
                        placeholder="Product Name" 
                        name="name"
                        value={name}
                        onChange={e => saveName(e.target.value)}
                    />
                    <label className="active">New Product</label>
                </div>

                <div className="input-field">
                    <input 
                        type="number" 
                        className="form-control validate" 
                        placeholder="Product Price" 
                        name="price"
                        value={price}
                        onChange={e => savePrice(Number(e.target.value))}    
                    />
                    <label className="active">Price</label>
                </div>

                <span>Category:</span>
                <div className="select-wrapper">
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
                </div>

                <button class="waves-effect waves-light btn mt-25" type="submit">ADD</button>
                <a class="waves-effect waves-light btn mt-25 ml-15 red lighten-1">Cancel</a>

                { loading ? <div className="progress"><div className="indeterminate"></div></div> : null }
                { error ? <p className="alert alert-danger p2 mt-4">Hubo un error</p> : null }

            </form>
        </div>




        // <div className="row justify-content-center">
        //     <div className="col-md-8">
        //         <div className="card">
        //             <div className="card-body">
        //                 <h2 className="text-center mb-4 font-weight-bold">
        //                     Add New Product
        //                 </h2>
        //                 {alert ? <p className={alert.classes}>{alert.msg}</p> : null }
        //                 <form
        //                     onSubmit={submitNewProduct}
        //                 >
        //                     <div className="form-group">
        //                         <label htmlFor="">
        //                             New Product
        //                         </label>
        //                         <input 
        //                             type="text"
        //                             className="form-control" 
        //                             placeholder="Product Name" 
        //                             name="name"
        //                             value={name}
        //                             onChange={e => saveName(e.target.value)}
        //                         />
        //                     </div>

        //                     <div className="form-group">
        //                         <label htmlFor="">
        //                             Product Price
        //                         </label>
        //                         <input 
        //                             type="number"
        //                             className="form-control" 
        //                             placeholder="Product Price" 
        //                             name="price"
        //                             value={price}
        //                             onChange={e => savePrice(Number(e.target.value))}
        //                         />
        //                     </div>
        //                     <button 
        //                         type="submit"
        //                         className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
        //                     >
        //                         ADD
        //                     </button>

        //                 </form>

        //                 { loading ? <div className="progress"><div className="indeterminate"></div></div> : null }
        //                 { error ? <p className="alert alert-danger p2 mt-4">Hubo un error</p> : null }
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
    
}
