import React from 'react'
import { Card } from 'react-bootstrap'
import './item.css';
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount';
import { useState } from 'react';


export default function ItemDetail ({resultado}){
  
    const { id, categoria, nombre, precio, stock, imagen, descripcion} = resultado
    const [unidades, setUnidades] = useState();

    function onAdd(contador){
      alert(`Se han agregado: ${contador} productos`);
      setUnidades(contador);
    }
  
    return (
      <>
        <Card className='card' style={{ width: '18rem'}}>
        <Card.Img className='cardimg' variant="top" src={imagen} />
        <Card.Body className='body'>
          <Card.Title className='titulo' >{nombre}</Card.Title>
          <Card.Text className='cardtext'>
          Categoría:{categoria}
            <br/>
            Código: {id}
            <br/>  
           Precio: {precio}
            <br />
            Stock: {stock}
            <br />
            Descripción: {descripcion}
          </Card.Text>

         
        </Card.Body>
      </Card>
      {unidades > 0 ? <Link to={'/cart'} className="btn-fin">Terminar mi compra</Link>:<ItemCount maximo={stock} inicial={1} onAdd={onAdd}/>} 
      </>
  )
}
