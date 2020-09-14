import React from 'react';
import Products from './Products';
import Categories from './Categories';


export default function HomeBody() {
    return(
        <div className="row">
            <div className="col m10">
                <Products></Products>
            </div>

            <div className="col m2">
                <Categories></Categories>
            </div>
        </div>
    )
}