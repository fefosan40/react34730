import React, { useState } from 'react';
import{getFirestore, addDoc, collection,doc, updateDoc} from 'firebase/firestore'
import { Link } from 'react-router-dom';
import "./cart.css"
import { useCartContext } from '../Context/CartContext';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



const Cart = () => {
  const { addCart, removeItem, totalPrice,clearItems} = useCartContext(); 
  const[orderId,setOrderId]=useState('');
  const [show, setShow] = useState(false);
  const handleClose = () =>{
     setShow(false);
     clearItems()
  }

   const sendOrder =() => {
    setShow(true);
   
  const order = {
    buyer:{
      name:"Federico",
      phone:"333421",
      email:"fefosan29@gmail.com"
    },
    items: addCart.map(car=>({id: car.id, title:car.title, price: car.price, quantity: car.quantity })),
    total:totalPrice(),
   };
   const db = getFirestore();
  const orderCollection = collection(db,"order");
  addDoc(orderCollection,order).then(({id})=> setOrderId(id))

}

   const updateOrder = () =>{
    const db = getFirestore();
    const orderDocs = doc(db,"order",
    "8wOa4sm8MSREMMLnFCix");
   updateDoc(orderDocs,{totalPrice})
  }

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
  
  <table className="table">
  <thead>
    <tr>
      <th scope="col">Producto</th>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Cantidad</th>
        

    </tr>
  </thead>
  <tbody className="table-group-divider">
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
 
 
<Button variant="success" onClick={sendOrder}>
Generar compra      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalle de la Compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>Gracias por su compra su id de seguimiento es : {orderId}</Modal.Body>
        <Modal.Footer>
        <Button variant="warning" onClick={updateOrder}>
            Actualizar Orden
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>


  </div>
  )
}
export default Cart
