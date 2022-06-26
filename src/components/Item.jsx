import React from 'react';
import { Link } from "react-router-dom";
import "./item.css";


export default function Item({ inventario }) {

    const { nombre, stock, precio, imagen, id } = inventario;

    return (
        <div className="row row-cols-md-2 p-2 div-item">
            <div className="col">
                <div className="card">
                    <img src={imagen} className="card-img-top" alt="imagen de producto" />
                    <div className="card-body">
                        <h6 className="text-nombre">{nombre}</h6>
                        <p className="text-precio">${precio}</p>
                        <p className="text-stock">Stock: {stock} unidades disponibles</p>
                        <Link to={`/item/${id}`}><button className='btn-detalle'>Ver detalle</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}



