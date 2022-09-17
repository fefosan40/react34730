import React,{Fragment,useState}from 'react';
import "./details.css";
import { Link } from 'react-router-dom';
import {useCartContext} from '../Context/CartContext';
import ItemCount from './ItemCount';

const ItemDetails = ({item}) => {

  const [quantity,setQuantity]=useState();
   const { addItem } = useCartContext();
    const onAdd=(quantity)=>{
      setQuantity(quantity);
      addItem(item,quantity);
    
 
    }
   return (
 
     <Fragment>
       <div className="card-Detail" >
         <img src={item.pictureUrl} className="Imagen" alt="" />
         <div className="card-body">               
         <h1 className="title-p">{item.title}</h1>
         <p className='container'>
           {item.description}</p>
 
           <p className='p-d'>Nuevos | Vendidos 3900</p>
           <p className='p-d'>USD {item.price}</p>
           
 
           <div className="Container">
         <div className="cart-p" style={{ color:"green", fontSize:"20px",fontWeight:"600",textAlign:"right"}}>     
        { quantity? ( <div>Añadido al carrito! </div> ):(
             <ItemCount item={quantity} initial={1} stock={5} onAdd={onAdd}/>
             )}
             </div>
              <div>
           {quantity && <Link  to="/cart" className="Incart btn btn-success"><i className="bi bi-cart-check"></i> Finalizar Compra
                 </Link>  }
              
                
                </div>
             </div>
           </div>
       </div>
     </Fragment>
 
 
    )





}

export default ItemDetails

