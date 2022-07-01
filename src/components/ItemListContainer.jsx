import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

function ItemListContainer({ greeting }) {
  const [inventary, setInventary] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore(); // obtenemos la base de datos
    const itemsCollection = collection(db, "items"); // obtenemos la colección

    if (id) {
      const q = query(itemsCollection, where("categoria", "==", id)); // obtenemos el query
      getDocs(q).then((snapshot) => {
        // obtenemos los documentos
        setInventary(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        ); // seteamos el estado
      });
    } else {
      getDocs(itemsCollection).then((snapshot) => {
        // obtenemos los documentos
        setInventary(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        ); // seteamos el estado
      });
    }
  }, [id]);

  return (
    <>
      <div className="divItem">
        <h2 className="div-h2">
          Bienvenidos a Developers Books
          <span className="spaH1">{greeting}</span>
        </h2>
        <ItemList inventary={inventary} />
      </div>
    </>
  );
}

export default ItemListContainer;

