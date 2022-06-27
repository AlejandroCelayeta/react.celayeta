import React from 'react';
import {useContext, useState, useEffect} from 'react';
import {CartContext} from './context/CartContext';
import ItemCount from './ItemCount'; 
import {Link} from 'react-router-dom';
import './item.css'; 


export default function ItemDetail({ detalle }) {

    const [buyed, setBuyed]=useState(false)
    
    const { nombre, imagen, precio, stock, detalles } = detalle
    
    const [dispo,setDispo]= useState(stock)

    useEffect(() => {
        setDispo(stock)
        console.log(dispo)
           
      })
    
    const { isInCart, addItem} = useContext(CartContext)

    

    
    const onAdd = (count, inicial) =>{
        if ( count < inicial ) {alert("Error, debe agregar productos al carrito.")
    }else{
        alert(`Se agregó ${count} productos al carrito correctamente.`)
        
        
    }

    isInCart(detalle.id)
    addItem(detalle, count)
}

   
    

    return (
        <>
        <div className="div-item">
        <h3 className='titulo-detalles text-center'>Detalles del Producto</h3>
        <div className="row row-cols-md-2 p-4 div-item">
            <div className="col">
                <div className="card text-center">
                    <img src={imagen} className="card-img-top" alt="imagen del libro" />
                    <div className="card-body">
                        <h5 className="text-nombre">{nombre}</h5>
                        <p className="text-detalles">Detalles: {detalles}</p>
                        <p className="text-precio" > Precio: ${precio}</p>
                        <p className="text-stock">Stock: {dispo} unidades disponibles</p>
                        {!buyed ? <ItemCount setBuyed={setBuyed}   setDispo={setDispo} dispo={dispo} inicial={1} onAdd={onAdd}/> : "" }
                        <Link to="/home"><button className='btn btn-warning fw-bold p-2 m-2'>Volver a la librería</button></Link>
                        <Link to="/cart"><button className='btn btn-warning fw-bold p-2 m-2'>Ver carrito de compras</button></Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}










