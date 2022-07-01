import React, { useState} from 'react';
import "./itemcount.css";


export default function ItemCount ({ inicial, dispo, onAdd, setDispo, setBuyed }){
    
    
    

    const [count, setCount] = useState(inicial)
    const [botonActivo, setBotonActivo] = useState(true)
    

    const menu = (e) => {
        if(e.target.textContent === "Agregar al carrito"){
            setBotonActivo(false)
        } 
    }

    const sumar = () =>{
        if (count === inicial) setCount(count + 1) 
        if (count < dispo) setCount(count + 1)
        console.log(dispo)
           
    }


    const restar = () =>{
        if ( count > inicial) {setCount(count - 1)}
    }

    const reset = () => {
        setCount(inicial)
    }

    const carritoCompras = () => {
        if ( count => inicial ) {setCount(cart)}
    }


    function cart (){
        
    }


    
    return(
    <>
        <div className="text-center div-card">
            <div className="card-body-counter">
                <p className="contador">{count}</p>
                <div className='button-display'>
                <button onClick={restar} className="button-subtract">-</button>
                <button  disabled={!botonActivo}  onClick={(e) => {onAdd(count); reset(); setBuyed(true);carritoCompras(); menu(e); setDispo(dispo - count); console.log(dispo) }} className="button-agregar">Agregar al carrito</button>
                <button onClick={sumar} className="button-add">+</button>
                <button disabled={!botonActivo} onClick={reset} className="button-reset">Reset</button>
                </div>
            </div>
        </div>
    </>
    )
}
    




