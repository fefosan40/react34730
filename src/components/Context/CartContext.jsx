import React, { useContext,useState } from 'react';

const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);
 
 const CartProvider = ({children})  =>{
const [addCart,setAddCart]= useState([]);





const addItem = (item,quantity)=>{
 let addNewItem;
 let car = addCart.some(car => car.id === item.id);
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

const removeItem = ( addCart)=>{
  setAddCart(addCart.filter(car=>car.id !== addCart.id))
}

const clearItems = ()=>setAddCart([])

const isInCart=(addCart)=>{
  return addCart.some(car=>car.id === addCart.id) 
};


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
