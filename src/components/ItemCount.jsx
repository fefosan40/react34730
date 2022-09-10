import React,{useState} from 'react';
import "../App.css";

 
  const ItemCount=({stock,initial,onAdd})=>{
        initial=1;
         stock=5;
    const [counter,setCounter] = useState(initial);



    function Incrementar(){
      if(counter < stock){

    setCounter(counter+1);
      }
    }
    function Disminuir(){
        if(counter>initial){ 
    setCounter(counter-1)
}
    } 



  return (
    <div >

       <div className='contador'>
               <div>
        <button className='botonI' onClick={Incrementar}>Incrementar+</button>

    <button className='botonD' onClick={Disminuir}>Disminuir-</button>

  <p>{counter}</p>
   <button className="carrito"onClick={()=>onAdd(counter)}> {stock > counter ? "Agregar al Carrito" :"Sin stock"}</button> 

   </div> </div> </div>

  )
}

export default ItemCount







