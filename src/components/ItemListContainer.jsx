import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';
import ItemList from './ItemList';
import './itemlist.css';



export default function ItemListContainer({ greeting }) {

    const {id} = useParams()
    const [svg, setSvg] = useState(true)
    const [inventario, setInventario] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fetch("../data.json")
            .then(res => res.json())
            .then(res => {(!id) ? setInventario (res) : setInventario (res.filter(item => item.categoria === id))})
            .then(setSvg(false))
            .catch(error => console.log("Error:", error))
        }, 2000);
    }, [id])
    
    return (
        <>
            <div className="divItem">
                <h2 className="div-h2">Bienvenidos a Developers Books<span className="spaH1">{greeting}</span></h2>
                <ItemList inventario={inventario} />
                <div className='fs-1 fw-bold'>{svg && <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="text-white bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                </svg>}</div>
            </div>
            <ItemDetailContainer/>
        </>
    )
}


















