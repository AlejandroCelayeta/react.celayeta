import React from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext({})



const MyProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some((x) => x.id === id)
    }

    const emptyCart = () => {
        setCart([])
    }

    const addItem = (item, count) => {
        const newItem = {
            ...item,
            count
        }

        if(isInCart(newItem.id)){
            const findProduct = cart.find((x) => x.id === newItem.id)
            const indexProduct = cart.indexOf(findProduct)
            const arrayAux = [...cart]
            arrayAux[indexProduct].count += count
            setCart(arrayAux)
        }else{
            setCart([...cart, newItem])
           
        }
    }

    const deleteItem = (id) => {
        return setCart(cart.filter(x => x.id !== id))
    }

    const getItemCount = () => {
        return cart.reduce((acc, x) => acc += x.count, 0)
    }

    const getItemPrice = () => {
        return cart.reduce((acc, x) => acc += x.count * x.precio, 0)
    }

    
    return <CartContext.Provider value={{cart, isInCart, emptyCart, addItem, deleteItem, getItemCount, getItemPrice}}>{children}</CartContext.Provider>

}


export default MyProvider













































































































