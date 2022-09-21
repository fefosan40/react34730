import React from "react";
import icono from '../../assets/img/icono carrito.png';
import "../nav.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";


const CartWidget =  () => {
const {totalProductos}= useCartContext();
let productsInCart = "";
return (
		<>
   <Link to="/cart">
    <p>{totalProductos() || productsInCart}
		<img src={icono}  alt="icono"className="logo" /></p>
        </Link>
      </>
    
  

  )
}

export default CartWidget