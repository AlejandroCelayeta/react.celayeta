import React from 'react'
import './cart.css'



export default function Cart({nombre, imagen, precio, deleteItem, id, cantidad }) {

  


  return (
    
       <>
        <div className="col-lg-3 cart-container"> 
          <h3 className="cart-name"> {nombre} </h3>
          <div className="cart-img-container">
              <img src={imagen} alt={nombre} className="img-fluid" />
          </div>
          <div className="cart-txt-container mt-3">
            <p><span className="fw-bold">Precio:</span> {precio}</p>
            <p><span className="fw-bold">Items Agregadas:</span> {cantidad}</p>
            <button onClick={()=>{deleteItem(id)}} className="nav-item mt-5"> Elminar Producto</button>
          </div>
        </div>
    </>
    
  )
}