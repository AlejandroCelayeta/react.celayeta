import React, { useState } from "react"
import './itemcount.css'

export default function ItemCount({inicial, maximo, onAdd}) {
    const [count, setCount] = useState(inicial)  

    const sumar = () =>{
        if (count < maximo){
        setCount(count + 1)
    } else { alert('No puedes agregar más productos')
         }
    }

    const restar = () =>{
        count >= 1 ? setCount(count - 1) : alert('No puedes quitar más productos')
    }

    const reset = () =>{
        setCount(inicial)
    }

    return (
        <>
        <div className='counter' >
            <h1>{count}</h1>
            <button className='button-subtract' onClick={restar}> - </button>
            <button className='button-agregar'  onClick={() => { onAdd(count); reset();}}>Agregar al carrito</button>
            <button className='button-add'  onClick={sumar}> + </button>  
            <button className='button-reset' onClick={reset}>Reset</button>
            </div>
        </>
        
      )
}
