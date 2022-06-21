import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './item.css';



const Item = ({libro}) => {
    const { id, categoria, nombre, precio, stock, imagen, descripcion} = libro
  return (
            <Card className='card' style={{ width: '18rem'}}>
  <Card.Img className='cardimg' variant="top" src={imagen} />
  <Card.Body className='body'>
    <Card.Title className='titulo' >{nombre}</Card.Title>
    <Card.Text className='cardtext'>
      Código: {id}
      <br/>  
      Categoría:{categoria}
      <br/>
      Precio: {precio}
      <br />
      Stock: {stock}
      
    </Card.Text>
    <Link to = {'/item/'+ id} className='btn-comprar'>Comprar</Link>
  </Card.Body>
</Card>
    
  )
}

export default Item