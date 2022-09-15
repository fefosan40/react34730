import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import jsonData from "./db.json";
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [productos,setProductos] = useState([]);
 const {categoryId} =   useParams();
   
 const getProducts =(datos,tiempo)=> new Promise((resolve, reject)=>{
  setTimeout(() => {
    if(datos){
      resolve(datos);
    }
      else{
        reject("no se encontraron  productos")
      }
  }, tiempo);
})

useEffect(()=>{
 getProducts(jsonData,2000).then(respuesta=>{
      if(categoryId){
          const Autos = respuesta.filter(autos=>autos.category=== categoryId);
          setProductos(Autos)
      } else{
          setProductos(respuesta)
      }
  })
},[categoryId])
   
   


     return (
       <div>
             

                <ItemList items={productos} key={productos.id}/>
            
        
       </div>
     );
   };

 
export default ItemListContainer              
           