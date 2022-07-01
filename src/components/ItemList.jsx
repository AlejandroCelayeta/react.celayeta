import React from 'react';
import Item from './Item';
import "./itemlist.css";


export default function ItemList ({inventary}) {
    return(
        <>
        <h6 className='fw-bold title-libros'>Libros para desarrolladores</h6>
        <div className='card-group container row-cols-mx-4 backDiv'>
            {inventary.map(inventary => <Item key={inventary.id} inventary={inventary} />)}
        </div>
        </>
    )
}






