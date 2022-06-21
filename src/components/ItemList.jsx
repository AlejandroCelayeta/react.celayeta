import React from 'react';
import Item from './Item';
import './itemlist.css';

const ItemList = ({libros}) => {

  return (
    <div className="itemdiv">

        {libros.map(libro => <Item key={libro.id} libro={libro} />) }

        </div>
  )
}

export default ItemList

