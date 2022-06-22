import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function CartWidget({ items }) {
	return (
		<>
			<ShoppingCartIcon />
			<span>{items}</span>
		</>
	);
}

export default CartWidget;

// import React from 'react'
// import imgComprar from "../img/comprar.png";
// import { useState, useContext } from 'react';
// import { CartContext } from '../context/CartContext.jsx';
// import {Link} from 'react-router-dom';


// export default function CartWidget() {

//     const {getItemQty} = useContext(CartContext)

//     return (
//         <div>
//             {getItemQty() > 0 && <span className="cantidadCompras">{getItemQty()}</span>}
            
//             <Link to={`/cart`}>
//                 <img src={imgComprar} width="30px" className="imgCarrito" />
//             </Link>
            
//         </div>
//     )
// }