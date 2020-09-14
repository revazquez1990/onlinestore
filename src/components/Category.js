import React from 'react';

export default function Category({category}) {

    // const { id, name, department_id } = category;

    return (
        <p>{category.name}</p>
    )
}