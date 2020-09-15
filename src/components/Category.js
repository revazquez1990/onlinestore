import React from 'react';

export default function Category({category}) {

    // const { id, name, department_id } = category;

    return (
        <div class="card-action">
            <a href="#">{category.name}</a>
        </div>
    )
}