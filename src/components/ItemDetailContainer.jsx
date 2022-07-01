import React from 'react';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'; 
import { useParams } from 'react-router-dom';
import './item.css'; 



export default function ItemDetailContainer (){

    const {id} = useParams()
    const [detalle, setDetalle] = useState()
    const [loading, setLoading] = useState(true)

    const db = getFirestore();
    const collection = 'items';

    useEffect(() => {
      const productFound = doc(db, collection, id);
      getDoc(productFound).then((res)=>{
        if(res.exists()){
            console.log(res.data())
            setDetalle({...res.data(), id: res.id})
            setLoading(false);
        }else{
            alert("No se encontro el producto")
        }
      })
    }, [id])
    
    return(
        <div>
            {loading ? <h5>Loading</h5> : <ItemDetail detalle={detalle} />}
        </div>
    );
}