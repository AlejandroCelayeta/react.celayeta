import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { Routes, Route, BrowserRouter} from 'react-router-dom' ;
import ItemDetailContainer from './components/ItemDetailContainer'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from './components/SubNavbar.jsx';
import Cart from './components/Cart';
import MyProvider from './components/context/CartContext';




export default function App() {
  return (

  <BrowserRouter>
  <MyProvider>
      <NavBar />
      <SubNavbar/>
      <Routes>
        
        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/home" element={ <ItemListContainer /> } />
        <Route path="/categoria/:id" element={ <ItemListContainer /> } />
        <Route path="/item/:id" element={ <ItemDetailContainer /> } />
        <Route path="/cart" element={ <Cart/> } />
          
      </Routes>
      </MyProvider>
  </BrowserRouter>
  
  );
}
