import React,{Fragment}from 'react';
import "../../components/Productos/products.css";
import "./details.css";
const ItemDetails = ({pictureUrl,title,description,price}) => {


 
   
  return(
    
    <Fragment>

    <div className="card-Detail" >
        <img src={pictureUrl} className="Imagen" alt="" />
        <div className="card-body">              
        <h1 className="title-p">{title}</h1>
        <p className='container'>
          {description}</p>
         <p className='p-d'>USD {price}</p>
  </div>
  </div>
  </Fragment>
  


    )





}

export default ItemDetails

