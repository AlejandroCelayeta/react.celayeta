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


export default function App() {
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

      </Routes>
      <Footer/>
      
  </BrowserRouter>
  </MyProvider>
  );
}
