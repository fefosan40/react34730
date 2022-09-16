
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router';
import ItemDetails from "./ItemDetails";
import jsonData from "../Productos/db.json";
import "./details.css";

const ItemDetailsContainer = () => {
 const [items, setItems] = useState({});
   const {id} = useParams();
   const getProducts =(datos,tiempo)=> new Promise((resolve, reject)=>{
    setTimeout(() => {
      if(datos){
        resolve(datos);
      }
        else{
          reject("no se encontraron detalles de este producto")
        }
    }, tiempo);
  })
  
  useEffect(()=>{
   getProducts(jsonData,2000).then(respuesta=>{
    const detalles= respuesta.find(item=>item.id === parseInt(id));
    setItems(detalles)
      })
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
