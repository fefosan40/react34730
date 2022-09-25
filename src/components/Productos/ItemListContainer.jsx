import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import {getFirestore, collection,getDocs,query,where} from "firebase/firestore";
import ItemList from './ItemList';



const ItemListContainer = () => {
  

    const [productos,setProductos] = useState([]);
    const {categoryId} =   useParams();

useEffect(()=> {
 const db = getFirestore();
  const productCollection=collection(db,"item");
  if(categoryId){
    const productFilter = query(productCollection, where("category","==",categoryId));
  getDocs(productFilter)
  .then(respuesta =>setProductos(respuesta.docs.map((producto)=>({id:producto.id, ...producto.data()}))));
  }
  else{
    getDocs(productCollection)
    .then(respuesta =>setProductos(respuesta.docs.map((producto)=>({id:producto.id, ...producto.data()}))));
  }
 
},[categoryId])
   
   


     return (
       <div>
             

                <ItemList items={productos} key={productos.id}/>
            
        
       </div>
     );
   };

 
export default ItemListContainer              
           