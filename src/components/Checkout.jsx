import React from "react";
import { useState } from "react";
import './checkout.css';
import { useContext } from 'react';
import { CartContext } from './context/CartContext.jsx';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import Cart from './Cart.jsx'; 
import {Link} from 'react-router-dom';



function CheckOut() {

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [cel, setCel] = useState("");

    const [idBuyed, setIdBuyed]=useState('')

    const db = getFirestore()
    const ordersCollection = collection(db, 'orders');

    const {cart,getItemPrice} = useContext(CartContext)


    function handleClick(){
        const order = {
            buyer: {name, mail, cel},
            items: cart,
             total: getItemPrice()
        };

        addDoc(ordersCollection, order).then(({id}) => {
          setIdBuyed(id);
        });

    }

 

  return (
    
    <>
    <Cart/>
    <div className="checkContainer">
    <h6 className="titleCheck">Por favor complete los datos para finalizar su compra</h6>
    <h6 className="orderNumber">Su número de pedido es: {idBuyed}</h6>
    <input onChange={(e) => setName(e.target.value)} placeholder="Ingrese su nombre" className="inName"></input>
    <input onChange={(e) => setMail(e.target.value)} placeholder="Ingrese su e-mail" className="inMail"></input>
    <input onChange={(e) => setCel(e.target.value)} placeholder="Ingrese un celular" className="inCel"></input>
    <button onClick={() => handleClick()} className='btn btn-warning fw-bold p-2 m-2'>Terminar Compra</button>
    </div>
    </>
  )
}

export default CheckOut