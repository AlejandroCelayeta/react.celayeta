import React from 'react';
import Item from './Item';
import "./itemlist.css";


export default function ItemList ({inventario}) {
    return(
        <>
        <h6 className='fw-bold title-libros'>Libros para desarrolladores</h6>
        <div className='card-group container row-cols-mx-4'>
            {inventario.map(inventario => <Item key={inventario.id} inventario={inventario} />)}
        </div>
        </>
    )
}






