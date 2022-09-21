import React, { useContext,useState } from 'react';

const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);
 
 const CartProvider = ({children})  =>{
const [addCart,setAddCart]= useState([]);





const addItem = (item,quantity)=>{
 let addNewItem;
 let car = addCart.find(car => car.id === item.id);
 if(car){
  car.quantity += quantity;
  addNewItem =[...addCart];
 }
 else{
  car={...item , quantity: quantity};
  addNewItem=[...addCart,car]
 }
 setAddCart(addNewItem)
 console.log(car)
}
const totalPrice = ()=>{
  return addCart.reduce((acumulador , precio)=> acumulador + precio.quantity * precio.price , 0);
}
const totalProductos= ()=>{
  return addCart.reduce((acu,producto)=>acu+producto.quantity,0)
}
const removeItem = ( id)=>setAddCart(addCart.filter(car=>car.id !== id))

const clearItems = ()=>setAddCart([])
const isInCart=(id)=>addCart.find(car=>car.id === id) ? true : false ;


return(
<CartContext.Provider value={{
  addItem,
  isInCart,
  removeItem,
  clearItems,
  totalPrice,
  totalProductos,
  addCart,
 
}}>
      {children}
</CartContext.Provider>

)
}
export default CartProvider;