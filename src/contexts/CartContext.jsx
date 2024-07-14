import React, {createContext, useState,useEffect} from 'react';

export const CartContext = createContext();

  const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]) ;

  // item amount state
 
  const[itemAmount,setItemAmount] = useState(0);

  //total price status
 const [total,setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator,currentItem) =>{
      return accumulator + currentItem.price*currentItem.amount ;
    },0);
    setTotal(total);
  });

// update item amount
useEffect(() => {
  if (cart) {
    const amount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    }, 0);
    setItemAmount(amount);
  }
}, [cart]);




  // add to cart
  const addToCart = (products,id) => {
    const newItem = {...products, amount: 1};
    const CartItem = cart.find((item) => {
      return item.id === id;
    });

    /*if cartItem is already in the cart*/
    
    if (CartItem){
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          return {...item, amount: CartItem.amount + 1};
        } else{ 
          return item;
        }
      }) ;
      setCart(newCart);  
     }else {
      setCart([...cart, newItem]);
     }
  };

// remove from cart

const removeFromCart = (id) =>  {
  const newCart = cart.filter((item) => { 
    return (item.id !== id)
});
setCart(newCart);
};

// clear cart

const clearCart = () => {
  setCart([]);
};

// increase count

const increaseAmount = (id) => {
  const cartItem = cart.find((item) => item.id === id );
  addToCart(cartItem, id);
};
// decrease count

const decreaseAmount = (id) => {
  const cartItem = cart.find((item) => item.id === id);
  
  if (cartItem) {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount - 1 }; // Corrected line
      } else {
        return item;
      }
    });

    setCart(newCart);
  } 
  
    if (cartItem.amount < 2) {
      removeFromCart(id);
    
  }
};





  return (
   
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart,increaseAmount,decreaseAmount,itemAmount,total}}>
      { children }
    </CartContext.Provider>
  )

  };

export default CartProvider ;
