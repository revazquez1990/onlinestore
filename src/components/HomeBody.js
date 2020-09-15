import React from 'react';
import Products from './Products';
import Categories from './Categories';


export default function HomeBody() {
    return(
        <div className="row">
            <div className="col m9">
                <Products></Products>
            </div>

            <div className="col m3">
                <Categories></Categories>
            </div>
        </div>
    )
}