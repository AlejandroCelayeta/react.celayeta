import React from 'react';
import { useEffect, useState } from 'react';
import libros from '../../src/helpers/arreglo.js'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';




export default function ItemDetailContainer() {

  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);  

  console.log(id)
  
  
  useEffect(() => {
    setResultado({});
    setLoading(true);
    setError(false);
    const promesa = new Promise((res,) => {
      setTimeout(() => {
        res(libros.find(item => item.id === id));
       }, 2000); 
    });
   
    promesa
      .then((result) => {
        setResultado(result);
      })
      
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

 
  return(
  <>    
    <div className='loading'> {loading && 'Loading...'} </div>
    <div> {error && 'Load error'} </div>    
    <ItemDetail resultado={resultado}/> 
  </>
  )
};
