import React from 'react'
import { useContext } from 'react';
import { CartContext } from "../context/ShoppingCartContext";

const CartWidget = () => {
    const [cart, setCart] = useContext(CartContext);
    
    const horas = cart.reduce((acc, curr) => {
        return acc + curr.horas;
    }, 0);
    
    return (
        <div> <img src="https://img.icons8.com/ultraviolet/40/000000/shopping-cart-loaded--v1.png"/>
            <div className='items'>
                <p> {horas}</p>
            </div>
        </div>
    )
}

export default CartWidget