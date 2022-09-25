import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router';
import ItemDetails from "./ItemDetails";
import {getFirestore, doc,getDoc} from "firebase/firestore";
import "./details.css";

const ItemDetailsContainer = () => {
 const [items, setItems] = useState({});
   const {id} = useParams();
  
  
  useEffect(()=>{
   const db = getFirestore();
   const productos = doc(db,"item",id);
   getDoc(productos).then(respuesta=> setItems({id: respuesta.id, ...respuesta.data()}))
  },[id])
     
   return (
<>
   {items ?<ItemDetails item={items} {...items}/> 
   :<p className="detalle-vacio">Debes seleccionar un producto para ver sus detalles</p> 
}
    </>
   )
}

export default ItemDetailsContainer