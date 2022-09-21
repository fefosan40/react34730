import React from 'react';
import { Link } from 'react-router-dom';
import "./cart.css"
import { useCartContext } from '../Context/CartContext';

const Cart = () => {
  const { addCart, removeItem, totalPrice} = useCartContext();

 if(addCart.length === 0){
  return(
    <div className="items-clear">
      <p>Su carrito está vacio  </p> <Link to="/" className="btn btn-primary">Ver Productos</Link>
    </div>
  );


 }

  return (
    <div>
    {
      addCart.map((product)=>(
<div className="carrito-list" key={product.id}>
  
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Producto</th>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Cantidad</th>
        

    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
    <td> <img className="img-c" src={product.pictureUrl} alt=""/></td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>
    <td><button className="remover btn btn-danger"onClick={()=>removeItem(product.id)}>Borrar Producto</button></td>
    </tr>
  </tbody>      
 
</table>
   </div>   ))
 
  }   


<div className="total">
  <p>Total:  {totalPrice()}</p>

</div>
 



  </div>
  )
}
export default Cart