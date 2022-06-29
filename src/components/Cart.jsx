import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './context/CartContext.jsx';
import { useContext } from 'react';
import './cart.css';


export default function Cart() {

  const { cart, deleteItem, getItemCount, getItemPrice, emptyCart } = useContext(CartContext)


  return (
    <>
    <div className='centerCart'>
      <h4 className='titleCart'>Carrito de compras</h4>


      {getItemCount() > 0 ?

        <div className='cardCart'>
          <div className='TitleCart'>
            <div className='cartContainer'>
              <p className='CartQty'>Libro</p>
              <p className='CartPrice'>Título</p>
              <p className='CartSubt'>Precio Unitario</p>
            </div>
          </div>

          {cart.map(item => (

            <div className='lineCart'>
              <div className='cartContainer'>
                <img className='imgProduct img-fluid' src={item.imagen} alt={"Producto"} width="70px" />
                <p className='cartQty'>Cantidad: {item.count} unidad/es x {item.nombre}</p>
                <p className='cartPrice'>Precio: ${item.precio}</p>
                <p className='cartSubt'>Subtotal: ${item.count * item.precio}</p>
               <p onClick={() => deleteItem(item.id)} className='DelItemCard'><img className='imgTrash img-fluid' src={("../images/cesto.png")} alt={"Producto"} width="30px" />Borrar</p>
              </div>
            </div>
          ))}


          <div className='finalCost'>
          <div className='totalLabel'>Importe total: ${getItemPrice()} ({getItemCount()} Producto/s)</div>

          <div className='finalEmpty'>
          <Link to="/home"><button className='btn btn-warning fw-bold p-2 m-2 btnBack'>Volver a la librería</button></Link>
            <button className='btn btn-warning fw-bold p-2 m-2 btnAddCar btnFinalBuy'>Finalizar Compra</button>
            <button className='btn btn-warning fw-bold p-2 m-2 btnEmptyCart' onClick={emptyCart}>Vaciar Carrito</button>
          </div>
          </div>
        </div>

        : 
        <div className='emptyCart'>
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"  fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <Link to="/"><button className='btn btn-warning fw-bold p-2 m-2 btnBuyBooks'>Comprar Libros</button></Link>
        <p className='noProducts'>No hay productos en el carrito</p>
        </div>
        }






</div>
    </>
  )
}























