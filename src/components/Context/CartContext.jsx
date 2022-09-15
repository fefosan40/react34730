import React, { useContext,useState } from 'react';

const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);
 
 const CartProvider = ({children})  =>{
const [addCart,setAddCart]= useState([])

const isInCart=(id)=>
addCart.find(car=>car.id === id) ? true : false ;


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
const removeItem = ( id)=>setAddCart(addCart.filter(car=>car.id !== id))

const clearItems = ()=>setAddCart([])


return(
<CartContext.Provider value={{
  addItem,
  isInCart,
  removeItem,
  clearItems,
 
}}>
      {children}
</CartContext.Provider>

)
}
export default CartProvider;