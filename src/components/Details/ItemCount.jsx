
import React, { Fragment, useState } from 'react';
import "./details.css";


const ItemCount = ({  stock ,initial, onAdd }) => {
    
    const [counter, setCounter] = useState(initial);
    



    function Incrementar() {
        if (counter < stock) {

            setCounter(counter + 1);
        }
    }
    function Disminuir() {
        if (counter > initial) {
            setCounter(counter - 1)
        }
    }



    return (


        <Fragment>
            <div className="Container" >
                <div className='contador'>
                    <button className='botonI btn btn-outline-success' onClick={Incrementar}>+</button>
                    <p className='counter'>{counter}</p>
                    <button className='botonD btn btn-outline-danger' onClick={Disminuir}>-</button>
                </div>
               
                <div className="carrito">
               <button className=" carrito btn btn-primary" onClick={()=>onAdd(counter)} >
                <i className="bi bi-cart3 "></i>Agregar Carrito
                    </button>
                </div>   
              
           </div>
        </Fragment>

    )
}

export default ItemCount






