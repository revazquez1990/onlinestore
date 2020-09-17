import React, {useEffect, useState} from 'react';

export default function Imagen({name}){

    const [imageApi, setImageApi] = useState('');
    
    useEffect( () => {
        const consultImageApi= async () => {
            
            const key = '18293690-3304f7df9df1d50b7a74bc588';
            const min_width = 317;
            const min_height = 200;
            const per_page = 3;
            
            const url = `https://pixabay.com/api/?key=${key}&q=${name}&min_width=${min_width}&min_height=${min_height}&per_page=${per_page}`;
            
            const response = await fetch(url);
            const result = await response.json();
            console.log(result.hits);
            
            result.hits.map((img, index) => 
            index === 1 ?
            setImageApi(img.userImageURL) : null
        )
        }
        consultImageApi();
        
    }, []);
    
    return(

        <img src={imageApi}></img>
    )
}