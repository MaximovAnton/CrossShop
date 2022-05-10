import React, { useEffect, useState } from 'react'
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Cart from './Components/Cart/Cart';
import axios from 'axios'

function App() {
 
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('https://627a79dc4a5ef80e2c1b1e9b.mockapi.io/cart')
          .then(res =>  setItems(res.data))
  },[])

  const [cart, setCart] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const onAddToCart = (cartItem) => {
    for(let i = 0; i<cartItems.length; i++){
      if(cartItems[i].id !== cartItem.id){
        
      }else{
        return false
      }
    }
    let arr = (prev => [...prev, cartItem])
    setCartItems(arr)
  }

  const deleteItemCart = (id) => {
    let arrDeleteItem = (cartItems) => cartItems.filter((cartItem) => cartItem.id !== id)
    setCartItems(arrDeleteItem)
  }

  const cartOpened = () => {
    setCart(!cart)
  }
  
  return (
    <div className="wrapper">
      <Header cartOpened={cartOpened}/>
      <Content  items={items} 
                onAddToCart={onAddToCart}/>
      {cart && <Cart  cartOpened={cartOpened} 
                      cartItems={cartItems}
                      deleteItemCart={deleteItemCart}/>}
    </div>
  );
}

export default App;
