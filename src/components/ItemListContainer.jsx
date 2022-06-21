import React, { useEffect, useState } from "react";
import libros from '../../src/helpers/arreglo.js'
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";




export default function ItemListContainer() {
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    const muestralibros = new Promise((res,) => {
      setTimeout(() => {
        (!id) ? res (libros) : res (libros.filter(item => item.categoria === id));
    console.log(libros)
        
      }, 2000);
    });

    muestralibros
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

  return (
    <>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Hubo un error, intente más tarde"}</div>

      <ItemList libros = {resultado}/>
    </>
  );
}
