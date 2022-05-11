import React, { useEffect, useState } from 'react'
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Cart from './Components/Cart/Cart';
import axios from 'axios'

function App() {
 
  const [card, setCard] = useState([])
  const [cart, setCart] = useState(false)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    axios.get('https://627a79dc4a5ef80e2c1b1e9b.mockapi.io/Card')
          .then(res =>  setCard(res.data))
    axios.get('https://627a79dc4a5ef80e2c1b1e9b.mockapi.io/Cart')
          .then(res =>  setCartItems(res.data))
  },[])

  console.log(cartItems)

  const addPostCart = (cartItem) => {
    axios.post('https://627a79dc4a5ef80e2c1b1e9b.mockapi.io/Cart', cartItem)
  }

  const onAddToCart = (cartItem) => {
    for(let i = 0; i<cartItems.length; i++){
      if(cartItems[i].id != cartItem.id){
        console.log(cartItem.id,'GO')
      }else{
        console.log('STOP')
        return false
      }
    }
      let arr = (prev => [...prev, cartItem])
      setCartItems(arr)
      addPostCart(cartItem)
  }

  
  const deleteItemCart = (id) => {
    let arrDeleteItem = (cartItems) => cartItems.filter((cartItem) => cartItem.id !== id)
    setCartItems(arrDeleteItem)
    axios.delete(`https://627a79dc4a5ef80e2c1b1e9b.mockapi.io/Cart/${id}`)
  }

  const cartOpened = () => {
    setCart(!cart)
  }
  
  return (
    <div className="wrapper">
      <Header cartOpened={cartOpened}/>
      <Content  card={card} 
                onAddToCart={onAddToCart}/>
      {cart && <Cart  cartOpened={cartOpened} 
                      cartItems={cartItems}
                      deleteItemCart={deleteItemCart}/>}
    </div>
  );
}

export default App;
