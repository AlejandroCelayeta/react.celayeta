import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import MyProvider from './components/context/CartContext';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Contacto from './components/Contacto';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { initializeApp } from "firebase/app";
import Checkout from './components/Checkout';


export default function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyAJ_MaWDUpKOxuMs1YO8RCNrWSYh2jsTko",
    authDomain: "developers-books.firebaseapp.com",
    projectId: "developers-books",
    storageBucket: "developers-books.appspot.com",
    messagingSenderId: "662242519803",
    appId: "1:662242519803:web:7d5193b1a5ac883157de5e"
  };
  
 initializeApp(firebaseConfig);

  return (
<MyProvider>
  <BrowserRouter>
  
      <NavBar />
      <Routes>
        
        {/* Se muestran todos los productos */}
        <Route path="/" element={ <ItemListContainer /> } />
         
        <Route path="/home" element={ <ItemListContainer /> } />
        {/* Se muestra solo los productos filtrados por categoria*/}
        <Route path="/categoria/:id" element={ <ItemListContainer /> } />
        {/* Se muestra solo un producto en particular */}
        <Route path="/item/:id" element={ <ItemDetailContainer /> } />
        {/*Muestra el carrito */}
        <Route path="/cart" element={ <Cart/> } />
         {/*Muestra el carrito */}
        <Route path="/contacto" element={ <Contacto/> } />
        {/*Ruta al checkout */}
        <Route path="/checkout" element={ <Checkout/> } />
        

      </Routes>
      <Footer/>
      
  </BrowserRouter>
  </MyProvider>
  );
}
