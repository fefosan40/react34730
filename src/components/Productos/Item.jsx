import React,{Fragment}from 'react';
import "./products.css";
import {Link} from "react-router-dom"
const Item = ({id,title,price,pictureUrl}) => {
  return (
  <Fragment>
  <div className="card-product" >
 <img src={pictureUrl} class="card-img-top" alt=""/>
  <div clasName="card-b">
    
   <h5 className="card-t">{title}</h5>
    <p className="card-p">Generación 2019, variedad de colores. Motor 1.0, ideal para ciudad.</p>
    <p className="card-p">{price}</p>
    

    <Link className="btn btn-success"to={`/item/${id}`}>Ver mas</Link>
  </div>
  </div>

</Fragment>



  );
}

export default Item

