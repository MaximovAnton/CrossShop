import React, { useState } from 'react'
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Cart from './Components/Cart/Cart';

function App() {
  const cardArray = [
    {id: 1, name: 'Nike', price: 1200, images: 'https://images.wallpaperscraft.ru/image/single/krossovki_obuv_stil_173533_1920x1080.jpg'},
    {id: 2, name: 'Adidas', price: 1500, images: 'https://images.wallpaperscraft.ru/image/single/krossovki_chelovek_anonim_170473_1920x1080.jpg'},
    {id: 3, name: 'Puma', price: 1300, images: 'https://images.wallpaperscraft.ru/image/single/krossovki_obuv_belyj_118902_1920x1080.jpg'}
  ]
  
  const [cart, setCart] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const onAddToCart = (a) => { 
      let arr = (prev => [...prev, a])
      setCartItems(arr)
  }

  const cartOpened = (e) => {
    setCart(!cart)
  }
  
  return (
    <div className="wrapper">
      <Header cartOpened={cartOpened}/>
      <Content  cardArray={cardArray} 
                onAddToCart={onAddToCart}/>
      {cart && <Cart  cartOpened={cartOpened} 
                      cartItems={cartItems}/>}
    </div>
  );
}

export default App;
